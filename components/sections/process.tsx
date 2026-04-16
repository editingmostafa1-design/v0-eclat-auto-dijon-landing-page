"use client"

import { CarSilhouette } from "@/components/logo/car-silhouette"

const steps = [
  {
    number: "01",
    title: "Réservez en 1 clic",
    description: "Choisissez votre service, votre créneau, et votre adresse. Confirmation sous 2h, sans engagement.",
  },
  {
    number: "02",
    title: "On se déplace chez vous",
    description: "Nous arrivons à l'heure convenue, équipés et autonomes. Pas besoin de vous déplacer.",
  },
  {
    number: "03",
    title: "Protocole de précision",
    description: "Traitement technique adapté (brossage, injection/extraction) — chaque matériau reçoit le soin spécifique qu'il mérite.",
  },
  {
    number: "04",
    title: "Inspection finale",
    description: "Nous validons ensemble le résultat. Votre satisfaction totale est notre seule exigence avant de quitter les lieux.",
  },
]

export function Process() {
  return (
    <section id="comment-ca-marche" suppressHydrationWarning className="relative overflow-hidden bg-ink py-24 lg:py-32">
      {/* Background watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-100">
        <CarSilhouette color="#F9F8F5" opacity={0.08} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-20 text-center">
          <span className="kicker mb-4 block">Simple &amp; transparent</span>
          <h2 className="font-serif text-3xl font-semibold text-surface lg:text-5xl">
            Comment ça marche
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-surface/70">
            De la réservation à l&apos;inspection finale — tout se passe chez vous
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Connector Line (Desktop) */}
          <div 
            className="absolute left-0 top-8 hidden h-px w-full border-t border-dashed border-blue-primary/40 lg:block" 
            style={{ filter: "drop-shadow(0 0 5px rgba(26, 86, 219, 0.5))" }}
            aria-hidden="true" 
          />
          
          {steps.map((step, index) => (
            <div key={index} className="group relative flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Step number circle — CSS Live Glow */}
              <div
                className="glow-pulse relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ink border-2 border-blue-primary transition-transform duration-300 group-hover:scale-110 z-10"
              >
                <span
                  className="font-serif text-2xl font-bold text-blue-primary"
                  style={{ textShadow: "0 0 8px rgba(26, 86, 219, 0.5)" }}
                >
                  {step.number}
                </span>
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute -bottom-12 left-1/2 h-12 w-px border-l border-dashed border-blue-primary/40 md:hidden"
                    style={{ filter: "drop-shadow(0 0 3px rgba(26, 86, 219, 0.4))" }}
                  />
                )}
              </div>
              
              {/* Title */}
              <h3 className="mb-3 font-serif text-xl font-semibold text-surface">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-base leading-relaxed text-surface/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

