"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-animations"

export function Cinematic() {
    const { ref, isInView } = useInView(0.2)

    return (
        <section ref={ref} className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
            {/* Background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/formwork-frame.jpg"
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/videos/cinematic.mp4" type="video/mp4" />
            </video>

            {/* Heavy dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Amber top + bottom accent lines */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.25em] text-accent"
                >
                    Every Project. Every Time.
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-section-heading mb-6 font-serif uppercase tracking-wide text-white"
                >
                    Precision Built Into Everything We Do
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mx-auto mb-10 max-w-2xl font-sans leading-relaxed text-white/75"
                >
                    From the first rebar to the final pour — Kalisi Ltd delivers structural
                    excellence on every site, on every schedule, to every specification.
                </motion.p>

                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="inline-flex min-h-[52px] items-center justify-center rounded-sm bg-accent px-10 py-3 font-sans text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all hover:brightness-110"
                >
                    Start Your Project
                </motion.a>
            </div>
        </section>
    )
}