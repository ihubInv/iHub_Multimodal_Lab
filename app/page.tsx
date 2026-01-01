'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Mail, MapPin, Database, Heart, Brain, TrendingUp, Gamepad2, ShoppingBag, Bot, Stethoscope, Users, Headphones, BarChart3, Shield, Eye, Ear, FileText, Map, Clock, Languages, Building2, UsersRound, Zap, ArrowRight } from 'lucide-react'
import TypingAnimation from '@/components/ui/TypingAnimation'
import ResearchCard from '@/components/research/ResearchCard'
import TeamCard from '@/components/team/TeamCard'
import ConcentricCircles from '@/components/multimodal/ConcentricCircles'
import DataPointsViz from '@/components/multimodal/DataPointsViz'
import EvolutionJourney from '@/components/multimodal/EvolutionJourney'
import ImpactRadar from '@/components/multimodal/ImpactRadar'
import ModalityDetails from '@/components/multimodal/ModalityDetails'
import HeroSection from '@/components/pages/HeroSection'
import RaisonDetreSection from '@/components/pages/RaisonDetreSection'
import WhatIsMultimodalAISection from '@/components/pages/WhatIsMultimodalAISection'
import AboutSection from '@/components/pages/AboutSection'
import BusinessUseCasesSection from '@/components/pages/BusinessUseCasesSection'
import TeamSection from '@/components/pages/TeamSection'
import NewsUpdatesSection from '@/components/pages/NewsUpdatesSection'
import ContactSection from '@/components/pages/ContactSection'
import MapSection from '@/components/pages/MapSection'
import {staticTeamMembers,businessUseCases,researchAreas}  from '@/components/const/constant'


export default function Home() {
  const [teamMembers, setTeamMembers] = useState([] as any[])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('/api/team')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch team members')
        }
        return res.json()
      })
      .then((data) => {
        // Ensure data is an array and combine with static members
        let apiMembers= []
        if (Array.isArray(data)) {
          apiMembers = data
        }
        // Combine static members with API members, avoiding duplicates by ID
        const allMembers = [...staticTeamMembers, ...apiMembers]
        // Remove duplicates based on ID
        const uniqueMembers = allMembers.filter((member, index, self) =>
          index === self.findIndex((m) => m.id === member.id)
        )
        setTeamMembers(uniqueMembers)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching team members:', error)
        // If API fails, use static members
        setTeamMembers(staticTeamMembers)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Raison d'être Section */}
      <RaisonDetreSection />

      {/* What is Multimodal AI? Section */}
      <WhatIsMultimodalAISection />

      {/* About Section - Detailed */}
      <AboutSection />

      {/* Business Use Cases Section */}
      <BusinessUseCasesSection businessUseCases={businessUseCases} />

      {/* Team Section */}
      <TeamSection teamMembers={teamMembers} loading={loading} />

      {/* News+Updates Section */}
      <NewsUpdatesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Map Section */}
      <MapSection />
    </>
  )
}
