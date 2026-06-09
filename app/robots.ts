export const runtime = "edge"

import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.moonshine.ie/sitemap.xml",
    host: "https://www.moonshine.ie",
  }
}
