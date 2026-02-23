"use client"

import { motion } from "framer-motion"
import { useInView, useCountUp } from "@/hooks/use-animations"

const stats = [
  { value: 0, suffix: "", label: "Experience", display: "Since 2020" },
  { value: 5, suffix: "+", label: "Big Projects" },
  { value: 30, suffix: "+", label: "Small Projects / Homes" },
  { value: 0, suffix: "", label: "Operating Region", display: "London & Cornwall" },
]

function StatItem({ stat, inView }: { stat: (typeof stats)[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2000, inView)

  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 px-2 py-4 text-center">
      <span
        className={`font-serif leading-none tracking-wide text-accent ${stat.display
            ? "text-2xl sm:text-3xl lg:text-4xl"
            : "text-stat-number"
          }`}
      >
        {stat.display ? stat.display : `${count}${stat.suffix}`}
      </span>
      <span className="font-sans text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground/90">
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
            className={`flex flex-col justify-center ${i < stats.length - 1
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
