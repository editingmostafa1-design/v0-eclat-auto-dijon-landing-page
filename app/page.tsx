import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { SocialProof } from "@/components/sections/social-proof"
import { Guarantees } from "@/components/sections/guarantees"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <SocialProof />
        <Guarantees />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
