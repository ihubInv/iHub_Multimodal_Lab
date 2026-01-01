'use client'

import { motion } from 'framer-motion'
import { HeartPulse, Brain, Eye, User } from 'lucide-react'

const modalities = [
  {
    icon: HeartPulse,
    title: '1. Physiological Modalities (Body Signals)',
    lead: 'Faculty Research Lead: Dr. Shubhajit Roy Chowdhury',
    data: [
      { type: 'Brain Signals', collected: 'EEG waveforms, frequency bands, brain activity maps', sensors: 'EEG caps, fMRI scanners, MEG devices' },
      { type: 'Heart Signals', collected: 'ECG waveforms, BPM, heart rate variability', sensors: 'ECG electrodes, PPG sensors, smartwatches' },
      { type: 'Muscle Activity', collected: 'EMG signal amplitude, muscle activation levels', sensors: 'EMG sensors, Myoelectric armbands' },
      { type: 'Eye Movement', collected: 'Gaze coordinates, blink rate, pupil dilation', sensors: 'Eye-tracking cameras, EOG electrodes' },
      { type: 'Skin Response', collected: 'Electrical conductivity, sweat gland activity', sensors: 'GSR sensors' },
      { type: 'Breathing Pattern', collected: 'Breath rate, tidal volume, airflow pressure', sensors: 'Respiratory belts, Spirometers' },
      { type: 'Thermal Signals', collected: 'Thermal images, heat maps, body temperature', sensors: 'Infrared cameras, Thermographic sensors' },
    ],
  },
  {
    icon: Brain,
    title: '2. Cognitive & Psychological Modalities (Mental & Emotional State)',
    lead: 'Faculty Research Leads: Dr. Sanjeev Nara, Dr. Siddharth Panwar',
    data: [
      { type: 'Emotion Recognition', collected: 'Facial expressions, voice tone analysis, heart rate changes', sensors: 'Facial recognition cameras, Audio analyzers, GSR/ECG sensors' },
      { type: 'Attention and Focus', collected: 'Fixation duration, EEG Alpha/Beta wave activity', sensors: 'EEG caps, Eye-tracking cameras, Pupil dilation sensors' },
      { type: 'Cognitive Load', collected: 'EEG frequency changes, reaction time, pupil response', sensors: 'EEG caps, Reaction time measurement tools, Eye-tracking' },
    ],
  },
  {
    icon: Eye,
    title: '3. Sensory Modalities (External Perception)',
    lead: 'Faculty Research Leads: Dr. Shyam Kumar Masakapalli, Dr. Padmanabhan Rajan',
    data: [
      { type: 'Vision', collected: 'RGB images, depth maps, point clouds, thermal images, multi-spectral images', sensors: 'Cameras (RGB, IR, Multi-Spectral), LiDAR, Stereo cameras' },
      { type: 'Audio', collected: 'Audio waveforms, mel spectrograms, phoneme sequences, pitch & tone features', sensors: 'Microphones, Ultrasound transducers' },
      { type: 'Touch', collected: 'Force/Pressure values, vibration frequency & amplitude, texture data', sensors: 'Pressure sensors, Capacitive touch sensors, Vibrotactile actuators' },
      { type: 'Smell and Taste', collected: 'Chemical compound concentrations, olfactory pattern recognition, taste profiles', sensors: 'Electronic Nose (eNose), Gas sensors, Gustatory sensors' },
    ],
  },
  {
    icon: User,
    title: '4. Behavioral Modalities (Human Actions & Interactions)',
    lead: 'Faculty Research Leads: Dr. Aditya Nigam, Dr. Narendra Dhar',
    data: [
      { type: 'Body Motion', collected: 'Acceleration, rotation angles, velocity', sensors: 'IMU sensors, Accelerometers, Motion Capture Systems' },
      { type: 'Gait Recognition', collected: 'Foot pressure maps, step length, cadence', sensors: 'Foot pressure sensors, IMU sensors, LiDAR' },
      { type: 'Facial Expressions', collected: 'Facial landmarks, emotion labels', sensors: 'Camera-based facial tracking, Depth cameras, EMG sensors' },
      { type: 'Gestures', collected: 'Hand skeleton tracking, joint angles, motion vectors', sensors: 'Leap Motion, Kinect, IMU sensors, Optical motion capture' },
    ],
  },
]

export default function ModalityDetails() {
  return (
    <section className="section-padding bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Multi-Modal Data Collection Framework
          </h2>
        </motion.div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {modalities.map((modality, index) => {
            const Icon = modality.icon
            if (!Icon) return null
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{modality.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 font-semibold">{modality.lead}</p>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white/70 backdrop-blur-md rounded-lg overflow-hidden border border-white/30">
                    <thead className="bg-primary-500 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Data Type</th>
                        <th className="px-6 py-4 text-left">Data Collected</th>
                        <th className="px-6 py-4 text-left">Sensors Used</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modality.data.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold">{row.type}</td>
                          <td className="px-6 py-4">{row.collected}</td>
                          <td className="px-6 py-4">{row.sensors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

