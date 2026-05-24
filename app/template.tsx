"use client"

import { motion } from "framer-motion"
import { ZowaMotif } from "@/components/zowa-motif"

export default function Template({ children }: { children: React.ReactNode }) {
  // Steep cubic-bezier curve from premium Awwwards transition systems
  const curtainEase = [0.76, 0, 0.24, 1]

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Purple Curtain (Top Layer) */}
      <motion.div
        className="fixed inset-0 bg-[#4D2395] z-[999] pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 0.95,
          ease: curtainEase,
        }}
      />

      {/* Dynamic Cream Curtain (Staggered Trail Layer) */}
      <motion.div
        className="fixed inset-0 bg-[#F5F2EC] z-[998] pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 0.95,
          ease: curtainEase,
          delay: 0.08,
        }}
      />

      {/* Spinning Centered Brand Motif */}
      <div className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 1, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 0, scale: 1.15, rotate: 180 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
            delay: 0.1,
          }}
        >
          <ZowaMotif size={96} color="#FAF7F2" />
        </motion.div>
      </div>

      {/* Un-blurring Page Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.85,
          delay: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
