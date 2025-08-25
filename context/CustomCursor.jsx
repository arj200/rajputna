'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springConfig = { stiffness: 300, damping: 30 }
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  useEffect(() => {
    x.set(position.x - 8)
    y.set(position.y - 8)
  }, [position, x, y])

  useEffect(() => {
    const interactiveEls = document.querySelectorAll(
      'button, a, input, textarea, select, [data-cursor-hover]'
    )

    const addHover = () => setHovered(true)
    const removeHover = () => setHovered(false)

    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <motion.div
      style={{
        translateX: sx,
        translateY: sy,
      }}
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-white/50 ${
        hovered ? 'w-10 h-10 bg-white/10 border-white' : 'w-4 h-4 bg-white'
      } transition-all duration-150`}
    />
  )
}
