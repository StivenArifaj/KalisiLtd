"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react"
import { useForm } from "@formspree/react"
import { useInView } from "@/hooks/use-animations"

const projectTypes = [
  "Reinforced Concrete",
  "Steel Fixing",
  "Formwork",
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
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${isActive
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
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "")
  const [selectFocused, setSelectFocused] = useState(false)
  const [selectHasValue, setSelectHasValue] = useState(false)

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

            {state.succeeded ? (
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
                <FloatingField label="Company Name (Optional)" name="company" required={false} />
                <FloatingField label="Phone Number" name="phone" type="tel" />
                <FloatingField label="Email Address" name="email" type="email" />
                <div className="relative sm:col-span-2">
                  <label
                    className={`pointer-events-none absolute left-4 z-10 transition-all duration-200 ${selectFocused || selectHasValue
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
                    disabled={state.submitting}
                    className="flex min-h-[48px] w-full items-center justify-center rounded-sm bg-accent px-8 py-3 font-sans text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all hover:brightness-110 disabled:opacity-70"
                  >
                    {state.submitting ? (
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
                <div className="flex items-start gap-4 border-b border-accent/20 py-4">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="mb-2 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                      Phone
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+447351635413"
                        className="font-sans text-sm text-white transition-colors hover:text-accent block"
                      >
                        +44 7351 635413
                      </a>
                      <a
                        href="tel:+447915590842"
                        className="font-sans text-sm text-white transition-colors hover:text-accent block"
                      >
                        +44 7915 590842
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b border-accent/20 py-4">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="mb-2 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <div className="flex flex-col gap-3">
                      <div>
                        <a
                          href="mailto:erion_cena@icloud.com"
                          className="block font-sans text-sm text-white transition-colors hover:text-accent"
                        >
                          erion_cena@icloud.com
                        </a>
                        <p className="mt-0.5 font-sans text-xs text-muted-foreground">
                          Company Director
                        </p>
                      </div>
                      <div>
                        <a
                          href="mailto:cenajmanuel@icloud.com"
                          className="block font-sans text-sm text-white transition-colors hover:text-accent"
                        >
                          cenajmanuel@icloud.com
                        </a>
                        <p className="mt-0.5 font-sans text-xs text-muted-foreground">
                          Company Director
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b border-accent/20 py-4">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                      Address
                    </p>
                    <p className="font-sans text-sm text-white">
                      London, Cornwall
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
                      Mon–Sat: 8:00am – 5:00pm
                    </p>
                    <p className="font-sans text-sm text-white">
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
