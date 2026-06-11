export const CONTACT = {
  phone: "+353 1 234 5678",
  phoneTel: "tel:+35312345678",
  whatsapp: "+353 87 234 5678",
  whatsappUrl: "https://wa.me/353872345678",
  email: "info@moonshine.ie",
  address: "Dublin, Ireland",
} as const

export const HOURS_LINES = ["Mon-Sat: 8:00 AM - 7:00 PM", "Sun: 10:00 AM - 3:00 PM"] as const

export const R2 = "https://pub-714a75a88016476c930af6cc982140b7.r2.dev/website" as const

export const galleryImages = [
  {
    src: `${R2}/GT86-rear.jpg`,
    alt: "Toyota GT86 rear window tinting",
  },
  {
    src: `${R2}/GT86-side.jpg`,
    alt: "Toyota GT86 side profile with window tint",
  },
  {
    src: `${R2}/S2000-close.jpg`,
    alt: "Honda S2000 close-up detail shot",
  },
  {
    src: `${R2}/S2000-front.jpg`,
    alt: "Honda S2000 front with car wrap",
  },
  {
    src: `${R2}/S2000-rear.jpg`,
    alt: "Honda S2000 rear view",
  },
] as const

export const beforeAfterPairs = [
  {
    beforeSrc: `${R2}/Before-tint.jpg`,
    afterSrc: `${R2}/After-tint.jpg`,
    beforeAlt: "Car before window tinting",
    afterAlt: "Car after window tinting",
    label: "Car Tint — Before & After",
  },
  {
    beforeSrc: `${R2}/Before%20Tint%20House.jpg`,
    afterSrc: `${R2}/After%20Tint%20House.jpg`,
    beforeAlt: "House before window tinting",
    afterAlt: "House after window tinting",
    label: "House Tint — Before & After",
  },
] as const

export const services = [
  {
    slug: "window-tinting",
    name: "Window Tinting",
    category: "Tinting",
    price: "From €150",
    description: "Professional automotive window tinting using premium ceramic films for cars, SUVs and vans.",
    featured: true,
  },
  {
    slug: "car-valeting",
    name: "Car Valeting",
    category: "Valeting",
    price: "From €80",
    description: "Full interior and exterior valeting to restore your vehicle to showroom condition.",
    featured: true,
  },
  {
    slug: "vehicle-detailing",
    name: "Vehicle Detailing",
    category: "Detailing",
    price: "From €130",
    description: "Multi-stage machine polishing and detailing for a flawless, glass-like finish.",
    featured: true,
  },
  {
    slug: "car-wrapping",
    name: "Car Wrapping",
    category: "Enhancement",
    price: "From €800",
    description: "Full and partial vehicle wraps in any colour or finish, protecting your paintwork beneath.",
    featured: false,
  },
  {
    slug: "paint-protection-film",
    name: "Paint Protection Film (PPF)",
    category: "Enhancement",
    price: "From €400",
    description: "Self-healing PPF shields your paint from stone chips, scratches and road debris.",
    featured: false,
  },
  {
    slug: "3-stage-polishing",
    name: "3 Stage Polishing",
    category: "Detailing",
    price: "From €300",
    description: "Three-stage machine polish removes swirl marks, oxidation and deep scratches for a mirror finish.",
    featured: false,
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    category: "Enhancement",
    price: "From €80",
    description: "Restore yellowed or hazy headlights to crystal clarity, improving safety and aesthetics.",
    featured: false,
  },
  {
    slug: "residential-window-tinting",
    name: "Residential Window Tinting",
    category: "Tinting",
    price: "From €200",
    description: "Reduce glare and heat in your home while adding privacy with professional window film.",
    bullets: [
      "Extra privacy",
      "Anti-glare",
      "UV protection",
      "Heat resistant",
      "Changes the look of your home with a sleek mirror finish",
    ],
    featured: false,
  },
  {
    slug: "commercial-window-tinting",
    name: "Commercial Window Tinting",
    category: "Tinting",
    price: "POA",
    description: "Custom window film solutions for offices, retail units and commercial properties across Dublin.",
    featured: false,
  },
  {
    slug: "privacy-security-films",
    name: "Privacy & Security Films",
    category: "Tinting",
    price: "From €250",
    description: "Anti-shatter and privacy films that protect against forced entry and reduce interior visibility.",
    featured: false,
  },
] as const

