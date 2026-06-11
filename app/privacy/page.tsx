export const runtime = "edge"

import type { Metadata } from "next"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import Reveal from "@/components/ui/Reveal"
import { CONTACT } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy | MoonShine Window Tinting & Car Valeting",
  description:
    "Read MoonShine's privacy policy to understand how we collect, use and protect your personal information.",
  alternates: {
    canonical: "https://www.moonshine.ie/privacy",
  },
  openGraph: {
    title: "Privacy Policy | MoonShine Window Tinting & Car Valeting",
    description:
      "Read MoonShine's privacy policy to understand how we collect, use and protect your personal information.",
    url: "https://www.moonshine.ie/privacy",
  },
}

const sections = [
  {
    heading: "Information we collect",
    body: `When you contact us by phone, WhatsApp, email or through our website, we may collect personal
      information such as your name, phone number, email address and details about your vehicle and
      the services you're interested in. We only collect what's needed to respond to your enquiry
      and provide our services.`,
  },
  {
    heading: "How we use your information",
    body: `We use the information you provide to respond to enquiries, schedule and carry out
      bookings, process payments and, where you've agreed, send you updates about our services.
      We do not sell or rent your personal information to third parties.`,
  },
  {
    heading: "Cookies & analytics",
    body: `Our website may use cookies or similar technologies to understand how visitors use the
      site and to improve performance. You can control or disable cookies through your browser
      settings at any time.`,
  },
  {
    heading: "Data sharing",
    body: `We may share information with trusted service providers who help us run our business,
      such as payment processors or scheduling tools, and only to the extent necessary for them to
      perform their function. We do not share your information for marketing purposes without your
      consent.`,
  },
  {
    heading: "Data retention",
    body: `We retain personal information only for as long as necessary to fulfil the purposes
      outlined in this policy, including any legal, accounting or reporting requirements.`,
  },
  {
    heading: "Your rights",
    body: `You have the right to access, correct or request deletion of the personal information we
      hold about you. To make a request, please contact us using the details below.`,
  },
  {
    heading: "Contact us",
    body: `If you have any questions about this privacy policy or how your information is handled,
      please get in touch at ${CONTACT.email} or ${CONTACT.phone}.`,
  },
]

export default function PrivacyPage() {
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
              Privacy policy
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
