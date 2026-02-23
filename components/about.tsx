"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "@/hooks/use-animations"

export function About() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section id="about" ref={ref} className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 md:flex-row md:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full md:order-2 md:w-1/2"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg md:aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Construction workers on a reinforced concrete frame building site"
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
            Kalisi Ltd is a London-based construction specialist with deep expertise in
            reinforced concrete works, steel fixing, and structural groundworks. From
            residential foundations to large-scale commercial frames, we bring precision,
            reliability, and craft to every project. Our teams are fully trained,
            CSCS-certified, and committed to delivering on time — every time.
          </p>
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-sm bg-accent/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
              CSCS Certified Teams
            </span>
            <span className="inline-flex items-center rounded-sm bg-accent/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
              All Projects Fully Insured
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center font-sans text-sm font-semibold text-accent transition-colors hover:text-accent/80"
          >
            {"Learn More About Us \u2192"}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
