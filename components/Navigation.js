'use client'
import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'features', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'cta', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -80px 0px' } // accounts for fixed navbar
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  // Smooth scroll handler
  const handleClick = (id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/85 backdrop-blur-md shadow-lg border-b border-brand-primary/20'
          : 'bg-brand-dark/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="origin-left absolute top-0 left-0 h-1 bg-gradient-to-r from-brand-primary to-brand-light"
      />

      <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/rajputna-favicon.png"
            alt="Rajputna Logo"
            width={48}
            height={48}
            className="object-contain rounded-md"
          />
          <div className="flex flex-col leading-tight">
            <div className="font-bold text-white text-lg tracking-wide">RAJPUTNA</div>
            <div className="text-xs text-brand-primary tracking-wider">
              INTERIOR DESIGN
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`transition-colors ${
                active === item.id
                  ? 'text-brand-primary font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Get Started CTA */}
        <motion.button
          onClick={() => handleClick('cta')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-brand-primary to-brand-dark text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-xl transition-all text-sm"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  )
}
