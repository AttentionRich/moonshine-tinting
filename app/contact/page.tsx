export const runtime = "edge"

import type { Metadata } from "next"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import BookingForm from "@/components/sections/BookingForm"
import Reveal from "@/components/ui/Reveal"
import { CONTACT, HOURS_LINES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact | MoonShine Window Tinting & Car Valeting",
  description:
    "Get in touch with MoonShine for window tinting, car valeting and detailing in Dublin. Call, WhatsApp or email us to book your appointment.",
  alternates: {
    canonical: "https://www.moonshine.ie/contact",
  },
  openGraph: {
    title: "Contact | MoonShine Window Tinting & Car Valeting",
    description:
      "Get in touch with MoonShine for window tinting, car valeting and detailing in Dublin.",
    url: "https://www.moonshine.ie/contact",
  },
}

const contactCards = [
  {
    label: "Call us",
    value: CONTACT.phone,
    href: CONTACT.phoneTel,
    cta: "Call now",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsapp,
    href: CONTACT.whatsappUrl,
    cta: "Message us",
    external: true,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    cta: "Send email",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v10.5c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 012.25 17.25V6.75zM3.75 6.75l8.25 6.75 8.25-6.75" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Header */}
        <section className="bg-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
                Get in touch
              </p>
              <h1 className="heading-hero font-semibold tracking-tight text-white mb-4">
                Contact MoonShine
              </h1>
              <p className="text-body text-lg max-w-2xl mx-auto lg:mx-0">
                Questions, quotes or ready to book? Reach us by phone, WhatsApp or email, or fill
                in the form to send us your booking details on WhatsApp.
              </p>
            </div>
            <Reveal delay={75}>
              <BookingForm />
            </Reveal>
          </div>
        </section>

        {/* Contact cards */}
        <section className="bg-background-alt py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactCards.map((card, i) => (
                <Reveal key={card.label} delay={i * 75}>
                  <div className="h-full flex flex-col items-start gap-4 bg-surface border border-surface-border
                    rounded-2xl card-shadow p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-blue/40">
                    <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue-bright">
                      {card.icon}
                    </span>
                    <div>
                      <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-1">
                        {card.label}
                      </p>
                      <p className="text-white text-lg font-semibold tracking-tight">{card.value}</p>
                    </div>
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="mt-auto inline-flex items-center justify-center min-h-[44px] w-full
                        bg-brand-blue text-white text-sm font-medium tracking-wide rounded-full px-6
                        hover:bg-brand-blue-dark hover:shadow-[0_0_24px_rgba(63,111,175,0.45)] hover:-translate-y-0.5 transition-all duration-300
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
                    >
                      {card.cta}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Hours + address */}
            <Reveal delay={150} className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl card-shadow border border-surface-border bg-surface p-8">
                  <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-3">
                    Opening hours
                  </p>
                  <p className="text-white text-base font-medium leading-relaxed">
                    {HOURS_LINES.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                </div>
                <div className="rounded-2xl card-shadow border border-surface-border bg-surface p-8">
                  <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-3">
                    Location
                  </p>
                  <p className="text-white text-base font-medium leading-relaxed">{CONTACT.address}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Map */}
        <section className="bg-background py-24 lg:py-28">
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
      </main>

      <Footer />
    </>
  )
}
