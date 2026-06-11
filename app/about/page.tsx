export const runtime = "edge"

import type { Metadata } from "next"
import Image from "next/image"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import TrustIndicators from "@/components/sections/TrustIndicators"
import CTABanner from "@/components/sections/CTABanner"
import Reveal from "@/components/ui/Reveal"
import { R2 } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Us | MoonShine Window Tinting & Car Valeting",
  description:
    "MoonShine is Dublin's premium window tinting, car valeting and vehicle enhancement specialist. Learn about our story, our standards and why customers trust us.",
  alternates: {
    canonical: "https://www.moonshine.ie/about",
  },
  openGraph: {
    title: "About Us | MoonShine Window Tinting & Car Valeting",
    description:
      "MoonShine is Dublin's premium window tinting, car valeting and vehicle enhancement specialist.",
    url: "https://www.moonshine.ie/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Header */}
        <section className="bg-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
              About us
            </p>
            <h1 className="heading-hero font-semibold tracking-tight text-white mb-4">
              Dublin&apos;s premium automotive specialist
            </h1>
            <p className="text-body text-lg max-w-2xl mx-auto">
              We&apos;re a Dublin-based team dedicated to making every vehicle we touch look its
              absolute best, and stay that way.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-background-alt py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl card-shadow order-2 lg:order-1">
              <Image
                src={`${R2}/S2000-front.jpg`}
                alt="Honda S2000 detailed and finished by MoonShine"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 ease-out hover:scale-105"
              />
            </Reveal>

            <Reveal delay={75} className="order-1 lg:order-2">
              <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
                Our story
              </p>
              <h2 className="heading-xl font-semibold tracking-tight text-white mb-6">
                Built on craft, care and consistency
              </h2>
              <div className="space-y-4 text-body text-base leading-relaxed">
                <p>
                  MoonShine was founded with a simple goal: to bring genuinely premium window
                  tinting, valeting and vehicle enhancement to Dublin, with the kind of attention
                  to detail you&apos;d expect from a luxury showroom.
                </p>
                <p>
                  From ceramic tints to full vehicle wraps, paint protection film and multi-stage
                  detailing, every job is carried out by trained technicians using premium,
                  warranty-backed materials in our Dublin workshop.
                </p>
                <p>
                  We&apos;re fully insured, proud of our 4.9★ Google rating, and committed to a
                  workmanship guarantee on everything we do. No shortcuts, no surprises.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <TrustIndicators />
        <WhyChooseUs />
        <CTABanner />
      </main>

      <Footer />
    </>
  )
}
