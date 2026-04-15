import { CarSilhouette } from "@/components/logo/car-silhouette"

const steps = [
  {
    number: "01",
    title: "Prise de rendez-vous",
    description: "Réservez en ligne ou par téléphone à la date qui vous convient.",
  },
  {
    number: "02",
    title: "Diagnostic personnalisé",
    description: "Nous évaluons l&apos;état de votre véhicule et établissons un devis détaillé.",
  },
  {
    number: "03",
    title: "Rénovation experte",
    description: "Nos techniciens qualifiés prennent soin de votre véhicule avec précision.",
  },
  {
    number: "04",
    title: "Livraison & suivi",
    description: "Récupérez votre véhicule sublimé avec un suivi qualité garanti.",
  },
]

export function Process() {
  return (
    <section id="comment-ca-marche" className="relative overflow-hidden bg-ink py-20 lg:py-24">
      {/* Background watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-100">
        <CarSilhouette color="#F9F8F5" opacity={0.05} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="font-serif text-3xl font-semibold text-surface lg:text-4xl">
            Comment ça marche
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-surface/70">
            Un processus simple et transparent en 4 étapes
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Step number */}
              <span className="mb-4 font-serif text-5xl font-semibold text-blue-primary">
                {step.number}
              </span>
              
              {/* Title */}
              <h3 className="mb-2 font-serif text-xl font-semibold text-surface">
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
