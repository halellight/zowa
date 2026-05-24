"use client"

import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export function SEOHead({ title, description, canonical, ogImage = "/og-image.jpg", noindex = false }: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | Zowa Media`
    : "Zowa Media - Strategic Innovation & Communications for African Governments"

  const fullDescription =
    description ||
    "Leading strategic innovation and communications firm helping African governments and institutions modernize for the digital economy."

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />

      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
