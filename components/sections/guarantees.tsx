import { Award, ShieldCheck, Car } from "lucide-react"

const guarantees = [
  {
    icon: Award,
    title: "Produits professionnels certifiés",
    description:
      "Nous utilisons exclusivement des produits haut de gamme, certifiés et respectueux de votre véhicule.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie satisfaction 30 jours",
    description:
      "Pas satisfait ? Nous reprenons votre véhicule gratuitement pour une retouche dans les 30 jours.",
  },
  {
    icon: Car,
    title: "Véhicule de courtoisie disponible",
    description:
      "Pour les prestations longues, profitez d'un véhicule de courtoisie mis à votre disposition.",
  },
]

export function Guarantees() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="kicker mb-4 block">Engagement qualité</span>
          <h2 className="font-serif text-3xl font-semibold text-ink lg:text-4xl">
            Nos garanties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Votre tranquillité d&apos;esprit, notre priorité
          </p>
        </div>

        {/* Guarantees grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Icon Container - Blue Primary 15% opacity, Ink icon */}
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-primary/[0.15]">
                <guarantee.icon className="h-8 w-8 text-ink" />
              </div>

              {/* Title */}
              <h3 className="mb-2 font-serif text-xl font-semibold text-ink">
                {guarantee.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-muted-foreground">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
