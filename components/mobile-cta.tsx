"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone } from "lucide-react"

export function MobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 z-40 p-4 md:hidden"
        >
          {/* PLACEHOLDER - Replace with actual phone number */}
          <a
            href="tel:+447000000000"
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-lg transition-all hover:brightness-110"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
