import Reveal from "@/components/ui/Reveal"

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    heading: "Ceramic-Grade Films",
    body: "We install only premium ceramic and nano-ceramic window films that block infrared heat, reduce glare and carry a lifetime warranty against fading, bubbling or peeling.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    heading: "Guaranteed Workmanship",
    body: "Every installation is backed by our workmanship guarantee. If you're not completely satisfied with the quality of our work, we'll fix it at no additional cost — no questions asked.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    heading: "Dublin-Based & Insured",
    body: "We are a fully insured, Dublin-based specialist. Your vehicle is always in safe hands in our secure workshop. We hold full public and employers' liability insurance.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    heading: "Same-Week Bookings",
    body: "We understand your time is valuable. We offer flexible scheduling with same-week availability for most services, open Monday to Saturday 8AM–7PM and Sunday 10AM–3PM.",
  },
]

export default function WhyChooseUs() {
  return (
    <section
      className="bg-background-alt py-24 lg:py-28"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="text-center mb-14">
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-3">
            The MoonShine difference
          </p>
          <h2
            id="why-heading"
            className="heading-xl font-semibold tracking-tight text-white"
          >
            Why choose us
          </h2>
        </Reveal>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          role="list"
        >
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.heading}
              as="li"
              delay={i * 75}
              className="bg-surface border border-surface-border rounded-2xl card-shadow p-6 lg:p-8 group
                hover:border-brand-blue/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="text-brand-blue-bright mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-xl text-white tracking-tight mb-3">
                {reason.heading}
              </h3>
              <p className="text-body text-sm leading-relaxed">{reason.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
