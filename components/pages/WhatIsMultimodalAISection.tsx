'use client'

import { motion } from 'framer-motion'

export default function WhatIsMultimodalAISection() {
  return (
    <section id="what-is-multimodal-ai" className="section-padding bg-gradient-to-b from-gray-50/80 to-white/80 backdrop-blur-lg pt-0 pb-0">
      <div className="w-full px-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 md:mb-6"
        >
          <h2 className="inline-block text-lg sm:text-xl md:text-2xl font-bold text-white bg-primary-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg mb-6">What is Multimodal AI?</h2>
          
          {/* Two Column Layout: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start mt-4">
            {/* Left - Placeholder Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group order-2 lg:order-1"
            >
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="assets/Indian Multimodal AI.png"
                alt="Multimodal AI Visualization"
                className="relative w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 object-cover"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify mb-3">
                Imagine watching a movie with the sound turned off. You see the action, but you miss the emotion in the voices. Now imagine the sound is on, but the picture is blurry. You hear the story, but you miss the expressions.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify">
                <span className="font-bold text-primary-600">Multimodal AI</span> is the science of putting those pieces back together. It's not just about a computer "reading text" or "looking at a photo." It's about a system that can see your gestures, hear your tone of voice, and even understand your heartbeat all at the same time to get the "full picture" of what is happening.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Content Sections */}
        <div className="space-y-4 md:space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="inline-block text-lg sm:text-xl md:text-2xl font-bold text-white bg-primary-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg mb-4">Why does this lab exist?</h3>
            
            {/* Full Width Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group mb-6 md:mb-8"
            >
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="assets/Multimodal Data Challenges Infographic.png"
                alt="Multimodal Data Challenges Infographic"
                className="relative w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 object-contain"
              />
            </motion.div>
            
            {/* Two Column Layout: Content Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start mt-4">
              {/* Left - Content */}
              <div className="order-1">
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify mb-2">
                  Today most AI is trained on one type of data at a time (for example only text or only images), which is not enough to understand complex human behaviour or real-world environments.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify mb-2">
                  Properly collected multimodal data—everything recorded at the same time and perfectly synchronized —is rare and difficult to create, especially for Indian languages, faces, accents and daily situations.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify mb-2">
                  The Multimodal Lab is a state-of-the-art research space dedicated to advancing
                  human-centric data collection and AI innovation. At its core, the lab focuses on
                  understanding human behavior and interaction by capturing data from multiple
                  human-centric modalities.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify">
                  A human subject takes the center stage within a specialized environment, where
                  advanced sensors record subtle human expressions, gestures, poses, movements, and
                  responses from various perspectives.
                </p>
              </div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group order-2 lg:order-2 flex items-center justify-center"
              >
                <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="imgcopy/banner/mllab.jpeg"
                  alt="Why does this lab exist"
                  className="relative w-full h-auto max-h-[300px] md:max-h-[350px] rounded-xl md:rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="inline-block text-lg sm:text-xl md:text-2xl font-bold text-white bg-primary-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg mb-4">Why focus on India-Centric Data?</h3>
            
            {/* Two Column Layout: Image Left, Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start mt-4">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group order-2 lg:order-1 flex items-center justify-center"
              >
                <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="assets/woman_camera_array_600x400.png"
                  alt="India-Centric Data"
                  className="relative w-full h-auto max-h-[300px] md:max-h-[350px] rounded-xl md:rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500 object-cover"
                />
              </motion.div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify mb-3">
                  The <span className="font-bold text-primary-600">Multimodal AI</span> Lab at IIT Mandi will focus on creating the last two categories—especially synchronized multimodal data collected in real Indian environments with real Indian people. This will be India's first major contribution to this critical global need.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify mb-3">
                  Other countries have created large datasets for their own people and languages, but nothing exists for Indian contexts, accents, expressions and daily life.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify">
                  By building this lab, India can create AI systems that actually work well for Indians, rather than relying on foreign datasets that may not understand Indian faces, voices or situations.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="inline-block text-lg sm:text-xl md:text-2xl font-bold text-white bg-primary-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg mb-4">What makes this lab unique?</h3>
            
            {/* Two Column Layout: Content Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start mt-4">
              {/* Left - Content */}
              <div className="order-1">
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify mb-2">
                  The lab is building something similar in spirit to an <span className="font-bold text-primary-600">"ImageNet" </span>for multimodality: a large, carefully designed collection of Indian multimodal data that others can use to create new AI tools.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify mb-2">
                  A special egg-shaped camera setup with around 20 high‑quality cameras, lights, microphones and motion sensors captures very fine details of faces, voices and body movements at the same moment.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify">
                  Dedicated spaces—the Capture Room, Dark Room, UX Labs and Multi‑Sensor Room—allow controlled experiments for vision, sound, user experience and body signals under many lighting and environmental conditions.
                </p>
              </div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group order-2 lg:order-2 flex items-center justify-center"
              >
                <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="assets/Gemini_Generated_Image_3wjtxm3wjtxm3wjt.png"
                  alt="Lab setup"
                  className="relative w-full h-auto max-h-[300px] md:max-h-[350px] rounded-xl md:rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

