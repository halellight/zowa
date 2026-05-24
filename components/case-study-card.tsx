"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface CaseStudyProps {
  title: string
  client: string
  category: string
  description: string
  results: string[]
  image: string
  color?: string
  year: string
  slug: string
  delay?: number
}

export function CaseStudyCard({
  title,
  client,
  category,
  description,
  results,
  image,
  year,
  slug,
  delay = 0,
}: CaseStudyProps) {
  return (
    <Link href={`/work/${slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="group relative flex flex-col h-full border-t border-[#EAE5DB] pt-8 bg-white p-6 shadow-sm hover:shadow transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[#4D2395] font-bold text-sm tracking-wider uppercase mb-2">{category}</p>
            <h3 className="font-instrument-serif text-3xl md:text-4xl text-[#0F0F13] mb-2 group-hover:text-[#4D2395] transition-colors">{title}</h3>
            <p className="text-[#6E6B64] text-base font-semibold">{client} — {year}</p>
          </div>
          <motion.div
            className="w-10 h-10 border border-[#EAE5DB] rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#4D2395] group-hover:bg-[#4D2395] transition-all duration-300"
          >
            <ArrowUpRight className="w-5 h-5 text-[#4D2395] group-hover:text-white transition-colors" />
          </motion.div>
        </div>

        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-none mb-6 bg-[#FAF6F0] border border-[#EAE5DB]">
          <motion.div
            className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"
          />
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
          <div className="md:col-span-2">
            <p className="text-[#5C5952] text-sm md:text-base leading-relaxed">{description}</p>
          </div>
          <div className="space-y-4 md:border-l md:border-[#EAE5DB] md:pl-6">
            {results.map((result, index) => {
              const [metric, ...rest] = result.split(" ")
              const label = rest.join(" ")
              return (
                <div key={index}>
                  <span className="block font-instrument-serif text-3xl text-[#0F0E13]">{metric}</span>
                  <span className="text-xs text-[#6E6B64] tracking-wider uppercase font-semibold">{label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
