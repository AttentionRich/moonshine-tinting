export const runtime = "edge"

import type { Metadata } from "next"
import Image from "next/image"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import CTABanner from "@/components/sections/CTABanner"
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider"
import Reveal from "@/components/ui/Reveal"
import { galleryImages, beforeAfterPairs } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Gallery | MoonShine Window Tinting & Car Valeting",
  description:
    "Browse our gallery of completed window tinting, car valeting, detailing and PPF projects across Dublin.",
  alternates: {
    canonical: "https://www.moonshine.ie/gallery",
  },
  openGraph: {
    title: "Gallery | MoonShine Window Tinting & Car Valeting",
    description:
      "Browse our gallery of completed window tinting, car valeting, detailing and PPF projects across Dublin.",
    url: "https://www.moonshine.ie/gallery",
  },
}

export default function GalleryPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Header */}
        <section className="bg-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
              Our work
            </p>
            <h1 className="heading-hero font-semibold tracking-tight text-white mb-4">
              Full gallery
            </h1>
            <p className="text-body text-lg max-w-2xl mx-auto">
              A look at recent tinting, valeting, detailing and protection work completed across
              Dublin.
            </p>
          </div>
        </section>

        {/* Before/After sliders */}
        <section className="bg-background-alt py-24 lg:py-28" aria-label="Before and after comparisons">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {beforeAfterPairs.map((pair, i) => (
                <Reveal key={pair.label} delay={i * 75}>
                  <BeforeAfterSlider {...pair} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Full image grid */}
        <section className="bg-background py-24 lg:py-28" aria-label="Completed projects gallery">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {galleryImages.map((item, i) => (
                <Reveal key={item.src} delay={(i % 4) * 75} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 ease-out hover:scale-105"
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
