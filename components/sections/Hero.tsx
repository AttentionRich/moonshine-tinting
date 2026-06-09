import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center bg-[#0d0d0d]"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="https://pub-714a75a88016476c930af6cc982140b7.r2.dev/website/hero.jpg"
        alt="Professional window tinting being applied to a luxury car in Dublin"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay — dark on left for readability, lighter on right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl border-l-4 border-brand-blue pl-8">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">
            Dublin&apos;s Premier Automotive Specialist
          </p>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white uppercase leading-none mb-6">
            Professional Window Tinting in Dublin
          </h1>

          <p className="text-muted text-lg sm:text-xl leading-relaxed mb-8 font-body">
            Premium tinting, detailing and vehicle enhancement. Cars, SUVs &amp; Vans.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white
                text-sm font-semibold uppercase tracking-widest px-8 py-3.5
                hover:bg-brand-blue-dark transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
            >
              Book Now
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center border border-white text-white
                text-sm font-semibold uppercase tracking-widest px-8 py-3.5
                hover:bg-white hover:text-background transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Trust bar */}
        <div
          className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted text-xs sm:text-sm
            font-medium uppercase tracking-widest border-t border-white/10 pt-6"
          aria-label="Trust indicators"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-yellow-400" aria-hidden="true">★★★★★</span>
            Dublin&apos;s #1 Rated Tinting Specialist
          </span>
          <span className="text-white/20 hidden sm:inline" aria-hidden="true">·</span>
          <span>5★ Rated</span>
          <span className="text-white/20 hidden sm:inline" aria-hidden="true">·</span>
          <span>Ceramic &amp; PPF Specialists</span>
        </div>
      </div>
    </section>
  )
}