export type Service = typeof services[number]

export const reviews = [
  {
    id: 1,
    name: "Ciarán M.",
    initials: "CM",
    timeAgo: "2 weeks ago",
    rating: 5,
    text: "Absolutely flawless tint job on my BMW. Professional from start to finish. The team were incredibly attentive and the results exceeded my expectations. Will definitely be back.",
  },
  {
    id: 2,
    name: "Aoife R.",
    initials: "AR",
    timeAgo: "1 month ago",
    rating: 5,
    text: "Best detailing in Dublin. My car looks brand new — better than the day I bought it. The attention to detail is second to none. Highly recommend MoonShine to anyone.",
  },
  {
    id: 3,
    name: "David K.",
    initials: "DK",
    timeAgo: "3 months ago",
    rating: 5,
    text: "Very impressed with the PPF install. The team explained the whole process clearly and the finish is incredible. Highly recommend MoonShine for any vehicle protection work.",
  },
] as const

export type Review = typeof reviews[number]

export const faqs = [
  {
    question: "How long does window tinting take?",
    answer: "Most passenger cars take 2–4 hours depending on the number of windows. Larger vehicles like SUVs or vans may take up to 6 hours. We recommend leaving your vehicle with us for the day to allow the film to cure properly before driving.",
  },
  {
    question: "Is window tinting legal in Ireland?",
    answer: "Yes — with conditions. Front side windows must allow at least 70% of light through. The rear windscreen and rear side windows have no legal VLT requirement on private cars. We only install legal films and will advise you on the correct shade before work begins.",
  },
  {
    question: "How do I care for a new tint?",
    answer: "Avoid rolling down tinted windows for 3–5 days after installation to allow the adhesive to fully cure. Do not clean the inside of tinted windows for at least a week. When cleaning, use a soft cloth and ammonia-free cleaner — never abrasive materials or products containing ammonia.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes. All window tinting installations come with a manufacturer-backed warranty covering bubbling, peeling, fading and delamination. Ceramic and premium films carry a lifetime warranty. We also guarantee our workmanship — if you are not fully satisfied, we will remedy it at no cost.",
  },
  {
    question: "Can you tint commercial vehicles?",
    answer: "Absolutely. We regularly tint vans, trucks and commercial fleets across Dublin. We offer competitive fleet pricing for businesses with multiple vehicles. Contact us to discuss your requirements and we will arrange a free on-site assessment.",
  },
  {
    question: "What is PPF and do I need it?",
    answer: "Paint Protection Film (PPF) is a clear, self-healing thermoplastic urethane film applied to your car's painted surfaces. It absorbs impacts from stone chips, scratches and road debris that would otherwise damage your paintwork. It is especially recommended for new cars, high-value vehicles, or any car frequently driven on motorways.",
  },
  {
    question: "How soon can I book an appointment?",
    answer: "We typically have same-week availability for most services. Contact us by phone or WhatsApp and we'll confirm a slot within 24 hours. We operate Monday to Saturday 8AM–7PM and Sunday 10AM–3PM.",
  },
  {
    question: "Do you offer a mobile service?",
    answer: "For select services such as valeting and detailing, we can come to you across Dublin and surrounding areas. Window tinting and PPF installation require our workshop environment for best results. Get in touch to discuss your needs.",
  },
] as const

export type FAQ = typeof faqs[number]

export const serviceAreas = [
  "Dublin 1", "Dublin 2", "Dublin 3", "Dublin 4", "Dublin 5", "Dublin 6",
  "Dublin 7", "Dublin 8", "Dublin 9", "Dublin 10", "Dublin 11", "Dublin 12",
  "Dublin 13", "Dublin 14", "Dublin 15", "Dublin 16", "Dublin 17", "Dublin 18",
  "Swords", "Blanchardstown", "Tallaght", "Dún Laoghaire", "Lucan",
  "Clondalkin", "Finglas", "Santry", "Rathfarnham", "Stillorgan", "Dundrum",
] as const

export type ServiceArea = typeof serviceAreas[number]
