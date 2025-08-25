'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featureItems = [
    {
      title: 'Interior Design',
      description: 'Crafting beautiful and functional spaces tailored to your needs.',
    },
    {
      title: 'Technical Services',
      description: 'Expert solutions in planning, execution, and implementation.',
    },
    {
      title: 'Consultation',
      description: 'Professional guidance to bring your vision to life efficiently.',
    },
  ]

  return (
    <section id="features" className="py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featureItems.map((item, idx) => (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
