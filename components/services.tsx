"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Building2, Layers, Grid3X3, Shovel, Landmark, ChevronDown } from "lucide-react"
import { useInView } from "@/hooks/use-animations"

const services = [
  {
    name: "Reinforced Concrete Works",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=80",
    subs: [
      "Concrete pouring",
      "Foundations",
      "Ground slabs",
      "Columns & beams",
      "Concrete walls",
      "Structural concrete frames",
    ],
  },
  {
    name: "Steel Fixing Services",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    subs: [
      "Rebar installation",
      "Steel reinforcement placement",
      "Reinforcement tying",
      "Structural steel fixing",
    ],
  },
  {
    name: "Formwork & Shuttering",
    icon: Grid3X3,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    subs: [
      "Traditional formwork",
      "System formwork",
      "Slab & column formwork",
      "Temporary support systems",
    ],
  },
  {
    name: "Groundworks",
    icon: Shovel,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    subs: [
      "Site preparation",
      "Excavation support",
      "Concrete bases",
      "Drainage preparation",
    ],
  },
  {
    name: "Structural Concrete Projects",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    subs: [
      "Residential developments",
      "Commercial buildings",
      "Industrial facilities",
      "Infrastructure projects",
    ],
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const Icon = service.icon

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative cursor-pointer overflow-hidden rounded-lg"
        style={{ minHeight: "280px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Background image */}
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-colors duration-300 group-hover:from-black/70 group-hover:via-black/30" />

        {/* Content */}
        <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between p-6 md:min-h-[320px]">
          <Icon className="h-8 w-8 text-accent" />
          <div>
            <h3 className="mb-1 font-serif text-2xl uppercase tracking-wide text-white">
              {service.name}
            </h3>
            <p className="font-sans text-sm text-white/70">
              Expert solutions tailored to your project
            </p>
          </div>
        </div>

        {/* Desktop hover sub-services */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-x-0 bottom-0 z-20 hidden bg-black/80 p-6 backdrop-blur-sm md:block"
            >
              <ul className="space-y-1.5">
                {service.subs.map((sub) => (
                  <li
                    key={sub}
                    className="flex items-center gap-2 font-sans text-sm text-white/90"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {sub}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile expand indicator */}
        <div className="absolute right-4 top-4 md:hidden">
          <ChevronDown
            className={`h-5 w-5 text-accent transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </motion.div>

      {/* Mobile accordion */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-b-lg bg-card md:hidden"
          >
            <ul className="space-y-2 p-5">
              {service.subs.map((sub) => (
                <li
                  key={sub}
                  className="flex items-center gap-2 font-sans text-sm text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {sub}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Services() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="services" ref={ref} className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.15em] text-accent">
            What We Do
          </p>
          <h2 className="text-section-heading font-serif uppercase tracking-wide text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
