"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function Interactive3DShapes() {
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }

  // Always create these transforms, but use safe dimensions
  const rotateXValue = useTransform(mouseY, [0, dimensions.height], [30, -30])
  const rotateYValue = useTransform(mouseX, [0, dimensions.width], [-30, 30])
  const rotateX = useSpring(rotateXValue, springConfig)
  const rotateY = useSpring(rotateYValue, springConfig)

  const rotateXTetrahedron = useTransform(rotateX, (value) => -value)
  const rotateYTetrahedron = useTransform(rotateY, (value) => value * 1.5)

  const rotateXHexagonalPrism = useTransform(rotateY, (value) => value * 0.5)
  const rotateYHexagonalPrism = useTransform(rotateX, (value) => -value * 0.8)

  const rotateZRhombicDodecahedron = useTransform(mouseX, [0, dimensions.width], [0, 180])
  const rotateXRhombicDodecahedron = useTransform(rotateX, (value) => value * 1.2)
  const rotateYRhombicDodecahedron = useTransform(rotateY, (value) => -value * 0.7)

  useEffect(() => {
    setMounted(true)

    // Set actual window dimensions after mount
    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })

      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }

      window.addEventListener("resize", handleResize)

      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      }

      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Interactive 3D Icosahedron */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 3, delay: 1 }}
      >
        <div className="relative w-24 h-24 preserve-3d">
          {/* Icosahedron faces */}
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="absolute bg-gradient-to-br from-indigo-500 to-purple-500 opacity-60 border border-white/20"
              style={{
                width: "60px",
                height: "60px",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                transform: `rotateY(${index * 18}deg) rotateX(${(index % 4) * 45}deg) translateZ(30px)`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Interactive 3D Tetrahedron */}
      <motion.div
        className="absolute bottom-1/4 left-1/4"
        style={{
          rotateX: rotateXTetrahedron,
          rotateY: rotateYTetrahedron,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 3, delay: 1.5 }}
      >
        <div className="relative w-20 h-20 preserve-3d">
          {/* Tetrahedron faces */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="absolute bg-gradient-to-br from-emerald-500 to-teal-500 opacity-70 border border-white/20"
              style={{
                width: "60px",
                height: "60px",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                transform: `rotateY(${index * 90}deg) rotateX(${index === 0 ? 0 : 60}deg) translateZ(20px)`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Interactive 3D Hexagonal Prism */}
      <motion.div
        className="absolute top-1/2 left-1/6"
        style={{
          rotateX: rotateXHexagonalPrism,
          rotateY: rotateYHexagonalPrism,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3, delay: 2 }}
      >
        <div className="relative w-16 h-16 preserve-3d">
          {/* Hexagonal prism faces */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="absolute bg-gradient-to-br from-rose-500 to-pink-500 opacity-60 border border-white/20"
              style={{
                width: index < 6 ? "40px" : "35px",
                height: index < 6 ? "40px" : "35px",
                clipPath: index < 6 ? "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" : "none",
                transform:
                  index < 6
                    ? `rotateY(${index * 60}deg) translateZ(20px)`
                    : `rotateX(${index === 6 ? 90 : -90}deg) translateZ(20px)`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Interactive 3D Rhombic Dodecahedron */}
      <motion.div
        className="absolute bottom-1/3 right-1/6"
        style={{
          rotateX: rotateXRhombicDodecahedron,
          rotateY: rotateYRhombicDodecahedron,
          rotateZ: rotateZRhombicDodecahedron,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 3, delay: 2.5 }}
      >
        <div className="relative w-20 h-20 preserve-3d">
          {/* Rhombic dodecahedron faces */}
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="absolute bg-gradient-to-br from-amber-500 to-orange-500 opacity-50 border border-white/20"
              style={{
                width: "30px",
                height: "30px",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                transform: `rotateY(${index * 30}deg) rotateX(${(index % 3) * 45}deg) translateZ(15px)`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
