"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "@/hooks/use-animations"

export function About() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section id="about" ref={ref} className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 md:flex-row md:gap-16">

        {/* Image — workers on building top with rebar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full md:order-2 md:w-1/2"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg md:aspect-[4/3]">
            <Image
              src="/images/workers-rebar-top.jpg"
              alt="Kalisi Ltd workers on a reinforced concrete frame with steel rebar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full md:order-1 md:w-1/2"
        >
          <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.15em] text-accent">
            Who We Are
          </p>
          <h2 className="text-section-heading mb-3 font-serif uppercase tracking-wide text-foreground">
            Structural Specialists You Can Trust
          </h2>
          <div className="mb-6 h-[3px] w-16 bg-accent" />
          <p className="mb-6 font-sans leading-relaxed text-muted-foreground">
            Kalisi Ltd is a London-based construction specialist with deep expertise in reinforced concrete works, steel fixing, and structural concrete frames. From residential foundations to large-scale commercial builds, we bring precision, reliability, and craft to every project. Our teams are fully trained and committed to delivering on time — every time.
          </p>

          {/* Badge chips */}
          <div className="mb-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/10 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
              ✓ Professional Team
            </span>
            <span className="inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/10 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
              ✓ 30 Small Projects / Homes
            </span>
            <span className="inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/10 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
              ✓ 5 Big Projects
            </span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent transition-all hover:gap-3"
          >
            Work With Us <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}