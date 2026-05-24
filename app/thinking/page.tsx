"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { InsightCard } from "@/components/insight-card"
import { ZowaMotif } from "@/components/zowa-motif"

export default function ThinkingPage() {
  const featuredArticle = {
    slug: "future-of-african-digital-governance",
    category: "Digital Governance",
    title: "The Future of African Digital Governance: Moving Beyond E-Government to Intelligent Statecraft",
    authors: "Daniel Okafor, Amara Nwosu",
    date: "Mar 30, 2026",
    readTime: "8-minute read",
    excerpt: "It begins before infrastructure. As you read this, every digital touchpoint in your periphery is already guiding the tempo of your nation's economic potential. Discover how to architect for intelligence.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
  }

  const articles = [
    {
      slug: "responsible-ai-transformation",
      category: "Artificial Intelligence",
      title: "With Great Power: Guiding Responsible AI Transformation in MDAs",
      authors: "Chukwudi Eze",
      date: "Mar 10, 2026",
      readTime: "12-minute read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      slug: "unlocking-institutional-potential",
      category: "Change Management",
      title: "Unlocking Institutional Potential: A New Code for Public Sector Brilliance",
      authors: "Femi Adeyemi",
      date: "Feb 27, 2026",
      readTime: "6-minute read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      slug: "sentence-test-brand-strategy",
      category: "Brand Strategy",
      title: "Elegance in Architecture: The Sentence Test for Brand Strategy",
      authors: "Zowa Strategy Team",
      date: "Jan 30, 2026",
      readTime: "4-minute read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      slug: "facts-alone-wont-save-planet",
      category: "Impact",
      title: "Reflections for Earth Day: Why Facts Alone Won't Save The Planet",
      authors: "Aisha Bello",
      date: "Apr 22, 2026",
      readTime: "5-minute read",
      image: "https://images.unsplash.com/photo-1592982537447-6f23f5c71d69?q=80&w=2070&auto=format&fit=crop"
    }
  ]

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-[#FAF7F2] text-[#0F0E13]">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="mb-24 max-w-5xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <ZowaMotif size={14} color="#4D2395" />
          <span className="text-[#4D2395] font-semibold tracking-[0.2em] uppercase text-xs">Thinking</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-[4.8rem] font-instrument-serif text-[#0F0E13] leading-[1.1]">
          When we talk about purpose, innovation, and institutional transformation, we don't just start conversations — <span className="italic text-[#6E6B64]">we advance them.</span>
        </h1>
      </motion.div>

      {/* Featured Article */}
      <Link href={`/thinking/${featuredArticle.slug}`} className="block">
        <motion.article 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 group cursor-pointer border-t border-[#EAE5DB] pt-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs tracking-wider uppercase mb-6">
                  <span className="text-[#4D2395] font-bold">{featuredArticle.category}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-instrument-serif text-[#0F0E13] mb-6 group-hover:text-[#4D2395] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-[#5C5952] text-lg md:text-xl leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
              </div>
              <div className="text-sm text-[#6E6B64] font-semibold">
                <p className="mb-1 text-[#5C5952]">Written by <span className="text-[#0F0E13] font-bold group-hover:text-[#4D2395] transition-colors">{featuredArticle.authors}</span></p>
                <p>{featuredArticle.date} • {featuredArticle.readTime}</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-square w-full overflow-hidden rounded-none bg-[#FAF6F0] border border-[#EAE5DB] shadow-sm">
              <motion.div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <motion.img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.article>
      </Link>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 border-t border-[#EAE5DB] pt-16">
        {articles.map((article, index) => (
          <InsightCard
            key={index}
            category={article.category}
            title={article.title}
            readTime={article.readTime}
            image={article.image}
            authors={article.authors}
            date={article.date}
            delay={index * 0.1}
            slug={article.slug}
          />
        ))}
      </div>
    </div>
  )
}
