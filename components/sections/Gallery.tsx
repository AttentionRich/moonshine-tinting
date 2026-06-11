import Image from "next/image"
import Link from "next/link"
import Reveal from "@/components/ui/Reveal"
import { galleryImages } from "@/lib/constants"

export default function Gallery() {
  return (
    <section
      className="bg-background py-24 lg:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="text-center mb-12">
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
            Our work
          </p>
          <h2
            id="gallery-heading"
            className="heading-xl font-semibold tracking-tight text-white"
          >
            Latest projects
          </h2>
        </Reveal>

        {/* Teaser grid — 2 cols mobile, 3 cols desktop */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-10"
          aria-label="Gallery preview"
        >
          {galleryImages.map((item, i) => (
            <Reveal key={item.src} delay={i * 75} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 ease-out hover:scale-105"
              />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border border-white/15 text-white
              text-sm font-medium tracking-wide rounded-full px-8 py-3.5 min-h-[44px]
              hover:bg-brand-blue hover:border-brand-blue transition-all duration-300
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            View full gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
