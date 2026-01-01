'use client'

import { motion } from 'framer-motion'

export default function ImpactRadar() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Impact Radar for 2024
          </h2>
          <p className="text-xl text-gray-600">Source: Gartner</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center text-gray-600">
            <p className="text-lg mb-4">
              The Impact Radar visualization shows emerging technologies and their expected impact
              over different time horizons.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-yellow-100 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Now (0-1 Years)</h4>
                <p className="text-sm">Generative AI, Human-centered AI, Responsible AI</p>
              </div>
              <div className="bg-orange-100 rounded-lg p-4">
                <h4 className="font-semibold mb-2">1-3 Years</h4>
                <p className="text-sm">Multimodal UIs, AI avatars, Behavioral analytics</p>
              </div>
              <div className="bg-red-100 rounded-lg p-4">
                <h4 className="font-semibold mb-2">3-6 Years</h4>
                <p className="text-sm">Smart spaces, Spatial computing</p>
              </div>
              <div className="bg-pink-100 rounded-lg p-4">
                <h4 className="font-semibold mb-2">6-8 Years</h4>
                <p className="text-sm">Neuromorphic computing, Quantum processors</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


