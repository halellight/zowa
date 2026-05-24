"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react"
import Link from "next/link"
import { ZowaMotif } from "@/components/zowa-motif"
import { InsightCard } from "@/components/insight-card"

// ─── Animated counter ─────────────────────────────────────────────
function useCounter(end: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const dur = 1800
    const timer = setInterval(() => {
      const p = Math.min((Date.now() - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * end))
      if (p >= 1) { setCount(end); clearInterval(timer) }
    }, 16)
    return () => clearInterval(timer)
  }, [end, active])
  return count
}

function StatItem({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const count = useCounter(value, inView)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col gap-2 py-10 md:px-10"
    >
      <span className="text-5xl md:text-6xl font-instrument-serif text-[#0F0E13] leading-none">
        {count}<span className="text-[#4D2395]">{suffix}</span>
      </span>
      <span className="text-[10px] text-[#6E6B64] font-bold uppercase tracking-[0.2em]">{label}</span>
    </motion.div>
  )
}

// ─── Data ──────────────────────────────────────────────────────────
const marqueeItems = [
  "Strategic Advisory", "Digital Governance", "AI & Policy",
  "E-Governance", "Institutional Reform", "Data Workflows",
  "Public Sector Innovation", "Voter Mobilization", "Perception Monitoring",
]

const services = [
  { n: "01", title: "Strategic Advisory & Policy", desc: "We advise ministers and policymakers on national tech frameworks, AI adoption, and citizen engagement strategies to future-proof governance." },
  { n: "02", title: "E-Governance Architecture", desc: "We design and implement scalable, secure digital platforms that streamline public service delivery and reduce bureaucratic friction." },
  { n: "03", title: "Institutional Culture & Change", desc: "Technology is only half the equation. We guide public institutions through the cultural shifts required for successful digital adoption." },
  { n: "04", title: "Data-Driven Workflows", desc: "We transform fragmented data into actionable intelligence, allowing governments to make evidence-based decisions in real-time." },
]

const processSteps = [
  { n: "01", title: "Diagnose", desc: "We embed with your institution to understand the real challenges — political, structural, and technical — before prescribing anything." },
  { n: "02", title: "Architect", desc: "We co-design frameworks, platforms, and roadmaps built for African institutional realities, not imported templates." },
  { n: "03", title: "Execute", desc: "We stay through implementation — training teams, managing rollout, and measuring real-world impact against defined outcomes." },
]

