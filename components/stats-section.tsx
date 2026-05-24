"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface StatItemProps {
  value: string
  label: string
  delay?: number
}

function StatItem({ value, label, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const numericValue = Number.parseInt(value.replace(/[^\d]/g, ""))

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0
        const increment = numericValue / 50
        const counter = setInterval(() => {
          start += increment
          if (start >= numericValue) {
            setCount(numericValue)
            clearInterval(counter)
          } else {
            setCount(Math.floor(start))
          }
        }, 30)
        return () => clearInterval(counter)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, numericValue, delay])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
        {value.includes("+")
          ? `${count}+`
          : value.includes("M")
            ? `${(count / 1000000).toFixed(1)}M`
            : value.includes("B")
              ? `₦${count}B`
              : value.includes("%")
                ? `${count}%`
                : count}
      </div>
      <div className="text-gray-400 text-sm md:text-base">{label}</div>
    </motion.div>
  )
}

export function StatsSection() {
  const stats = [
    { value: "210+", label: "Happy Clients" },
    { value: "5M+", label: "Citizens Served" },
    { value: "₦100B+", label: "Revenue Generated" },
    { value: "99%", label: "Uptime Guarantee" },
  ]

  return (
    <section className="px-4 md:px-6 py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <em className="font-instrument-serif text-purple-400 italic">impact</em> in numbers.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  )
}
