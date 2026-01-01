'use client'

import { motion } from 'framer-motion'

export default function MapSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white/80 to-gray-50/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-modern overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.5!2d77.0020614!3d31.783495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904e5005ba8d29d%3A0x524f2d7c3093903d!2sIIT%20MANDI%20iHUB%20AND%20HCI%20FOUNDATION!5e0!3m2!1sen!2sin!4v1730525346665!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, minHeight: '300px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}

