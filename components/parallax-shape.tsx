"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ParallaxShapeProps {
  src: string
  alt: string
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  opacity?: number
}

export function ParallaxShape({
  src,
  alt,
  className = "",
  speed = 0.5,
  direction = "up",
  opacity = 0.3,
}: ParallaxShapeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const transformUp = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const transformDown = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed])
  const transformLeft = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const transformRight = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return transformUp
      case "down":
        return transformDown
      case "left":
        return transformLeft
      case "right":
        return transformRight
      default:
        return transformUp
    }
  }

  const transform = getTransform()

  return (
    <div ref={ref} className={`absolute pointer-events-none z-0 ${className}`}>
      <motion.div
        style={{
          [direction === "left" || direction === "right" ? "x" : "y"]: transform,
          opacity: opacity,
        }}
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: opacity, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {src.endsWith(".svg") ? (
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label={alt}
          />
        ) : (
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className="w-full h-full object-contain"
            style={{ opacity: opacity }}
            loading="lazy"
          />
        )}
      </motion.div>
    </div>
  )
}
