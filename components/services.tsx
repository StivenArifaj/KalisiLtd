"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Building2, Layers, Grid3X3, Landmark } from "lucide-react"
import { useInView } from "@/hooks/use-animations"

const services = [
  {
    name: "Reinforced Concrete Works",
    icon: Building2,
    image: "/images/concrete-pour.jpg",
    description: "From foundations to full structural frames — precision concrete on every pour.",
    subs: ["Concrete pouring", "Foundations", "Ground slabs", "Columns & beams", "Concrete walls", "Structural frames"],
  },
  {
    name: "Steel Fixing Services",
    icon: Layers,
    image: "/images/rebar-grid.jpg",
    description: "Expert rebar installation and reinforcement placement to exact structural specifications.",
    subs: ["Rebar installation", "Steel reinforcement placement", "Reinforcement tying", "Structural steel fixing"],
  },
  {
    name: "Formwork & Shuttering",
    icon: Grid3X3,
    image: "/images/pexels-anilkarakaya-9964624.jpg",
    description: "Traditional and system formwork solutions for slabs, columns, and walls.",
    subs: ["Traditional formwork", "System formwork", "Slab & column formwork", "Temporary support systems"],
  },
  {
    name: "Structural Concrete Projects",
    icon: Landmark,
    image: "/images/formwork-frame.jpg",
    description: "Full structural concrete packages for residential, commercial, and industrial builds.",
    subs: ["Residential developments", "Commercial buildings", "Industrial facilities", "Infrastructure projects"],
  },
]

export function Services() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="services" ref={ref} className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.15em] text-accent">
            What We Do
          </p>
          <h2 className="text-section-heading font-serif uppercase tracking-wide text-foreground">
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-accent" />
        </motion.div>

        {/* Service cards — horizontal layout */}
        <div className="flex flex-col gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-lg bg-card shadow-sm md:h-64 md:flex-row"
              >
                {/* Image — alternates left/right on desktop */}
                <div
                  className={`relative h-52 w-full flex-shrink-0 md:h-auto md:w-2/5 ${isEven ? "md:order-1" : "md:order-2"
                    }`}
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {/* Amber edge glow on hover */}
                  <div
                    className={`absolute inset-y-0 w-1 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isEven ? "right-0" : "left-0"
                      }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-1 flex-col justify-center p-7 md:p-10 ${isEven ? "md:order-2" : "md:order-1"
                    }`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <Icon className="h-6 w-6 flex-shrink-0 text-accent" />
                    <h3 className="font-serif text-2xl uppercase tracking-wide text-foreground md:text-3xl">
                      {service.name}
                    </h3>
                  </div>

                  <p className="mb-5 font-sans text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Sub-services — always visible, clean inline list */}
                  <div className="flex flex-wrap gap-2">
                    {service.subs.map((sub) => (
                      <span
                        key={sub}
                        className="rounded-sm border border-border bg-muted px-2.5 py-1 font-sans text-xs text-muted-foreground"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}