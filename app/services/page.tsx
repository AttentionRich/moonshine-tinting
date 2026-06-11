export const runtime = "edge"

import type { Metadata } from "next"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import CTABanner from "@/components/sections/CTABanner"
import ServiceCard from "@/components/ui/ServiceCard"
import Reveal from "@/components/ui/Reveal"
import { services } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Services | MoonShine Window Tinting & Car Valeting",
  description:
    "Explore MoonShine's full range of services: ceramic window tinting, car valeting, vehicle detailing, PPF, wrapping and more across Dublin.",
  alternates: {
    canonical: "https://www.moonshine.ie/services",
  },
  openGraph: {
    title: "Services | MoonShine Window Tinting & Car Valeting",
    description:
      "Explore MoonShine's full range of services: ceramic window tinting, car valeting, vehicle detailing, PPF, wrapping and more across Dublin.",
    url: "https://www.moonshine.ie/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Header */}
        <section className="bg-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
              What we offer
            </p>
            <h1 className="heading-hero font-semibold tracking-tight text-white mb-4">
              Our services
            </h1>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Premium tinting, detailing, protection and enhancement. Every service is backed by
              our workmanship guarantee.
            </p>
          </div>
        </section>

        {/* Full grid */}
        <section className="bg-background-alt py-24 lg:py-28" aria-label="All services">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, i) => (
                <Reveal key={service.slug} delay={(i % 3) * 75}>
                  <ServiceCard
                    category={service.category}
                    name={service.name}
                    price={service.price}
                    description={service.description}
                    bullets={"bullets" in service ? (service as { bullets: readonly string[] }).bullets : undefined}
                    slug={service.slug}
                    variant="featured"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </>
  )
}
