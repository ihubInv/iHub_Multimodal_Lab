'use client'

import { useEffect, useState } from 'react'

interface TypingAnimationProps {
  text: string
  speed?: number
  deletingSpeed?: number
  pauseAfterTyping?: number
  pauseAfterDeleting?: number
  showCursor?: boolean
}

export default function TypingAnimation({
  text,
  speed = 120,
  deletingSpeed = 60,
  pauseAfterTyping = 3000,
  pauseAfterDeleting = 800,
  showCursor = true,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < text.length) {
        setDisplayText(text.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(text.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (charIndex === text.length && !isDeleting) {
        setTimeout(() => setIsDeleting(true), pauseAfterTyping)
      } else if (charIndex === 0 && isDeleting) {
        setIsDeleting(false)
        setTimeout(() => setCharIndex(0), pauseAfterDeleting)
      }
    }, isDeleting ? deletingSpeed : speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, text, speed, deletingSpeed, pauseAfterTyping, pauseAfterDeleting])

  return (
    <span>
      {displayText}
      {showCursor && <span className="typing-cursor">|</span>}
    </span>
  )
}


