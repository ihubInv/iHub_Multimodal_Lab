'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ResearchArea {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

interface ResearchCardProps {
  area: ResearchArea
  index: number
}

export default function ResearchCard({ area, index }: ResearchCardProps) {
  const Icon = area.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="card-modern p-8 group cursor-pointer"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-28 h-28 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow"
          >
            <Icon className="w-14 h-14 text-white" />
          </motion.div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-400 rounded-full animate-pulse opacity-75"></div>
          <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-primary-300 rounded-full animate-pulse opacity-50"></div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{area.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6 text-base">{area.description}</p>

        <div className="flex flex-wrap gap-2 justify-center">
          {area.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
              className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-full text-sm font-semibold border border-primary-200 hover:border-primary-400 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}


