'use client'

import { motion } from 'framer-motion'

const projects = [
  { name: 'Prada Boutique', image: '/images/projects/prada.jpg', type: 'Luxury Retail' },
  { name: 'BenQ Office', image: '/images/projects/benq.jpg', type: 'Corporate' },
  { name: 'Logitech Center', image: '/images/projects/logitech.jpg', type: 'Technology' },
  { name: 'Quality Care', image: '/images/projects/dental.jpg', type: 'Healthcare' },
]

export default function Portfolio() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const overlay = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 md:py-40 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24 md:mb-32">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-brand-dark/70 max-w-2xl sm:max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            A showcase of our recent work. Each project demonstrates creativity, precision, and high-quality design.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer cursor-hover h-72 sm:h-80 md:h-96 transition-all"
              variants={card}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay with gradient + text */}
              <motion.div
                variants={overlay}
                initial="hidden"
                whileHover="show"
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6 rounded-2xl"
              >
                <h3 className="text-white font-semibold text-base sm:text-lg truncate">{project.name}</h3>
                <p className="text-white/80 text-xs sm:text-sm">{project.type}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
