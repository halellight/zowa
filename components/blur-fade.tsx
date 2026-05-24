"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface BlurFadeProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  blur?: string
  className?: string
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 24,
  blur = "12px",
  className = "",
}: BlurFadeProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{
          delay,
          duration,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
