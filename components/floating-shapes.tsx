"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingShapes() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          <div
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full opacity-20`}
            style={{
              background: [
                "linear-gradient(45deg, #8b5cf6, #3b82f6)",
                "linear-gradient(45deg, #ec4899, #8b5cf6)",
                "linear-gradient(45deg, #06b6d4, #3b82f6)",
                "linear-gradient(45deg, #f59e0b, #ef4444)",
                "linear-gradient(45deg, #10b981, #06b6d4)",
                "linear-gradient(45deg, #8b5cf6, #ec4899)",
              ][i],
            }}
          />
        </motion.div>
      ))}

      {/* Larger floating elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute opacity-10"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          <div
            className={`w-8 h-8 md:w-12 md:h-12 ${i === 0 ? "rounded-full" : i === 1 ? "rotate-45" : "rounded-lg"}`}
            style={{
              background: [
                "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                "linear-gradient(135deg, #ec4899, #f59e0b)",
                "linear-gradient(135deg, #06b6d4, #10b981)",
              ][i],
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
