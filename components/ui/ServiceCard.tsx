import Link from "next/link"
import Badge from "./Badge"

interface ServiceCardProps {
  category: string
  name: string
  price: string
  description: string
  bullets?: readonly string[]
  slug: string
  variant?: "featured" | "wide"
}

export default function ServiceCard({
  category,
  name,
  price,
  description,
  bullets,
  slug,
  variant = "featured",
}: ServiceCardProps) {
  const isWide = variant === "wide"

  return (
    <article
      className={`
        group relative bg-surface border border-surface-border
        transition-all duration-300
        hover:border-brand-blue
        ${isWide ? "flex items-center gap-6 p-6" : "flex flex-col p-6"}
      `}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-brand-blue
          scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        aria-hidden="true"
      />

      <div className={isWide ? "flex-1 min-w-0" : ""}>
        <Badge className="mb-3">{category}</Badge>
        <h3
          className={`font-display text-white uppercase leading-none mb-2 ${
            isWide ? "text-3xl" : "text-4xl"
          }`}
        >
          {name}
        </h3>
        <p className="text-brand-blue font-semibold text-lg mb-3">{price}</p>
        <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
        {bullets && bullets.length > 0 && (
          <ul className="mb-5 space-y-1.5" aria-label="Key benefits">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={isWide ? "shrink-0" : ""}>
        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue
            text-xs font-semibold uppercase tracking-widest px-4 py-2
            hover:bg-brand-blue hover:text-white transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
