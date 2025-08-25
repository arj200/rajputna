'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const logoRef = useRef(null)
  const logoInView = useInView(logoRef, { once: true, margin: '-100px' })

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo + Company Name */}
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0, y: 40 }}
          animate={logoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mx-auto mb-6 w-40 sm:w-48 md:w-56"
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
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">
            © 2025 Rajputna Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
