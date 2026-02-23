"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "@/hooks/use-animations"

const projects = [
  {
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=80",
    type: "Concrete Frame",
    location: "London, UK",
    tall: true,
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    type: "Steel Reinforcement",
    location: "London, UK",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    type: "Foundation Works",
    location: "London, UK",
    tall: true,
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    type: "Commercial Build",
    location: "London, UK",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    type: "Formwork Systems",
    location: "London, UK",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
    type: "Structural Frame",
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

        {/* Desktop masonry grid */}
        <div className="hidden gap-4 md:columns-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.type}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg"
            >
              <div
                className={`relative ${project.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.type} project in ${project.location}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-serif text-lg uppercase tracking-wide text-white">
                    {project.type}
                  </p>
                  <p className="font-sans text-xs text-white/70">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop CSS grid (simpler, more reliable) */}
        <div className="hidden gap-4 md:grid md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.type + "-grid"}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-lg ${
                project.tall ? "row-span-2" : ""
              }`}
            >
              <div className="relative h-full min-h-[240px]">
                <Image
                  src={project.image}
                  alt={`${project.type} project in ${project.location}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-serif text-lg uppercase tracking-wide text-white">
                    {project.type}
                  </p>
                  <p className="font-sans text-xs text-white/70">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="flex gap-4 overflow-x-auto snap-scroll-x hide-scrollbar pb-4 md:hidden">
          {projects.map((project, i) => (
            <motion.div
              key={project.type + "-mobile"}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative w-[85vw] flex-shrink-0 overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={`${project.type} project in ${project.location}`}
                  fill
                  className="object-cover"
                  sizes="85vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-serif text-lg uppercase tracking-wide text-white">
                    {project.type}
                  </p>
                  <p className="font-sans text-xs text-white/70">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
