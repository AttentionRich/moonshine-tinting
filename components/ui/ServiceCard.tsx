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

const cardClasses =
  "group relative bg-surface border border-surface-border shadow-[0_4px_24px_rgba(0,0,0,0.4)] " +
  "transition-all duration-300 hover:border-brand-blue hover:-translate-y-1"

const accentBar = (
  <div
    className="absolute top-0 left-0 right-0 h-[2px] bg-brand-blue
      scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
    aria-hidden="true"
  />
)

const viewDetailsLink = (slug: string) => (
  <Link
    href={`/services/${slug}`}
    className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue
      text-xs font-semibold uppercase tracking-widest px-4 py-2 whitespace-nowrap
      hover:bg-brand-blue hover:text-white transition-colors duration-200
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
  >
    View Details
  </Link>
)

export default function ServiceCard({
  category,
  name,
  price,
  description,
  bullets,
  slug,
  variant = "featured",
}: ServiceCardProps) {
  if (variant === "wide") {
    return (
      <article className={`${cardClasses} flex flex-col md:flex-row md:items-center gap-6 p-6`}>
        {accentBar}

        <div className="md:w-1/4 shrink-0">
          <Badge className="mb-2">{category}</Badge>
          <h3 className="font-display text-white uppercase leading-none text-3xl">{name}</h3>
        </div>

        <p className="text-muted text-sm leading-relaxed flex-1 line-clamp-1">{description}</p>

        <div className="flex items-center gap-6 md:gap-8 shrink-0">
          <p className="font-display uppercase text-brand-blue-bright text-2xl font-bold leading-none whitespace-nowrap">
            {price}
          </p>
          {viewDetailsLink(slug)}
        </div>
      </article>
    )
  }

  return (
    <article className={`${cardClasses} flex flex-col p-6`}>
      {accentBar}

      <Badge className="mb-3">{category}</Badge>
      <h3 className="font-display text-white uppercase leading-none text-4xl mb-3">{name}</h3>
      <p className="font-display uppercase text-brand-blue-bright text-3xl font-bold leading-none mb-3">
        {price}
      </p>
      <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-1">{description}</p>

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

      <div className="mt-auto pt-1">{viewDetailsLink(slug)}</div>
    </article>
  )
}
