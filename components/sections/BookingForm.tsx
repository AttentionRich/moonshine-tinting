"use client"

import { useState } from "react"
import { CONTACT, services } from "@/lib/constants"

const fieldClasses =
  "w-full rounded-2xl bg-surface border border-surface-border text-white text-base placeholder:text-muted px-4 py-3.5 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors duration-300"

const labelClasses = "block text-muted text-xs font-semibold uppercase tracking-widest mb-2"

export default function BookingForm() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [service, setService] = useState("")
  const [carReg, setCarReg] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = () => {
    if (!name.trim() || !number.trim() || !service || !carReg.trim()) {
      setError("Please fill in all fields to send your booking request.")
      return
    }

    setError("")

    const message = `Hi MoonShine, I'd like to book a ${service}.\nName: ${name}\nNumber: ${number}\nCar Reg: ${carReg}`
    const url = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`
    window.location.href = url
  }

  return (
    <div className="rounded-2xl card-shadow border border-surface-border bg-surface p-6 sm:p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="booking-name" className={labelClasses}>
            Name
          </label>
          <input
            id="booking-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClasses}
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label htmlFor="booking-number" className={labelClasses}>
            Number
          </label>
          <input
            id="booking-number"
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={fieldClasses}
            placeholder="Your phone number"
            required
          />
        </div>

        <div>
          <label htmlFor="booking-service" className={labelClasses}>
            Service
          </label>
          <div className="relative">
            <select
              id="booking-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`${fieldClasses} appearance-none pr-10`}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>

        <div>
          <label htmlFor="booking-car-reg" className={labelClasses}>
            Car Reg Number
          </label>
          <input
            id="booking-car-reg"
            type="text"
            value={carReg}
            onChange={(e) => setCarReg(e.target.value)}
            className={fieldClasses}
            placeholder="e.g. 12-D-12345"
            required
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm" role="alert">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full inline-flex items-center justify-center min-h-[44px] bg-whatsapp text-white text-sm
            font-medium tracking-wide rounded-full px-6 py-3.5 hover:opacity-90 hover:-translate-y-0.5
            transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
            focus-visible:ring-offset-2 focus-visible:ring-offset-whatsapp"
        >
          Book via WhatsApp
        </button>
      </div>
    </div>
  )
}
