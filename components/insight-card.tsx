"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface InsightCardProps {
  category: string
  title: string
  readTime: string
  image: string
  authors?: string
  date?: string
  delay?: number
  aspectRatio?: "16/9" | "4/3" | "square"
  slug?: string
}

export function InsightCard({
  category,
  title,
  readTime,
  image,
  authors,
  date,
  delay = 0,
  aspectRatio = "16/9",
  slug,
}: InsightCardProps) {
  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    square: "aspect-square",
  }[aspectRatio]

  const card = (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col gap-6"
    >
      <div className={`relative ${aspectClass} w-full overflow-hidden rounded-none bg-[#FAF6F0] border border-[#EAE5DB]`}>
        <motion.div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-100 group-hover:scale-103"
        />
      </div>
      
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-xs tracking-wider uppercase">
          <span className="text-[#4D2395] font-bold">{category}</span>
          {!authors && (
            <>
              <span className="text-[#C4BCAF]">•</span>
              <span className="text-[#6E6B64] font-medium">{readTime}</span>
            </>
          )}
        </div>
        
        <h3 className="font-instrument-serif text-3xl text-[#0F0E13] group-hover:text-[#4D2395] transition-colors duration-300">
          {title}
        </h3>

        {authors ? (
          <div className="text-sm text-[#6E6B64] mt-2 font-semibold">
            <p className="mb-1 text-[#5C5952]">Written by <span className="text-[#0F0E13] font-bold group-hover:text-[#4D2395] transition-colors">{authors}</span></p>
            <p>{date} • {readTime}</p>
          </div>
        ) : (
          <div className="mt-2 flex items-center text-sm font-semibold text-[#4D2395] group-hover:text-[#3C1371] transition-colors duration-300">
            Read Report 
            <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        )}
      </div>
    </motion.article>
  )

  if (slug) {
    return (
      <Link href={`/thinking/${slug}`} className="block">
        {card}
      </Link>
    )
  }

  return card
}
