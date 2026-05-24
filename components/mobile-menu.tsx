"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, MapPin, Mail } from "lucide-react"
import Link from "next/link"
import { ZowaMotif } from "./zowa-motif"
import { usePathname } from "next/navigation"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const menuItems = [
    { n: "01", label: "About", href: "/about" },
    { n: "02", label: "Offerings", href: "/offerings" },
    { n: "03", label: "Academy", href: "/academy" },
    { n: "04", label: "Work", href: "/work" },
    { n: "05", label: "Thinking", href: "/thinking" },
    { n: "06", label: "Contact Us", href: "/contact" },
  ]

  // Animation variants
  const curtainVariants = {
    initial: { y: "-100%" },
    animate: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { y: "-100%", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
  }

  const linkContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const linkVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] lg:hidden bg-[#FAF7F2] overflow-y-auto flex flex-col justify-between"
          variants={curtainVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Rotating ambient brand motif backdrop */}
          <div className="absolute right-[-10%] top-[20%] opacity-[0.03] pointer-events-none z-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <ZowaMotif size={450} color="#4D2395" />
            </motion.div>
          </div>

          {/* Top Bar */}
          <div className="w-full flex items-center justify-between px-6 py-6 border-b border-[#EAE5DB] relative z-10">
            <Link href="/" className="flex items-center gap-3" onClick={onClose}>
              <ZowaMotif size={22} color="#4D2395" />
              <span className="text-lg font-instrument-serif tracking-wide text-[#0F0E13]">
                Zowa Advisory.
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-3 border border-[#EAE5DB] hover:bg-[#F3EFE7] transition-colors rounded-none cursor-pointer flex items-center justify-center text-[#0F0E13]"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav Section */}
          <div className="flex-grow flex items-center px-8 md:px-16 py-12 relative z-10">
            <motion.nav
              className="space-y-6 w-full"
              variants={linkContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {menuItems.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                return (
                  <motion.div key={item.label} variants={linkVariants} className="overflow-hidden">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`group flex items-baseline gap-6 text-4xl md:text-5xl font-instrument-serif transition-colors duration-300 py-2 border-b border-dashed border-[#EAE5DB] w-full block ${
                        active ? "text-[#4D2395]" : "text-[#0F0E13] hover:text-[#4D2395]"
                      }`}
                    >
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#4D2395]">
                        {item.n}
                      </span>
                      <span className="flex-grow">{item.label}</span>
                      <ArrowRight className={`w-5 h-5 text-[#4D2395] transition-all duration-300 ${
                        active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`} />
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>
          </div>

          {/* Bottom Coordinates & Contacts Grid */}
          <div className="border-t border-[#EAE5DB] bg-[#F5F2EC] px-8 py-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-none border border-[#EAE5DB] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#4D2395]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#6E6B64] mb-1">Office</h4>
                  <p className="text-xs text-[#0F0E13]">Maitama District, Abuja</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-none border border-[#EAE5DB] flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#4D2395]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#6E6B64] mb-1">Inquiries</h4>
                  <p className="text-xs text-[#0F0E13]">praiseibec@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-none border border-[#EAE5DB] flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#4D2395]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#6E6B64] mb-1">Phone</h4>
                  <p className="text-xs text-[#0F0E13]">+234 812 117 3432</p>
                </div>
              </div>
            </div>
            
            <p className="text-[9px] text-[#6E6B64] uppercase tracking-[0.25em] text-center mt-8 border-t border-[#EAE5DB]/60 pt-4">
              Zowa Advisory — Premium Public Sector Consulting
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
