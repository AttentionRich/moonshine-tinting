import { serviceAreas } from "@/lib/constants"

export default function ServiceAreas() {
  return (
    <section
      className="bg-background py-24 lg:py-32"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
            We Come to You
          </p>
          <h2
            id="areas-heading"
            className="font-display heading-xl text-white uppercase"
          >
            Serving Dublin &amp; Surrounds
          </h2>
          <p className="text-muted text-sm mt-4 max-w-xl mx-auto">
            Based in Dublin, we serve customers across the greater Dublin area — from the city centre to the suburbs and beyond.
          </p>
        </div>

        {/* Tag cloud */}
        <ul
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
          role="list"
          aria-label="Service areas"
        >
          {serviceAreas.map((area) => (
            <li key={area}>
              <span
                className="inline-block bg-surface border border-surface-border text-muted text-xs font-medium
                  uppercase tracking-wider px-3 py-1.5 hover:border-brand-blue hover:text-brand-blue
                  transition-colors duration-200 cursor-default"
              >
                {area}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
