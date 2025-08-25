'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function ClientLogos() {
  const logosRef = useRef(null)
  
  useEffect(() => {
    const logos = gsap.utils.toArray('.client-logo')
    
    // Infinite scroll animation
    gsap.to(logos, {
      xPercent: -100 * logos.length,
      repeat: -1,
      duration: 20,
      ease: 'none',
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0)
      }
    })
  }, [])

  const clients = [
    'PRADA',
    'BenQ',
    'Logitech',
    'TP-Link',
    'Quality Care',
    'Al Mutlaq',
    'MEDI',
    'Rassasi'
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-400">
            Global companies choose Rajputna for exceptional results
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div ref={logosRef} className="flex space-x-16">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="client-logo flex-shrink-0">
                <div className="bg-white/10 px-8 py-4 rounded-lg backdrop-blur-sm">
                  <span className="text-2xl font-bold text-white whitespace-nowrap">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}
