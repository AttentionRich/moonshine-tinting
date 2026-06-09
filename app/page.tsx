export const runtime = "edge"

import Navigation from "@/components/sections/Navigation"
import Hero from "@/components/sections/Hero"
import TrustIndicators from "@/components/sections/TrustIndicators"
import Services from "@/components/sections/Services"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Process from "@/components/sections/Process"
import Testimonials from "@/components/sections/Testimonials"
import Gallery from "@/components/sections/Gallery"
import ServiceAreas from "@/components/sections/ServiceAreas"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import Footer from "@/components/sections/Footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <TrustIndicators />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Gallery />
        <ServiceAreas />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
