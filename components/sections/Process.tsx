const steps = [
  {
    number: "01",
    heading: "Get a Quote",
    body: "Contact us by phone or WhatsApp with your vehicle details and the service you need. We'll provide a transparent, no-obligation quote — usually within the hour.",
  },
  {
    number: "02",
    heading: "Book Your Slot",
    body: "Choose a day and time that works for you. We offer same-week availability and flexible hours Monday to Saturday 8AM–7PM and Sunday 10AM–3PM.",
  },
  {
    number: "03",
    heading: "Drive Away Protected",
    body: "Drop your vehicle at our Dublin workshop and collect it fully transformed. Every installation is quality-checked before handover. Your car, elevated.",
  },
]

export default function Process() {
  return (
    <section
      className="bg-background py-24 lg:py-32"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Simple & Straightforward
          </p>
          <h2
            id="process-heading"
            className="font-display heading-xl text-white uppercase"
          >
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" role="list">
          {/* Connector lines (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-1/3 right-1/3 h-[1px] bg-brand-blue/30"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <li key={step.number} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              {/* Step connector line mobile */}
              {index < steps.length - 1 && (
                <div
                  className="md:hidden absolute top-[3.5rem] left-1/2 -translate-x-1/2 w-[1px] h-12 bg-brand-blue/30"
                  aria-hidden="true"
                />
              )}

              {/* Number */}
              <div
                className="relative z-10 font-display text-7xl leading-none text-brand-blue select-none mb-4"
                aria-hidden="true"
              >
                {step.number}
              </div>

              <h3 className="font-display text-3xl text-white uppercase mb-3">
                {step.heading}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
