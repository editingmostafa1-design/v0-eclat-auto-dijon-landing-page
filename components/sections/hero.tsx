import { Button } from "@/components/ui/button"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"
import { DynamicHeroBackground } from "./dynamic-hero-background"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-[68px]">
      <DynamicHeroBackground />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:px-6 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <span className="kicker">Votre voiture, sans vous déplacer</span>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-surface sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                {"L'"}<span className="text-shine">éclat</span>{" d'une voiture neuve, sans compromis."}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-surface/80 sm:text-xl">
              {"Rénovation esthétique haut de gamme pour véhicules exigeants — à Dijon."}
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <a href="#reserver">
                <Button className="w-full bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl px-8 py-7 text-lg font-bold transition-all hover:scale-[1.03] shadow-lg shadow-blue-primary/20 sm:w-auto">
                  Réserver
                </Button>
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
            <BeforeAfterSlider 
              beforeImage="/hero-before.jpg"
              afterImage="/hero-after.jpg"
              className="rounded-xl shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
