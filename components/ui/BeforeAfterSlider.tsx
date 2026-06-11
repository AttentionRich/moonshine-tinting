"use client"

import { useRef, useState, useCallback } from "react"
import Image from "next/image"

export default function BeforeAfterSlider({
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
              className="w-5 h-5 text-background"
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
