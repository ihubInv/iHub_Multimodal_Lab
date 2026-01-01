'use client'

import { motion } from 'framer-motion'

export default function RaisonDetreSection() {
  return (
    <section id="raison-detre" className="section-padding bg-gradient-to-b from-gray-50 to-white pb-0">
      <div className="w-full">
        <div className="w-full px-[40px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left mb-8 md:mb-10"
          >
            <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold italic text-white bg-primary-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg mb-4">Raison d'être</h2>
          </motion.div>

          {/* Two Column Layout: All Content Left, Image Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 md:mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Column - All Content */}
              <div className="space-y-3 md:space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify">
                    In daily life, people do not rely on only one sense. We look, listen, speak, move and react with our body and emotions at the same time.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify">
                    <span className="font-bold text-primary-600">Multimodal AI</span> is about giving computers a similar ability: to learn from many kinds of information together instead of just text or a single image.
                  </p>
                </div>

                {/* Introduction Paragraphs */}
                <div className="mt-2 md:mt-3">
                  <p className="text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed text-justify mb-2">
                    When you read <span className="font-bold text-gray-900">"What A Happy Sunny Day!"</span>, maybe you picture a bright sky, hear cheerful birds, or feel the warmth on your skin. Each of these is a different way to experience the moment. Most AI can only focus on one thing at a time, like just showing you an image or reading the sentence. <span className="font-bold text-primary-600">That's Unimodal AI</span>, it handles only one type of information.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed text-justify">
                    Now imagine if AI could take in all these experiences together to see, hear, and sense just like we do. That's the power of <span className="font-bold text-primary-600">Multimodal AI</span>, where technology understands the world through many streams of information at once.
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="mt-2 md:mt-3">
                  <ul className="space-y-0 text-base sm:text-lg md:text-xl text-black leading-relaxed w-full">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-3 md:mr-4 mt-1.5 flex-shrink-0 text-xl">•</span>
                      <span className="pt-0.5">Humans are multimodal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-3 md:mr-4 mt-1.5 flex-shrink-0 text-xl">•</span>
                      <span className="pt-0.5">Collecting multimodal data though essential but is difficult</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-3 md:mr-4 mt-1.5 flex-shrink-0 text-xl">•</span>
                      <span className="pt-0.5">India-Centric data collection for multimodal AI for the first time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-3 md:mr-4 mt-1.5 flex-shrink-0 text-xl">•</span>
                      <span className="pt-0.5">Perfecting the synchronization techniques is the key to be mastered</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group order-1 lg:order-2 flex items-start justify-center "
              >
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="assets/IIT Mandi Research Rectangular Brain Center.png"
                  alt="Raison d'être - Multimodal Data Collection"
                  className="relative w-full h-full max-h-[450px] md:max-h-[550px] rounded-2xl md:rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

