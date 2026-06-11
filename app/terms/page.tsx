export const runtime = "edge"

import type { Metadata } from "next"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import Reveal from "@/components/ui/Reveal"
import { CONTACT } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service | MoonShine Window Tinting & Car Valeting",
  description:
    "Read the terms of service for MoonShine Window Tinting & Car Valeting in Dublin, including bookings, payments and our workmanship guarantee.",
  alternates: {
    canonical: "https://www.moonshine.ie/terms",
  },
  openGraph: {
    title: "Terms of Service | MoonShine Window Tinting & Car Valeting",
    description:
      "Read the terms of service for MoonShine Window Tinting & Car Valeting in Dublin.",
    url: "https://www.moonshine.ie/terms",
  },
}

const sections = [
  {
    heading: "Bookings & appointments",
    body: `Appointments can be booked by phone, WhatsApp or through our website. We'll do our best
      to accommodate your preferred time, but all bookings are subject to availability and
      confirmation. Please arrive on time, as late arrivals may need to be rescheduled.`,
  },
  {
    heading: "Pricing",
    body: `Prices listed on our website are starting prices and may vary depending on vehicle size,
      condition and the specific work required. We'll always confirm final pricing with you before
      starting any work.`,
  },
  {
    heading: "Cancellations",
    body: `If you need to cancel or reschedule, please give us as much notice as possible so we can
      offer the slot to another customer. Repeated late cancellations or no-shows may affect future
      bookings.`,
  },
  {
    heading: "Workmanship guarantee",
    body: `We stand behind the quality of our work. If you're not satisfied with a service we've
      carried out, please contact us within a reasonable time so we can assess and put things
      right.`,
  },
  {
    heading: "Vehicle condition & liability",
    body: `While we take great care with every vehicle, we ask that you let us know about any
      pre-existing damage, mechanical issues or aftermarket modifications before work begins. We're
      fully insured, and our liability is limited to making good any damage caused directly by our
      work.`,
  },
  {
    heading: "Materials & warranties",
    body: `Where products such as window film, ceramic coatings or paint protection film carry a
      manufacturer's warranty, we'll provide details of that warranty and how to make a claim if
      needed.`,
  },
  {
    heading: "Changes to these terms",
    body: `We may update these terms from time to time. The latest version will always be available
      on this page.`,
  },
  {
    heading: "Contact us",
    body: `If you have any questions about these terms, please contact us at ${CONTACT.email} or
      ${CONTACT.phone}.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <section className="bg-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="heading-hero font-semibold tracking-tight text-white mb-4">
              Terms of service
            </h1>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Last updated: January 2025
            </p>
          </div>
        </section>

        <section className="bg-background-alt py-24 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 space-y-10">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={(i % 4) * 75}>
                <h2 className="text-xl font-semibold tracking-tight text-white mb-3">
                  {section.heading}
                </h2>
                <p className="text-body leading-relaxed">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
