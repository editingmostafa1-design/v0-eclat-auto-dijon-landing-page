"use client"

import Image from "next/image"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"

const HeroBackground = dynamic(() => import("./hero-background").then((m) => m.HeroBackground), {
  ssr: false,
})

const HeroInteractiveMedia = dynamic(
  () => import("./hero-interactive-media").then((m) => m.HeroInteractiveMedia),
  { ssr: false }
)

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-[68px]">
      {/* Fast, server-rendered base background (keeps text readable immediately). */}
      <div className="absolute inset-0 z-0 bg-near-black" aria-hidden="true">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,#10346E_0%,transparent_55%),radial-gradient(circle_at_85%_70%,#111210_0%,transparent_60%),radial-gradient(circle_at_55%_55%,rgba(16,52,110,0.35)_0%,transparent_60%)]" />
        <div className="video-overlay absolute inset-0" />
      </div>

      <HeroBackground />
      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:px-6 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <span className="kicker !text-surface/60">Signature Excellence</span>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-surface sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                {"L'"}<span className="text-shine">éclat</span>{" d'une voiture neuve, sans compromis."}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-surface/80 sm:text-xl">
              {"Rénovation esthétique haut de gamme — À domicile, à Dijon."}
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <a href="#reserver">
                <div className="rounded-xl glow-pulse">
                  <Button className="w-full bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl px-8 py-7 text-lg font-bold transition-all hover:scale-[1.03] sm:w-auto">
                    Réserver
                  </Button>
                </div>
              </a>
              <a href="#services">
                <Button variant="outline" className="w-full rounded-xl border-surface/30 bg-transparent px-8 py-7 text-lg font-semibold text-surface hover:bg-surface/10 hover:text-surface sm:w-auto">
                  Découvrir nos services
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 opacity-80">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-surface">On se déplace chez vous</span>
              </div>
              <div className="h-4 w-px bg-surface/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-surface">Dijon et alentours</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Fast, server-rendered hero media (single LCP image). */}
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl aspect-square">
              <Image
                src="/hero-after.jpg"
                alt="APRÈS"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 right-4 z-10 rounded-full bg-ink/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-surface backdrop-blur-sm">
                APRÈS
              </span>
            </div>

            {/* Progressive enhancement: slider + animated background after idle. */}
            <HeroInteractiveMedia
              beforeImage="/hero-before.jpg"
              afterImage="/hero-after.jpg"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
