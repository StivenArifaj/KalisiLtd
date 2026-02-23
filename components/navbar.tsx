"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none md:pointer-events-auto ${scrolled
          ? "bg-transparent md:bg-dark-section md:shadow-lg"
          : "bg-transparent"
          }`}
      >
        <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
          {/* Logo */}
          <a
            href="#home"
            className={`flex items-center transition-opacity duration-300 ${mobileOpen ? "opacity-0 md:opacity-100" : "opacity-100"
              }`}
          >
            <Image
              src="/images/logo.png"
              alt="Kalisi Ltd"
              width={250}
              height={100}
              className="h-20 w-auto object-contain md:h-24"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-sans text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex min-h-[40px] items-center justify-center rounded-sm bg-accent px-5 py-2 font-sans text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all hover:brightness-110"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-12 w-12 items-center justify-center md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen
              ? <X className="h-6 w-6 text-white" />
              : <Menu className="h-6 w-6 text-accent" />
            }
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-start overflow-y-auto bg-dark-section pb-12 pt-28"
          >
            {/* Logo in mobile menu */}
            <div className="mb-10">
              <Image
                src="/images/logo.png"
                alt="Kalisi Ltd"
                width={500}
                height={200}
                className="h-32 w-auto object-contain sm:h-40"
              />
            </div>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-4xl uppercase tracking-widest text-white transition-colors hover:text-accent"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              onClick={() => setMobileOpen(false)}
              className="mt-12 inline-flex min-h-[52px] items-center justify-center rounded-sm bg-accent px-10 py-3 font-sans text-sm font-bold uppercase tracking-wider text-accent-foreground"
            >
              Get a Free Quote
            </motion.a>

            {/* Amber accent line */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-accent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}