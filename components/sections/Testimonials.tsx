import Reveal from "@/components/ui/Reveal"
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
  return (
    <section
      className="bg-background-alt py-24 lg:py-28"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
              What our customers say
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
              className="heading-xl font-semibold tracking-tight text-white"
            >
              Google reviews
            </h2>
          </div>

          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 text-white
              text-sm font-medium tracking-wide rounded-full px-6 py-3 min-h-[44px]
              hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 shrink-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            Review us on Google
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </Reveal>

        {/* Review cards — scroll-snap carousel on mobile, grid on desktop */}
        <div
          className="flex md:grid md:grid-cols-3 gap-4
            overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
          aria-label="Customer reviews"
        >
          {reviews.map((review, index) => (
            <Reveal
              key={review.id}
              delay={index * 75}
              className="snap-start shrink-0 w-[85%] md:w-auto bg-surface border border-surface-border rounded-2xl card-shadow p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar initials */}
                <div
                  className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center
                    text-white text-sm font-semibold shrink-0"
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
                <p className="text-body text-sm leading-relaxed line-clamp-5">
                  &ldquo;{review.text}&rdquo;
                </p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
