import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zowa Media - Strategic Innovation & Communications",
    short_name: "Zowa Media",
    description:
      "Strategic innovation and communications firm helping African governments and institutions modernize for the digital economy",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#8b5cf6",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "192x192",
        type: "image/svg",
        purpose: "maskable",
      },
      {
        src: "/favicon.svg",
        sizes: "512x512",
        type: "image/svg",
        purpose: "maskable",
      },
      {
        src: "/favicon.svg",
        sizes: "180x180",
        type: "image/svg",
      },
    ],
    categories: ["business", "government", "technology"],
    lang: "en",
    dir: "ltr",
  }
}
