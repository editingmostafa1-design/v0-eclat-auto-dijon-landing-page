"use client"

import { cn } from "@/lib/utils"

// ── Primary nav logo — exact SVG from brand guide ────────────────────────────
// White fills. Always sits on the dark header (transparent → bg-ink/95 on scroll).
export const EclatLogo = () => (
  <svg
    width="140"
    height="52"
    viewBox="0 0 280 120"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Éclat Auto Dijon"
    className="bg-transparent"
  >
    {/* Car body */}
    <path
      d="M 30,46 Q 44,22 72,20 Q 96,18 112,30 Q 124,38 138,38 L 236,38 Q 248,38 252,46 L 256,56 L 26,56 L 26,46 Z"
      fill="white"
    />
    {/* Wheels & undercarriage */}
    <g stroke="white" fill="none" strokeWidth="3.5">
      <circle cx="54" cy="68" r="10" />
      <circle cx="226" cy="68" r="10" />
      <path d="M 26,68 L 44,68 M 64,68 L 216,68 M 236,68 L 256,68" strokeLinecap="round" strokeWidth="4"/>
    </g>
    <circle cx="54" cy="68" r="3.5" fill="white"/>
    <circle cx="226" cy="68" r="3.5" fill="white"/>
    {/* Blue accent dot */}
    <circle cx="72" cy="20" r="6" fill="#1A56DB"/>
    {/* ÉCLAT — primary wordmark */}
    <text x="140" y="100" fontFamily="sans-serif" fontSize="28" fontWeight="900" fill="white" textAnchor="middle" letterSpacing="8">ÉCLAT</text>
    {/* AUTO · DIJON — subtitle */}
    <text x="140" y="118" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill="#1A56DB" textAnchor="middle" letterSpacing="4">AUTO · DIJON</text>
  </svg>
)

type LogoVariant = "nav" | "footer" | "icon"

interface ConceptCLogoProps {
  variant?: LogoVariant
  className?: string
}

/**
 * ConceptCLogo — All variants use fill="currentColor" so the parent
 * controls color via Tailwind text-* classes.
 * Only the blue accent dot (#1A56DB) is hardcoded.
 *
 * Usage:
 *   <ConceptCLogo variant="nav" className="text-ink" />           ← dark ink on light nav
 *   <ConceptCLogo variant="nav" className="text-surface" />       ← white on dark mobile menu
 *   <ConceptCLogo variant="footer" className="text-surface" />    ← white on dark footer
 */
export function ConceptCLogo({ variant = "nav", className }: ConceptCLogoProps) {

  // ── Nav / Header — Horizontal wordmark lockup ─────────────────────────────
  // Transparent background, currentColor fills, fits a 40–48px tall header
  if (variant === "nav") {
    return (
      <svg
        width="260"
        height="56"
        viewBox="0 0 240 56"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", className)}
        aria-label="Éclat Auto Dijon"
        fill="currentColor"
      >
        {/* Car silhouette — 40px badge zone */}
        <path d="M 3,28 Q 7,18 14,17 Q 20,16 24,20 Q 27,23 31,23 L 37,23 Q 39,23 40,26 L 40,30 L 2,30 L 2,28 Z"/>
        {/* Undercarriage */}
        <line x1="2" y1="34" x2="4" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="14" y1="34" x2="28" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="38" y1="34" x2="40" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Wheels */}
        <circle cx="9" cy="34" r="5" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="9" cy="34" r="2" fill="currentColor"/>
        <circle cx="33" cy="34" r="5" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="33" cy="34" r="2" fill="currentColor"/>
        {/* Blue accent dot */}
        <circle cx="15" cy="15" r="3" fill="#1A56DB"/>
        {/* Line 1: ÉCLAT — large, bold */}
        <text x="52" y="27" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="5">ÉCLAT</text>
        {/* Line 2: AUTO · DIJON — small, blue */}
        <text x="52" y="43" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="600" fill="#1A56DB" letterSpacing="4">AUTO · DIJON</text>
      </svg>
    )
  }

  // ── Footer — Primary stacked wordmark ────────────────────────────────────
  if (variant === "footer") {
    return (
      <svg
        width="220"
        height="80"
        viewBox="0 0 320 120"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", className)}
        aria-label="Éclat Auto Dijon"
        fill="currentColor"
      >
        {/* Car silhouette — full primary wordmark proportions */}
        <path d="M 30,46 Q 44,22 72,20 Q 96,18 112,30 Q 124,38 138,38 L 236,38 Q 248,38 252,46 L 256,56 L 26,56 L 26,46 Z"/>

        {/* Undercarriage */}
        <line x1="26" y1="64" x2="26" y2="56" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <line x1="256" y1="64" x2="256" y2="56" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <line x1="26" y1="68" x2="44" y2="68" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <line x1="64" y1="68" x2="216" y2="68" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <line x1="236" y1="68" x2="256" y2="68" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>

        {/* Wheels */}
        <circle cx="54" cy="68" r="10" fill="none" stroke="currentColor" strokeWidth="3.5"/>
        <circle cx="54" cy="68" r="3.5" fill="currentColor"/>
        <circle cx="226" cy="68" r="10" fill="none" stroke="currentColor" strokeWidth="3.5"/>
        <circle cx="226" cy="68" r="3.5" fill="currentColor"/>

        {/* Blue accent dot */}
        <circle cx="72" cy="20" r="6" fill="#1A56DB"/>

        {/* Wordmark */}
        <text
          x="141"
          y="98"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="26"
          fontWeight="900"
          fill="currentColor"
          textAnchor="middle"
          letterSpacing="10"
        >
          ÉCLAT
        </text>
        <text
          x="141"
          y="113"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="10"
          fontWeight="600"
          fill="#1A56DB"
          textAnchor="middle"
          letterSpacing="5"
        >
          AUTO · DIJON
        </text>
      </svg>
    )
  }

  // ── Icon mark — square badge only, no wordmark ────────────────────────────
  if (variant === "icon") {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 88 88"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", className)}
        aria-label="Éclat Auto Dijon"
        fill="currentColor"
      >
        <path d="M 6,38 Q 14,20 28,18 Q 40,16 48,24 Q 54,30 62,30 L 82,30 Q 86,30 87,36 L 88,42 L 4,42 L 4,38 Z"/>
        <line x1="4" y1="42" x2="4" y2="50" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="88" y1="42" x2="88" y2="50" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="18" cy="52" r="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="18" cy="52" r="3" fill="currentColor"/>
        <circle cx="74" cy="52" r="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="74" cy="52" r="3" fill="currentColor"/>
        <line x1="4" y1="52" x2="10" y2="52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="26" y1="52" x2="66" y2="52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="82" y1="52" x2="88" y2="52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="30" cy="15" r="4" fill="#1A56DB"/>
      </svg>
    )
  }

  return null
}
