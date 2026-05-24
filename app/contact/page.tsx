"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ZowaMotif } from "@/components/zowa-motif"
import { ArrowRight, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-[#FAF7F2] text-[#0F0E13] relative">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(77,35,149,0.02) 0%, transparent 70%)" }} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Editorial Content */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ZowaMotif size={14} color="#4D2395" />
              <span className="text-[#4D2395] font-semibold tracking-[0.2em] uppercase text-xs">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-instrument-serif mb-8 text-[#0F0E13] leading-[1.08]">
              Looking to turn potential into <span className="italic text-[#4D2395]">performance?</span>
            </h1>
            
            <p className="text-lg text-[#6E6B64] leading-relaxed mb-12 max-w-md">
              Let’s discuss how Zowa Advisory can partner with your institution or agency to drive permanent, systemic digital transformation.
            </p>
          </div>

          <div className="space-y-8 border-t border-[#EAE5DB] pt-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-none bg-[#F5F2EC] border border-[#EAE5DB] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#4D2395]" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#4D2395] mb-1">Abuja Office</h3>
                <p className="text-sm text-[#5C5952] font-medium">Maitama District, FCT, Nigeria</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-none bg-[#F5F2EC] border border-[#EAE5DB] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#4D2395]" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#4D2395] mb-1">Email</h3>
                <p className="text-sm text-[#5C5952] font-medium">partnerships@zowa.advisory</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 bg-white border border-[#EAE5DB] p-8 md:p-12 rounded-none relative overflow-hidden shadow-sm"
        >
          {/* Subtle watermark motif */}
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-[0.015] pointer-events-none text-[#4D2395]">
            <ZowaMotif size={400} color="#4D2395" />
          </div>

          <h2 className="text-2xl font-bold mb-8 text-[#0F0E13]">Start a Conversation</h2>

          <form className="space-y-6 text-left relative z-10" aria-label="Contact form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#6E6B64] mb-2.5 block" htmlFor="name">Full Name</label>
                <Input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="bg-[#FAF7F2]/60 border-[#EAE5DB] text-[#0F0E13] placeholder-[#C4BCAF] h-14 rounded-none focus-visible:ring-[#4D2395] focus-visible:ring-offset-0 focus-visible:border-[#4D2395] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#6E6B64] mb-2.5 block" htmlFor="organization">Organization</label>
                <Input
                  type="text"
                  id="organization"
                  placeholder="Ministry / Agency"
                  className="bg-[#FAF7F2]/60 border-[#EAE5DB] text-[#0F0E13] placeholder-[#C4BCAF] h-14 rounded-none focus-visible:ring-[#4D2395] focus-visible:ring-offset-0 focus-visible:border-[#4D2395] transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#6E6B64] mb-2.5 block" htmlFor="email">Official Email</label>
              <Input
                type="email"
                id="email"
                placeholder="name@gov.ng"
                className="bg-[#FAF7F2]/60 border-[#EAE5DB] text-[#0F0E13] placeholder-[#C4BCAF] h-14 rounded-none focus-visible:ring-[#4D2395] focus-visible:ring-offset-0 focus-visible:border-[#4D2395] transition-colors"
              />
            </div>
            
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#6E6B64] mb-2.5 block" htmlFor="message">Message</label>
              <Textarea
                id="message"
                placeholder="Tell us about your strategic needs or mandate..."
                rows={6}
                className="bg-[#FAF7F2]/60 border-[#EAE5DB] text-[#0F0E13] placeholder-[#C4BCAF] rounded-none focus-visible:ring-[#4D2395] focus-visible:ring-offset-0 focus-visible:border-[#4D2395] resize-none transition-colors"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full bg-[#4D2395] hover:bg-[#3C1371] text-white h-14 text-xs font-bold uppercase tracking-widest transition-colors duration-250 cursor-pointer flex items-center justify-center gap-2 rounded-none shadow-sm"
            >
              Submit Inquiry
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

      </div>
    </div>
  )
}
