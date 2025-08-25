'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featureItems = [
    {
      title: 'Interior Design',
      description:
        'Crafting beautiful and functional spaces tailored to your needs.',
    },
    {
      title: 'Technical Services',
      description:
        'Expert solutions in planning, execution, and implementation.',
    },
    {
      title: 'Consultation',
      description:
        'Professional guidance to bring your vision to life efficiently.',
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Title */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10 sm:mb-12"
        >
          Our Services
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {featureItems.map((item, idx) => (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: idx * 0.2,
              }}
              whileHover={{ scale: 1.03 }} // subtle hover grow on desktop
              whileTap={{ scale: 0.97 }} // slight shrink on tap for mobile
              className="cursor-pointer bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all"
              onClick={() => alert(`${item.title} clicked!`)} // sample click action
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
