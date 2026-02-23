import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Cinematic } from "@/components/cinematic"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Gallery />
        <Cinematic />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}