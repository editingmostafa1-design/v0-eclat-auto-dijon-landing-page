"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Combien de temps dure une prestation ?",
    answer:
      "La durée varie selon le service : comptez 4 à 5 heures pour un intérieur complet de véhicule, et 1 à 2 heures pour un canapé ou des tapis, selon leur taille et leur état.",
  },
  {
    question: "Dois-je me déplacer ou venez-vous à domicile ?",
    answer:
      "Nous sommes 100% mobiles. Nous intervenons directement à votre domicile ou sur votre lieu de travail à Dijon et ses alentours. Nous sommes totalement autonomes en équipement.",
  },
  {
    question: "Comment réserver mon créneau ?",
    answer:
      "Le plus simple est d'utiliser le formulaire 'Réserver' en bas de page. Vous pouvez aussi nous appeler directement pour fixer un rendez-vous rapide.",
  },
  {
    question: "Puis-je annuler ou reporter mon rendez-vous ?",
    answer:
      "Oui, sans aucun frais jusqu'à 24h avant l'intervention. Nous savons que les imprévus arrivent, un simple appel suffit pour décaler.",
  },
  {
    question: "Vos produits sont-ils sans danger pour mes textiles ?",
    answer:
      "Absolument. Nos formules sont PH-neutre et éco-responsables. Elles sont conçues pour nettoyer en profondeur tout en respectant la fragilité des cuirs, des tissus de canapés et des fibres de tapis.",
  },
  {
    question: "Intervenez-vous pour les professionnels ?",
    answer:
      "Oui, nous entretenons les flottes de véhicules d'entreprise ainsi que le mobilier de bureau ou d'accueil. Contactez-nous pour un devis personnalisé.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="kicker mb-4 block">Précisions</span>
          <h2 className="font-serif text-3xl font-semibold text-ink lg:text-5xl">
            Questions fréquentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tout ce que vous devez savoir avant de nous confier vos clés.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="multiple" className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="rounded-xl border border-border bg-card px-6 transition-all data-[state=open]:border-blue-primary/40 data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="font-serif text-lg font-semibold text-ink text-left hover:no-underline hover:text-blue-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-5 border-t border-border pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
