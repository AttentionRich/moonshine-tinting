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
  "group relative bg-surface border border-surface-border rounded-2xl card-shadow " +
  "transition-all duration-300 ease-out hover:border-brand-blue/40 hover:-translate-y-1.5 " +
  "hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_16px_48px_rgba(0,0,0,0.45)]"

const accentBar = (
  <div
    className="absolute top-0 left-0 right-0 h-[2px] bg-brand-blue rounded-t-2xl
      scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
    aria-hidden="true"
  />
)

function Price({ price, className = "" }: { price: string; className?: string }) {
  if (price.startsWith("From ")) {
    const value = price.slice(5)
    return (
      <div className={className}>
        <p className="text-muted text-xs uppercase tracking-widest mb-1">From</p>
        <p className="font-light text-3xl text-brand-blue-bright tracking-tight leading-none">{value}</p>
      </div>
    )
  }
  return (
    <p className={`font-light text-3xl text-brand-blue-bright tracking-tight leading-none ${className}`}>
      {price}
    </p>
  )
}

const viewDetailsLink = (slug: string) => (
  <Link
    href={`/services/${slug}`}
    className="inline-flex items-center gap-2 border border-white/15 text-white
      text-xs font-medium tracking-wide rounded-full px-4 py-2.5 min-h-[44px] whitespace-nowrap
      hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all duration-300
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
  >
    View details
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
          <h3 className="font-semibold text-white tracking-tight text-xl">{name}</h3>
        </div>

        <p className="text-body text-sm leading-relaxed flex-1 line-clamp-1">{description}</p>

        <div className="flex items-center gap-6 md:gap-8 shrink-0">
          <Price price={price} />
          {viewDetailsLink(slug)}
        </div>
      </article>
    )
  }

  return (
    <article className={`${cardClasses} flex flex-col p-6`}>
      {accentBar}

      <Badge className="mb-4 w-fit">{category}</Badge>
      <h3 className="font-semibold text-white tracking-tight text-2xl mb-3">{name}</h3>
      <Price price={price} className="mb-3" />
      <p className="text-body text-sm leading-relaxed mb-5 line-clamp-1">{description}</p>

      {bullets && bullets.length > 0 && (
        <ul className="mb-5 space-y-1.5" aria-label="Key benefits">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-body">
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
