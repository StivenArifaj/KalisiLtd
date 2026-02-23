"use client"

import { motion } from "framer-motion"
import { Award, Clock, ShieldCheck, MessageSquare } from "lucide-react"
import { useInView } from "@/hooks/use-animations"

const features = [
  {
    icon: Award,
    title: "Built on Experience",
    body: "Years on London sites means we know what it takes — the right team, the right method, delivered right.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    body: "We respect your programme. Reliable teams, zero excuses.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    body: "Strict site safety standards. Zero compromise on health and protection.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    body: "You'll always know where your project stands. No surprises, no chasing — just straight answers.",
  },
]

export function WhyChooseUs() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} className="bg-dark-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-section-heading font-serif uppercase tracking-wide text-white">
            Why Choose Kalisi
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 bg-accent" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="border-l-[3px] border-accent pl-5"
              >
                <Icon className="mb-3 h-7 w-7 text-accent" />
                <h3 className="mb-2 font-serif text-xl uppercase tracking-wide text-white">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
