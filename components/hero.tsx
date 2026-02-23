"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/3044956/3044956-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Fallback image for when video doesn't load */}
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt="Large concrete construction site with steel rebar structures"
        fill
        priority
        className="absolute inset-0 object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-32 text-center md:text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.2em] text-accent"
          >
            {"London's Construction Specialists"}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-hero mb-6 font-serif font-normal uppercase tracking-wider text-white"
          >
            Built to Last.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-hero-sub mb-10 max-w-2xl font-sans leading-relaxed text-white/80 md:pr-8"
          >
            Reinforced Concrete & Steel Fixing Specialists — Delivering structural
            excellence across London and the South East.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 md:flex-row md:items-start"
          >
            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-accent px-8 py-3 font-sans text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all hover:brightness-110"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm border-2 border-white px-8 py-3 font-sans text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8 text-white drop-shadow-[0_0_8px_rgba(212,160,23,0.6)]" />
      </motion.div>
    </section>
  )
}
