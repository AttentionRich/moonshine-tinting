import Link from "next/link"
import ServiceCard from "@/components/ui/ServiceCard"
import Reveal from "@/components/ui/Reveal"
import { services } from "@/lib/constants"

export default function Services() {
  const featured = services.filter((s) => s.featured)

  return (
    <section
      className="bg-background py-24 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
              What we offer
            </p>
            <h2
              id="services-heading"
              className="heading-xl font-semibold tracking-tight text-white"
            >
              Our services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-blue-bright text-sm font-medium
              tracking-wide hover:text-white transition-colors duration-300
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-full shrink-0"
            aria-label="View all MoonShine services"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </Reveal>

        {/* Featured services - swipeable carousel on mobile, 3-up grid on larger screens */}
        <div
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4
            overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0"
          aria-label="Featured services"
        >
          {featured.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 75}
              className="snap-start shrink-0 w-[85%] sm:w-auto"
            >
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
  )
}
