"use client"

import { useState } from "react"
import { ConceptCLogo } from "@/components/logo/concept-c-logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Check } from "lucide-react"

export function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch("https://formspree.io/f/meevevkz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.")
      }
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.")
    } finally {
      setIsSubmitting(false)
    }
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
                <h4 className="text-xl font-serif font-bold text-surface">Merci !</h4>
                <p className="text-surface font-medium max-w-[250px]">
                  Je vous rappellerai dans les 2 heures pour confirmer votre réservation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  type="text"
                  name="full_name"
                  placeholder="Nom Complet"
                  required
                  className="border-surface/20 bg-surface/5 text-surface placeholder:text-surface/40 focus:border-blue-primary focus:ring-blue-primary/25"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Numéro de Téléphone"
                  required
                  className="border-surface/20 bg-surface/5 text-surface placeholder:text-surface/40 focus:border-blue-primary focus:ring-blue-primary/25"
                />
                
                <select 
                  name="service" 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="rounded-xl border border-surface/20 bg-surface/5 px-3 py-2 text-sm text-surface focus:border-blue-primary focus:outline-none focus:ring-2 focus:ring-blue-primary/25 transition-all"
                >
                  <option value="" disabled className="text-ink">Choisir un service</option>
                  <option value="Intérieur Voiture" className="text-ink">Intérieur Voiture</option>
                  <option value="Nettoyage Canapé" className="text-ink">Nettoyage Canapé</option>
                  <option value="Nettoyage Tapis" className="text-ink">Nettoyage Tapis</option>
                </select>

                {selectedService === "Intérieur Voiture" && (
                  <Input
                    type="text"
                    name="vehicle_model"
                    placeholder="Modèle du Véhicule (ex: BMW Série 3)"
                    required
                    className="border-surface/20 bg-surface/5 text-surface placeholder:text-surface/40 focus:border-blue-primary focus:ring-blue-primary/25 animate-in slide-in-from-top-2 duration-200"
                  />
                )}

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="text"
                    name="date"
                    placeholder="Date Souhaitée"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    required
                    className="border-surface/20 bg-surface/5 text-surface placeholder:text-surface/40 focus:border-blue-primary focus:ring-blue-primary/25"
                  />
                  <select 
                    name="time_slot" 
                    required
                    defaultValue=""
                    className="rounded-xl border border-surface/20 bg-surface/5 px-3 py-2 text-sm text-surface focus:border-blue-primary focus:outline-none focus:ring-2 focus:ring-blue-primary/25"
                  >
                    <option value="" disabled className="text-ink">Créneau</option>
                    <option value="Matin" className="text-ink">Matin</option>
                    <option value="Après-midi" className="text-ink">Après-midi</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 h-12 bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl font-bold transition-all active:scale-95"
                >
                  {isSubmitting ? "Envoi en cours..." : "Demander mon créneau"}
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
                href="tel:+33768627902"
                className="group flex items-center gap-4 text-surface/70 transition-colors hover:text-surface"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/5 group-hover:bg-blue-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-blue-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-surface/40">Appelez-nous</span>
                  <span className="font-medium">07 68 62 79 02</span>
                </div>
              </a>
              <a
                href="https://wa.me/33768627902"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-surface/70 transition-colors hover:text-surface"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/5 group-hover:bg-[#25D366]/20 transition-colors">
                  <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-surface/40">WhatsApp</span>
                  <span className="font-medium">07 68 62 79 02</span>
                </div>
              </a>
              <a
                href="mailto:eclatautodijon@gmail.com"
                className="group flex items-center gap-4 text-surface/70 transition-colors hover:text-surface"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/5 group-hover:bg-blue-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-blue-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-surface/40">Écrivez-nous</span>
                  <span className="font-medium">eclatautodijon@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3 (Mobile Order: 3) - Logo & Branding */}
          <div className="order-3 flex flex-col gap-6 lg:order-1">
            <ConceptCLogo variant="footer" className="text-surface" />
            <p className="max-w-xs text-base leading-relaxed text-surface/60">
              L&apos;excellence du detailing automobile à Dijon. Redonner à votre véhicule son prestige originel.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/eclatautodijon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-surface/5 flex items-center justify-center text-surface/40 hover:bg-blue-primary/20 hover:text-blue-primary cursor-pointer transition-all"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@eclatautodijon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-surface/5 flex items-center justify-center text-surface/40 hover:bg-blue-primary/20 hover:text-blue-primary cursor-pointer transition-all"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.023l-.35-.023c-.262 0-.528.016-.797.048v16.142c-.067-.024-.134-.044-.2-.065a4.445 4.445 0 00-1.077-.193 4.22 4.22 0 00-1.284.144c-1.354.346-2.316 1.41-2.43 2.693-.114 1.282.61 2.518 1.83 3.12 1.22.602 2.76.602 3.98 0 1.21-.59 2.022-1.84 2.05-3.235V6.756a8.813 8.813 0 005.204 1.71h.215V4.605a4.933 4.933 0 01-3.14-1.442A4.933 4.933 0 0112.525.023z"/>
                </svg>
              </a>
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
