'use client'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import CustomCursor from '@/context/CustomCursor'
import { ThemeContext } from '@/context/ThemeContext'

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 relative">
      <CustomCursor /> {/* Add this */}
      <Navigation />
      <Hero />
      <Features />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  )
}
