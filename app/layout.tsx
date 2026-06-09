export const runtime = "edge"

import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import { CONTACT } from "@/lib/constants"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moonshine.ie"),
  title: "Window Tinting Dublin | Car Valeting | MoonShine",
  description:
    "Dublin's #1 window tinting, car valeting and PPF specialist. Professional ceramic window tinting, paint protection film and vehicle detailing across Dublin. Free quotes. Same-week bookings.",
  keywords: [
    "window tinting Dublin",
    "car valeting Dublin",
    "PPF Dublin",
    "paint protection film Dublin",
    "car detailing Dublin",
    "ceramic tint Dublin",
    "vehicle detailing Dublin",
    "car wrapping Dublin",
  ],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.moonshine.ie",
    siteName: "MoonShine Window Tinting & Car Valeting",
    title: "Window Tinting Dublin | Car Valeting | MoonShine",
    description:
      "Dublin's #1 window tinting, car valeting and PPF specialist. Professional ceramic window tinting and vehicle enhancement across Dublin.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MoonShine Window Tinting & Car Valeting — Dublin's Premier Automotive Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Window Tinting Dublin | Car Valeting | MoonShine",
    description:
      "Dublin's #1 window tinting, car valeting and PPF specialist. Same-week bookings available.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.moonshine.ie",
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
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "MoonShine Window Tinting & Car Valeting",
  description:
    "Dublin's premier window tinting, car valeting, PPF and vehicle enhancement specialist.",
  url: "https://www.moonshine.ie",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dublin",
    addressRegion: "Dublin",
    addressCountry: "IE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3498,
    longitude: -6.2603,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "15:00",
    },
  ],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Automotive Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Tinting" }, price: "150", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Valeting" }, price: "80", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Detailing" }, price: "130", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Protection Film" }, price: "400", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Wrapping" }, price: "800", priceCurrency: "EUR" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}

        {/* Mobile sticky call button */}
        <a
          href={CONTACT.phoneTel}
          aria-label="Call MoonShine"
          className="sm:hidden fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full
            bg-brand-blue text-white flex items-center justify-center
            shadow-lg shadow-brand-blue/30 hover:bg-brand-blue-dark
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </a>

        {/* Sticky WhatsApp button — all breakpoints */}
        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with MoonShine on WhatsApp"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full
            bg-whatsapp text-white flex items-center justify-center
            shadow-lg shadow-whatsapp/30 hover:opacity-90
            transition-opacity duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-whatsapp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </body>
    </html>
  )
}
