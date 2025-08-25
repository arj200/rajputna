'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTA() {
  const [particles, setParticles] = useState([])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    const arr = Array.from({ length: 20 }, () => ({
      size: 4 + Math.random() * 8,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      xRange: Math.random() * 50 - 25,
      yRange: Math.random() * 50 - 25,
      bg: `radial-gradient(circle, rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 0.15) 0%, transparent 70%)`,
    }))
    setParticles(arr)
  }, [])

  const ctaReveal = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
  }

  return (
    <section id="cta" ref={ref} className="relative py-20 md:py-32 bg-gray-900 overflow-hidden">
      {/* Background particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: p.bg }}
          animate={{ x: [0, p.xRange, 0], y: [0, p.yRange, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      {/* CTA content */}
      <motion.div
        variants={ctaReveal}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center shadow-2xl border border-white/20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10">
            Work with Rajputna Group to bring your vision to life. Creative solutions crafted with precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8">
            <a
              href="https://wa.me/971554922749?text=Hi%20Rajputna%20Group,%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover bg-gradient-to-r from-[#3F72AF] to-[#DBE2EF] text-white font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
            >
              Get Free Consultation
            </a>

            <a
              href="tel:+97145541045"
              className="cursor-hover border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all text-sm sm:text-base"
            >
              Call +971 4 554 1045
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-white/80 font-medium text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span className="break-words">info@rajputna.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+971 4 554 1045</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Dubai, UAE</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
