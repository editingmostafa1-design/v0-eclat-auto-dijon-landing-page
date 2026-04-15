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
          <h2 className="font-serif text-3xl font-semibold text-ink lg:text-5xl">
            Ce que nos clients disent
          </h2>
          <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <div className="flex items-center gap-2 rounded-full bg-blue-primary/5 px-4 py-1.5 border border-blue-primary/10">
              <div className="flex text-amber-500">
                {"★★★★★"}
              </div>
              <span className="text-sm font-bold text-ink">4.9/5</span>
              <span className="text-xs text-muted-foreground">basé sur 47 avis Google</span>
            </div>
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-blue-primary hover:underline"
            >
              Voir tous les avis →
            </a>
          </div>
        </div>

        {/* Asymmetrical editorial grid */}
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Before/After showcase - larger column */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              <BeforeAfterSlider 
                beforeImage="/images/interior-before.png"
                afterImage="/images/interior-after.png"
                className="aspect-[4/3] w-full rounded-xl shadow-xl border border-border/50" 
              />
              <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
                Détourage intérieur : cuir & moquettes (Avant / Après)
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
    <div className="relative rounded-xl bg-card p-6 shadow-sm border border-border pl-8 transition-all hover:shadow-md">
      {/* Blue accent line */}
      <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-blue-primary" />
      
      <div className="mb-4 flex items-center justify-between">
        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-blue-primary text-blue-primary" />
          ))}
        </div>
        
        {/* Verified Badge */}
        <div className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-700 border border-green-500/20">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
          Avis Google Vérifié
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-base leading-relaxed text-ink italic">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-4 flex items-center gap-2 grayscale opacity-80">
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground overflow-hidden border border-border">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-ink leading-tight">{name}</span>
          <span className="text-[11px] text-muted-foreground uppercase tracking-widest leading-tight">{car}</span>
        </div>
      </div>
    </div>
  )
}
