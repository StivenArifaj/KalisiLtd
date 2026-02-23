"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react"
import { useInView } from "@/hooks/use-animations"

const projectTypes = [
  "Reinforced Concrete",
  "Steel Fixing",
  "Formwork",
  "Groundworks",
  "Structural Project",
  "Other",
]

function FloatingField({
  label,
  name,
  type = "text",
  required = true,
  textarea = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  textarea?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  const isActive = focused || hasValue

  const baseClasses =
    "w-full rounded-sm border border-border bg-card px-4 pt-6 pb-2 font-sans text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"

  return (
    <div
      className="relative"
      onClick={() => inputRef.current?.focus()}
    >
      <label
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          isActive
            ? "top-2 text-xs font-medium text-accent"
            : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          name={name}
          rows={4}
          required={required}
          className={`${baseClasses} resize-none`}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false)
            setHasValue(e.target.value.length > 0)
          }}
        />
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          name={name}
          type={type}
          required={required}
          className={baseClasses}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false)
            setHasValue(e.target.value.length > 0)
          }}
        />
      )}
    </div>
  )
}

export function Contact() {
  const { ref, isInView } = useInView(0.1)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectFocused, setSelectFocused] = useState(false)
  const [selectHasValue, setSelectHasValue] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" ref={ref} className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-3/5"
          >
            <h2 className="text-section-heading mb-2 font-serif uppercase tracking-wide text-accent">
              Get a Free Quote
            </h2>
            <p className="mb-8 font-sans text-sm leading-relaxed text-muted-foreground">
              {"Tell us about your project and we'll get back to you within 24 hours."}
            </p>

            {submitted ? (
              <div className="rounded-lg bg-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 font-serif text-2xl uppercase text-foreground">
                  Message Sent
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {"We'll be in touch within 24 hours. Thank you!"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                <FloatingField label="Full Name" name="name" />
                <FloatingField label="Company Name" name="company" required={false} />
                <FloatingField label="Phone Number" name="phone" type="tel" />
                <FloatingField label="Email Address" name="email" type="email" />
                <div className="relative sm:col-span-2">
                  <label
                    className={`pointer-events-none absolute left-4 z-10 transition-all duration-200 ${
                      selectFocused || selectHasValue
                        ? "top-2 text-xs font-medium text-accent"
                        : "top-4 text-sm text-muted-foreground"
                    }`}
                  >
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-sm border border-border bg-card px-4 pt-6 pb-2 font-sans text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    onFocus={() => setSelectFocused(true)}
                    onBlur={(e) => {
                      setSelectFocused(false)
                      setSelectHasValue(e.target.value.length > 0)
                    }}
                    onChange={(e) => setSelectHasValue(e.target.value.length > 0)}
                  >
                    <option value="" disabled hidden />
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <FloatingField label="Message" name="message" textarea />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex min-h-[48px] w-full items-center justify-center rounded-sm bg-accent px-8 py-3 font-sans text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all hover:brightness-110 disabled:opacity-70"
                  >
                    {submitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      "Send Message \u2192"
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="rounded-lg bg-dark-section p-8">
              <h3 className="mb-6 font-serif text-2xl uppercase tracking-wide text-white">
                Kalisi Ltd
              </h3>
              <div className="space-y-0">
                {/* PLACEHOLDER - Replace with actual contact details */}
                <div className="flex items-start gap-4 border-b border-accent/20 py-4">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                      Phone
                    </p>
                    <a
                      href="tel:+447000000000"
                      className="font-sans text-sm text-white transition-colors hover:text-accent"
                    >
                      +44 7000 000000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b border-accent/20 py-4">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:info@kalisi.co.uk"
                      className="font-sans text-sm text-white transition-colors hover:text-accent"
                    >
                      info@kalisi.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b border-accent/20 py-4">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                      Address
                    </p>
                    <p className="font-sans text-sm text-white">
                      London, United Kingdom
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b border-accent/20 py-4">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                      Hours
                    </p>
                    <p className="font-sans text-sm text-white">
                      Mon\u2013Fri: 7:00am \u2013 6:00pm
                    </p>
                    <p className="font-sans text-sm text-white">
                      Sat: 8:00am \u2013 2:00pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="mt-6 flex gap-4">
                {/* PLACEHOLDER - Replace with actual social links */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-sm text-accent transition-colors hover:bg-accent/10"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-sm text-accent transition-colors hover:bg-accent/10"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-sm text-accent transition-colors hover:bg-accent/10"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
