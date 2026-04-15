"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Combien de temps dure une rénovation complète ?",
    answer:
      "Une rénovation complète prend généralement entre 1 et 3 jours selon l'état du véhicule et les prestations choisies. Nous vous fournirons une estimation précise lors du diagnostic initial.",
  },
  {
    question: "Proposez-vous un service de véhicule de courtoisie ?",
    answer:
      "Oui, pour toute prestation supérieure à une journée, nous mettons à votre disposition un véhicule de courtoisie. Pensez à le réserver lors de votre prise de rendez-vous.",
  },
  {
    question: "Quels types de véhicules prenez-vous en charge ?",
    answer:
      "Nous prenons en charge tous types de véhicules : berlines, SUV, sportives, utilitaires et même les véhicules de collection. Chaque véhicule reçoit un traitement adapté à ses spécificités.",
  },
  {
    question: "Comment puis-je payer ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, virement et espèces. Un acompte de 30% est demandé à la réservation pour les prestations premium.",
  },
  {
    question: "Où êtes-vous situés ?",
    answer:
      "Notre atelier est situé à Dijon, facilement accessible depuis le centre-ville et les axes principaux. L'adresse exacte vous sera communiquée lors de la confirmation de votre rendez-vous.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-semibold text-ink lg:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tout ce que vous devez savoir avant de nous confier votre véhicule
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="font-serif text-lg font-semibold text-ink text-left hover:no-underline hover:text-blue-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
