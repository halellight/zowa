"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function ThreeDShapes() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 3D Cube */}
      <ThreeDCube
        className="top-1/4 left-1/4"
        scrollProgress={scrollYProgress}
        size={60}
        color="from-purple-500 to-blue-500"
      />

      {/* 3D Pyramid */}
      <ThreeDPyramid
        className="top-1/3 right-1/4"
        scrollProgress={scrollYProgress}
        size={80}
        color="from-pink-500 to-purple-500"
      />

      {/* 3D Octahedron */}
      <ThreeDOctahedron
        className="bottom-1/3 left-1/3"
        scrollProgress={scrollYProgress}
        size={70}
        color="from-blue-500 to-cyan-500"
      />

      {/* 3D Dodecahedron */}
      <ThreeDDodecahedron
        className="bottom-1/4 right-1/3"
        scrollProgress={scrollYProgress}
        size={90}
        color="from-orange-500 to-red-500"
      />

      {/* 3D Torus */}
      <ThreeDTorus
        className="top-1/2 left-1/2"
        scrollProgress={scrollYProgress}
        size={100}
        color="from-green-500 to-teal-500"
      />
    </div>
  )
}

interface ThreeDShapeProps {
  className: string
  scrollProgress: any
  size: number
  color: string
}

function ThreeDCube({ className, scrollProgress, size, color }: ThreeDShapeProps) {
  const rotateX = useTransform(scrollProgress, [0, 1], [0, 360])
  const rotateY = useTransform(scrollProgress, [0, 1], [0, 180])
  const y = useTransform(scrollProgress, [0, 1], [0, -200])

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <motion.div
        className="relative preserve-3d"
        style={{
          width: size,
          height: size,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Cube faces */}
        {[
          { transform: `translateZ(${size / 2}px)`, name: "front" },
          { transform: `rotateY(180deg) translateZ(${size / 2}px)`, name: "back" },
          { transform: `rotateY(90deg) translateZ(${size / 2}px)`, name: "right" },
          { transform: `rotateY(-90deg) translateZ(${size / 2}px)`, name: "left" },
          { transform: `rotateX(90deg) translateZ(${size / 2}px)`, name: "top" },
          { transform: `rotateX(-90deg) translateZ(${size / 2}px)`, name: "bottom" },
        ].map((face, index) => (
          <div
            key={face.name}
            className={`absolute w-full h-full bg-gradient-to-br ${color} opacity-60 border border-white/20`}
            style={{
              transform: face.transform,
              backfaceVisibility: "hidden",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

function ThreeDPyramid({ className, scrollProgress, size, color }: ThreeDShapeProps) {
  const rotateX = useTransform(scrollProgress, [0, 1], [0, -360])
  const rotateY = useTransform(scrollProgress, [0, 1], [0, 270])
  const y = useTransform(scrollProgress, [0, 1], [0, 150])

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.25, scale: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <motion.div
        className="relative preserve-3d"
        style={{
          width: size,
          height: size,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Pyramid faces */}
        <div
          className={`absolute bg-gradient-to-br ${color} opacity-70 border border-white/20`}
          style={{
            width: size,
            height: size,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        />
        <div
          className={`absolute bg-gradient-to-br ${color} opacity-70 border border-white/20`}
          style={{
            width: size,
            height: size,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            transform: `rotateY(90deg) rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        />
        <div
          className={`absolute bg-gradient-to-br ${color} opacity-70 border border-white/20`}
          style={{
            width: size,
            height: size,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            transform: `rotateY(180deg) rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        />
        <div
          className={`absolute bg-gradient-to-br ${color} opacity-70 border border-white/20`}
          style={{
            width: size,
            height: size,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            transform: `rotateY(270deg) rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        />
      </motion.div>
    </motion.div>
  )
}

function ThreeDOctahedron({ className, scrollProgress, size, color }: ThreeDShapeProps) {
  const rotateX = useTransform(scrollProgress, [0, 1], [0, 180])
  const rotateY = useTransform(scrollProgress, [0, 1], [0, 360])
  const rotateZ = useTransform(scrollProgress, [0, 1], [0, 90])
  const y = useTransform(scrollProgress, [0, 1], [0, -100])

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.2, scale: 1 }}
      transition={{ duration: 2, delay: 1.5 }}
    >
      <motion.div
        className="relative preserve-3d"
        style={{
          width: size,
          height: size,
          rotateX,
          rotateY,
          rotateZ,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Octahedron faces */}
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`absolute bg-gradient-to-br ${color} opacity-60 border border-white/20`}
            style={{
              width: size * 0.7,
              height: size * 0.7,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              transform: `rotateY(${index * 45}deg) rotateX(${index % 2 === 0 ? 45 : -45}deg) translateZ(${
                size / 3
              }px)`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

function ThreeDDodecahedron({ className, scrollProgress, size, color }: ThreeDShapeProps) {
  const rotateX = useTransform(scrollProgress, [0, 1], [0, 270])
  const rotateY = useTransform(scrollProgress, [0, 1], [0, -180])
  const y = useTransform(scrollProgress, [0, 1], [0, 100])

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 2, delay: 2 }}
    >
      <motion.div
        className="relative preserve-3d"
        style={{
          width: size,
          height: size,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Simplified dodecahedron as multiple pentagons */}
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className={`absolute bg-gradient-to-br ${color} opacity-50 border border-white/20`}
            style={{
              width: size * 0.6,
              height: size * 0.6,
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              transform: `rotateY(${index * 30}deg) rotateX(${(index % 3) * 60}deg) translateZ(${size / 2.5}px)`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

function ThreeDTorus({ className, scrollProgress, size, color }: ThreeDShapeProps) {
  const rotateX = useTransform(scrollProgress, [0, 1], [0, 360])
  const rotateY = useTransform(scrollProgress, [0, 1], [0, 180])
  const y = useTransform(scrollProgress, [0, 1], [0, -50])

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 2, delay: 2.5 }}
    >
      <motion.div
        className="relative preserve-3d"
        style={{
          width: size,
          height: size,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Torus approximation using multiple rings */}
        {[...Array(16)].map((_, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-gradient-to-br ${color} opacity-40 border border-white/10`}
            style={{
              width: size * 0.8,
              height: size * 0.2,
              transform: `rotateY(${index * 22.5}deg) translateZ(${size / 4}px) rotateX(90deg)`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
