"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Sparkles, Sofa, Droplets, ShieldCheck, Search, Rows3, ArrowLeft, Info, AlertTriangle, Car } from "lucide-react"
import { cn } from "@/lib/utils"

type ServiceId = "auto" | "sofa" | "tapis"

const services = [
  {
    id: "auto" as ServiceId,
    icon: Sparkles,
    label: "Automobile",
    title: "Lavage Premium Intérieur",
    description: "Une reconstruction esthétique complète de votre habitacle, des fibres aux plastiques.",
    price: "Dès 60€",
    color: "bg-blue-primary",
    protocol: [
      { id: 1, icon: Search, title: "Aspiration profonde", desc: "Aspiration minutieuse de l'ensemble de l'habitacle passager." },
      { id: 2, icon: Rows3, title: "Brossage mécanique", desc: "Traitement des sols à l'aide d'une brosse rotative mécanique." },
      { id: 3, icon: Droplets, title: "Shampoing sièges", desc: "Nettoyage profond par système d'injection/extraction." },
      { id: 4, icon: Sofa, title: "Soin des plastiques", desc: "Nettoyage et soin protecteur de toutes les surfaces plastiques." },
      { id: 5, icon: Rows3, title: "Nettoyage tapis", desc: "Nettoyage approfondi des tapis de sol amovibles." },
      { id: 6, icon: Sparkles, title: "Finition vitres", desc: "Nettoyage des vitres intérieures pour une clarté totale." },
      { id: 7, icon: Check, title: "Contours de portes", desc: "Nettoyage des cadres, montants et feuillures de portes." },
      { id: 8, icon: Droplets, title: "Dégraissage jantes", desc: "Nettoyage précis et dégraissage complet des jantes." },
    ]
  },
  {
    id: "sofa" as ServiceId,
    icon: Sofa,
    label: "Mobilier",
    title: "Nettoyage Canapé",
    description: "Traitement en profondeur de vos assises. Élimination des taches, acariens et odeurs.",
    price: "Dès 50€",
    color: "bg-ink",
    protocol: [
      { id: 1, icon: Search, title: "Diagnostic fibres", desc: "Analyse de la matière et test de solidité des couleurs." },
      { id: 2, icon: Droplets, title: "Pré-traitement", desc: "Traitement ciblé des taches tenaces (graisse, nourriture)." },
      { id: 3, icon: Rows3, title: "Brossage manuel", desc: "Action douce pour désincruster la saleté profonde." },
      { id: 4, icon: Sparkles, title: "Injection/Extraction", desc: "Nettoyage haute température pour extraire les impuretés." },
      { id: 5, icon: Check, title: "Contrôle qualité", desc: "Vérification finale et conseils pour un séchage optimal." },
    ]
  },
  {
    id: "tapis" as ServiceId,
    icon: Rows3,
    label: "Sol",
    title: "Nettoyage Tapis",
    description: "Restauration de la souplesse et de l'éclat originel de vos tapis et moquettes.",
    price: "Dès 35€",
    color: "bg-ink",
    protocol: [
      { id: 1, icon: Droplets, title: "Agents spécifiques", desc: "Application de produits de nettoyage adaptés à la fibre." },
      { id: 2, icon: Rows3, title: "Shampoing", desc: "Action mécanique ou manuelle selon la fragilité du tapis." },
      { id: 3, icon: Sparkles, title: "Extraction profonde", desc: "Retrait des impuretés et de l'humidité résiduelle." },
      { id: 4, icon: Check, title: "Mise en séchage", desc: "Contrôle qualité final et préparation au séchage." },
    ]
  }
]

