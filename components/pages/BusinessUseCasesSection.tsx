'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface BusinessUseCase {
  icon: LucideIcon
  title: string
  useCases: string[]
  businessValue?: string
  image: string
}

interface BusinessUseCasesSectionProps {
  businessUseCases: BusinessUseCase[]
}

export default function BusinessUseCasesSection({ businessUseCases }: BusinessUseCasesSectionProps) {
  return (
    <section id="business-usecases" className="section-padding bg-white">
      <div className="w-full px-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Industrial Applications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Translating Multimodal Intelligence into Real-World Impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {businessUseCases.map((usecase, index) => {
            const Icon = usecase.icon
            return (
              <motion.div
                key={usecase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={usecase.image}
                    alt={usecase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {usecase.title}
                  </h3>

                  {/* Use Cases */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wide">Use Cases:</h4>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {usecase.useCases.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700 leading-relaxed">
                          <span className="text-primary-500 mr-2.5 mt-1.5 flex-shrink-0 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

