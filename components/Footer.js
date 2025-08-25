'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Footer() {
  const logoRef = useRef(null)
  const logoInView = useInView(logoRef, { once: true, margin: '-100px' })
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const arr = Array.from({ length: 15 }, () => ({
      size: 4 + Math.random() * 6,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
      xRange: Math.random() * 40 - 20,
      yRange: Math.random() * 40 - 20,
      bg: `radial-gradient(circle, rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 0.15) 0%, transparent 70%)`,
    }))
    setParticles(arr)
  }, [])

  return (
    <footer className="bg-gray-900 relative overflow-hidden py-12">
      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: p.bg }}
          animate={{ x: [0, p.xRange, 0], y: [0, p.yRange, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo + Company Name */}
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={logoInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mx-auto mb-6 w-40 sm:w-48 md:w-56 hover:scale-105 transition-transform"
        >
          <Image
            src="/images/rajputna-logo.png"
            alt="Rajputna Group Logo"
            width={224}
            height={80}
            className="object-contain mx-auto"
          />
        </motion.div>

        {/* Tagline */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 px-4">
          Premium Interior Design & Technical Services
        </p>

        {/* Divider + Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="border-t border-gray-800 pt-6"
        >
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">
            © 2025 Rajputna Group. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
