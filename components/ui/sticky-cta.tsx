"use client"

import { useState, useEffect } from "react"
import { Phone, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px
      setShow(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 transition-all duration-500 md:hidden",
        show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-2 overflow-hidden rounded-2xl bg-ink p-2 shadow-2xl shadow-ink/40 border border-white/10 backdrop-blur-xl">
        <a 
          href="tel:+33768627902"
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface/10 text-surface transition-colors active:bg-surface/20"
          aria-label="Appeler"
        >
          <Phone className="h-5 w-5" />
        </a>
        
        <a 
          href="#reserver"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-primary h-12 text-sm font-bold text-surface transition-all active:scale-[0.98]"
        >
          <Calendar className="h-4 w-4" />
          Réserver mon créneau
        </a>
      </div>
    </div>
  )
}
