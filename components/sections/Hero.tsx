import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative min-h-[85svh] lg:min-h-[92vh] flex items-center bg-[#0A0A0B] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="https://pub-714a75a88016476c930af6cc982140b7.r2.dev/website/hero.jpg"
        alt="Professional window tinting being applied to a luxury car in Dublin"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-[0.65]"
      />

      {/* Full-cover darkening layer */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Gradient overlay — darkest where the text sits: bottom on mobile, left on desktop */}
      <div
        className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/85 via-black/60 to-black/30"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-brand-blue-bright text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-5">
            Dublin&apos;s Premier Automotive Specialist
          </p>

          <h1 className="heading-hero font-semibold tracking-tight text-white mb-6">
            Professional window tinting in Dublin
          </h1>

          <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Premium tinting, detailing and vehicle enhancement for cars, SUVs &amp; vans.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white
                text-sm font-medium tracking-wide px-8 py-3.5 rounded-full min-h-[44px]
                hover:bg-brand-blue-dark hover:shadow-[0_0_24px_rgba(63,111,175,0.45)] hover:-translate-y-0.5 transition-all duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
            >
              Book now
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center border border-white/25 text-white
                text-sm font-medium tracking-wide px-8 py-3.5 rounded-full min-h-[44px] backdrop-blur-sm
                hover:bg-white hover:text-background hover:border-white transition-all duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View gallery
            </Link>
          </div>
        </div>

        {/* Trust bar */}
        <div
          className="mt-14 sm:mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/55 text-xs sm:text-sm
            font-medium uppercase tracking-widest border-t border-white/10 pt-6"
          aria-label="Trust indicators"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-yellow-400 normal-case" aria-hidden="true">★★★★★</span>
            Dublin&apos;s #1 rated tinting specialist
          </span>
          <span className="text-white/20 hidden sm:inline" aria-hidden="true">·</span>
          <span>4.9★ rated</span>
          <span className="text-white/20 hidden sm:inline" aria-hidden="true">·</span>
          <span>Ceramic &amp; PPF specialists</span>
        </div>
      </div>
    </section>
  )
}
