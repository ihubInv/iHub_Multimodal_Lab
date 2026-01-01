'use client'

import { motion } from 'framer-motion'

const layers = [
  { label: 'Global Data Repository for HCAI', size: 400 },
  { label: 'HCAI', size: 320 },
  { label: 'Multi-Modal Data', size: 240 },
  { label: 'India-Centric Data', size: 160 },
  { label: 'Data', size: 80 },
]

export default function ConcentricCircles() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md aspect-square">
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white/30 flex items-center justify-center"
            style={{
              width: `${layer.size}px`,
              height: `${layer.size}px`,
            }}
          >
            <span className="text-white text-xs md:text-sm font-semibold text-center px-4">
              {layer.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


