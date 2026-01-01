'use client'

import { motion } from 'framer-motion'
import { Database, TrendingUp, Brain } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white/80 backdrop-blur-lg">
      <div className="w-full px-[40px]">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore the Lab</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Introduction Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify">
              The Multimodal Data Collection Lab consists of controlled anechoic capture environment designed for high-fidelity, synchronized acquisition of human-centric data. The lab features a dedicated capture chamber equipped with a multi-camera, multi-sensor setup enabling 360-degree and 3D data capture of human subjects. High-speed cameras, precision microphones, and additional sensing modalities are spatially arranged and synchronized using advanced hardware-based techniques to ensure precise temporal alignment across data streams. This integrated infrastructure supports the creation of state-of-the-art multimodal and multiview datasets for industrial applications and the development of next-generation AI systems.
            </p>
          </motion.div>

          {/* About Cards Grid - 3 cards in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Advanced Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-white/30"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/imgcopy/about/primeX22-perspective-1752.png"
                  alt="Advanced Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors">
                  Advanced Infrastructure
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>High-speed cameras for capturing detailed visual data</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Precision microphones for high-quality audio capture</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Cutting-edge biosensing devices for physiological monitoring</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Specialized hardware/equipment for precise synchronization</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Temporal alignment at sub-millisecond accuracy</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Comprehensive recording of emotional expressions and behavioral patterns</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2: SOTA Data Capture Environment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-white/30"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/imgcopy/demo/Soundchamber2.webp"
                  alt="SOTA Data Capture Environment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors">
                  SOTA Data Capture Environment
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>High-end capture space for professional data acquisition</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Advanced anechoic chamber for complete sound isolation</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Specialized lighting infrastructure for varied conditions</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Lighting scenarios from bright daylight to low-light settings</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Controlled yet dynamic environment for human response studies</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Ensures robustness and realism in datasets</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 3: High-Fidelity Multimodal Datasets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-white/30"
            >
              {/* Image/Video */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <video
                  src="/imgcopy/about/captury-1032-web.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  aria-label="Multimodal lab setup"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors">
                  High-Fidelity Multimodal Datasets
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Acquisition of high-fidelity, real-world datasets</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Comprehensive data covering emotional expressions and cognitive processes</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Integrated capture of physiological and behavioral processes</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Rigorously curated and systematically annotated datasets</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Serve as ground truth for next-generation AI models</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-black">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Enable advancements in emotion analysis and HCI</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

