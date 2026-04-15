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
      "Tout dépend du service choisi. Un nettoyage premium intérieur prend environ 4 à 5 heures, tandis qu'une rénovation complète avec poli-lustrage peut nécessiter 2 à 3 jours de travail.",
  },
  {
    question: "Dois-je me déplacer ou venez-vous à domicile ?",
    answer:
      "Pour garantir une qualité de finition optimale (température contrôlée, éclairage spécifique, séchage à l'abri), toutes nos prestations sont réalisées dans notre atelier spécialisé à Dijon.",
  },
  {
    question: "Comment réserver mon créneau ?",
    answer:
      "Vous pouvez utiliser le formulaire en bas de page ou nous appeler directement. Nous vous proposerons les prochaines disponibilités sous 24h.",
  },
  {
    question: "Puis-je annuler ou reporter mon rendez-vous ?",
    answer:
      "Oui, vous pouvez modifier votre réservation sans frais jusqu'à 48h avant la prestation. Au-delà, l'acompte pourra être conservé.",
  },
  {
    question: "Vos produits sont-ils sans danger pour mes sièges en cuir ?",
    answer:
      "Absolument. Nous utilisons des baumes et nettoyants PH-neutre spécifiques aux cuirs fins pour nettoyer sans assécher la matière.",
  },
  {
    question: "Proposez-vous des forfaits pour les flottes d'entreprise ?",
    answer:
      "Oui, nous avons des solutions adaptées pour les professionnels souhaitant maintenir l'image de marque de leurs véhicules de fonction. Contactez-nous pour un devis groupe.",
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
