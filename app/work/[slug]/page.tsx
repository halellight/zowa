import { notFound } from "next/navigation"
import { ZowaMotif } from "@/components/zowa-motif"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projects = {
  "monisight": {
    title: "Monisight",
    client: "Perception & Financial Intelligence",
    category: "Data-Driven Workflows",
    problem: "Financial transparency and transaction tracking are notoriously opaque inside public sector ecosystems. Citizens and analysts lacked clear, standardized, real-time mechanisms to monitor budget executions and analyze public expenditures, leading to systemic opacity and public distrust.",
    solution: "We designed and engineered Monisight, a high-performance perception monitoring and transaction data-visualizer. Using premium financial data pipelines and clean graphic engines, Monisight converts complex fiscal databases into accessible public literacy metrics, enabling citizens to gauge budget execution transparency in real-time.",
    impact: ["1.2M+ Scans", "36 States Mapped", "Real-Time Feeds"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    year: "2024"
  },
  "consilo": {
    title: "Consilo",
    client: "Digital Experience Engineering",
    category: "Institutional Transformation",
    problem: "Modern institutions frequently suffer from generic, uninspired, and highly 'AI-ish' digital presences. These templates lack distinctive aesthetic polish, custom engineering integrity, and narrative elegance, reducing brand authority and failing to engage key stakeholders.",
    solution: "Consilo operates as Praise Ibe's elite digital experience and brand engineering studio. We co-created custom visual design systems and engineered bespoke responsive architectures for high-end corporate and institutional clients, prioritizing pixel-perfect custom visual interfaces, swift page performance, and executive brand authority.",
    impact: ["25+ Brands Scaled", "High Aesthetics", "Zero Tech Downtime"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    year: "2025"
  },
  "awujo": {
    title: "Àwùjọ",
    client: "Civic Dialogue & Collaboration Network",
    category: "Strategic Advisory & Policy",
    problem: "Elected officials, ministries, and regulatory bodies frequently operate inside administrative silos, detached from immediate feedback from the communities they govern. Traditional feedback channels are analogue, slow, and highly subject to misrepresentation or administrative loss.",
    solution: "We developed Àwùjọ, a collaborative citizen feedback and engagement ecosystem. Àwùjọ securely gathers, cleans, and aggregates citizen input directly for key public institutions (MDAs). This establishes a real-time, responsive channel for democratic consensus, policy dialogue, and governance alignment.",
    impact: ["650K+ Feedbacks", "5 MDAs Engaged", "92% Policy Alignment"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    year: "2024"
  },
  "naija-elections": {
    title: "Naija Elections",
    client: "Democratic Voter Mobilization Hub",
    category: "E-Governance Architecture",
    problem: "Voter apathy, candidate opacity, and digital misinformation present significant obstacles to digital-era democratic elections. Before elections, citizens struggled to find structured candidate comparisons, voter registration guides, and centralized, untampered ballot data trackers.",
    solution: "We engineered Naija Elections, a premier civic hub for voter education and real-time election analytics. The platform aggregates voter diagnostics, live election coverage, and candidate profiles to empower data-driven civic choices and connect voters directly with political manifestos.",
    impact: ["2.4M+ Voter Profiles", "Live Coverage", "300% Engagement"],
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070&auto=format&fit=crop",
    year: "2023"
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = projects[resolvedParams.slug as keyof typeof projects]
  
  if (!project) {
    notFound()
  }

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-[#FAF7F2] text-[#0F0E13] relative">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(77,35,149,0.02) 0%, transparent 70%)" }} />

      {/* Back button */}
      <div className="mb-12 relative z-10">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6E6B64] hover:text-[#4D2395] transition-colors cursor-pointer group font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
      </div>

      {/* Header section */}
      <div className="mb-16 relative z-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <ZowaMotif size={14} color="#4D2395" />
          <span className="text-[#4D2395] font-semibold tracking-[0.2em] uppercase text-xs">
            {project.category}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-instrument-serif mb-6 text-[#0F0E13] leading-tight">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-[#6E6B64] font-semibold">
          {project.client} — <span className="text-[#4D2395] italic">{project.year}</span>
        </p>
      </div>

      {/* Image */}
      <div className="w-full aspect-[21/9] rounded-none overflow-hidden mb-24 bg-[#FAF6F0] border border-[#EAE5DB] relative z-10 shadow-sm">
        <div className="absolute inset-0 bg-black/5 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0" 
        />
      </div>

      {/* Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-24 relative z-10 border-b border-[#EAE5DB] pb-20">
        <div className="bg-red-500/5 border border-red-500/10 p-8 md:p-10 rounded-none">
          <div className="flex items-start gap-3 mb-6">
            <ZowaMotif size={10} color="#ef4444" className="mt-0.5" />
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-red-650 font-bold mb-1">The Challenge</h2>
              <span className="text-[10px] text-[#6E6B64] tracking-wider uppercase font-semibold">Institutional Obstacles</span>
            </div>
          </div>
          <p className="text-[#5C5952] text-base md:text-lg leading-relaxed">{project.problem}</p>
        </div>
        <div className="bg-emerald-500/5 border border-emerald-500/10 p-8 md:p-10 rounded-none">
          <div className="flex items-start gap-3 mb-6">
            <ZowaMotif size={10} color="#10b981" className="mt-0.5" />
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-emerald-650 font-bold mb-1">Our Approach</h2>
              <span className="text-[10px] text-[#6E6B64] tracking-wider uppercase font-semibold">Custom Strategy & Engineering</span>
            </div>
          </div>
          <p className="text-[#5C5952] text-base md:text-lg leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Impact */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-12">
          <ZowaMotif size={12} color="#4D2395" />
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#4D2395] font-bold">Outcome & Impact</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:divide-x md:divide-[#EAE5DB]">
          {project.impact.map((metric, idx) => {
            const parts = metric.split(" ")
            const num = parts[0]
            const text = parts.slice(1).join(" ")
            return (
              <div key={idx} className="md:px-8 first:pl-0">
                <span className="block font-instrument-serif text-5xl md:text-6xl text-[#0F0E13] mb-3">
                  {num}
                </span>
                <span className="text-[#6E6B64] text-base leading-relaxed font-semibold">
                  {text}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
