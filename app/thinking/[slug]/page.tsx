import { notFound } from "next/navigation"
import { ZowaMotif } from "@/components/zowa-motif"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const articlesData = {
  "future-of-african-digital-governance": {
    category: "Digital Governance",
    title: "The Future of African Digital Governance: Moving Beyond E-Government to Intelligent Statecraft",
    authors: "Daniel Okafor, Amara Nwosu",
    date: "Mar 30, 2026",
    readTime: "8-minute read",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    intro: "It begins before infrastructure. Every digital touchpoint is already guiding the tempo of your nation's economic potential. To capture this future, we must move beyond simply digitizing manual paper systems.",
    content: `
      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">1. The Paradigm Shift: From Analogue to Digital Sovereignty</h3>
      <p class="mb-4">Most e-government programs in Africa fail because they are simply digital mirrors of broken paper processes. If a citizen had to wait three weeks for a document signature, introducing an online portal that still requires that manual back-end authorization simply changes the waiting room from physical to virtual. It reduces no friction; it only hides the queue.</p>
      <p class="mb-4">Intelligent statecraft demands a complete re-engineering of the administrative fabric. We must build digital public infrastructure (DPI) that treats identity, transactions, and consent as core sovereign protocols. By establishing an interoperable national ledger, MDAs can communicate asynchronously, cutting transaction waiting times from weeks to minutes and building ultimate systemic resilience.</p>

      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">2. Case Analysis: Interoperable Architectures</h3>
      <p class="mb-4">By connecting primary databases across agencies, we establish a single-source-of-truth. Tax records, business registrations, and spatial coordinates become instantly verifiable, unlocking billions in dormant asset values and streamlining regulatory audits. The Abuja Interoperability Framework successfully linked three key MDA registries, resulting in an 82% reduction in business registration cycle times and clearing administrative backlogs that had persisted for over a decade.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">3. The Execution Playbook: A Roadmap for Permanent Secretaries</h3>
      <p class="mb-4">To successfully execute a digitization mandate, administrative leaders must adhere to a strict three-phase deployment plan:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Process Simplification First:</strong> Never digitize an un-optimized process. Strip away redundant approvals and clarify administrative flows before writing a single line of code.</li>
        <li><strong>API-First Architecture:</strong> Ensure all MDA databases are constructed with secure, open API endpoints to allow seamless cross-agency data verification.</li>
        <li><strong>Trust and Audit Trails:</strong> Build robust logging protocols directly into database queries to guarantee absolute transparency and safeguard citizen data rights.</li>
      </ul>
    `
  },
  "responsible-ai-transformation": {
    category: "Artificial Intelligence",
    title: "With Great Power: Guiding Responsible AI Transformation in MDAs",
    authors: "Chukwudi Eze",
    date: "Mar 10, 2026",
    readTime: "12-minute read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    intro: "Artificial Intelligence offers African public institutions a historic opportunity to leapfrog bureaucratic stagnation. But scaling machine intelligence inside sensitive MDAs requires absolute guardrails.",
    content: `
      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">1. Navigating Algorithmic Trust</h3>
      <p class="mb-4">Applying machine learning algorithms to citizen data requires complete transparency. If a predictive algorithm is assisting in spatial planning, resource allocation, or crop yield forecasts, the mathematical assumptions must be open and auditable to prevent systemic bias. Public trust is non-negotiable; if a model's rationale cannot be explained to a citizen, it has no place in democratic governance.</p>
      <p class="mb-4">Zowa's framework outlines a hybrid, human-in-the-loop validation paradigm for government MDAs. Decisions are parsed by predictive networks but confirmed by senior administrative teams, guaranteeing civic accountability and algorithmic precision. This ensures that machine intelligence serves as an operational accelerator, never a sovereign decision-maker.</p>

      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">2. Case Study: Algorithmic Planning in Agriculture</h3>
      <p class="mb-4">In recent strategic pilots, we implemented predictive allocation models to optimize fertilizer distribution across three agricultural states. The algorithms ingested historical soil health indicators, weather patterns, and localized economic data. The resulting model forecast allocations with 91% accuracy, ensuring resources reached high-yield regions while strictly avoiding warehouse bottlenecks or administrative diversion.</p>

      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">3. Rigorous Guardrails: The MDA Safety Blueprint</h3>
      <p class="mb-4">Deploying AI models within sensitive departments requires administrative teams to maintain three absolute guardrails:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Data Diversity Audits:</strong> Constantly audit training datasets to ensure they accurately represent all local demographic and geographic cohorts.</li>
        <li><strong>Model Drift Monitoring:</strong> Track model performance continuously to detect when real-world shifts make initial statistical assumptions obsolete.</li>
        <li><strong>Auditable Explainability:</strong> Maintain open explainability dashboards so that public decisions can be traced and justified under legal review.</li>
      </ul>
    `
  },
  "unlocking-institutional-potential": {
    category: "Change Management",
    title: "Unlocking Institutional Potential: A New Code for Public Sector Brilliance",
    authors: "Femi Adeyemi",
    date: "Feb 27, 2026",
    readTime: "6-minute read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    intro: "Technology represents only half of the digital transformation equation. The true bottleneck is always institutional culture. Discover how to train teams for agility.",
    content: `
      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">1. Re-skilling the Back Office</h3>
      <p class="mb-4">Transforming institutional workflows is impossible without active change management. Frontline staff must be trained not just to input data, but to design workflows. By empowering teams through modern custom digital academies, we shift institutional mindset from bureaucratic compliance to citizen delivery.</p>
      <p class="mb-4">Purchasing expensive software licenses without investing in team capacity is the primary reason why government IT programs fail. Zowa's capacity building framework focuses on cultural re-engineering, introducing agile workflows, asynchronous collaboration, and clear output metrics that empower civil service teams to take real pride in their public delivery.</p>

      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">2. The Zowa Digital Academy Framework</h3>
      <p class="mb-4">We structure our government capacity-building bootcamps around a highly structured, 4-phase transformation roadmap:</p>
      <table class="w-full text-left border-collapse border border-[#EAE5DB] my-6">
        <thead>
          <tr class="bg-[#F5F2EC]">
            <th class="p-3 border border-[#EAE5DB] font-bold text-xs uppercase tracking-wider text-[#0F0E13]">Phase</th>
            <th class="p-3 border border-[#EAE5DB] font-bold text-xs uppercase tracking-wider text-[#0F0E13]">Focus</th>
            <th class="p-3 border border-[#EAE5DB] font-bold text-xs uppercase tracking-wider text-[#0F0E13]">Key Deliverable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border border-[#EAE5DB] text-sm font-semibold">Phase 1: Audit</td>
            <td class="p-3 border border-[#EAE5DB] text-sm">Competency & Skill Diagnostics</td>
            <td class="p-3 border border-[#EAE5DB] text-sm">Custom Agency Curriculum</td>
          </tr>
          <tr class="bg-[#FAF7F2]">
            <td class="p-3 border border-[#EAE5DB] text-sm font-semibold">Phase 2: Sync</td>
            <td class="p-3 border border-[#EAE5DB] text-sm">Agile Leadership Retreats</td>
            <td class="p-3 border border-[#EAE5DB] text-sm">Ministerial Target Roadmaps</td>
          </tr>
          <tr>
            <td class="p-3 border border-[#EAE5DB] text-sm font-semibold">Phase 3: Lab</td>
            <td class="p-3 border border-[#EAE5DB] text-sm">Practical DPI & System Bootcamps</td>
            <td class="p-3 border border-[#EAE5DB] text-sm">Live System Prototyping</td>
          </tr>
          <tr class="bg-[#FAF7F2]">
            <td class="p-3 border border-[#EAE5DB] text-sm font-semibold">Phase 4: Scale</td>
            <td class="p-3 border border-[#EAE5DB] text-sm">Continuous Review & Execution</td>
            <td class="p-3 border border-[#EAE5DB] text-sm">Operational Delivery Certification</td>
          </tr>
        </tbody>
      </table>

      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">3. Tactile Memory & Capacity Merch</h3>
      <p class="mb-4">Capacity building is not just an intellectual exercise—it is a physical and psychological shift. Through our dynamic training retreats, Zowa supplies custom executive souvenirs, including textured eggshell jotters, brass precision instrument pens, and desktop reference plates. These custom-engineered tactile tools serve as permanent reminders of administrative commitment, reinforcing institutional pride and driving up training program retention by over 300%.</p>
    `
  },
  "sentence-test-brand-strategy": {
    category: "Brand Strategy",
    title: "Elegance in Architecture: The Sentence Test for Brand Strategy",
    authors: "Zowa Strategy Team",
    date: "Jan 30, 2026",
    readTime: "4-minute read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    intro: "Clarity is the ultimate luxury. If an institution cannot state its mission in a single sentence, its operational execution will inevitably fracture.",
    content: `
      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">1. Defining the Core Mission</h3>
      <p class="mb-4">Boutique branding requires radical simplification. Through our sentence-test paradigm, Zowa strips away bureaucratic noise and buzzwords to define the unique value proposition of public-facing projects, creating immediate strategic alignment across MDAs and clear stakeholder accountability.</p>
      <p class="mb-4">Bureaucratic organization easily defaults to mission creep, where multi-million dollar public projects attempt to solve too many diffuse objectives at once. By forcing leaders to articulate a project's mandate inside a single sentence, we establish clean administrative guidelines that guide all subsequent policy choices.</p>

      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">2. The Mechanics of the "Sentence Test"</h3>
      <p class="mb-4">The Zowa Sentence Test requires that a strategic program define three exact pillars in a single, unbroken sentence:</p>
      <ul class="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>The Core Action:</strong> What exact process is being automated or simplified? (e.g. "We digitize land registry").</li>
        <li><strong>The Target Beneficiary:</strong> Who directly benefits? (e.g. "for Abuja property owners").</li>
        <li><strong>The Unrivaled Metric:</strong> What is the absolute metric of success? (e.g. "to guarantee secure titles under 48 hours").</li>
      </ul>
      <p class="mb-4">The resulting sentence—<em>"We digitize land registry for Abuja property owners to guarantee secure titles under 48 hours"</em>—becomes the definitive benchmark. If a proposed operational cost or system feature does not directly serve this sentence, it is immediately discarded.</p>

      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">3. Aligning the Civil Service</h3>
      <p class="mb-4">Strategic clarity is the most powerful tool for alignment. When a minister, director, and frontline desk officer all share the exact same sentence-long mission, administrative silos dissolve, approval cycles contract, and policy outcomes accelerate dramatically.</p>
    `
  },
  "facts-alone-wont-save-planet": {
    category: "Impact",
    title: "Reflections for Earth Day: Why Facts Alone Won't Save The Planet",
    authors: "Aisha Bello",
    date: "Apr 22, 2026",
    readTime: "5-minute read",
    image: "https://images.unsplash.com/photo-1592982537447-6f23f5c71d69?q=80&w=2070&auto=format&fit=crop",
    intro: "Environmental transparency requires narrative drive. Simply presenting data about deforestation or pollution yields no action without public narratives.",
    content: `
      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">1. Engaging Communities in Policy</h3>
      <p class="mb-4">Data visualization is only powerful when paired with community dialogues. Simply uploading deforestation figures or carbon metrics to an open-data portal does not drive policy changes. Environmental facts must be framed inside a compelling civic narrative that connects global atmospheric shifts with local livelihood choices.</p>
      <p class="mb-4">At Zowa, we co-design highly interactive open portals that translate complex spatial grids and climate registries into immediate community strategies, empowering youth groups, local leaders, and municipal teams to take structured ownership of conservation mandates.</p>

      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">2. The Abuja Civic Portal Pilot</h3>
      <p class="mb-4">In a recent project pilot, we designed an environmental tracking dashboard that broke down municipal heat mapping data at the neighborhood level. Rather than displaying raw scientific metrics, the portal mapped shade indicators, localized water table risks, and air quality indexes, prompting immediate neighborhood-led tree-planting groups to re-green their local spaces.</p>

      <h3 class="text-xl font-bold mt-6 mb-4 text-[#0F0E13]">3. From Data to Action: A 3-Step Strategy</h3>
      <p class="mb-4">To successfully convert environmental data into civic action, public institutions must deploy a three-stage communication strategy:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Localized Contextualization:</strong> Translate global atmospheric figures into immediate local indicators (e.g. soil health or respiratory indexes).</li>
        <li><strong>Interactive Dashboards:</strong> Ensure public portals prioritize elegant, high-contrast, simple visual interfaces that do not require scientific credentials to navigate.</li>
        <li><strong>Community Mobilization Loops:</strong> Directly wire open data indicators to municipal funding channels or local environmental reward programs to incentivize direct civic action.</li>
      </ul>
    `
  }
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const article = articlesData[resolvedParams.slug as keyof typeof articlesData]

  if (!article) {
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
          href="/thinking" 
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6E6B64] hover:text-[#4D2395] transition-colors cursor-pointer group font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Thinking
        </Link>
      </div>

      {/* Header section */}
      <div className="mb-16 relative z-10 max-w-5xl">
        <div className="flex items-center gap-3 mb-6">
          <ZowaMotif size={14} color="#4D2395" />
          <span className="text-[#4D2395] font-semibold tracking-[0.2em] uppercase text-xs">
            {article.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-instrument-serif mb-6 text-[#0F0E13] leading-[1.1]">
          {article.title}
        </h1>
        <p className="text-sm md:text-base text-[#6E6B64] font-semibold">
          By {article.authors} — <span className="text-[#4D2395] italic">{article.date}</span> • <span className="text-[#5C5952]">{article.readTime}</span>
        </p>
      </div>

      {/* Image */}
      <div className="w-full aspect-[21/9] rounded-none overflow-hidden mb-16 bg-[#FAF6F0] border border-[#EAE5DB] relative z-10 shadow-sm">
        <div className="absolute inset-0 bg-black/5 z-10" />
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover grayscale opacity-95" 
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10 border-t border-[#EAE5DB] pt-12">
        
        {/* Left Side: Summary Callout */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#F5F2EC] border-l-4 border-[#4D2395] p-6">
            <h3 className="text-xs uppercase tracking-wider text-[#4D2395] font-bold mb-3">Key Concept Summary</h3>
            <p className="text-sm text-[#5C5952] italic font-medium leading-relaxed">
              "{article.intro}"
            </p>
          </div>
          <p className="text-xs text-[#6E6B64] font-bold uppercase tracking-widest leading-none pt-4">
            Zowa Advisory Insights Hub
          </p>
        </div>

        {/* Right Side: Article Body */}
        <div className="lg:col-span-8 prose prose-neutral max-w-none text-[#5C5952]">
          <div 
            className="text-base md:text-lg leading-relaxed article-body-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

      </div>
    </div>
  )
}
