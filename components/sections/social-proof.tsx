import { BeforeAfterSlider } from "@/components/ui/before-after-slider"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Un travail remarquable ! Ma BMW a retrouvé son éclat d'origine. Je recommande vivement.",
    name: "Laurent M.",
    car: "BMW Série 5",
    rating: 5,
  },
  {
    quote: "Professionnalisme et attention aux détails. Le traitement céramique est impressionnant.",
    name: "Sophie D.",
    car: "Mercedes Classe C",
    rating: 5,
  },
  {
    quote: "Service impeccable, véhicule de courtoisie très apprécié. Résultat au-delà de mes attentes.",
    name: "Marc T.",
    car: "Audi A6",
    rating: 5,
  },
]

export function SocialProof() {
  return (
    <section id="avis" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="font-serif text-3xl font-semibold text-ink lg:text-4xl">
            Ce que nos clients disent
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Des véhicules transformés, des clients satisfaits
          </p>
        </div>

        {/* Content grid */}
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Before/After showcase */}
          <div className="lg:sticky lg:top-24">
            <BeforeAfterSlider className="aspect-[4/3] w-full" />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Faites glisser pour voir la transformation
            </p>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  quote: string
  name: string
  car: string
  rating: number
}

function TestimonialCard({ quote, name, car, rating }: TestimonialCardProps) {
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm border border-border">
      {/* Stars */}
      <div className="mb-3 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-blue-primary text-blue-primary" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-base leading-relaxed text-ink">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-4 flex items-center gap-2">
        <span className="font-semibold text-ink">{name}</span>
        <span className="text-muted-foreground">·</span>
        <span className="text-sm text-muted-foreground">{car}</span>
      </div>
    </div>
  )
}
