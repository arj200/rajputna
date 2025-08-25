'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const logoRef = useRef(null)
  const logoInView = useInView(logoRef, { once: true, margin: '-100px' })

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Logo + Company Name as Image with fade-in + slide-up */}
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0, y: 40 }}
          animate={logoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="w-48 h-auto mx-auto mb-6"
        >
          <Image
            src="/images/rajputna-logo.png" // your combined logo + name image
            alt="Rajputna Group Logo"
            width={192}
            height={64}
            className="object-contain mx-auto"
          />
        </motion.div>
        
        {/* Optional tagline */}
        <p className="text-gray-400 mb-8">
          Premium Interior Design & Technical Services
        </p>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400">
            © 2025 Rajputna Group. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  )
}
