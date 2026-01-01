import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Loader from '@/components/layout/Loader'

export const metadata: Metadata = {
  title: 'Multimodal Lab - Human-Centered AI Research',
  description: 'A state-of-the-art research space dedicated to advancing human-centric data collection and AI innovation.',
  keywords: 'multimodal AI, human-centered AI, research lab, artificial intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


