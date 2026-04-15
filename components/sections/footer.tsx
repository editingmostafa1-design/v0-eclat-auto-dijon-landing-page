"use client"

import { useState } from "react"
import { ConceptCLogo } from "@/components/logo/concept-c-logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Check } from "lucide-react"

export function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <footer id="reserver" className="bg-ink py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Column 1: Logo & tagline */}
          <div className="flex flex-col gap-4">
            <ConceptCLogo variant="footer" />
            <p className="mt-2 text-base leading-relaxed text-surface/70">
              Rénovation esthétique haut de gamme pour véhicules exigeants à Dijon.
            </p>
          </div>

          {/* Column 2: Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-surface">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+33XXXXXXXXXX"
                className="flex items-center gap-3 text-surface/70 transition-colors hover:text-surface"
              >
                <Phone className="h-5 w-5 text-blue-primary" />
                <span>+33 (0)X XX XX XX XX</span>
              </a>
              <a
                href="mailto:hello@eclatAutodijon.fr"
                className="flex items-center gap-3 text-surface/70 transition-colors hover:text-surface"
              >
                <Mail className="h-5 w-5 text-blue-primary" />
                <span>hello@eclatAutodijon.fr</span>
              </a>
              <div className="flex items-center gap-3 text-surface/70">
                <MapPin className="h-5 w-5 text-blue-primary" />
                <span>Dijon, France</span>
              </div>
            </div>
          </div>

          {/* Column 3: Reservation form */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-surface">
              Réserver un créneau
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-surface/10 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                  <Check className="h-6 w-6 text-green-400" />
                </div>
                <p className="text-surface">
                  Merci ! Nous vous recontactons sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  required
                  className="border-surface/20 bg-surface/5 text-surface placeholder:text-surface/40 focus:border-blue-primary focus:ring-blue-primary/25"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  required
                  className="border-surface/20 bg-surface/5 text-surface placeholder:text-surface/40 focus:border-blue-primary focus:ring-blue-primary/25"
                />
                <Input
                  type="text"
                  name="vehicle"
                  placeholder="Véhicule (marque / modèle)"
                  required
                  className="border-surface/20 bg-surface/5 text-surface placeholder:text-surface/40 focus:border-blue-primary focus:ring-blue-primary/25"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl font-semibold"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface/10 pt-8 md:flex-row">
          <p className="text-sm text-surface/50">
            © {new Date().getFullYear()} Éclat Auto Dijon. Tous droits réservés.
          </p>
          <a
            href="#"
            className="text-sm text-surface/50 transition-colors hover:text-surface"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  )
}
