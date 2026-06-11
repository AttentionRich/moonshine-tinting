import Accordion from "@/components/ui/Accordion"
import { faqs } from "@/lib/constants"

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function FAQ() {
  return (
    <section
      className="bg-background py-24 lg:py-32"
      aria-labelledby="faq-heading"
    >
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: header */}
          <div>
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2
              id="faq-heading"
              className="font-display heading-xl text-white uppercase mb-6"
            >
              FAQ
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Have a question not answered here? We&apos;re happy to help — call or WhatsApp us directly.
            </p>
            <a
              href="tel:+35312345678"
              className="inline-flex items-center gap-2 text-brand-blue text-sm font-semibold
                uppercase tracking-widest hover:text-white transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Directly
            </a>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-2">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  )
}
