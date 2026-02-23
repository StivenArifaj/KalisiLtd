"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-animations"

const projects = [
  {
    image: "/images/project-1.jpeg",
    type: "Commercial Build",
    location: "London, UK",
    tall: true,
  },
  {
    image: "/images/project-2.jpeg",
    type: "Steel Rebar Structure",
    location: "London, UK",
    tall: true,
  },
  {
    image: "/images/project-3.jpeg",
    type: "Formwork Systems",
    location: "London, UK",
    tall: true,
  },
  {
    image: "/images/project-4.jpeg",
    type: "Foundation Works",
    location: "London, UK",
    tall: true,
  },
  {
    image: "/images/project-10.jpeg",
    type: "Site Preparation",
    location: "London, UK",
    tall: false,
  },
  {
    image: "/images/project-5.jpeg",
    type: "Structural Frame",
    location: "London, UK",
    tall: true,
  },
  {
    image: "/images/project-6.jpeg",
    type: "Reinforced Concrete",
    location: "London, UK",
    tall: true,
  },
  {
    image: "/images/project-7.jpeg",
    type: "Steel Reinforcement",
    location: "London, UK",
    tall: true,
  },
  {
    image: "/images/project-8.jpeg",
    type: "Groundworks",
    location: "London, UK",
    tall: true,
  },
  {
    image: "/images/project-9.jpeg",
    type: "Concrete Base",
    location: "London, UK",
    tall: true,
  },
]

export function Gallery() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="projects" ref={ref} className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.15em] text-accent">
            Portfolio
          </p>
          <h2 className="text-section-heading font-serif uppercase tracking-wide text-foreground">
            Our Work
          </h2>
        </motion.div>

        {/* Desktop masonry grid — fixed: was "hidden" which broke it */}
        <div className="hidden md:block" style={{ columnCount: 3, columnGap: "1rem" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.type + i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg"
            >
              <div
                className="relative overflow-hidden bg-muted"
                style={{ paddingBottom: project.tall ? "133%" : "75%" }}
              >
                <Image
                  src={project.image}
                  alt={project.type}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="33vw"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-serif text-lg uppercase tracking-wide text-white">{project.type}</p>
                  <p className="font-sans text-xs text-white/70">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile snap-scroll carousel */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:hidden"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.type + i + "-mobile"}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex-shrink-0 overflow-hidden rounded-lg"
              style={{ width: "85vw", scrollSnapAlign: "start" }}
            >
              <div className="relative bg-muted" style={{ paddingBottom: project.tall ? "133%" : "75%" }}>
                <Image
                  src={project.image}
                  alt={project.type}
                  fill
                  className="object-cover"
                  sizes="85vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="font-serif text-lg uppercase tracking-wide text-white">{project.type}</p>
                  <p className="font-sans text-xs text-white/70">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-accent/20 bg-accent/10 px-10 py-3 font-sans text-sm font-bold uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
}