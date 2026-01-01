'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Navbar from './Navbar'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-b border-gray-200'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center space-x-4 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-16 w-auto"
            >
              <Image
                src="/imgcopy/logo/MMLLOGO.png"
                alt="Multimodal Lab"
                width={160}
                height={100}
                className="h-16 w-auto object-contain transition-opacity group-hover:opacity-90"
                priority
                unoptimized
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-14 w-auto"
            >
              <Image
                src="/imgcopy/logo/iHub_Logo.png"
                alt="iHub"
                width={140}
                height={84}
                className="h-14 w-auto object-contain transition-opacity group-hover:opacity-90"
                priority
                unoptimized
              />
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Navbar />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary-500" />
            ) : (
              <Menu className="w-6 h-6 text-primary-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <nav className="container mx-auto px-4 py-6">
            <Navbar mobile onLinkClick={() => setIsMobileMenuOpen(false)} />
          </nav>
        </motion.div>
      )}
    </header>
  )
}


