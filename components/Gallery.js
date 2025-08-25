'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
  const galleryRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  useEffect(() => {
    const images = gsap.utils.toArray('.gallery-item')
    
    images.forEach((img, index) => {
      gsap.fromTo(img,
        {
          y: 50,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [selectedCategory])

  const projects = [
    {
      id: 1,
      title: 'Prada Boutique Dubai',
      category: 'retail',
      image: '/images/prada-project.jpg', // You'll replace with actual images
      description: 'Luxury retail space design'
    },
    {
      id: 2,
      title: 'BenQ Corporate Office',
      category: 'office',
      image: '/images/benq-project.jpg',
      description: 'Modern office fit-out'
    },
    {
      id: 3,
      title: 'Logitech Experience Center',
      category: 'office',
      image: '/images/logitech-project.jpg',
      description: 'Interactive workspace design'
    },
    {
      id: 4,
      title: 'Quality Care Dental',
      category: 'healthcare',
      image: '/images/dental-project.jpg',
      description: 'Medical facility interior'
    },
    {
      id: 5,
      title: 'TP-Link Office Dubai',
      category: 'office',
      image: '/images/tplink-project.jpg',
      description: 'Technology company headquarters'
    },
    {
      id: 6,
      title: 'Al Mutlaq Travel',
      category: 'office',
      image: '/images/almutlaq-project.jpg',
      description: 'Travel agency office design'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'office', label: 'Offices' },
    { id: 'retail', label: 'Retail' },
    { id: 'healthcare', label: 'Healthcare' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section ref={galleryRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 blue-gradient mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our expertise across various industries and project types
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="gallery-item hover-lift cursor-pointer">
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-80 relative group">
                {/* Placeholder for actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-blue-100">{project.description}</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
