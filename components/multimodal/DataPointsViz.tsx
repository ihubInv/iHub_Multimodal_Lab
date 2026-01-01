'use client'

import { motion } from 'framer-motion'
import {
  Eye,
  Brain,
  Mic,
  Hand,
  Compass,
  Radio,
  Droplet,
  Signal,
  Activity,
  Zap,
  HeartPulse,
  Wind,
  Heart,
} from 'lucide-react'

const dataPoints = [
  { icon: Eye, label: 'Eye Tracking', position: 'top-[5%] left-[50%]' },
  { icon: Brain, label: 'Brain Signals/EEG', position: 'top-[10%] left-[30%]' },
  { icon: Mic, label: 'Acoustics', position: 'top-[15%] left-[70%]' },
  { icon: Hand, label: 'Body Gesture', position: 'top-[25%] left-[20%]' },
  { icon: Compass, label: 'Inertial (Acc, Gyro)', position: 'top-[30%] left-[80%]' },
  { icon: Radio, label: 'IMP, GSR', position: 'top-[40%] left-[15%]' },
  { icon: Droplet, label: 'Blood Sugar', position: 'top-[45%] left-[85%]' },
  { icon: Signal, label: 'Proximity Signals', position: 'top-[55%] left-[10%]' },
  { icon: Activity, label: 'PPG', position: 'top-[60%] left-[90%]' },
  { icon: Activity, label: 'EDA & EMG', position: 'top-[70%] left-[25%]' },
  { icon: Zap, label: 'EMG', position: 'top-[75%] left-[75%]' },
  { icon: HeartPulse, label: 'Heart Rate', position: 'top-[85%] left-[40%]' },
  { icon: Wind, label: 'Oxygen', position: 'top-[90%] left-[60%]' },
  { icon: Heart, label: 'ECG', position: 'top-[95%] left-[50%]' },
]

export default function DataPointsViz() {
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
            Multi-Modality from Human Data Points
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-square">
            {/* Center Human Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-48 h-48 md:w-64 md:h-64 bg-primary-100 rounded-full flex items-center justify-center"
              >
                <div className="text-8xl md:text-9xl text-primary-500">👤</div>
              </motion.div>
            </div>

            {/* Data Points */}
            {dataPoints.map((point, index) => {
              const Icon = point.icon
              if (!Icon) return null
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`absolute ${point.position} -translate-x-1/2 -translate-y-1/2`}
                >
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="mt-2 text-xs font-semibold text-gray-700 whitespace-nowrap">
                      {point.label}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


