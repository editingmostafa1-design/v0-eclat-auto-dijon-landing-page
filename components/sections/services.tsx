import { Sparkles, PaintBucket, Shield, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Sparkles,
    title: "Lavage Premium Intérieur & Extérieur",
    description:
      "Nettoyage complet et minutieux de votre véhicule, intérieur comme extérieur, avec des produits professionnels haut de gamme.",
    price: "À partir de 89 €",
    link: "#",
  },
  {
    icon: PaintBucket,
    title: "Correction & Polish Carrosserie",
    description:
      "Élimination des micro-rayures, swirls et défauts de peinture pour retrouver une finition miroir éclatante.",
    price: "À partir de 249 €",
    link: "#",
  },
  {
    icon: Shield,
    title: "Traitement Céramique",
    description:
      "Protection longue durée contre les agressions extérieures avec un traitement céramique professionnel certifié.",
    price: "À partir de 449 €",
    link: "#",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="font-serif text-3xl font-semibold text-ink lg:text-4xl">
            Nos services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Des prestations sur mesure pour sublimer votre véhicule
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  price: string
  link: string
}

function ServiceCard({ icon: Icon, title, description, price, link }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col rounded-xl bg-card p-6 shadow-sm",
        "border border-border transition-shadow hover:shadow-md"
      )}
    >
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-primary/10">
        <Icon className="h-6 w-6 text-blue-primary" />
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl font-semibold text-ink">{title}</h3>

      {/* Description */}
      <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Price */}
      <p className="mt-4 text-lg font-semibold text-ink">{price}</p>

      {/* Link */}
      <a
        href={link}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-primary transition-colors hover:text-blue-hover"
      >
        En savoir plus
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  )
}
