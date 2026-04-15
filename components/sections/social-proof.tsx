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
    <section id="avis" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="kicker mb-4 block">Témoignages</span>
          <h2 className="font-serif text-3xl font-semibold text-ink lg:text-4xl">
            Ce que nos clients disent
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Des véhicules transformés, des clients satisfaits
          </p>
        </div>

        {/* Asymmetrical editorial grid */}
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Before/After showcase - larger column */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              <BeforeAfterSlider className="aspect-[4/3] w-full rounded-xl shadow-xl" />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Faites glisser pour voir la transformation
              </p>
            </div>
          </div>

          {/* Testimonials - narrower column */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Section divider */}
      <div className="section-divider mt-24 lg:mt-32" />
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
    <div className="relative rounded-xl bg-card p-6 shadow-sm border border-border pl-8">
      {/* Blue accent line */}
      <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-blue-primary" />
      
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
