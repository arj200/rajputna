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
        staggerChildren: 0.2,
      },
    },
  }

  const card = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
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
              className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer relative h-72 sm:h-80 md:h-96 transition-all"
              variants={card}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay text */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-black/50 px-3 sm:px-4 py-2 rounded-md max-w-[90%]">
                <h3 className="text-white font-semibold text-base sm:text-lg truncate">
                  {project.name}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">{project.type}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
