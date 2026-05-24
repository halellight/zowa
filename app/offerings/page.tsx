"use client"

import { motion } from "framer-motion"
import { ZowaMotif } from "@/components/zowa-motif"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OfferingsPage() {
  const offerings = [
    {
      number: "01",
      title: "Strategic Advisory & Policy",
      tagline: "Shaping national digital frameworks",
      description: "We advise ministers, permanent secretaries, and policymakers on tech policy, sustainable digitization strategies, AI frameworks, and cross-border digital governance initiatives.",
      benefits: [
        "National technology blueprints",
        "E-Governance adoption frameworks",
        "Strategic policy advisory & alignment",
        "Regulatory impact assessments"
      ]
    },
    {
      number: "02",
      title: "E-Governance Architecture",
      tagline: "Robust infrastructure for citizens",
      description: "We architect secure, scalable, and highly available national digital portals, transactional systems, identity architectures, and digital public infrastructure.",
      benefits: [
        "Digital Public Infrastructure (DPI)",
        "Interoperability framework design",
        "Citizen service portals & workflow engines",
        "Enterprise architecture plans"
      ]
    },
    {
      number: "03",
      title: "Institutional Culture & Change",
      tagline: "People first, technology second",
      description: "We lead deep cultural transformation programs to transition public sector teams from status-quo paper processes to high-performing digital work cultures.",
      benefits: [
        "Custom digital academy programs",
        "Change readiness assessments",
        "Workflow simplification training",
        "Modern administrative playbooks"
      ]
    },
    {
      number: "04",
      title: "Data-Driven Workflows",
      tagline: "Empowering evidence-based decisions",
      description: "We untangle fragmented data systems to implement robust data pipelines, analytics suites, and modern visualizations that drive government budget accountability.",
      benefits: [
        "AI-categorized analytics engines",
        "Accountability dashboard design",
        "Predictive resource planning suites",
        "Data hygiene & ingestion pipelines"
      ]
    }
  ]

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-[#FAF7F2] text-[#0F0E13] relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(77,35,149,0.02) 0%, transparent 70%)" }} />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="mb-24 relative z-10 max-w-5xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <ZowaMotif size={14} color="#4D2395" />
          <span className="text-[#4D2395] font-semibold tracking-[0.2em] uppercase text-xs">Capabilities & Expertise</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-instrument-serif mb-8 text-[#0F0E13] leading-[1.06]">
          Comprehensive offerings <br/> for <span className="italic text-[#4D2395]">institutional</span> modernization.
        </h1>
        <p className="text-xl text-[#6E6B64] max-w-3xl leading-relaxed">
          We combine premium strategic methodologies with deep engineering execution to deliver permanent, structural improvements inside public institutions.
        </p>
      </motion.div>

      {/* Grid List of Offerings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {offerings.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-t border-[#EAE5DB] pt-10 flex flex-col justify-between group hover:border-[#4D2395] transition-colors duration-500 h-full bg-white p-8 border-x border-b shadow-sm rounded-none"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-instrument-serif text-3xl text-[#4D2395]">{item.number}</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E6B64]">{item.tagline}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0F0E13] group-hover:text-[#4D2395] transition-colors duration-350">
                {item.title}
              </h3>
              
              <p className="text-[#5C5952] text-sm md:text-base leading-relaxed mb-8">
                {item.description}
              </p>
            </div>

            <div className="space-y-3 border-t border-[#EAE5DB] pt-6 mt-auto">
              <p className="text-xs uppercase tracking-wider text-[#4D2395] font-bold mb-3">Key Focus Areas:</p>
              {item.benefits.map((benefit, bIndex) => (
                <div key={bIndex} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#4D2395] shrink-0" />
                  <span className="text-sm text-[#5C5952] font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════
          ZOWA ACADEMY TEASER BLOCK
      ══════════════════════════════════════════════════════════ */}
      <section className="mt-32 pt-20 border-t border-[#EAE5DB] relative z-10">
        <div className="bg-white border border-[#EAE5DB] p-8 md:p-14 relative overflow-hidden shadow-sm">
          {/* Ambient glow inside card */}
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.01] pointer-events-none text-[#4D2395]">
            <ZowaMotif size={300} color="#4D2395" />
          </div>
          
          <div className="max-w-4xl relative z-10">
            <div className="flex items-center gap-2.5 mb-6">
              <ZowaMotif size={12} color="#4D2395" />
              <p className="text-[#4D2395] text-xs font-semibold tracking-[0.2em] uppercase">Zowa Academy</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-[#0F0E13] mb-6">
              Elite MDA Capacity Development & <span className="italic text-[#6E6B64]">Practical Training.</span>
            </h2>
            
            <p className="text-[#6E6B64] text-lg md:text-xl leading-relaxed mb-8">
              We don't just deliver advice—we build permanent administrative capacity. Zowa Academy conducts highly targeted, practical training programs designed specifically for MDA staff at all levels—from Junior Officers to Permanent Secretaries and Directors-General.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 border-t border-[#F5F2EC] pt-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#4D2395] font-bold mb-3">Management & Leadership</p>
                <p className="text-[#5C5952] text-sm leading-relaxed">
                  Practical Strategic HR, developing leadership competencies, high-performance management courses, and organizational change frameworks.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#4D2395] font-bold mb-3">Controls, Audits & Tech</p>
                <p className="text-[#5C5952] text-sm leading-relaxed">
                  Internal controls over financial reporting, auditing structures, practical data analytics, and prompt engineering bootcamps.
                </p>
              </div>
            </div>
            
            <Link href="/academy">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-[#4D2395] hover:bg-[#3C1371] text-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer rounded-none"
              >
                Explore Zowa Academy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-32 p-12 bg-white border border-[#EAE5DB] rounded-none flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10 overflow-hidden shadow-sm"
      >
        <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 opacity-[0.02] pointer-events-none text-[#4D2395]">
          <ZowaMotif size={350} color="#4D2395" />
        </div>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-instrument-serif mb-4 text-[#0F0E13] leading-tight">
            Have a project or strategic mandate in mind?
          </h3>
          <p className="text-[#5C5952] text-base">
            Let's discuss how Zowa Advisory can partner with your ministry or agency to guide your digitization roadmap.
          </p>
        </div>
        <Link href="/contact" className="shrink-0">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 bg-[#4D2395] hover:bg-[#3C1371] text-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer rounded-none"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}
