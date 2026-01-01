'use client'

import { useEffect, useState, useRef } from 'react'

interface NavbarProps {
  mobile?: boolean
  onLinkClick?: () => void
}

export default function Navbar({ mobile = false, onLinkClick }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('')
  const isScrollingRef = useRef(false)
  const targetSectionRef = useRef<string | null>(null)
  const scrollHandlerRef = useRef<(() => void) | null>(null)
  const activeSectionRef = useRef<string>('') // Track active section with ref for immediate access

  useEffect(() => {
    const sections = ['home', 'about', 'raison-detre', 'research', 'business-usecases', 'news-media', 'team', 'contact']
    
    const handleScroll = () => {
      // CRITICAL: Check flag FIRST, before any processing
      // This must be the very first check to prevent any state changes
      if (isScrollingRef.current) {
        // Force the target section to stay active - no exceptions
        if (targetSectionRef.current) {
          // Use both state and ref to ensure consistency
          activeSectionRef.current = targetSectionRef.current
          setActiveSection(targetSectionRef.current)
        }
        return
      }

      // Get header height dynamically for accurate detection
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 96
      const viewportTop = window.scrollY + headerHeight
      const viewportBottom = window.scrollY + window.innerHeight
      
      let currentSection = ''
      let maxVisible = 0

      // Find the section that's most visible in the viewport
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const elementRect = element.getBoundingClientRect()
          const elementTop = elementRect.top + window.pageYOffset
          const elementBottom = elementTop + element.offsetHeight

          // Calculate how much of the section is visible in the viewport
          const visibleTop = Math.max(viewportTop, elementTop)
          const visibleBottom = Math.min(viewportBottom, elementBottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          
          // If this section is more visible than the current one, make it active
          if (visibleHeight > maxVisible && visibleHeight > 50) {
            maxVisible = visibleHeight
            currentSection = section
          }
        }
      }

      // Fallback: if no section is clearly visible, find the closest one
      if (!currentSection) {
        const scrollPosition = window.scrollY + headerHeight
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          const element = document.getElementById(section)
          if (element) {
            const elementRect = element.getBoundingClientRect()
            const absoluteElementTop = elementRect.top + window.pageYOffset
            if (scrollPosition >= absoluteElementTop - 100) {
              currentSection = section
              break
            }
          }
        }
      }

      if (currentSection) {
        setActiveSection((prev) => {
          if (prev !== currentSection) {
            activeSectionRef.current = currentSection
            return currentSection
          }
          return prev
        })
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      // Check flag BEFORE requestAnimationFrame to prevent queued executions
      if (isScrollingRef.current) {
        if (targetSectionRef.current) {
          setActiveSection(targetSectionRef.current)
        }
        return
      }
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Double-check flag inside RAF callback
          if (!isScrollingRef.current) {
            handleScroll()
          } else if (targetSectionRef.current) {
            setActiveSection(targetSectionRef.current)
          }
          ticking = false
        })
        ticking = true
      }
    }

    scrollHandlerRef.current = throttledScroll
    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll()

    return () => {
      if (scrollHandlerRef.current) {
        window.removeEventListener('scroll', scrollHandlerRef.current)
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    // STEP 1: Set flags SYNCHRONOUSLY FIRST - before any scroll begins
    // This prevents any scroll events from executing
    isScrollingRef.current = true
    targetSectionRef.current = sectionId
    activeSectionRef.current = sectionId
    
    // STEP 2: Set active section IMMEDIATELY - use both state and ref
    setActiveSection(sectionId)
    
    // STEP 3: Remove scroll listener temporarily to prevent any queued events
    if (scrollHandlerRef.current) {
      window.removeEventListener('scroll', scrollHandlerRef.current)
    }

    const element = document.getElementById(sectionId)
    if (element) {
      // Get the actual header height dynamically
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 96
      
      // Use getBoundingClientRect for more accurate positioning
      const elementRect = element.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      
      // Calculate exact scroll position accounting for header
      const offsetPosition = Math.max(0, absoluteElementTop - headerHeight - 10)

      // Smooth scroll with custom easing function for better control
      const startPosition = window.pageYOffset
      const distance = offsetPosition - startPosition
      const duration = Math.min(Math.abs(distance) * 0.5, 1000) // Adaptive duration
      let startTime: number | null = null

      // Custom smooth scroll function with easing
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }

      const smoothScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        
        const ease = easeInOutCubic(progress)
        const currentScroll = startPosition + distance * ease
        
        // Prevent overshooting
        const finalScroll = Math.min(currentScroll, offsetPosition)
        window.scrollTo(0, finalScroll)

        if (timeElapsed < duration) {
          requestAnimationFrame(smoothScroll)
        } else {
          // Ensure we land exactly at the target position
          window.scrollTo(0, offsetPosition)
          
          // Wait for scroll to fully settle before re-enabling detection
          setTimeout(() => {
            // Re-add scroll listener
            if (scrollHandlerRef.current) {
              window.addEventListener('scroll', scrollHandlerRef.current, { passive: true })
            }
            
            // Double-check we're at the right position
            const verifyElement = document.getElementById(sectionId)
            if (verifyElement) {
              const verifyRect = verifyElement.getBoundingClientRect()
              const verifyTop = verifyRect.top + window.pageYOffset
              const header = document.querySelector('header')
              const headerHeight = header ? header.offsetHeight : 96
              const currentScroll = window.scrollY
              
              // If we're at the right position, confirm the active section
              if (Math.abs(currentScroll - (verifyTop - headerHeight)) < 50) {
                activeSectionRef.current = sectionId
                setActiveSection(sectionId)
              }
            }
            
            // Re-enable scroll detection only after everything is settled
            isScrollingRef.current = false
            targetSectionRef.current = null
          }, 500) // Increased delay to ensure scroll is fully complete
        }
      }

      // Start the scroll animation
      requestAnimationFrame(smoothScroll)

      // Safety fallback: re-enable scroll detection after maximum expected duration
      setTimeout(() => {
        if (scrollHandlerRef.current) {
          window.addEventListener('scroll', scrollHandlerRef.current, { passive: true })
        }
        isScrollingRef.current = false
        targetSectionRef.current = null
        activeSectionRef.current = sectionId
        setActiveSection(sectionId) // Ensure correct section is active
      }, duration + 700)
    }
    if (onLinkClick) {
      onLinkClick()
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'raison-detre', label: "Raison d'être" },
    // { id: 'research', label: 'Research Areas' },
    { id: 'business-usecases', label: 'Industrial Applications' },
    { id: 'news-media', label: 'News+Updates' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ]

  const baseClasses = mobile
    ? 'flex flex-col space-y-4'
    : 'flex items-center space-x-8'

  return (
    <ul className={baseClasses}>
      {navItems.map((item) => {
        // Use ref value during scrolling to ensure immediate updates
        const currentActive = isScrollingRef.current && targetSectionRef.current 
          ? targetSectionRef.current 
          : activeSection
        const isActive = currentActive === item.id
        return (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 font-semibold text-lg transition-all duration-300 rounded-lg text-black ${
                isActive
                  ? ' text-white bg-primary-500'
                  : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary-500 rounded-full"></span>
              )}
            </button>
          </li>
        )
      })}
    </ul>
  )
}


