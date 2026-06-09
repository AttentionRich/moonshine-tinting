"use client"

import { useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"

const R2 = "https://pub-714a75a88016476c930af6cc982140b7.r2.dev/website"

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label,
}: {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  label: string
}) {
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }, [])

  return (
    <div>
      <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-3">{label}</p>
      <div
        ref={containerRef}
        className="relative aspect-[16/9] overflow-hidden select-none cursor-col-resize"
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX) }}
        onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX) }}
        onMouseUp={() => { dragging.current = false }}
        onMouseLeave={() => { dragging.current = false }}
        onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX) }}
        onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX) }}
        onTouchEnd={() => { dragging.current = false }}
      >
        {/* Before image — base layer */}
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />

        {/* After image — clipped to reveal only the right portion */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          aria-hidden="true"
        >
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[#1A1A1A]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* Corner labels */}
        <span className="absolute top-3 left-3 z-10 bg-black/70 text-white text-xs font-semibold uppercase tracking-wider px-2 py-1 pointer-events-none">
          Before
        </span>
        <span className="absolute top-3 right-3 z-10 bg-brand-blue text-white text-xs font-semibold uppercase tracking-wider px-2 py-1 pointer-events-none">
          After
        </span>
      </div>
    </div>
  )
}

const gridImages = [
  {
    src: `${R2}/GT86-rear.jpg`,
    alt: "Toyota GT86 rear window tinting",
    caption: "Toyota GT86 — Window Tinting",
  },
  {
    src: `${R2}/GT86-side.jpg`,
    alt: "Toyota GT86 side profile with window tint",
    caption: "Toyota GT86 — Side Profile",
  },
  {
    src: `${R2}/S2000-close.jpg`,
    alt: "Honda S2000 close-up detail shot",
    caption: "Honda S2000 — Detail Shot",
  },
  {
    src: `${R2}/S2000-front.jpg`,
    alt: "Honda S2000 front with car wrap",
    caption: "Honda S2000 — Car Wrap",
  },
  {
    src: `${R2}/S2000-rear.jpg`,
    alt: "Honda S2000 rear view",
    caption: "Honda S2000 — Rear",
  },
]

export default function Gallery() {
  return (
    <section
      className="bg-background py-20 lg:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-5xl sm:text-6xl text-white uppercase"
          >
            Latest Projects
          </h2>
        </div>

        {/* Before/After sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <BeforeAfterSlider
            beforeSrc={`${R2}/Before-tint.jpg`}
            afterSrc={`${R2}/After-tint.jpg`}
            beforeAlt="Car before window tinting"
            afterAlt="Car after window tinting"
            label="Car Tint — Before & After"
          />
          <BeforeAfterSlider
            beforeSrc={`${R2}/Before%20Tint%20House.jpg`}
            afterSrc={`${R2}/After%20Tint%20House.jpg`}
            beforeAlt="House before window tinting"
            afterAlt="House after window tinting"
            label="House Tint — Before & After"
          />
        </div>

        {/* Gallery grid — 2 cols mobile, 3 cols desktop */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-10"
          aria-label="Gallery of completed projects"
        >
          {gridImages.map((item) => (
            <div key={item.src} className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                  opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block text-white text-xs font-semibold uppercase tracking-widest
                  border border-brand-blue/60 px-2 py-1">
                  {item.caption}
                </span>
              </div>
              <div
                className="absolute inset-0 border-2 border-transparent group-hover:border-brand-blue
                  transition-colors duration-300 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue
              text-sm font-semibold uppercase tracking-widest px-8 py-3.5
              hover:bg-brand-blue hover:text-white transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
