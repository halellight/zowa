"use client"

import { motion } from "framer-motion"
import { ZowaMotif } from "@/components/zowa-motif"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function WorkPage() {
  const caseStudies = [
    {
      title: "Monisight",
      client: "Perception & Financial Intelligence",
      category: "Data-Driven Workflows",
      description: "Engineered a state-of-the-art public perception monitoring and financial transaction intelligence platform, enabling citizens to gauge budget execution transparency and build financial literacy.",
      results: ["1.2M+ Scans", "36 States Mapped", "Real-Time Feeds"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      year: "2024",
      slug: "monisight"
    },
    {
      title: "Consilo",
      client: "Digital Experience Engineering",
      category: "Institutional Transformation",
      description: "Launched a boutique strategic digital design and brand engineering engine, specializing in crafting highly aesthetic, responsive, and functional systems for premier institutions.",
      results: ["25+ Brands scaled", "High Aesthetics", "Zero Downtime"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
      year: "2025",
      slug: "consilo"
    },
    {
      title: "Àwùjọ",
      client: "Civic Dialogue & Collaboration Network",
      category: "Strategic Advisory & Policy",
      description: "Created a collaborative citizen feedback and engagement ecosystem for MDAs, building institutional bridges to strengthen community participation and governance alignment.",
      results: ["650K+ Feedbacks", "5 MDAs Engaged", "92% Alignment"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      year: "2024",
      slug: "awujo"
    },
    {
      title: "Naija Elections",
      client: "Democratic Voter Mobilization Hub",
      category: "E-Governance Architecture",
      description: "Designed Nigeria's leading voter education repository and live election tracker, giving millions of citizens real-time access to candidate diagnostics and structural voting benchmarks.",
      results: ["2.4M+ Voter Profiles", "Live Feeds", "300% Engagement"],
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070&auto=format&fit=crop",
      year: "2023",
      slug: "naija-elections"
    }
  ]

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-[#FAF7F2] text-[#0F0E13] relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(77,35,149,0.02) 0%, transparent 70%)" }} />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="mb-24 max-w-5xl relative z-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <ZowaMotif size={14} color="#4D2395" />
          <span className="text-[#4D2395] font-semibold tracking-[0.2em] uppercase text-xs">Our Portfolio</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-instrument-serif mb-8 text-[#0F0E13] leading-[1.08]">
          Transforming African <span className="italic text-[#4D2395]">lives</span> <br/> and institutional outcomes.
        </h1>
        <p className="text-lg md:text-xl text-[#6E6B64] max-w-3xl leading-relaxed">
          Explore our record of high-impact engagements building bespoke e-government architectures, strategic perception systems, and high-aesthetic brand infrastructures.
        </p>
      </motion.div>

      {/* Case studies list */}
      <div className="flex flex-col gap-0 relative z-10 border-b border-[#EAE5DB] mb-20">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link href={`/work/${study.slug}`} className="block group border-t border-[#EAE5DB] py-12 md:py-16 hover:bg-white/40 transition-colors duration-300 px-0 md:-mx-4 md:px-4 rounded-none">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Index */}
                <div className="md:col-span-1">
                  <span className="font-instrument-serif text-4xl text-[#C4BCAF] group-hover:text-[#4D2395] transition-colors">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Title & Metadata */}
                <div className="md:col-span-4">
                  <p className="text-[#4D2395] text-xs font-bold tracking-[0.2em] uppercase mb-3">{study.category}</p>
                  <h3 className="font-instrument-serif text-3xl md:text-4xl text-[#0F0E13] mb-2 group-hover:text-[#4D2395] transition-colors">{study.title}</h3>
                  <p className="text-[#6E6B64] text-xs uppercase tracking-wider font-semibold">{study.client} — {study.year}</p>
                </div>
                
                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-[#5C5952] text-sm md:text-base leading-relaxed">{study.description}</p>
                </div>
                
                {/* Metrics */}
                <div className="md:col-span-2 space-y-4">
                  {study.results.map((r, i) => {
                    const [metric, ...rest] = r.split(" ")
                    return (
                      <div key={i}>
                        <span className="block font-instrument-serif text-2xl text-[#0F0E13]">{metric}</span>
                        <span className="text-xs text-[#6E6B64] tracking-wider uppercase font-semibold">{rest.join(" ")}</span>
                      </div>
                    )
                  })}
                </div>
                
                {/* Hover Trigger */}
                <div className="md:col-span-1 flex justify-end items-center h-full">
                  <motion.div
                    className="w-10 h-10 border border-[#EAE5DB] rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#4D2395] group-hover:bg-[#4D2395] transition-all duration-350"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#4D2395] group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
