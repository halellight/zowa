"use client"

import { motion } from "framer-motion"
import { ZowaMotif } from "@/components/zowa-motif"

export default function AboutPage() {
  const offerings = [
    {
      title: "Strategic Advisory & Policy",
      description: "We advise policymakers on national frameworks, AI adoption, and citizen engagement strategies to future-proof governance."
    },
    {
      title: "E-Governance Architecture",
      description: "We design and implement scalable, secure digital platforms that streamline public service delivery and reduce bureaucratic friction."
    },
    {
      title: "Institutional Culture & Change",
      description: "Technology is only half the equation. We guide public institutions through the cultural shifts required for successful digital adoption."
    },
    {
      title: "Data-Driven Workflows",
      description: "We transform fragmented data into actionable intelligence, allowing governments to make evidence-based decisions in real-time."
    }
  ]

  const coreValues = [
    {
      number: "01",
      title: "Embedded Accountability",
      text: "We don't deliver reports from afar. We sit in the rooms, walk the corridors, and share the risk of execution with our public partners."
    },
    {
      number: "02",
      title: "African Pragmatism",
      text: "We reject imported off-the-shelf templates. Our solutions are explicitly designed for the unique social, political, and technological landscapes of Africa."
    },
    {
      number: "03",
      title: "Technological Sovereignty",
      text: "We build systems that public institutions own and control fully, ensuring local capacity and digital resilience for the future."
    }
  ]

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-[#FAF7F2] text-[#0F0E13] relative">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(77,35,149,0.02) 0%, transparent 70%)" }} />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="mb-24 relative z-10 max-w-5xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <ZowaMotif size={14} color="#4D2395" />
          <span className="text-[#4D2395] font-semibold tracking-[0.2em] uppercase text-xs">About Zowa Advisory</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-instrument-serif mb-8 text-[#0F0E13] leading-[1.08]">
          Pioneering <span className="italic text-[#4D2395]">purpose-driven</span> <br /> public sector transformation.
        </h1>
        <p className="text-xl text-[#6E6B64] max-w-3xl leading-relaxed">
          We work closely with public sector institutions to elevate their capacity. Driven by human insight and robust data, we turn aspiration into alignment, potential into performance, and strategic insight into institutional impact.
        </p>
      </motion.div>

      {/* Main Narrative / Hero Image Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full aspect-[21/9] rounded-none overflow-hidden mb-32 bg-[#FAF6F0] border border-[#EAE5DB] shadow-sm"
      >
        <div className="absolute inset-0 bg-black/5 z-10" />
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
          alt="Collaboration inside Zowa Advisory room"
          className="w-full h-full object-cover grayscale opacity-90"
        />
      </motion.div>

      {/* Core Values Section */}
      <div className="mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#EAE5DB] pb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <ZowaMotif size={12} color="#4D2395" />
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#4D2395] font-bold">Our Philosophy</h2>
            </div>
            <h3 className="text-3xl font-instrument-serif text-[#0F0E13] leading-tight">
              Built on <span className="italic text-[#6E6B64]">unwavering</span> principles.
            </h3>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="space-y-4 bg-white p-6 border border-[#EAE5DB]">
                <span className="font-instrument-serif text-3xl text-[#4D2395]">{val.number}</span>
                <h4 className="text-lg font-bold text-[#0F0E13]">{val.title}</h4>
                <p className="text-[#5C5952] text-sm leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="mb-24 relative z-10">
        <div className="flex items-center justify-between mb-16 border-b border-[#EAE5DB] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ZowaMotif size={12} color="#4D2395" />
              <p className="text-[#4D2395] text-xs uppercase tracking-[0.2em] font-semibold">Core Capabilities</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-instrument-serif text-[#0F0E13]">
              Our <span className="italic text-[#6E6B64]">Offerings</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {offerings.map((item, index) => (
            <div key={index} className="group border-t border-[#EAE5DB] pt-8 hover:border-[#4D2395] transition-colors duration-500">
              <span className="text-[#4D2395] font-instrument-serif text-2xl mb-4 block">0{index + 1}</span>
              <h3 className="text-2xl font-bold mb-4 text-[#0F0E13] group-hover:text-[#4D2395] transition-colors duration-300">{item.title}</h3>
              <p className="text-[#5C5952] text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
