import { Button } from "@/components/ui/button"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"
import { CarSilhouette } from "@/components/logo/car-silhouette"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-[68px]">
      <div className="mx-auto max-w-6xl px-4 py-20 lg:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <h1 className="font-serif text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              <span className="text-balance">
                {"L'éclat d'une voiture neuve, sans compromis."}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {"Rénovation esthétique haut de gamme pour véhicules exigeants — à Dijon."}
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a href="#services">
                <Button className="bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl px-8 py-6 text-base font-semibold">
                  Découvrir nos services
                </Button>
              </a>
            </div>
          </div>

          {/* Before/After visual */}
          <div className="relative">
            <BeforeAfterSlider />
            
            {/* Watermark - Ghost at 3% opacity */}
            <div className="pointer-events-none absolute -bottom-8 -right-8 w-64">
              <CarSilhouette />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
