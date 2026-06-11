import Reveal from "@/components/ui/Reveal"
import { serviceAreas } from "@/lib/constants"

export default function ServiceAreas() {
  return (
    <section
      className="bg-background py-24 lg:py-28"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="text-center mb-10">
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
            We come to you
          </p>
          <h2
            id="areas-heading"
            className="heading-xl font-semibold tracking-tight text-white"
          >
            Serving Dublin &amp; surrounds
          </h2>
          <p className="text-body text-sm mt-4 max-w-xl mx-auto">
            Based in Dublin, we serve customers across the greater Dublin area — from the city centre to the suburbs and beyond.
          </p>
        </Reveal>

        {/* Tag cloud */}
        <Reveal delay={75}>
          <ul
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
            role="list"
            aria-label="Service areas"
          >
            {serviceAreas.map((area) => (
              <li key={area}>
                <span
                  className="inline-block bg-surface border border-surface-border text-muted text-xs font-medium
                    tracking-wide rounded-full px-4 py-2 hover:border-brand-blue/40 hover:text-white
                    transition-colors duration-300 cursor-default"
                >
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
