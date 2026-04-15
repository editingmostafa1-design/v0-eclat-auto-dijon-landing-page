import { cn } from "@/lib/utils"

type LogoVariant = "dark" | "light" | "blue" | "nav"

interface ConceptCLogoProps {
  variant?: LogoVariant
  className?: string
}

export function ConceptCLogo({ variant = "dark", className }: ConceptCLogoProps) {
  // Color mappings based on variant
  const colors = {
    dark: { car: "#F9F8F5", text: "#F9F8F5", accent: "#1A56DB", subtext: "#1A56DB" },
    light: { car: "#111210", text: "#111210", accent: "#1A56DB", subtext: "#1A56DB" },
    blue: { car: "#F9F8F5", text: "#F9F8F5", accent: "#111210", subtext: "#111210" },
    nav: { car: "#F9F8F5", text: "#F9F8F5", accent: "#1A56DB", subtext: "#1A56DB" },
  }

  const { car, text, accent, subtext } = colors[variant]

  // Nav variant uses horizontal lockup
  if (variant === "nav") {
    return (
      <svg
        width="180"
        height="48"
        viewBox="0 0 240 48"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", className)}
        aria-label="Éclat Auto Dijon"
      >
        {/* Car icon in rounded square */}
        <rect x="0" y="4" width="40" height="40" rx="7" fill="#1C1C1A" />
        <path
          d="M 3,28 Q 7,18 14,17 Q 20,16 24,20 Q 27,23 31,23 L 37,23 Q 39,23 40,26 L 40,30 L 2,30 L 2,28 Z"
          fill={car}
        />
        <circle cx="9" cy="34" r="5" fill="none" stroke={car} strokeWidth="2.5" />
        <circle cx="9" cy="34" r="2" fill={car} />
        <circle cx="33" cy="34" r="5" fill="none" stroke={car} strokeWidth="2.5" />
        <circle cx="33" cy="34" r="2" fill={car} />
        <line x1="2" y1="34" x2="4" y2="34" stroke={car} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="14" y1="34" x2="28" y2="34" stroke={car} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="38" y1="34" x2="40" y2="34" stroke={car} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="15" cy="15" r="3" fill={accent} />
        
        {/* Text */}
        <text
          x="52"
          y="26"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="16"
          fontWeight="800"
          fill={text}
          letterSpacing="3"
        >
          ÉCLAT AUTO
        </text>
        <text
          x="52"
          y="40"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="9"
          fontWeight="500"
          fill={subtext}
          letterSpacing="4"
        >
          DIJON
        </text>
      </svg>
    )
  }

  // Full primary wordmark for other variants
  return (
    <svg
      width="280"
      height="104"
      viewBox="0 0 320 104"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="Éclat Auto Dijon"
    >
      {/* Car body */}
      <path
        d="M 30,46 Q 44,22 72,20 Q 96,18 112,30 Q 124,38 138,38 L 236,38 Q 248,38 252,46 L 256,56 L 26,56 L 26,46 Z"
        fill={car}
      />
      
      {/* Pillars */}
      <line x1="26" y1="64" x2="26" y2="56" stroke={car} strokeWidth="4" strokeLinecap="round" />
      <line x1="256" y1="64" x2="256" y2="56" stroke={car} strokeWidth="4" strokeLinecap="round" />
      
      {/* Front wheel */}
      <circle cx="54" cy="68" r="10" fill="none" stroke={car} strokeWidth="3.5" />
      <circle cx="54" cy="68" r="3.5" fill={car} />
      
      {/* Rear wheel */}
      <circle cx="226" cy="68" r="10" fill="none" stroke={car} strokeWidth="3.5" />
      <circle cx="226" cy="68" r="3.5" fill={car} />
      
      {/* Undercarriage lines */}
      <line x1="26" y1="68" x2="44" y2="68" stroke={car} strokeWidth="4" strokeLinecap="round" />
      <line x1="64" y1="68" x2="216" y2="68" stroke={car} strokeWidth="4" strokeLinecap="round" />
      <line x1="236" y1="68" x2="256" y2="68" stroke={car} strokeWidth="4" strokeLinecap="round" />
      
      {/* Shine accent */}
      <circle cx="76" cy="17" r="5" fill={accent} />
      
      {/* Brand text */}
      <text
        x="141"
        y="94"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22"
        fontWeight="800"
        fill={text}
        textAnchor="middle"
        letterSpacing="10"
      >
        ÉCLAT
      </text>
      <text
        x="141"
        y="104"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9"
        fontWeight="500"
        fill={subtext}
        textAnchor="middle"
        letterSpacing="5"
      >
        AUTO · DIJON
      </text>
    </svg>
  )
}
