'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [menuOpen, setMenuOpen] = useState(false)

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
      { threshold: 0.3, rootMargin: '-80px 0px -80px 0px' }
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleClick = (id) => {
    setMenuOpen(false)
    if (id === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' })
    else {
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
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800/20'
          : 'bg-gray-900/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image
            src="/images/rajputna-favicon.png"
            alt="Rajputna Logo"
            width={40}
            height={40}
            className="object-contain rounded-md"
          />
          <div className="flex flex-col leading-tight text-white">
            <div className="font-bold text-lg tracking-wide">RAJPUTNA</div>
            <div className="text-xs tracking-wider text-blue-400">INTERIOR DESIGN</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative group text-white transition-all font-medium ${
                active === item.id ? 'text-blue-400' : 'hover:text-blue-400'
              }`}
            >
              {item.label}
              {/* Clean custom cursor effect */}
              <motion.span
                layoutId="nav-cursor"
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded opacity-0 group-hover:opacity-100`}
              />
            </button>
          ))}
        </div>

        {/* Right Controls: CTA */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={() => handleClick('cta')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            className="hidden md:block px-5 py-2 rounded-full font-medium shadow-md hover:shadow-xl transition-all text-sm bg-blue-600 text-white cursor-pointer"
          >
            Get Started
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none text-2xl text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden px-6 pb-6 space-y-4 rounded-b-2xl shadow-lg bg-gray-900/95 backdrop-blur-md"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left py-2 text-lg text-white hover:text-blue-400 cursor-pointer`}
              >
                {item.label}
              </button>
            ))}

            <motion.button
              onClick={() => handleClick('cta')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              className="w-full px-5 py-3 rounded-full font-medium shadow-md hover:shadow-xl transition-all bg-blue-600 text-white cursor-pointer"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
