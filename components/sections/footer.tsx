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
          {/* Column 1 (Mobile Order: 1) - Reservation form */}
          <div className="order-1 flex flex-col gap-4 lg:order-3">
            <h3 className="font-serif text-lg font-semibold text-surface">
              Réserver un créneau
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-surface/10 p-6 text-center animate-in fade-in zoom-in duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-primary/20">
                  <Check className="h-6 w-6 text-blue-primary" />
                </div>
                <p className="text-surface font-medium">
                  Merci ! Nous vous recontactons sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
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
                </div>
                <Input
                  type="text"
                  name="vehicle"
                  placeholder="Véhicule (ex: BMW Série 3)"
                  required
                  className="border-surface/20 bg-surface/5 text-surface placeholder:text-surface/40 focus:border-blue-primary focus:ring-blue-primary/25"
                />
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="text"
                    name="date"
                    placeholder="Date souhaitée"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="border-surface/20 bg-surface/5 text-surface placeholder:text-surface/40 focus:border-blue-primary focus:ring-blue-primary/25"
                  />
                  <select 
                    name="service" 
                    className="rounded-xl border border-surface/20 bg-surface/5 px-3 py-2 text-sm text-surface focus:border-blue-primary focus:outline-none focus:ring-2 focus:ring-blue-primary/25"
                  >
                    <option value="" disabled selected className="text-ink">Service souhaité</option>
                    <option value="interieur" className="text-ink">Lavage Intérieur</option>
                    <option value="sieges" className="text-ink">Sièges & Sellerie</option>
                    <option value="moquettes" className="text-ink">Moquettes & Tapis</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 h-12 bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl font-bold transition-all active:scale-95"
                >
                  {isSubmitting ? "Envoi en cours..." : "Demander mon devis gratuit"}
                </Button>
              </form>
            )}
          </div>

          {/* Column 2 (Mobile Order: 2) - Contact Info */}
          <div className="order-2 flex flex-col gap-4 lg:order-2">
            <h3 className="font-serif text-lg font-semibold text-surface">
              Contact
            </h3>
            <div className="flex flex-col gap-5">
              <a
                href="tel:+33600000000"
                className="group flex items-center gap-4 text-surface/70 transition-colors hover:text-surface"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/5 group-hover:bg-blue-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-blue-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-surface/40">Appelez-nous</span>
                  <span className="font-medium">06 XX XX XX XX</span>
                </div>
              </a>
              <a
                href="mailto:contact@eclatautodijon.fr"
                className="group flex items-center gap-4 text-surface/70 transition-colors hover:text-surface"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/5 group-hover:bg-blue-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-blue-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-surface/40">Écrivez-nous</span>
                  <span className="font-medium">contact@eclatautodijon.fr</span>
                </div>
              </a>
              <div className="group flex items-center gap-4 text-surface/70">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/5">
                  <MapPin className="h-5 w-5 text-blue-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-surface/40">Où nous trouver</span>
                  <span className="font-medium">Quartier Valmy, 21000 Dijon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 (Mobile Order: 3) - Logo & Branding */}
          <div className="order-3 flex flex-col gap-6 lg:order-1">
            <ConceptCLogo variant="footer" />
            <p className="max-w-xs text-base leading-relaxed text-surface/60">
              L&apos;excellence du detailing automobile à Dijon. Redonner à votre véhicule son prestige originel.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="h-10 w-10 rounded-full bg-surface/5 flex items-center justify-center text-surface/40 hover:bg-blue-primary/20 hover:text-blue-primary cursor-pointer transition-all">
                {"IG"}
              </div>
              <div className="h-10 w-10 rounded-full bg-surface/5 flex items-center justify-center text-surface/40 hover:bg-blue-primary/20 hover:text-blue-primary cursor-pointer transition-all">
                {"FB"}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-surface/10 pt-8 md:flex-row">
          <p className="text-sm text-surface/40">
            © {new Date().getFullYear()} Éclat Auto Dijon. Développé avec passion pour l&apos;automobile.
          </p>
          <div className="flex gap-6">
            <a
              href="/mentions-legales"
              className="text-sm text-surface/40 transition-colors hover:text-surface"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-sm text-surface/40 transition-colors hover:text-surface"
            >
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
