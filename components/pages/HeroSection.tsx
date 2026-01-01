'use client'

import { motion } from 'framer-motion'
import TypingAnimation from '@/components/ui/TypingAnimation'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-8">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed md:bg-fixed"
        style={{
          backgroundImage: "url('imgcopy/banner/Main Image copy.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const startY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
          const endY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                y: startY,
                opacity: 0,
              }}
              animate={{
                y: [startY, endY],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          )
        })}
      </div>

      <div className="container mb-[20rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-start justify-center">
        {/* Content - Centered */}
        <div className="text-center max-w-4xl lg:max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white md:mb-6 drop-shadow-2xl leading-tight"
          >
            <TypingAnimation text="Multimodal AI Lab" showCursor={false} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 md:mb-12 drop-shadow-lg font-light leading-relaxed"
          >
            A symphony of senses in the digital realm
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

