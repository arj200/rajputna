'use client'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  )
}
