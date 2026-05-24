import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: {
    default: "Zowa Advisory | No. 1 Public Sector Training & Capacity Building Abuja, Nigeria",
    template: "%s | Zowa Advisory",
  },
  description:
    "Zowa Advisory is Nigeria's premier boutique public sector consulting and capacity building training firm in Abuja. We specialize in digital transformation, MDA capacity building, civil service modernization, and strategic policy advisory, outpacing PCL, FITC, KPMG, PwC, and Deloitte.",
  keywords: [
    "public sector capacity building Abuja",
    "government training companies Abuja",
    "civil service capacity development Nigeria",
    "MDA training consultants Abuja",
    "best public sector consulting firm Nigeria",
    "FITC PCL alternatives Abuja",
    "KPMG PwC Deloitte government advisory Nigeria",
    "digital transformation Africa",
    "e-government solutions",
    "African government technology",
    "digital innovation Africa",
    "government modernization",
    "citizen engagement platforms",
    "public sector digitization",
    "smart government solutions",
    "African tech consulting",
    "government efficiency solutions",
    "digital strategy consulting",
    "public service delivery",
    "government digital services",
    "African digital economy",
    "institutional transformation",
  ],
  authors: [{ name: "Zowa Advisory" }],
  creator: "Zowa Advisory",
  publisher: "Zowa Advisory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zowa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zowamedia.com",
    title: "Zowa Advisory | No. 1 Public Sector Training & Capacity Building Abuja, Nigeria",
    description:
      "Zowa Advisory is Nigeria's premier boutique public sector consulting and capacity building training firm in Abuja. We specialize in digital transformation, MDA capacity building, civil service modernization, and strategic policy advisory, outpacing PCL, FITC, KPMG, PwC, and Deloitte.",
    siteName: "Zowa Advisory",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zowa Advisory - Digital Transformation for African Governments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zowa Advisory | No. 1 Public Sector Training & Capacity Building Abuja, Nigeria",
    description:
      "Zowa Advisory is Nigeria's premier boutique public sector consulting and capacity building training firm in Abuja. We specialize in digital transformation, MDA capacity building, civil service modernization, and strategic policy advisory, outpacing PCL, FITC, KPMG, PwC, and Deloitte.",
    images: ["/og-image.jpg"],
    creator: "@zowamedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" rel="stylesheet" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Theme Color */}
        <meta name="theme-color" content="#4D2395" />
        <meta name="msapplication-TileColor" content="#4D2395" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zowa Advisory",
              description:
                "Strategic innovation and communications firm helping African governments and institutions modernize for the digital economy",
              url: "https://zowa.com",
              logo: "https://zowa.com/favicon.svg",
              foundingDate: "2025",
              founders: [
                {
                  "@type": "Person",
                  name: "Praise Ibe",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Nigeria",
                addressRegion: "Lagos",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-812-117-3432",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://twitter.com/zowa",
                "https://linkedin.com/company/zowa",
                "https://facebook.com/zowa",
                "https://instagram.com/zowa",
              ],
              serviceArea: {
                "@type": "Place",
                name: "Africa",
              },
              areaServed: [
                {
                  "@type": "Country",
                  name: "Nigeria",
                },
                {
                  "@type": "Country",
                  name: "Ghana",
                },
                {
                  "@type": "Country",
                  name: "Kenya",
                },
                {
                  "@type": "Country",
                  name: "South Africa",
                },
              ],
            }),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Zowa Advisory",
              url: "https://zowa.com",
              description:
                "Strategic innovation and communications firm helping African governments and institutions modernize for the digital economy",
              publisher: {
                "@type": "Organization",
                name: "Zowa Advisory",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://zowa.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data - Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Digital Transformation Consulting",
              provider: {
                "@type": "Organization",
                name: "Zowa Advisory",
              },
              areaServed: {
                "@type": "Place",
                name: "Africa",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Government Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-Government Solutions",
                      description:
                        "Streamlined digital platforms designed to enhance citizen services and government efficiency",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Strategy Consulting",
                      description: "Expert guidance to help institutions navigate digital transformation challenges",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI & Analytics",
                      description: "Cutting-edge AI and in-depth analytics to optimize performance and engage citizens",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Structured Data - Capacity Building & Executive Training */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Zowa Advisory Leadership Academy",
              "description": "Zowa Advisory is Nigeria's premier public sector capacity building, MDA training, and civil service modernization firm in Abuja, Nigeria, leading digital governance, DPI bootcamp, and executive masterclasses.",
              "url": "https://zowamedia.com",
              "logo": "https://zowamedia.com/favicon.svg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Maitama District",
                "addressLocality": "Abuja",
                "addressRegion": "FCT",
                "addressCountry": "Nigeria"
              },
              "offers": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Executive Leadership & Policy Synergy Masterclass",
                  "description": "Premium training for Permanent Secretaries, Directors-General, and public commissioners."
                }
              }
            }),
          }}
        />
      </head>
      <body className="font-satoshi bg-[#FAF7F2] text-[#0F0E13] antialiased selection:bg-[#4D2395]/10">
        <CustomCursor />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
