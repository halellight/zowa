"use client"

import { motion } from "framer-motion"
import { ZowaMotif } from "@/components/zowa-motif"
import { Check, ArrowRight, ShieldCheck, Users, TrendingUp, NotebookPen, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function AcademyPage() {
  const cohorts = [
    {
      number: "01",
      level: "Executive Cohort",
      audience: "Permanent Secretaries, Directors-General, Commissioners",
      tagline: "Strategic Governance & Institutional Alignment",
      description: "Elite, highly practical masterclasses addressing strategic narrative design, sector alignment, and operational accountability. Specifically designed for top-tier executives to set standard-setting governance roadmaps.",
      programs: [
        "Strategic Human Resource Management (Strategic HR) for MDAs",
        "Developing Advanced Leadership Competencies",
        "Internal Control Over Financial Reporting (ICFR)",
        "Digital-Era Policy Synergy & Narrative Alignment"
      ],
      metric: "Boardroom Case-Studies"
    },
    {
      number: "02",
      level: "Senior Management Cohort",
      audience: "Directors, Heads of Departments, Unit Chiefs",
      tagline: "Modern Leadership & Rigorous Oversight",
      description: "Equipping senior leaders with the frameworks required to drive digital initiatives, audit administrative efficiency, lead cross-functional teams, and establish institutional cultures of excellence.",
      programs: [
        "Becoming a High-Performance Manager",
        "Effective Auditing & Internal Control Systems",
        "Change Management & zero-trust security governance",
        "Performance Management & Modern KPIs"
      ],
      metric: "Immediate Agency Rollout"
    },
    {
      number: "03",
      level: "Mid-Level Implementation Cohort",
      audience: "Program Managers, ICT Leads, Technical Officers",
      tagline: "Execution, Interoperability & Evidence-Based Operations",
      description: "Hands-on implementation bootcamps focused on learning about data pipelines, analytics suites, and managing workflows, for seamless digital delivery.",
      programs: [
        "Practical Data Analytics & Visualizations for MDA Decision Making",
        "E-Governance Interoperability & API Infrastructures",
        "Operational Project Management & Compliance",
        "Managing Workplace Expectations & Cross-Functional Workflows"
      ],
      metric: "Hands-On Dashboard Labs"
    },
    {
      number: "04",
      level: "Junior Operations Cohort",
      audience: "Officers, Administrative Staff, Policy Analysts",
      tagline: "Efficiency, Modern Operations & Tech Proficiency",
      description: "Fast-paced bootcamps designed to transition paper-bound administrative teams into modern, digital-first operators, eliminating daily operational friction.",
      programs: [
        "Modern Workplace Expectations & Administrative Excellence",
        "Prompt Engineering & AI Tools for Daily Civil Service Operations",
        "Basic Data Analytics",
        "Modern Digital Communication Protocols & Administrative Writing"
      ],
      metric: "10x Team Performance Gain"
    }
  ]

  const practicalValue = [
    {
      icon: <NotebookPen className="w-5 h-5 text-[#4D2395]" />,
      title: "Immediate Application",
      desc: "Zero theoretical bloat. Participants work with real MDA cases, leaving with ready-to-deploy playbooks, spreadsheets, control guidelines, and strategic roadmaps."
    },
    {
      icon: <Users className="w-5 h-5 text-[#4D2395]" />,
      title: "Bespoke Cohorts",
      desc: "We align with each agency's specific functional mandates. Programs are contextualized around actual institutional bottlenecks, resources, and constraints."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#4D2395]" />,
      title: "Auditing & Controls Parity",
      desc: "Non-tech capabilities are deeply integrated: strategic HR, financial auditing, internal controls, and compliance procedures are baked into our programs."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#4D2395]" />,
      title: "Certified Recognition",
      desc: "Graduates join an elite network of modern public sector officers, certified under Zowa's advanced institutional competence frameworks."
    }
  ]

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-[#FAF7F2] text-[#0F0E13] relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(77,35,149,0.02) 0%, transparent 70%)" }} />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="mb-24 relative z-10 max-w-5xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <ZowaMotif size={14} color="#4D2395" />
          <span className="text-[#4D2395] font-semibold tracking-[0.2em] uppercase text-xs">Zowa Academy</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-instrument-serif mb-8 text-[#0F0E13] leading-[1.06]">
          Practical capacity building <br /> for <span className="italic text-[#4D2395]">high-performance</span> governance.
        </h1>
        <p className="text-xl text-[#6E6B64] max-w-3xl leading-relaxed">
          Direct, leveled training programs spanning management, auditing, strategic HR, and tech forward operations to turn aspiration into real, permanent institutional capacity.
        </p>
      </motion.div>

      {/* Cohorts Grid */}
      <div className="space-y-12 relative z-10 mb-32">
        <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#6E6B64] border-b border-[#EAE5DB] pb-4 mb-8">
          Targeted Programs by Career Level
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cohorts.map((cohort, index) => (
            <motion.div
              key={cohort.number}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-[#EAE5DB] p-8 md:p-10 group hover:border-[#4D2395] transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex justify-between items-center mb-8 border-b border-[#F5F2EC] pb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#4D2395] font-bold bg-[#F0EAFA] px-3 py-1.5 rounded-none">
                      {cohort.metric}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-instrument-serif text-[#0F0E13] mt-3 group-hover:text-[#4D2395] transition-colors">
                      {cohort.level}
                    </h3>
                  </div>
                  <span className="font-instrument-serif text-3xl md:text-4xl text-[#C4BCAF]">{cohort.number}</span>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-[#8B867A] uppercase tracking-wider">Ideal for:</p>
                  <p className="text-sm font-bold text-[#5C5952]">{cohort.audience}</p>
                </div>

                <p className="text-sm md:text-base text-[#6E6B64] leading-relaxed mb-8">
                  {cohort.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-[#F5F2EC]">
                  <p className="text-xs uppercase tracking-wider text-[#4D2395] font-bold">Practical Modules Include:</p>
                  <div className="grid grid-cols-1 gap-3">
                    {cohort.programs.map((prog, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#4D2395] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#5C5952] font-semibold">{prog}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Practical Value / Why People Show Up Section */}
      <section className="mb-32 relative z-10 border-t border-[#EAE5DB] pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <ZowaMotif size={12} color="#4D2395" />
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#4D2395] font-bold">Our Philosophy</h2>
            </div>
            <h3 className="text-3xl font-instrument-serif text-[#0F0E13] leading-tight">
              Why public sector professionals <span className="italic text-[#6E6B64]">actually show up.</span>
            </h3>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {practicalValue.map((val, idx) => (
              <div key={idx} className="space-y-4 bg-white p-8 border border-[#EAE5DB] shadow-sm">
                <div className="w-10 h-10 border border-[#EAE5DB] bg-[#FAF7F2] flex items-center justify-center">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-[#0F0E13]">{val.title}</h4>
                <p className="text-[#5C5952] text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Call to Action Box */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-12 bg-white border border-[#EAE5DB] rounded-none flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10 overflow-hidden shadow-sm"
      >
        <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 opacity-[0.02] pointer-events-none text-[#4D2395]">
          <ZowaMotif size={350} color="#4D2395" />
        </div>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-instrument-serif mb-4 text-[#0F0E13] leading-tight">
            Deploy a custom cohort for your Ministry or Agency.
          </h3>
          <p className="text-[#5C5952] text-base">
            We partner directly with MDAs to contextualize syllabi around local operational challenges, internal control audits, or core leadership competencies.
          </p>
        </div>
        <Link href="/contact" className="shrink-0">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 bg-[#4D2395] hover:bg-[#3C1371] text-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer rounded-none"
          >
            Request Program Outline
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}
