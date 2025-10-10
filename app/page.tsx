'use client'

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services/section'
import { TeamSection } from '@/components/team-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <Footer />
      </main>
    </>
  )
}
