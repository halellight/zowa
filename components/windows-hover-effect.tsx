"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef, useState } from "react"

interface WindowsHoverEffectProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export function WindowsHoverEffect({ children, className = "", intensity = 0.3 }: WindowsHoverEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: isHovered
          ? `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, ${intensity}) 0%, transparent 70%)`
          : "transparent",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
