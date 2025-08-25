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
        staggerChildren: 0.2
      }
    }
  }

  const card = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <section id="portfolio" className="relative py-40 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-brand-dark mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h2>
          <motion.p
            className="text-lg text-brand-dark/70 max-w-3xl mx-auto"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer relative h-96"
              variants={card}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-black/50 px-4 py-2 rounded-md">
                <h3 className="text-white font-semibold text-lg">{project.name}</h3>
                <p className="text-white/80 text-sm">{project.type}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
