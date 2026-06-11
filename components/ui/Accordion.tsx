"use client"

import { useState } from "react"

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: readonly AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="rounded-2xl border border-surface-border bg-surface divide-y divide-surface-border overflow-hidden card-shadow">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const headingId = `faq-heading-${index}`
        const panelId = `faq-panel-${index}`

        return (
          <div key={index}>
            <h3>
              <button
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 min-h-[44px] px-6 py-5 text-left
                  text-white font-medium text-base hover:text-brand-blue-bright transition-colors duration-300
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-inset"
              >
                <span>{item.question}</span>
                <span
                  className={`shrink-0 w-5 h-5 flex items-center justify-center text-brand-blue-bright
                    transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={`overflow-hidden transition-all duration-300 px-6 ${
                isOpen ? "pb-5" : ""
              }`}
            >
              <p className="text-body text-sm leading-relaxed">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
