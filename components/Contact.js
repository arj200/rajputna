'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const contactRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  })
  
  useEffect(() => {
    gsap.fromTo('.contact-content',
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section ref={contactRef} className="py-20 blue-gradient">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="contact-content">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch for a free consultation and quote
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Info */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">+971 55 492 2749</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">sreeleshchalil@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-blue-100">DBC Building, Room 214<br />Al-Khabeesi, Dubai - UAE</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-4">
                <a 
                  href="tel:+971554922749"
                  className="block w-full bg-white text-blue-600 py-3 rounded-lg font-semibold text-center hover:shadow-xl transition-all duration-300"
                >
                  Call Now
                </a>
                <a 
                  href="https://wa.me/971554922749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border-2 border-white text-white py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-100 border border-white/30 focus:border-white focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-100 border border-white/30 focus:border-white focus:outline-none"
                    required
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-100 border border-white/30 focus:border-white focus:outline-none"
                  required
                />
                
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:border-white focus:outline-none"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="office">Office Fit-Out</option>
                  <option value="retail">Retail Space</option>
                  <option value="residential">Residential</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="other">Other</option>
                </select>
                
                <textarea
                  name="message"
                  placeholder="Project Details"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-100 border border-white/30 focus:border-white focus:outline-none resize-none"
                  required
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}
