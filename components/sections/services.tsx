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
    title: "Nettoyage Intérieur Complet",
    description:
      "Un nettoyage professionnel et minutieux de l'habitacle de votre véhicule, pour un intérieur comme neuf.",
    price: "À partir de 60€",
    priceNote: "Berline 5 places, usage quotidien",
    steps: [
      "Aspiration profonde de l'habitacle",
      "Brossage mécanique des sols avec brosse rotative et solution active",
      "Extraction par aspiration des résidus de brossage",
      "Shampoing des sièges par injection/extraction haute pression",
      "Nettoyage et soin protecteur des plastiques (finition satinée)",
      "Nettoyage approfondi des tapis de sol",
      "Finition des vitres intérieures et extérieures",
      "Nettoyage des jantes",
    ],
  },
  {
    icon: Sofa,
    title: "Entretien Canapés",
    description:
      "Redonnez vie à vos canapés avec notre traitement professionnel en profondeur.",
    price: "À partir de 40€",
    priceNote: "Canapé 3 places",
    steps: [
      "Application d'un produit spécifique aux textiles",
      "Brossage mécanique rotatif pour déloger les taches en profondeur",
      "Traitement final par injection/extraction pour une propreté au cœur de la fibre",
    ],
  },
  {
    icon: Rows3,
    title: "Nettoyage Tapis",
    description:
      "Un nettoyage en profondeur pour des tapis impeccables et désinfectés.",
    price: "À partir de 35€",
    priceNote: "Taille standard",
    steps: [
      "Pulvérisation d'une solution nettoyante adaptée",
      "Action mécanique par brossage rotatif",
      "Rinçage et aspiration par injection/extraction",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="kicker mb-4 block">Prestations</span>
          <h2 className="font-serif text-3xl font-semibold text-ink lg:text-4xl">
            Nos services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Des prestations sur mesure pour sublimer votre intérieur
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
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
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  priceNote,
  steps,
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false)

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
