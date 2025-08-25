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
    }))
    setParticles(arr)
  }, [])

  return (
    <section id="cta" ref={ref} className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Background particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/10 rounded-full"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left }}
          animate={{ x: [0, p.xRange, 0], y: [0, p.yRange, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      {/* CTA content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center shadow-2xl border border-white/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10">
            Work with Rajputna Group to bring your vision to life. Creative solutions crafted with precision.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            {/* WhatsApp redirect */}
            <a
              href="https://wa.me/971554922749?text=Hi%20Rajputna%20Group,%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Get Free Consultation
            </a>

            <a
              href="tel:+971554922749"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Call +971 55 492 2749
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-white/80 font-medium text-lg">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>sreeleshchalil@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+971 55 492 2749</span>
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
        