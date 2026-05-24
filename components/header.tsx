"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { MobileMenu } from "./mobile-menu"
import { ZowaMotif } from "./zowa-motif"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "py-4 px-6 md:px-10 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EAE5DB] shadow-sm"
          : "py-6 px-6 md:px-12 bg-transparent"
          }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer group" aria-label="Zowa Advisory Home">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="shrink-0 text-[#4D2395]"
            >
              <ZowaMotif size={24} color="#4D2395" />
            </motion.div>
            <span className="text-xl font-instrument-serif tracking-wide text-[#0F0E13] group-hover:text-[#4D2395] transition-colors duration-300">
              Zowa Advisory.
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10" role="navigation" aria-label="Main navigation">
            {[
              { label: "About", href: "/about" },
              { label: "Offerings", href: "/offerings" },
              { label: "Work", href: "/work" },
              { label: "Thinking", href: "/thinking" },
            ].map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs uppercase tracking-[0.18em] transition-all duration-300 font-semibold cursor-pointer relative group ${
                    active ? "text-[#0F0E13]" : "text-[#6E6B64] hover:text-[#0F0E13]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#4D2395] transition-all duration-350 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#4D2395] hover:bg-[#3C1371] transition-all duration-300 px-6 py-3 cursor-pointer shadow-sm hover:shadow"
            >
              Start a Project
            </Link>
            <button
              className="lg:hidden text-[#0F0E13] p-2 cursor-pointer hover:text-[#4D2395] transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>
    </>
  )
}
