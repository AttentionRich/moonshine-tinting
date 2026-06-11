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
          <div className="max-w-7xl mx-auto px-6 py-3">
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
        <section className="bg-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <Badge className="mb-4">{service.category}</Badge>
              <h1 className="heading-hero font-semibold tracking-tight text-white mb-4">
                {service.name}
              </h1>

              {service.price.startsWith("From ") ? (
                <div className="mb-6">
                  <p className="text-muted text-xs uppercase tracking-widest mb-1">From</p>
                  <p className="font-light text-4xl text-brand-blue-bright tracking-tight leading-none">
                    {service.price.slice(5)}
                  </p>
                </div>
              ) : (
                <p className="font-light text-4xl text-brand-blue-bright tracking-tight leading-none mb-6">
                  {service.price}
                </p>
              )}

              <p className="text-body text-lg leading-relaxed mb-8">{service.description}</p>

              {hasBullets && (
                <ul className="mb-8 space-y-3" aria-label="Key benefits">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-brand-blue"
                        aria-hidden="true"
                      />
                      <span className="text-body">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={CONTACT.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px]
                    bg-brand-blue text-white text-sm font-medium tracking-wide rounded-full
                    px-8 py-3.5 hover:bg-brand-blue-dark hover:shadow-[0_0_24px_rgba(63,111,175,0.45)] hover:-translate-y-0.5 transition-all duration-300
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
                >
                  Get a quote
                </a>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px]
                    border border-white/15 text-white text-sm font-medium tracking-wide rounded-full
                    px-8 py-3.5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  WhatsApp us
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
