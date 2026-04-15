"use client"

import { useState } from "react"
import { Sparkles, Sofa, Rows3, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const services = [
  {
    icon: Sparkles,
    title: "Lavage Premium Intérieur",
    description:
      "Un nettoyage professionnel et minutieux de l'habitacle de votre véhicule, pour un intérieur comme neuf.",
    price: "À partir de 60€",
    priceNote: "Berline 5 places, usage quotidien",
    steps: [
      "Aspiration profonde de l'habitacle",
      "Brossage mécanique des sols avec brosse rotative",
      "Extraction par aspiration des résidus",
      "Shampoing des sièges par injection/extraction",
      "Nettoyage et soin protecteur des plastiques",
      "Nettoyage approfondi des tapis de sol",
      "Finition des vitres intérieures",
      "Nettoyage des contours de portes",
    ],
  },
  {
    icon: Sofa, // Using Sofa as a fallback for high-end seating
    title: "Sièges & Sellerie",
    description:
      "Traitement en profondeur de vos sièges en tissu ou cuir pour éliminer les taches tenaces et les odeurs.",
    price: "40€ – 90€",
    priceNote: "Selon nombre de places et état",
    steps: [
      "Diagnostic de la matière (Tissu, Alcantara, Cuir)",
      "Application d'un pré-détachant spécifique",
      "Action mécanique rotative douce",
      "Extraction des impuretés en profondeur",
      "Soin nourrissant (si sellerie cuir)",
    ],
  },
  {
    icon: Rows3,
    title: "Moquettes & Tapis",
    description:
      "Désinfection et nettoyage haute pression des moquettes de sol et du compartiment coffre.",
    price: "À partir de 35€",
    priceNote: "Tapis + Moquette coffre",
    steps: [
      "Retrait des tapis et aspiration industrielle",
      "Brossage manuel des fibres",
      "Traitement par injection/extraction",
      "Désodorisation et séchage accéléré",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="kicker mb-4 block">Expertise</span>
          <h2 className="font-serif text-3xl font-semibold text-ink lg:text-5xl">
            Nos services de rénovation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Des prestations de detailing chirurgicales pour sublimer votre véhicule
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
      
      {/* Section divider */}
      <div className="section-divider mt-24 lg:mt-32" />
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  price: string
  priceNote: string
  steps: string[]
  defaultOpen?: boolean
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  priceNote,
  steps,
  defaultOpen = false,
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div
        className={cn(
          "flex flex-col rounded-xl bg-card p-6",
          "border border-border shadow-sm",
          "card-hover"
        )}
      >
        {/* Circular Icon Container - Blue Primary 15% opacity */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-primary/[0.15]">
          <Icon className="h-6 w-6 text-ink" />
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-semibold text-ink">{title}</h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Price - Blue Primary for information elements */}
        <div className="mt-5 pt-4 border-t border-border">
          <p className="font-serif text-2xl font-semibold text-blue-primary">{price}</p>
          <p className="mt-1 text-sm text-muted-foreground">{priceNote}</p>
        </div>

        {/* Trigger Button */}
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl",
              "bg-blue-primary px-4 py-3 text-sm font-semibold text-white",
              "transition-all duration-200 hover:bg-blue-hover hover:scale-[1.02]",
              "focus:outline-none focus:ring-2 focus:ring-blue-focus"
            )}
          >
            En savoir plus
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </button>
        </CollapsibleTrigger>

        {/* Collapsible Content with slide & fade */}
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
          <div className="mt-5 rounded-xl bg-surface p-5 border border-border">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink">
              Étapes du service
            </p>
            <ul className="space-y-3">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-primary text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}