export function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId | null>(null)
  const selectedService = services.find(s => s.id === selectedServiceId)

  const handleBooking = (serviceId: ServiceId) => {
    const serviceMap = {
      auto: "Intérieur Voiture",
      sofa: "Nettoyage Canapé",
      tapis: "Nettoyage Tapis"
    }
    window.dispatchEvent(new CustomEvent('select-service', { detail: serviceMap[serviceId] }));
    
    setTimeout(() => {
      const element = document.getElementById('reserver-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.location.hash = 'reserver';
      }
    }, 100);
  }

  return (
    <section id="services" className={cn(
      "relative py-12 lg:py-24 transition-colors duration-700",
      selectedServiceId ? "bg-ink text-surface" : "bg-surface"
    )}>
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <AnimatePresence mode="wait">
          {!selectedServiceId ? (
            <motion.div 
              key="selector"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="mb-16">
                <span className="kicker mb-4 block">Savoir-faire</span>
                <h2 className="font-serif text-3xl font-semibold text-ink lg:text-5xl">
                  Nos expertises de rénovation
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                  À Dijon et alentours, nous intervenons directement chez vous pour sublimer 
                  vos biens les plus précieux.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    layoutId={`card-${service.id}`}
                    onClick={() => setSelectedServiceId(service.id)}
                    whileHover={{ y: -5, borderColor: "rgba(26, 86, 219, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex flex-col items-start rounded-3xl border border-border bg-card p-8 text-left transition-all hover:shadow-2xl"
                  >
                    <div className={cn("mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-surface", service.color)}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <span className="mono-label !text-blue-primary font-bold mb-2">{service.label}</span>
                    <h3 className="mb-3 font-serif text-2xl font-bold text-ink group-hover:text-blue-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-blue-primary font-bold">
                      <span>Explorer le protocole</span>
                      <Check className="h-4 w-4" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="ecosystem"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header / Navigation */}
              <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <button 
                  onClick={() => setSelectedServiceId(null)}
                  className="flex items-center gap-2 text-surface/60 hover:text-surface transition-colors group"
                >
                  <ArrowLeft className="h-4 w-4 transform transition-transform group-hover:-translate-x-1" />
                  <span className="mono-label">Retour aux services</span>
                </button>
                <div className="flex items-center gap-4">
                  <motion.div 
                    layoutId={`icon-${selectedServiceId}`}
                    className={cn("flex h-12 w-12 items-center justify-center rounded-xl", selectedService?.color)}
                  >
                    {selectedService && <selectedService.icon className="h-6 w-6 text-surface" />}
                  </motion.div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold leading-none">{selectedService?.title}</h2>
                    <p className="text-sm text-surface/40 mt-1">{selectedService?.label}</p>
                  </div>
                </div>
              </div>

              {/* Protocol Timeline - Staggered Reveal */}
              <motion.div 
                className="mb-20 grid gap-8 lg:grid-cols-7 lg:gap-4"
                initial="hidden"
                animate="show"
                variants={{
                  show: {
                    transition: {
                      staggerChildren: 0.08
                    }
                  }
                }}
              >
                {selectedService?.protocol.map((step, index) => (
                  <motion.div 
                    key={step.id} 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="group relative flex flex-col items-center text-center lg:items-start lg:text-left"
                  >
                    <div className="relative mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink text-xs font-bold transition-transform group-hover:scale-110">
                      {index + 1}
                      {index < selectedService.protocol.length - 1 && (
                        <div className="absolute left-1/2 top-full h-8 w-px bg-surface/20 lg:left-full lg:top-1/2 lg:h-px lg:w-full" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <step.icon className="mx-auto h-4 w-4 text-blue-primary lg:mx-0" />
                      <h4 className="text-sm font-bold leading-tight">{step.title}</h4>
                      <p className="text-[11px] text-surface/50 leading-relaxed hidden lg:block">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Integrated Pricing Module */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="glass-card rounded-[2.5rem] p-8 lg:p-16"
              >
                {selectedServiceId === 'auto' && <CarPricingModule onBooking={() => handleBooking('auto')} />}
                {selectedServiceId === 'sofa' && <SofaPricingModule onBooking={() => handleBooking('sofa')} />}
                {selectedServiceId === 'tapis' && <TapisPricingModule onBooking={() => handleBooking('tapis')} />}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function CarPricingModule({ onBooking }: { onBooking: () => void }) {
  const [size, setSize] = useState(1) // 1: Citadine, 1.2: Berline, 1.4: SUV
  const [isDisaster, setIsDisaster] = useState(false)
  const baseDefault = 60
  const total = Math.round(baseDefault * size * (isDisaster ? 1.6 : 1))

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="space-y-10">
        <div>
          <span className="mono-label !text-surface/40 mb-4 block">Configuration du véhicule</span>
          <div className="flex flex-wrap gap-3">
            {[
              { id: 1, label: "Citadine", icon: "🚗" },
              { id: 1.2, label: "Berline / Break", icon: "🚙" },
              { id: 1.4, label: "SUV / Familiale", icon: "🚐" }
            ].map(type => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSize(type.id)}
                className={cn(
                  "flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-all",
                  size === type.id ? "bg-blue-primary border-blue-primary text-surface" : "border-white/10 text-surface/60 hover:bg-white/5"
                )}
              >
                <span>{type.icon}</span> {type.label}
              </motion.button>
            ))}
          </div>
        </div>
        <div>
          <span className="mono-label !text-surface/40 mb-4 block">État de l&apos;habitacle</span>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { id: false, label: "Quotidien", icon: Car, desc: "Poussière, miettes, traces d'usage." },
              { id: true, label: "Difficile", icon: AlertTriangle, desc: "Poils d'animaux, terre, taches profondes." }
            ].map(cond => (
              <motion.button
                key={cond.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsDisaster(cond.id)}
                className={cn(
                  "flex flex-col gap-2 rounded-2xl border p-5 text-left transition-all",
                  isDisaster === cond.id ? "bg-blue-primary/10 border-blue-primary text-surface" : "border-white/10 text-surface/40 hover:bg-white/5"
                )}
              >
                <cond.icon className="h-5 w-5" />
                <div>
                  <p className="font-bold text-sm text-surface">{cond.label}</p>
                  <p className="text-[10px] opacity-60 mt-0.5">{cond.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-surface p-10 text-ink text-center flex flex-col items-center">
        <span className="mono-label !text-ink/40 mb-4">Investissement estimé</span>
        <div className="flex items-baseline gap-1">
          <motion.span 
            key={total}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl font-bold font-serif"
          >
            {total}
          </motion.span>
          <span className="text-2xl font-bold">€*</span>
        </div>
        <p className="mt-6 text-sm text-ink/60 font-medium">Prestation chirurgicale à domicile.</p>
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "#111" }}
          whileTap={{ scale: 0.98 }}
          onClick={onBooking}
          className="mt-8 w-full rounded-xl bg-ink p-5 text-sm font-bold text-surface transition-all"
        >
          Réserver mon créneau
        </motion.button>
      </div>
    </div>
  )
}

function SofaPricingModule({ onBooking }: { onBooking: () => void }) {
  const [seats, setSeats] = useState(2)
  const price = seats * 25 // 25€ per seat base
  const finalPrice = Math.max(50, price)

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center text-left">
      <div>
        <h3 className="font-serif text-3xl font-bold mb-6">Expertise Mobilier</h3>
        <p className="text-surface/60 mb-8 leading-relaxed">
          Extraction profonde des allergènes et restauration des fibres de vos assises.
        </p>
        <div className="space-y-4">
          <span className="mono-label !text-surface/40 block">Nombre de places</span>
          <div className="flex gap-4">
             {[2, 3, 4, 5, 6].map(s => (
               <motion.button
                 key={s}
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 onClick={() => setSeats(s)}
                 className={cn(
                   "flex h-12 w-12 items-center justify-center rounded-full border font-bold transition-all",
                   seats === s ? "bg-blue-primary border-blue-primary text-surface" : "border-white/10 text-surface/60 hover:bg-white/5"
                 )}
               >
                 {s}
               </motion.button>
             ))}
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-surface p-10 text-ink text-center flex flex-col items-center">
        <span className="mono-label !text-ink/40 mb-4">Investissement estimé</span>
        <div className="flex items-baseline gap-1">
          <motion.span 
            key={finalPrice}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl font-bold font-serif"
          >
            {finalPrice}
          </motion.span>
          <span className="text-2xl font-bold">€*</span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBooking}
          className="mt-10 w-full rounded-xl bg-ink p-5 text-sm font-bold text-surface transition-all"
        >
          Réserver maintenant
        </motion.button>
      </div>
    </div>
  )
}

function TapisPricingModule({ onBooking }: { onBooking: () => void }) {
  return (
    <div className="text-center py-8">
      <h3 className="font-serif text-3xl font-bold mb-4">Entretien des Sols Nobles</h3>
      <p className="text-surface/60 max-w-xl mx-auto mb-10">
        Nos tarifs pour les tapis dépendent de l&apos;état et de la surface. 
        À titre indicatif, nos interventions démarrent à 35€.
      </p>
      <div className="inline-flex flex-col items-center gap-6 rounded-3xl bg-surface p-8 text-ink">
         <div>
            <span className="mono-label !text-ink/40 block mb-1">Base tarifaire</span>
            <span className="text-4xl font-serif font-bold italic">Sur Devis Mural / Salon</span>
         </div>
         <motion.button 
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           onClick={onBooking}
           className="w-full rounded-xl bg-ink px-12 py-5 text-sm font-bold text-surface transition-all"
         >
           Demander une estimation précise
         </motion.button>
      </div>
    </div>
  )
}


