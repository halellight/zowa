import Link from "next/link"
import { ZowaMotif } from "./zowa-motif"

export function Footer() {
  const year = new Date().getFullYear()

  const links = {
    Pages: [
      { label: "About", href: "/about" },
      { label: "Offerings", href: "/offerings" },
      { label: "Work", href: "/work" },
      { label: "Thinking", href: "/thinking" },
    ],
    Connect: [
      { label: "Contact Us", href: "/contact" },
      { label: "LinkedIn", href: "https://linkedin.com/company/zowamedia", external: true },
      { label: "Twitter / X", href: "https://twitter.com/zowamedia", external: true },
    ],
  }

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#EAE5DB] relative z-10 text-[#0F0E13]">
      {/* CTA Strip */}
      <div className="border-b border-[#EAE5DB] bg-[#F5F2EC] px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-2xl">
            <p className="text-[#4D2395] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Ready to work together?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-[#0F0E13] leading-tight">
              Let's transform your institution for the{" "}
              <span className="text-[#4D2395] italic">digital era.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-[#4D2395] hover:bg-[#3C1371] text-white px-8 py-4 text-xs uppercase tracking-[0.15em] transition-colors duration-250 cursor-pointer shrink-0 font-semibold rounded-none shadow-sm"
          >
            Start a Conversation
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 md:px-12 py-16 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 cursor-pointer group mb-6">
              <ZowaMotif size={20} color="#4D2395" />
              <span className="text-xl font-instrument-serif tracking-wide text-[#0F0E13]">Zowa Advisory.</span>
            </Link>
            <p className="text-[#6E6B64] text-sm leading-relaxed max-w-sm font-medium">
              A boutique consulting firm helping ambitious African governments solve complex development challenges through strategy, AI, and institutional transformation.
            </p>
            <p className="text-[#8B867A] text-xs font-semibold uppercase mt-8 tracking-wider">Abuja · Serving Pan-Africa</p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8B867A] mb-5">{group}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={"external" in item && item.external ? "_blank" : undefined}
                      rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                      className="text-[#6E6B64] hover:text-[#4D2395] text-sm transition-colors cursor-pointer font-semibold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#EAE5DB] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8B867A] text-xs font-medium">© {year} Zowa Advisory. All rights reserved.</p>
          <div className="flex items-center gap-2 opacity-40">
            <ZowaMotif size={12} color="#4D2395" />
            <span className="text-[#6E6B64] text-xs tracking-widest uppercase font-bold">Zowa Advisory</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
