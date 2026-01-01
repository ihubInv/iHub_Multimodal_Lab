'use client'

import { motion } from 'framer-motion'
import TeamCard from '@/components/team/TeamCard'

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

interface TeamSectionProps {
  teamMembers: TeamMember[]
  loading: boolean
}

export default function TeamSection({ teamMembers, loading }: TeamSectionProps) {
  return (
    <section id="team" className="section-padding bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
          </div>
        ) : !Array.isArray(teamMembers) || teamMembers.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
              No team members found
            </h3>
            <p className="text-gray-500">
              Team members will appear here once added from the admin panel.
            </p>
          </div>
        ) : Array.isArray(teamMembers) && teamMembers.length > 0 ? (
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
            {/* Core Tech Team */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 md:mb-10"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Core Tech Team</h3>
                <div className="w-20 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {teamMembers
                  .filter((member) => {
                    const position = member.position?.toLowerCase() || ''
                    return (
                      position.includes('director') ||
                      position.includes('ceo') ||
                      position.includes('chief executive') ||
                      position.includes('head of technology') ||
                      position.includes('technology') ||
                      position.includes('manager-technology') ||
                      position.includes('tech')
                    )
                  })
                  .sort((a, b) => {
                    // Sort to put Project Director first
                    if (a.position?.toLowerCase().includes('project director')) return -1
                    if (b.position?.toLowerCase().includes('project director')) return 1
                    return 0
                  })
                  .map((member, index) => (
                    <TeamCard key={member.id} member={member} index={index} />
                  ))}
              </div>
            </div>

            {/* Operations Team */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 md:mb-10"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Operations Team</h3>
                <div className="w-20 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
              </motion.div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {teamMembers
                  .filter((member) => {
                    const position = member.position?.toLowerCase() || ''
                    const name = member.name?.toLowerCase() || ''
                    // Include specific members or match operations-related positions
                    return (
                      name.includes('volga verma') ||
                      name.includes('avnish mishra') ||
                      position.includes('general manager') ||
                      (position.includes('manager') && (position.includes('finance') || position.includes('procurement') || position.includes('admin'))) ||
                      position.includes('operations')
                    )
                  })
                  .sort((a, b) => {
                    // Sort to prioritize General Manager first, then Finance Manager
                    const aPos = a.position?.toLowerCase() || ''
                    const bPos = b.position?.toLowerCase() || ''
                    if (aPos.includes('general manager')) return -1
                    if (bPos.includes('general manager')) return 1
                    if (aPos.includes('finance')) return -1
                    if (bPos.includes('finance')) return 1
                    return 0
                  })
                  .map((member, index) => (
                    <div key={member.id} className="w-full sm:w-auto">
                      <TeamCard member={member} index={index} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
              No team members found
            </h3>
            <p className="text-gray-500">
              Team members will appear here once added from the admin panel.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

