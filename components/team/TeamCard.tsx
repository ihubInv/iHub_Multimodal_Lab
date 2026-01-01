'use client'

import { motion } from 'framer-motion'
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  facebook_url?: string
  linkedin_url?: string
  instagram_url?: string
  youtube_url?: string
}

interface TeamCardProps {
  member: TeamMember
  index: number
}

export default function TeamCard({ member, index }: TeamCardProps) {
  const socialLinks = [
    { url: member.facebook_url, icon: Facebook },
    { url: member.linkedin_url, icon: Linkedin },
    { url: member.instagram_url, icon: Instagram },
    { url: member.youtube_url, icon: Youtube },
  ].filter((link) => link.url)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group card-modern overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={member.image || '/imgcopy/team/vl-team-1.1.png'}
          alt={member.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="p-6 text-center bg-gradient-to-b from-white/70 to-gray-50/70 backdrop-blur-md">
        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{member.name}</h4>
        <p className="text-gray-600 font-medium">{member.position}</p>
      </div>
    </motion.div>
  )
}


