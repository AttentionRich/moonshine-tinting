export const runtime = "edge"

import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import CTABanner from "@/components/sections/CTABanner"
import Badge from "@/components/ui/Badge"
import { services, CONTACT } from "@/lib/constants"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.name} Dublin | MoonShine`,
    description: service.description,
    alternates: {
      canonical: `https://www.moonshine.ie/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} Dublin | MoonShine`,
      description: service.description,
      url: `https://www.moonshine.ie/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const hasBullets = "bullets" in service && service.bullets && service.bullets.length > 0
  const bullets = hasBullets ? (service as typeof service & { bullets: readonly string[] }).bullets : []

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "MoonShine Window Tinting & Car Valeting",
      url: "https://www.moonshine.ie",
    },
    areaServed: {
      "@type": "City",
      name: "Dublin",
      addressCountry: "IE",
    },
    offers: {
      "@type": "Offer",
      price: service.price.replace(/[^0-9]/g, "") || undefined,
      priceCurrency: "EUR",
      description: service.price,
    },
  }

  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* Breadcrumb */}
        <div className="bg-surface border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-muted" role="list">
                <li>
                  <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors duration-200">Services</Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </li>
                <li className="text-white" aria-current="page">{service.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-background border-b border-surface-border py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl border-l-4 border-brand-blue pl-8">
              <Badge className="mb-4">{service.category}</Badge>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-none mb-4">
                {service.name}
              </h1>
              <p className="text-brand-blue font-semibold text-xl mb-6">{service.price}</p>
              <p className="text-muted text-lg leading-relaxed mb-8">{service.description}</p>

              {hasBullets && (
                <ul className="mb-8 space-y-3" aria-label="Key benefits">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-brand-blue"
                        aria-hidden="true"
                      />
                      <span className="text-muted">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-4">
                <a
                  href={CONTACT.phoneTel}
                  className="inline-flex items-center gap-2 bg-brand-blue text-white
                    text-sm font-semibold uppercase tracking-widest px-8 py-3.5
                    hover:bg-brand-blue-dark transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  Get a Quote
                </a>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white text-white
                    text-sm font-semibold uppercase tracking-widest px-8 py-3.5
                    hover:bg-white hover:text-background transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </>
  )
}
