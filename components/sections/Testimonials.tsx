"use client"

import { useState } from "react"
import { reviews } from "@/lib/constants"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-surface-border"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = reviews.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <section
      className="bg-background-alt py-24 lg:py-32"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
              What Our Customers Say
            </p>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold text-lg">4.9</span>
              <span className="text-muted text-sm">(50+ reviews)</span>
            </div>
            <h2
              id="reviews-heading"
              className="font-display heading-xl text-white uppercase"
            >
              Google Reviews
            </h2>
          </div>

          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue
              text-xs font-semibold uppercase tracking-widest px-5 py-3
              hover:bg-brand-blue hover:text-white transition-colors duration-200 shrink-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            Review Us on Google
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>

        {/* Review cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          aria-live="polite"
          aria-label="Customer reviews"
        >
          {reviews.map((review, index) => (
              <article
                key={review.id}
                className={`bg-surface border border-surface-border shadow-[0_4px_24px_rgba(0,0,0,0.4)] p-6
                  ${index !== current ? "hidden md:block" : "block"}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar initials */}
                  <div
                    className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center
                      text-white text-sm font-bold shrink-0"
                    aria-hidden="true"
                  >
                    {review.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-muted text-xs">{review.timeAgo}</p>
                  </div>
                </div>

                <StarRating rating={review.rating} />

                <blockquote className="mt-4">
                  <p className="text-muted text-sm leading-relaxed line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </blockquote>
              </article>
          ))}
        </div>

        {/* Navigation arrows (mobile) */}
        <div className="flex items-center justify-center gap-4 md:hidden">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="w-10 h-10 flex items-center justify-center border border-surface-border text-muted
              hover:border-brand-blue hover:text-brand-blue transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex gap-2" aria-label="Review pagination" role="group">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to review ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className={`w-2 h-2 rounded-full transition-colors duration-200
                  ${i === current ? "bg-brand-blue" : "bg-surface-border hover:bg-muted"}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="w-10 h-10 flex items-center justify-center border border-surface-border text-muted
              hover:border-brand-blue hover:text-brand-blue transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
