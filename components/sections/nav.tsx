"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConceptCLogo } from "@/components/logo/concept-c-logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
]

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300",
          isScrolled
            ? "bg-surface/90 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 lg:px-6">
          {/* Logo */}
          <a href="#" className="shrink-0" aria-label="Éclat Auto Dijon - Accueil">
            <ConceptCLogo variant="nav" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[15px] font-medium transition-colors hover:text-blue-primary py-2",
                  activeSection === link.href.replace("#", "")
                    ? "text-blue-primary"
                    : "text-ink"
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

          {/* Desktop CTA */}
          <a href="#reserver" className="hidden lg:block">
            <Button className="bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl px-6 font-semibold transition-transform hover:scale-[1.02]">
              Réserver
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-blue-primary lg:hidden"
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
          "fixed inset-0 z-[100] bg-ink transition-all duration-200 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className={cn(
            "flex h-full flex-col transition-transform duration-200",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          )}
        >
          {/* Mobile Header */}
          <div className="flex h-[68px] items-center justify-between px-4">
            <ConceptCLogo variant="light" />
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
          <nav className="flex flex-1 flex-col items-center justify-center gap-8" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-serif text-2xl font-semibold text-surface transition-colors hover:text-blue-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reserver"
              onClick={handleNavClick}
              className="mt-4"
            >
              <Button className="bg-blue-primary text-primary-foreground hover:bg-blue-hover rounded-xl px-8 py-6 text-lg font-semibold">
                Réserver
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}
