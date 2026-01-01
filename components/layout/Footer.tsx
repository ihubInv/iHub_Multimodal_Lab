'use client'

import { Facebook, Linkedin, Instagram, Youtube, Database, Heart, Brain, TrendingUp, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#F4F5F8] to-white text-[#5F6168] border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* About Section - Enhanced */}
          <div className="space-y-6">
            <div className="mb-6">
              <div className="w-[160px] h-[100px] bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="/imgcopy/logo/MMLLOGO.png"
                  alt="Multimodal Lab"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-700 max-w-md">
              A state-of-the-art research space dedicated to advancing human-centric
              data collection and AI innovation. Bridging technology and human experience
              to create meaningful solutions for the future.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="w-12 h-12 bg-[#E5E5F6] text-[#0d559e] rounded-full flex items-center justify-center hover:bg-[#0d559e] hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#E5E5F6] text-[#0d559e] rounded-full flex items-center justify-center hover:bg-[#0d559e] hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#E5E5F6] text-[#0d559e] rounded-full flex items-center justify-center hover:bg-[#0d559e] hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#E5E5F6] text-[#0d559e] rounded-full flex items-center justify-center hover:bg-[#0d559e] hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Research Focus & Contact - Combined Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Research Focus */}
            <div>
              <h3 className="text-[#111112] font-bold mb-6 text-xl">Research Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E5E5F6] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#0d559e] transition-colors duration-300">
                    <Database className="w-5 h-5 text-[#0d559e] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 pt-1">
                    <strong className="text-[#111112] text-sm font-semibold block leading-tight">
                      Development of Multimodal AI Datasets
                    </strong>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E5E5F6] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#0d559e] transition-colors duration-300">
                    <Heart className="w-5 h-5 text-[#0d559e] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 pt-1">
                    <strong className="text-[#111112] text-sm font-semibold block leading-tight">
                      Emotion and Affect Recognition
                    </strong>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E5E5F6] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#0d559e] transition-colors duration-300">
                    <Brain className="w-5 h-5 text-[#0d559e] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 pt-1">
                    <strong className="text-[#111112] text-sm font-semibold block leading-tight">
                      Cross-Modal Learning
                    </strong>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E5E5F6] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#0d559e] transition-colors duration-300">
                    <TrendingUp className="w-5 h-5 text-[#0d559e] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 pt-1">
                    <strong className="text-[#111112] text-sm font-semibold block leading-tight">
                      Behavioural Analysis
                    </strong>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-[#111112] font-bold mb-6 text-xl">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E5E5F6] rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-[#0d559e]" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      IIT Mandi iHub and HCi Foundation<br />
                      VPO Kamand, District Mandi, Himachal Pradesh, India - 175075<br />
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E5E5F6] rounded-lg flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-[#0d559e]" />
                  </div>
                  <div className="flex-1 pt-1">
                    <a href="mailto:contact@mmlab.edu" className="text-gray-700 hover:text-[#0d559e] text-sm transition-colors">
                      volga@ihubiitmandi.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E5E5F6] rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-[#0d559e]" />
                  </div>
                  {/* <div className="flex-1 pt-1">
                    <a href="tel:+1234567890" className="text-gray-700 hover:text-[#0d559e] text-sm transition-colors">
                        +91 9816000000
                    </a>
                  </div> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p className="mb-4 md:mb-0 font-medium">Copyright © 2026 Multimodal Lab. All Rights Reserved</p>
            <div className="flex items-center space-x-6">
              {/* <a href="#" className="hover:text-[#0d559e] transition-colors font-medium">
                Terms & Conditions
              </a> */}
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              {/* <a href="#" className="hover:text-[#0d559e] transition-colors font-medium">
                Privacy Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

