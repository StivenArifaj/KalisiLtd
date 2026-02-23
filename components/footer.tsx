import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  "Reinforced Concrete",
  "Steel Fixing",
  "Formwork & Shuttering",
  "Structural Projects",
]

export function Footer() {
  return (
    <footer className="bg-dark-bg pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Kalisi Ltd"
                width={150}
                height={65}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
              London &amp; Cornwall&apos;s trusted reinforced concrete and steel fixing specialists.
              Building structural excellence since 2020.
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <h4 className="mb-4 font-serif text-lg uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-serif text-lg uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="font-sans text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-accent/20" />

        {/* Bottom bar */}
        <p className="text-center font-sans text-xs text-muted-foreground">
          © 2025 Kalisi Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}