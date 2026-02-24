"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

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

      {/* ── Mobile video (small file, no lag) ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/concrete-pour.jpg"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* ── Desktop video (full quality) ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/concrete-pour.jpg"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      >
        <source src="/videos/hero-small.mp4" type="video/mp4" />
      </video>

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
            London &amp; Cornwall&apos;s Construction Specialists
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mb-2 font-serif text-3xl uppercase tracking-[0.15em] text-white sm:text-4xl md:text-5xl lg:text-[4rem]"
          >
            Kalisi Ltd
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-hero mb-6 font-serif font-normal uppercase tracking-wider text-white/90"
          >
            Built to Last.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-hero-sub mb-10 max-w-2xl font-sans leading-relaxed text-white/80 md:pr-8"
          >
            Reinforced Concrete &amp; Steel Fixing Specialists — Delivering structural
            excellence across London and Cornwall.
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