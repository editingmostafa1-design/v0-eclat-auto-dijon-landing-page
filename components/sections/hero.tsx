"use client"

import { Button } from "@/components/ui/button"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"
import { CarSilhouette } from "@/components/logo/car-silhouette"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-[68px]">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-near-black">
        {/* Video placeholder - replace with actual video */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-near-black via-ink to-near-black"
          aria-hidden="true"
        >
          {/* Animated grain texture for premium feel */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }} />
          
          {/* Large watermark car silhouette */}
          <div className="absolute right-[-10%] top-1/2 w-[800px] -translate-y-1/2 opacity-[0.04]">
            <CarSilhouette color="#F9F8F5" />
          </div>
        </div>
        
        {/* Gradient overlay for text legibility + fade to surface */}
        <div className="video-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:px-6 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <span className="kicker">Dijon &middot; Depuis 2020</span>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-surface lg:text-5xl xl:text-6xl">
              <span className="text-balance">
                {"L'éclat d'une voiture neuve, sans compromis."}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-surface/80">
              {"Rénovation esthétique haut de gamme pour véhicules exigeants — à Dijon."}
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a href="#services">
                <Button className="bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl px-8 py-6 text-base font-semibold transition-transform hover:scale-[1.02]">
                  Découvrir nos services
                </Button>
              </a>
              <a href="#reserver">
                <Button variant="outline" className="rounded-xl border-surface/30 bg-transparent px-8 py-6 text-base font-semibold text-surface hover:bg-surface/10 hover:text-surface">
                  Réserver
                </Button>
              </a>
            </div>
          </div>

          {/* Before/After visual */}
          <div className="relative">
            <BeforeAfterSlider className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
