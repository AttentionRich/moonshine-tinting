export const runtime = "edge"

import type { Metadata } from "next"
import Image from "next/image"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import CTABanner from "@/components/sections/CTABanner"
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h1 className="font-display heading-xl text-white uppercase">
              Full Gallery
            </h1>
          </div>
        </section>

        {/* Before/After sliders */}
        <section className="bg-background-alt py-24 lg:py-32" aria-label="Before and after comparisons">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beforeAfterPairs.map((pair) => (
                <BeforeAfterSlider key={pair.label} {...pair} />
              ))}
            </div>
          </div>
        </section>

        {/* Full image grid */}
        <section className="bg-background py-24 lg:py-32" aria-label="Completed projects gallery">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {galleryImages.map((item) => (
                <div key={item.src} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
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
