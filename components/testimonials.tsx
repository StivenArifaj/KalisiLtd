"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useInView } from "@/hooks/use-animations"

const testimonials = [
  {
    quote:
      "Kalisi's team delivered our entire concrete frame on schedule and to a very high standard. Communication was excellent throughout.",
    name: "James T.",
  },
  {
    quote:
      "Exceptional steel fixing work on our residential development. Professional, safe, and precise. Will use again without question.",
    name: "Nathan J",
  },
  {
    quote:
      "From foundations to the structural frame \u2014 Kalisi handled everything. Trusted partners on multiple projects now.",
    name: "David R.",
  },
]

export function Testimonials() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.15em] text-accent">
            Testimonials
          </p>
          <h2 className="text-section-heading font-serif uppercase tracking-wide text-foreground">
            What Clients Say
          </h2>
        </motion.div>

        {/* Desktop row */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-lg border-l-[3px] border-accent bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mb-6 font-sans text-sm italic leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </p>
              <div>
                <p className="font-sans text-sm font-bold text-foreground">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="flex gap-4 overflow-x-auto snap-scroll-x hide-scrollbar pb-4 md:hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + "-mobile"}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="w-[85vw] flex-shrink-0 rounded-lg border-l-[3px] border-accent bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mb-6 font-sans text-sm italic leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </p>
              <div>
                <p className="font-sans text-sm font-bold text-foreground">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
