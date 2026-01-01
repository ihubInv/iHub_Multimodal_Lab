'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Get in touch with us for inquiries, collaborations, or any questions about our research.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="card-modern p-6 sm:p-8 text-center group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h5 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Email</h5>
              <a
                href="mailto:volga@ihubiitmandi.in"
                className="text-primary-500 hover:text-primary-600 font-semibold transition-colors break-all text-sm sm:text-base"
              >
                volga@ihubiitmandi.in
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="card-modern p-6 sm:p-8 text-center group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h5 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Address</h5>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                IIT Mandi iHub and HCi Foundation, North Campus, VPO Kamand, District Mandi, Himachal Pradesh, India - 175075
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

