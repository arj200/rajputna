'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const servicesRef = useRef(null)
  
  useEffect(() => {
    const services = gsap.utils.toArray('.service-card')
    
    services.forEach((card, index) => {
      gsap.fromTo(card, 
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  const services = [
    {
      icon: '🏗️',
      title: 'Interior Design',
      description: 'Complete turnkey interior solutions for offices, retail, and residential spaces'
    },
    {
      icon: '🔧',
      title: 'Technical Services',
      description: 'Plumbing, electrical, HVAC, and electromechanical equipment installation'
    },
    {
      icon: '🏢',
      title: 'Office Fit-Outs',
      description: 'Corporate office design and construction trusted by global brands'
    },
    {
      icon: '🏪',
      title: 'Retail Spaces',
      description: 'Boutique and retail store design including luxury brand experiences'
    },
    {
      icon: '🛠️',
      title: 'Maintenance',
      description: 'Ongoing maintenance and repair services for all installations'
    },
    {
      icon: '🎨',
      title: 'Custom Solutions',
      description: 'Bespoke carpentry, false ceilings, and specialized installations'
    }
  ]

  return (
    <section ref={servicesRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 blue-gradient mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive interior design and technical services for all your project needs
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card hover-lift">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
            Get Custom Quote
          </button>
        </div>
        
      </div>
    </section>
  )
}
