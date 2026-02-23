"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const portfolioItems = [
    {
        type: "video",
        src: "/videos/portfolio-vid-1.mp4",
        title: "Large Concrete Pour",
        location: "London, UK",
        tall: true,
    },
    {
        type: "video",
        src: "/videos/portfolio-vid-2.mp4",
        title: "Structural Groundworks",
        location: "London, UK",
        tall: true,
    },
    {
        type: "image",
        src: "/images/portfolio-img-1.jpeg",
        title: "Steel Fixing Preparation",
        location: "London, UK",
        tall: true,
    },
    {
        type: "video",
        src: "/videos/portfolio-vid-3.mp4",
        title: "On-site Concrete Leveling",
        location: "London, UK",
        tall: true,
    },
    {
        type: "image",
        src: "/images/portfolio-img-2.jpeg",
        title: "Finished Framework",
        location: "London, UK",
        tall: true,
    },
    {
        type: "video",
        src: "/videos/portfolio-vid-4.mp4",
        title: "Reinforced Operations",
        location: "London, UK",
        tall: true,
    },
]

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <div className="mx-auto max-w-7xl px-5">

                {/* Header & Back Button */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <Link
                            href="/#projects"
                            className="mb-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent transition-all hover:gap-3"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Home
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.15em] text-accent">
                                Full Gallery
                            </p>
                            <h1 className="text-section-heading font-serif uppercase tracking-wide text-foreground">
                                Our Ongoing Projects
                            </h1>
                        </motion.div>
                    </div>
                </div>

                {/* Desktop masonry grid */}
                <div className="hidden md:block" style={{ columnCount: 3, columnGap: "1rem" }}>
                    {portfolioItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg bg-card"
                        >
                            <div
                                className="relative overflow-hidden bg-muted"
                                style={{ paddingBottom: item.tall ? "177.7%" : "75%" }}
                            >
                                {item.type === "video" ? (
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    >
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="33vw"
                                    />
                                )}
                                {/* Caption overlay */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="font-serif text-lg uppercase tracking-wide text-white">{item.title}</p>
                                    <p className="font-sans text-xs text-white/70">{item.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile vertical list / carousel directly scrollable */}
                <div className="flex flex-col gap-6 md:hidden">
                    {portfolioItems.map((item, i) => (
                        <motion.div
                            key={i + "-mobile"}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4 }}
                            className="group relative w-full overflow-hidden rounded-lg bg-card shadow-sm"
                        >
                            <div className="relative bg-muted" style={{ paddingBottom: item.tall ? "177.7%" : "75%" }}>
                                {item.type === "video" ? (
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 h-full w-full object-cover"
                                    >
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                )}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                                    <p className="font-serif text-xl uppercase tracking-wide text-white">{item.title}</p>
                                    <p className="mt-1 font-sans text-sm text-white/70">{item.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
