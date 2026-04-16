"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EclatLogo } from "@/components/logo/concept-c-logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#pourquoi-nous", label: "Pourquoi nous" },
  { href: "#faq", label: "FAQ" },
]

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Track active section
      const sections = navLinks.map(link => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  if (!mounted) return null // Avoid mismatch on initial load

  return (
    <>
      <header
        suppressHydrationWarning
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300 border-b",
          isScrolled
            ? "bg-ink/95 backdrop-blur-md shadow-md border-white/10"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-6">
          {/* Logo with Live Glow */}
          <a href="#" className="flex items-center shrink-0" aria-label="Éclat Auto Dijon - Accueil">
            <motion.div
              animate={{ 
                filter: [
                  "drop-shadow(0 0 2px rgba(26, 86, 219, 0))",
                  "drop-shadow(0 0 8px rgba(26, 86, 219, 0.4))",
                  "drop-shadow(0 0 2px rgba(26, 86, 219, 0))"
                ] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <EclatLogo />
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[15px] font-medium transition-colors hover:text-blue-primary py-2",
                  activeSection === link.href.replace("#", "")
                    ? "text-blue-primary"
                    : "text-surface"
                )}
              >
                {link.label}
                {/* Active underline indicator */}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-blue-primary transition-all duration-200",
                    activeSection === link.href.replace("#", "")
                      ? "w-full"
                      : "w-0"
                  )}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Contact */}
          <div className="hidden items-center gap-6 md:flex">
            <a 
              href="tel:+33768627902" 
              className="text-sm font-semibold text-surface transition-colors hover:text-blue-primary font-sans"
              suppressHydrationWarning
            >
              07 68 62 79 02
            </a>
            <a href="#reserver">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 5px rgba(26, 86, 219, 0.3)",
                    "0 0 20px rgba(26, 86, 219, 0.6)",
                    "0 0 5px rgba(26, 86, 219, 0.3)"
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-xl"
              >
                <Button className="bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl px-6 font-semibold transition-transform hover:scale-[1.02]">
                  Réserver
                </Button>
              </motion.div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-blue-primary md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-ink transition-all duration-200 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className={cn(
            "flex h-full flex-col transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          {/* Mobile Header */}
          <div className="flex h-[68px] items-center justify-between px-4">
            <EclatLogo />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-blue-primary"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center" aria-label="Navigation mobile">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={cn(
                  "group flex flex-col items-center gap-1 font-serif text-3xl font-semibold text-surface transition-all active:scale-95",
                  isMobileMenuOpen ? "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" : ""
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="text-blue-primary/40 text-sm font-sans tracking-widest uppercase">0{i + 1}</span>
                <span className="group-hover:text-blue-primary">{link.label}</span>
              </a>
            ))}
            <div className={cn(
              "mt-8 flex flex-col items-center gap-6 w-full max-w-xs",
              isMobileMenuOpen ? "animate-in fade-in slide-in-from-bottom-4 delay-500 duration-500 fill-mode-both" : ""
            )}>
              <a 
                href="tel:+33768627902" 
                className="text-lg font-medium text-surface/80 transition-colors hover:text-blue-primary font-sans"
              >
                07 68 62 79 02
              </a>
              <a
                href="#reserver"
                onClick={handleNavClick}
                className="w-full"
              >
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 10px rgba(26, 86, 219, 0.4)",
                      "0 0 30px rgba(26, 86, 219, 0.7)",
                      "0 0 10px rgba(26, 86, 219, 0.4)"
                    ] 
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-xl w-full"
                >
                  <Button className="w-full bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl py-7 text-xl font-bold">
                    Réserver en ligne
                  </Button>
                </motion.div>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
