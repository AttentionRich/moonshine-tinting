import Link from "next/link"
import ServiceCard from "@/components/ui/ServiceCard"
import { services } from "@/lib/constants"

export default function Services() {
  const featured = services.filter((s) => s.featured)
  const premium = services.filter((s) => !s.featured).slice(0, 3)

  return (
    <section
      className="bg-background py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2
              id="services-heading"
              className="font-display text-5xl sm:text-6xl text-white uppercase leading-none"
            >
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-blue text-sm font-semibold
              uppercase tracking-widest hover:text-white transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue shrink-0"
            aria-label="View all MoonShine services"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Featured 3-up grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4"
          aria-label="Featured services"
        >
          {featured.map((service) => (
            <ServiceCard
              key={service.slug}
              category={service.category}
              name={service.name}
              price={service.price}
              description={service.description}
              bullets={"bullets" in service ? (service as { bullets: readonly string[] }).bullets : undefined}
              slug={service.slug}
              variant="featured"
            />
          ))}
        </div>

        {/* Premium wide-card row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          aria-label="Premium services"
        >
          {premium.map((service) => (
            <ServiceCard
              key={service.slug}
              category={service.category}
              name={service.name}
              price={service.price}
              description={service.description}
              bullets={"bullets" in service ? (service as { bullets: readonly string[] }).bullets : undefined}
              slug={service.slug}
              variant="wide"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
