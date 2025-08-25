'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaPaintBrush, FaTools, FaLightbulb } from 'react-icons/fa'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [particles, setParticles] = useState([])

  // Floating particles
  useEffect(() => {
    const arr = Array.from({ length: 12 }, () => ({
      size: 6 + Math.random() * 10,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      xRange: Math.random() * 40 - 20,
      yRange: Math.random() * 40 - 20,
      bg: `radial-gradient(circle, rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 0.15) 0%, transparent 70%)`,
    }))
    setParticles(arr)
  }, [])

  // Features
  const featureItems = [
    {
      title: 'Interior Design',
      description: 'Crafting beautiful and functional spaces tailored to your needs.',
      color: 'from-[#3F72AF] to-[#DBE2EF]',
      icon: <FaPaintBrush size={24} />,
      link: '#cta',
    },
    {
      title: 'Technical Services',
      description: 'Expert solutions in planning, execution, and implementation.',
      color: 'from-[#FF8A00] to-[#FF4E50]',
      icon: <FaTools size={24} />,
      link: '#cta',
    },
    {
      title: 'Consultation',
      description: 'Professional guidance to bring your vision to life efficiently.',
      color: 'from-[#4FACFE] to-[#00F2FE]',
      icon: <FaLightbulb size={24} />,
      link: '#cta',
    },
  ]

  const handleClick = (link) => {
    const el = document.querySelector(link)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Card & icon animations
  const cardReveal = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  }
  const iconReveal = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  // Custom cursor
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const cursorSize = useMotionValue(24)
  const cursorXS = useSpring(cursorX, { stiffness: 200, damping: 30 })
  const cursorYS = useSpring(cursorY, { stiffness: 200, damping: 30 })
  const cursorSS = useSpring(cursorSize, { stiffness: 300, damping: 30 })
  const cursorC = useTransform(cursorSize, [24, 48], ['#3F72AF', '#DBE2EF'])

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - cursorSize.get() / 2)
      cursorY.set(e.clientY - cursorSize.get() / 2)
    }

    const hoverTargets = document.querySelectorAll('a, button, .cursor-hover')
    const enter = () => cursorSize.set(48)
    const leave = () => cursorSize.set(24)

    window.addEventListener('mousemove', move)
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [cursorX, cursorY, cursorSize])

  return (
    <section id="features" ref={ref} className="relative py-20 md:py-32 bg-gray-100 overflow-hidden">
      {/* Floating Particles */}
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: p.bg,
          }}
          animate={{ x: [0, p.xRange, 0], y: [0, p.yRange, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10 sm:mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {featureItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardReveal}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              transition={{ delay: idx * 0.25 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleClick(item.link)}
              className="relative cursor-pointer bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-hover"
            >
              <motion.div
                variants={iconReveal}
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                whileHover={{ scale: 1.2 }}
                className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-tr ${item.color} text-white shadow-lg`}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXS,
          y: cursorYS,
          width: cursorSS,
          height: cursorSS,
          backgroundColor: cursorC,
        }}
      />
    </section>
  )
}
