import { CarSilhouette } from "@/components/logo/car-silhouette"

const steps = [
  {
    number: "01",
    title: "Prise de rendez-vous",
    description: "Réservez en 1 minute via notre formulaire ou par téléphone. Réponse garantie sous 24h.",
  },
  {
    number: "02",
    title: "Diagnostic personnalisé",
    description: "Nous évaluons l'état réel de votre véhicule pour ajuster nos techniques à vos besoins.",
  },
  {
    number: "03",
    title: "Rénovation experte",
    description: "Nos techniciens utilisent des produits certifiés et un équipement professionnel de pointe.",
  },
  {
    number: "04",
    title: "Livraison & suivi",
    description: "Récupérez votre véhicule étincelant. Nous restons disponibles pour vos conseils d'entretien.",
  },
]

export function Process() {
  return (
    <section id="comment-ca-marche" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      {/* Background watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-100">
        <CarSilhouette color="#F9F8F5" opacity={0.08} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-20 text-center">
          <span className="kicker mb-4 block">Votre expérience</span>
          <h2 className="font-serif text-3xl font-semibold text-surface lg:text-5xl">
            Comment ça marche
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-surface/70">
            Un accompagnement rigoureux de la réservation à la route
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Connector Line (Desktop) */}
          <div className="absolute left-0 top-8 hidden h-px w-full border-t border-dashed border-blue-primary/40 lg:block" aria-hidden="true" />
          
          {steps.map((step, index) => (
            <div key={index} className="group relative flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Step number circle */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ink border-2 border-blue-primary transition-transform duration-300 group-hover:scale-110">
                <span className="font-serif text-2xl font-bold text-blue-primary">
                  {step.number}
                </span>
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-12 left-1/2 h-12 w-px border-l border-dashed border-blue-primary/40 md:hidden" />
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
