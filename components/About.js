'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  useEffect(() => {
    gsap.fromTo('.about-content', 
      { y: 80, opacity: 0 },
      {
        y: 0, 
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%'
        }
      }
    )

    gsap.fromTo('.about-image', 
      { scale: 0.8, opacity: 0 },
      {
        scale: 1, 
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 70%'
        }
      }
    )
  }, [])

  return (
    <section id="about" className="about-section py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Rajputna Group
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-8"></div>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Established in 2020, Rajputna Group has become Dubai's most trusted name in 
              premium interior design and technical services.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Led by <strong>Sreelesh Chalil</strong>, our expert team brings together decades 
              of experience in creating exceptional spaces for global brands, government 
              projects, and discerning private clients.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More About Us
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                View Our Process
              </button>
            </div>
          </div>
          
          {/* Images */}
          <div className="about-image">
            <div className="relative">
              {/* Main Photo - Replace with your actual photo */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/owner-photo.jpg"
                  alt="Sreelesh Chalil - Rajputna Group Founder"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Small overlay image */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/about/team-photo.jpg"
                  alt="Rajputna Team at Work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
