const indicators = [
  {
    icon: (
      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    value: "5-Star Rated",
    label: "Google Reviews",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    value: "500+ Vehicles",
    label: "Successfully Completed",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    value: "Dublin-Based",
    label: "Serving All of Dublin",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    value: "Certified Installers",
    label: "Factory-Trained Technicians",
  },
]

export default function TrustIndicators() {
  return (
    <section
      className="bg-surface border-t border-surface-border"
      aria-label="Trust indicators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
          role="list"
          aria-label="Why choose MoonShine"
        >
          {indicators.map((item) => (
            <li
              key={item.value}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
            >
              <div className="shrink-0">{item.icon}</div>
              <div>
                <p className="font-display text-2xl text-white uppercase leading-none">
                  {item.value}
                </p>
                <p className="text-muted text-xs mt-1">{item.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
