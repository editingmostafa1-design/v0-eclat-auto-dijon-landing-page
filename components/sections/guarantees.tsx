"use client"

import { motion } from "framer-motion"
import { Leaf, Search, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const guarantees = [
  {
    icon: Search,
    title: "Signature Technique",
    description:
      "Qu'il s'agisse de textiles, cuirs ou plastiques, nous appliquons un protocole rigoureux adapté à chaque surface.",
    highlight: false,
  },
  {
    icon: Leaf,
    title: "Produits Éco-Responsables",
    description:
      "Sélection rigoureuse de formules biodégradables pour protéger votre santé et préserver l'éclat de vos biens.",
    highlight: true,
  },
  {
    icon: ShieldCheck,
    title: "Engagement Qualité",
    description:
      "Zéro compromis. Nous inspectons chaque détail avec vous pour garantir un résultat comme au premier jour.",
    highlight: false,
  },
]

export function Guarantees() {
  return (
    <section id="pourquoi-nous" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-20 text-center">
          <span className="kicker mb-4 block">Engagement premium</span>
          <h2 className="font-serif text-3xl font-semibold text-ink lg:text-5xl">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Bien plus qu&apos;un simple nettoyage, une promesse d&apos;excellence pour chaque détail.
          </p>
        </div>

        {/* Guarantees grid — 3 cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={guarantee.highlight ? { boxShadow: "0 0 15px rgba(26, 86, 219, 0.4)" } : {}}
              animate={guarantee.highlight ? { 
                boxShadow: [
                  "0 0 15px rgba(26, 86, 219, 0.4)",
                  "0 0 35px rgba(26, 86, 219, 0.7)",
                  "0 0 15px rgba(26, 86, 219, 0.4)"
                ] 
              } : {}}
              transition={guarantee.highlight ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
              className={cn(
                "group relative flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-300",
                guarantee.highlight
                  ? "bg-blue-primary text-surface shadow-xl shadow-blue-primary/30 scale-105 z-10"
                  : "bg-card border border-border hover:border-blue-primary/30 hover:shadow-lg"
              )}
            >
              {/* Icon Container */}
              <div className={cn(
                "mb-6 flex h-14 w-14 items-center justify-center rounded-xl",
                guarantee.highlight ? "bg-surface/20" : "bg-blue-primary/10"
              )}>
                <guarantee.icon className={cn(
                  "h-7 w-7",
                  guarantee.highlight ? "text-surface" : "text-blue-primary"
                )} />
              </div>

              {/* Title */}
              <h3 className={cn(
                "mb-3 font-serif text-xl font-bold",
                guarantee.highlight ? "text-surface" : "text-ink"
              )}>
                {guarantee.title}
              </h3>

              {/* Description */}
              <p className={cn(
                "flex-1 text-sm leading-relaxed",
                guarantee.highlight ? "text-surface/90" : "text-muted-foreground"
              )}>
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Secondary CTA link */}
        <div className="mt-16 text-center">
          <a href="#faq" className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-primary hover:text-blue-hover">
            Des questions ? Consultez notre FAQ
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
