import { Header } from "@/components/Header"
import { HeroImage } from "@/components/HeroImage"
import { Features } from "@/components/Features"
import { PrimaryContent } from "@/components/PrimaryContent"
import { SecondaryContent } from "@/components/SecondaryContent"
import { CallToAction } from "@/components/CallToAction"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Hero Image */}
      <HeroImage />

      {/* Features */}
      <Features />

      {/* Primary Content */}
      <PrimaryContent />

      {/* Secondary Content */}
      <SecondaryContent />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </main>
  )
}
