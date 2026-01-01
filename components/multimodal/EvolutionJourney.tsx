'use client'

import { motion } from 'framer-motion'

export default function EvolutionJourney() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transition from HCi to HCAI
          </h2>
          <p className="text-xl text-gray-600">
            The evolution from basic interaction to human-centered intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* HCi Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Human-Computer Interaction (HCi)</h3>
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  CS
                </div>
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  Cog
                </div>
                <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  ID
                </div>
              </div>
              <div className="text-center">
                <span className="text-xl font-bold text-gray-900">HCi</span>
              </div>
            </div>
            <p className="text-gray-700 text-center">
              Method that allows interaction between human being and computer
            </p>
          </motion.div>

          {/* Bridge Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">HCi + AI R&D</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">→</span>
                <span>Bringing in technology enhancement and applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">→</span>
                <span>With a Human-Centred approach</span>
              </li>
              <li className="mt-6 font-semibold">Resulting in:</li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Explainable and comprehensive AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Useful and usable AI</span>
              </li>
              <li className="mt-6 font-semibold">With: <span className="text-primary-500">The Multimodal data approach</span></li>
            </ul>
          </motion.div>

          {/* HCAI Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Human-Centred AI (HCAI)</h3>
            <div className="mb-6">
              <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-center">Human<br />Centered<br />AI</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {['Technology', 'Human Controlled AI', 'Usable & Explainable AI', 'Human', 'Human Driven Decision Making', 'Ethics', 'Ethical & Responsible AI', 'Augmenting Human Ability'].map((item, idx) => (
                  <div key={idx} className="bg-white/50 rounded px-2 py-1 text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-center">
              Making AI beyond technology with human factors and ethical design
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


