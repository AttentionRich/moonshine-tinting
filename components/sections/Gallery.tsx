import Image from "next/image"
import Link from "next/link"
import { galleryImages } from "@/lib/constants"

export default function Gallery() {
  return (
    <section
      className="bg-background py-24 lg:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2
            id="gallery-heading"
            className="font-display heading-xl text-white uppercase"
          >
            Latest Projects
          </h2>
        </div>

        {/* Teaser grid — 2 cols mobile, 3 cols desktop */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-10"
          aria-label="Gallery preview"
        >
          {galleryImages.map((item) => (
            <div key={item.src} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue
              text-sm font-semibold uppercase tracking-widest px-8 py-3.5
              hover:bg-brand-blue hover:text-white transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
