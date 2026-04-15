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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Éclat Auto Dijon",
    "image": "https://eclatautodijon.fr/images/hero-after.png",
    "@id": "https://eclatautodijon.fr",
    "url": "https://eclatautodijon.fr",
    "telephone": "+33600000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Quartier Valmy",
      "addressLocality": "Dijon",
      "postalCode": "21000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.3220,
      "longitude": 5.0415
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://facebook.com/eclatautodijon",
      "https://instagram.com/eclatautodijon"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
