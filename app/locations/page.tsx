export const runtime = "edge"

import type { Metadata } from "next"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import ServiceAreas from "@/components/sections/ServiceAreas"
import CTABanner from "@/components/sections/CTABanner"
import Reveal from "@/components/ui/Reveal"

export const metadata: Metadata = {
  title: "Locations | MoonShine Window Tinting & Car Valeting",
  description:
    "MoonShine serves Dublin and the greater Dublin area for window tinting, car valeting, detailing and PPF. Find out if we cover your area.",
  alternates: {
    canonical: "https://www.moonshine.ie/locations",
  },
  openGraph: {
    title: "Locations | MoonShine Window Tinting & Car Valeting",
    description:
      "MoonShine serves Dublin and the greater Dublin area for window tinting, car valeting, detailing and PPF.",
    url: "https://www.moonshine.ie/locations",
  },
}

export default function LocationsPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Header */}
        <section className="bg-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
              Where we work
            </p>
            <h1 className="heading-hero font-semibold tracking-tight text-white mb-4">
              Our location &amp; service areas
            </h1>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Visit our Dublin workshop, or ask about mobile valeting and detailing across the
              greater Dublin area.
            </p>
          </div>
        </section>

        {/* Map */}
        <section className="bg-background-alt py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="rounded-3xl overflow-hidden card-shadow border border-surface-border h-[300px] md:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1235664.3587706406!2d-9.105379866381254!3d52.77896958667645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670fc652660321%3A0xf60da5bd9527b97!2sMoonshine%20Window%20Tinting%20Car%20Valeting!5e0!3m2!1sen!2sie!4v1781200108400!5m2!1sen!2sie"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MoonShine Window Tinting & Car Valeting map"
                  className="block w-full h-full"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <ServiceAreas />
        <CTABanner />
      </main>

      <Footer />
    </>
  )
}
