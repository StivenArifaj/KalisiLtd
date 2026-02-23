"use client"

import { motion } from "framer-motion"
import { useInView, useCountUp } from "@/hooks/use-animations"

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Certified & Insured" },
  { value: 0, suffix: "", label: "Operating Region", display: "London & SE" },
]

function StatItem({ stat, inView }: { stat: (typeof stats)[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2000, inView)

  return (
    <div className="flex flex-col items-center gap-1 px-4 py-2">
      <span className="text-stat-number font-serif text-accent">
        {stat.display ? stat.display : `${count}${stat.suffix}`}
      </span>
      <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
        {stat.label}
      </span>
    </div>
  )
}

export function TrustBar() {
  const { ref, isInView } = useInView(0.3)

  return (
    <section ref={ref} className="bg-dark-section py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-5 md:grid-cols-4 md:gap-0"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`${
              i < stats.length - 1
                ? "md:border-r md:border-accent/30"
                : ""
            }`}
          >
            <StatItem stat={stat} inView={isInView} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