const caseStudies = [
  {
    title: "Monisight", client: "Perception & Financial Intelligence", category: "Data-Driven Workflows",
    description: "Engineered a state-of-the-art public perception monitoring and financial transaction intelligence platform, enabling citizens to gauge budget execution transparency and build financial literacy.",
    results: ["1.2M+ Scans", "36 States Mapped", "Real-Time Feeds"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", year: "2024", slug: "monisight",
  },
  {
    title: "Consilo", client: "Digital Experience Engineering", category: "Institutional Transformation",
    description: "Launched a boutique strategic digital design and brand engineering engine, specializing in crafting highly aesthetic, responsive, and functional systems for premier institutions.",
    results: ["25+ Brands scaled", "High Aesthetics", "Zero Downtime"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop", year: "2025", slug: "consilo",
  },
  {
    title: "Àwùjọ", client: "Civic Dialogue & Collaboration Network", category: "Strategic Advisory & Policy",
    description: "Created a collaborative citizen feedback and engagement ecosystem for MDAs, building institutional bridges to strengthen community participation and governance alignment.",
    results: ["650K+ Feedbacks", "5 MDAs Engaged", "92% Alignment"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", year: "2024", slug: "awujo",
  },
  {
    title: "Naija Elections", client: "Democratic Voter Mobilization Hub", category: "E-Governance Architecture",
    description: "Designed Nigeria's leading voter education repository and live election tracker, giving millions of citizens real-time access to candidate diagnostics and structural voting benchmarks.",
    results: ["2.4M+ Voter Profiles", "Live Feeds", "300% Engagement"],
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070&auto=format&fit=crop", year: "2023", slug: "naija-elections",
  },
]

const zowaAdvantages = [
  "Senior-led, embedded engagements",
  "Deep African institutional expertise",
  "High aesthetics & exact engineering",
  "End-to-end delivery & accountability",
  "Bespoke solutions, not templates",
]
const othersDisadvantages = [
  "Junior consultants, senior billing",
  "Generic global playbooks",
  "Technology-agnostic approach",
  "Deliverables only, not outcomes",
  "One-size-fits-all frameworks",
]

const insights = [
  { slug: "future-of-african-digital-governance", category: "Digital Governance", title: "The Future of African Digital Governance: Moving Beyond E-Government to Intelligent Statecraft", readTime: "8 min read", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" },
  { slug: "responsible-ai-transformation", category: "Artificial Intelligence", title: "With Great Power: Guiding Responsible AI Transformation in MDAs", readTime: "12 min read", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" },
]

// ─── Page ─────────────────────────────────────────────────────────
export default function ZowaPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const motifRotate = useTransform(scrollYProgress, [0, 1], [0, 60])
  const motifY = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden bg-[#FAF7F2]"
      >
        {/* Ambient brand glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(77,35,149,0.03) 0%, transparent 70%)" }} />
        </div>

        {/* Structured Grid lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(77,35,149,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(77,35,149,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        {/* Sharp rotating background motif */}
        <motion.div
          className="absolute right-[-8%] md:right-[2%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none text-[#4D2395]"
          style={{ rotate: motifRotate, y: motifY }}
        >
          <ZowaMotif size={700} color="#4D2395" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-36 pb-28 md:pt-44 md:pb-36">
          {/* Badge */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* <ZowaMotif size={14} color="#4D2395" /> */}
            {/* <span className="text-[#4D2395] text-xs font-semibold tracking-[0.25em] uppercase">
              Boutique Public Sector Consulting
            </span> */}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-instrument-serif leading-[1.04] mb-10 text-[#0F0E13] max-w-5xl"
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Transforming Africa's public institutions for the{" "}
            <span className="text-[#4D2395] italic">digital age.</span>
          </motion.h1>

          {/* Sub + CTAs */}
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-start md:items-center"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-base md:text-lg text-[#6E6B64] leading-relaxed max-w-lg">
              We help ambitious governments across Africa solve complex development challenges through intelligent strategy, robust e-governance systems, and high-aesthetic design.
            </p>
            <div className="flex items-center gap-6 shrink-0">
              <Link href="/contact">
                <motion.button
                  className="group flex items-center gap-3 bg-[#4D2395] hover:bg-[#3C1371] text-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/work" className="text-xs uppercase tracking-[0.18em] font-bold text-[#6E6B64] hover:text-[#0F0E13] transition-colors border-b-2 border-[#EAE5DB] hover:border-[#4D2395] pb-1 cursor-pointer">
                Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-[#4D2395] to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════════════════════ */}
      <div className="bg-[#F5F2EC] border-y border-[#EAE5DB] py-5 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, rep) => (
            <div key={rep} className="flex items-center gap-12 shrink-0">
              {marqueeItems.map((item, i) => (
                <span key={`${rep}-${i}`} className="flex items-center gap-12">
                  <span className="text-[#6E6B64] text-[10px] font-bold tracking-[0.25em] uppercase">{item}</span>
                  <ZowaMotif size={10} color="#FAF7F2" className="bg-[#E5DFC8] p-0.5" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-4 px-6 md:px-12 bg-[#FAF7F2] border-b border-[#EAE5DB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#EAE5DB]">
            <StatItem value={36} suffix="+" label="States Covered" delay={0} />
            <StatItem value={15} suffix="+" label="MDAs Connected" delay={0.1} />
            <StatItem value={25} suffix="+" label="Premium Brands scaled" delay={0.2} />
            <StatItem value={4} suffix="" label="Active Platforms" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SELECTED WORK
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <ZowaMotif size={12} color="#4D2395" />
                <p className="text-[#4D2395] text-xs font-semibold tracking-[0.2em] uppercase">Selected Work</p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-[#0F0E13]">
                Impact driven <br />by <span className="italic text-[#6E6B64] ">purpose.</span>
              </h2>
            </div>
            <Link href="/work" className="text-xs uppercase tracking-[0.18em] font-bold text-[#6E6B64] hover:text-[#0F0E13] border-b border-[#C4BCAF] hover:border-[#4D2395] transition-colors pb-1 shrink-0 cursor-pointer">
              View All Case Studies
            </Link>
          </motion.div>

          <div className="flex flex-col gap-0">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <Link href={`/work/${study.slug}`} className="block group border-t border-[#EAE5DB] py-10 md:py-14 hover:bg-white/40 transition-all duration-300 px-0 md:-mx-4 md:px-4 rounded-none">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-1">
                      <span className="font-instrument-serif text-4xl text-[#C4BCAF] group-hover:text-[#4D2395] transition-colors">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-[#4D2395] text-xs font-bold tracking-[0.2em] uppercase mb-3">{study.category}</p>
                      <h3 className="font-instrument-serif text-3xl md:text-4xl text-[#0F0E13] mb-2 group-hover:text-[#4D2395] transition-colors">{study.title}</h3>
                      <p className="text-[#6E6B64] text-xs uppercase tracking-wider">{study.client} — {study.year}</p>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-[#5C5952] text-sm md:text-base leading-relaxed">{study.description}</p>
                    </div>
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
                    <div className="md:col-span-1 flex justify-end items-center h-full">
                      <motion.div
                        className="w-10 h-10 border border-[#EAE5DB] rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#4D2395] group-hover:bg-[#4D2395] transition-all duration-300"
                      >
                        <ArrowUpRight className="w-4 h-4 text-[#4D2395] group-hover:text-white transition-colors" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-[#EAE5DB]" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <ZowaMotif size={12} color="#4D2395" />
              <p className="text-[#4D2395] text-xs font-semibold tracking-[0.2em] uppercase">Capabilities</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-[#0F0E13] max-w-2xl">
              How can we <span className="italic text-[#6E6B64]">help you?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#EAE5DB] border border-[#EAE5DB]">
            {services.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FAF7F2] p-10 md:p-14 group hover:bg-[#FAF6F0] transition-colors duration-300 rounded-none"
              >
                <span className="block font-instrument-serif text-5xl text-[#C4BCAF] group-hover:text-[#4D2395] transition-colors mb-8">{s.n}</span>
                <h3 className="text-xl md:text-2xl font-bold text-[#0F0E13] mb-4 group-hover:text-[#4D2395] transition-colors">{s.title}</h3>
                <p className="text-[#5C5952] text-sm md:text-base leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOW WE WORK
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <ZowaMotif size={12} color="#4D2395" />
              <p className="text-[#4D2395] text-xs font-semibold tracking-[0.2em] uppercase">Our Process</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-[#0F0E13] max-w-2xl">
              Our simple 3-step process to{" "}
              <span className="italic text-[#6E6B64] ">drive impact.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EAE5DB] border border-[#EAE5DB]">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#FAF6F0] p-10 md:p-12 group hover:bg-[#FAF7F2] transition-colors duration-300 rounded-none"
              >
                <span className="block font-instrument-serif text-6xl text-[#C4BCAF] group-hover:text-[#4D2395] transition-colors mb-8">{step.n}</span>
                <h3 className="text-2xl font-bold text-[#0F0E13] mb-4">{step.title}</h3>
                <p className="text-[#5C5952] text-sm md:text-base leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMPARISON
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#FAF7F2] border-y border-[#EAE5DB]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <ZowaMotif size={12} color="#4D2395" />
              <p className="text-[#4D2395] text-xs font-semibold tracking-[0.2em] uppercase">Why Zowa</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-instrument-serif text-[#0F0E13]">
              Why would you want to <span className="italic text-[#6E6B64]">work with us?</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Others */}
            <div className="bg-white p-10 md:p-14 border border-[#EAE5DB]">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#6E6B64] mb-8">Other Agencies</p>
              <ul className="space-y-4">
                {othersDisadvantages.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-none border border-[#EAE5DB] bg-[#F5F2EC] flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-[#6E6B64]" />
                    </div>
                    <span className="text-[#6E6B64] text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Zowa */}
            <div className="bg-[#F0EAFA]/80 p-10 md:p-14 border border-[#D2C5EA]">
              <div className="flex items-center gap-3 mb-8">
                <ZowaMotif size={16} color="#4D2395" />
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4D2395]">Zowa Advisory</p>
              </div>
              <ul className="space-y-4">
                {zowaAdvantages.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-none bg-[#4D2395] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#0F0E13] text-base font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THINKING
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <ZowaMotif size={12} color="#4D2395" />
                <p className="text-[#4D2395] text-xs font-semibold tracking-[0.2em] uppercase">Thinking</p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-[#0F0E13]">
                Strategic <span className="italic text-[#6E6B64] ">sparks.</span>
              </h2>
            </div>
            <Link href="/thinking" className="text-xs uppercase tracking-[0.18em] font-bold text-[#6E6B64] hover:text-[#0F0E13] border-b border-[#C4BCAF] hover:border-[#4D2395] transition-colors pb-1 shrink-0 cursor-pointer">
              View All Reports
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 border-t border-[#EAE5DB] pt-16">
            {insights.map((insight, i) => (
              <InsightCard
                key={i}
                category={insight.category}
                title={insight.title}
                readTime={insight.readTime}
                image={insight.image}
                delay={i * 0.15}
                slug={insight.slug}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
