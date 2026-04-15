"use client"

import { cn } from "@/lib/utils"

type LogoVariant = "nav" | "footer" | "dark" | "light"

interface ConceptCLogoProps {
  variant?: LogoVariant
  className?: string
}

export function ConceptCLogo({ variant = "nav", className }: ConceptCLogoProps) {
  // Navigation Bar Logo (Horizontal Lockup)
  if (variant === "nav") {
    return (
      <svg
        width="180"
        height="48"
        viewBox="0 0 200 48"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", className)}
        aria-label="Éclat Auto Dijon"
      >
        {/* Icon Badge - 40x40px rounded rectangle */}
        <rect x="4" y="4" width="40" height="40" rx="7" fill="#E8E6DE" />
        
        {/* Car silhouette inside badge */}
        <g transform="translate(8, 12)">
          <path
            d="M 2,16 Q 5,10 10,9 Q 14,8 17,11 Q 19,13 22,13 L 28,13 Q 30,13 31,15 L 32,18 L 1,18 L 1,16 Z"
            fill="#111210"
          />
          {/* Front wheel */}
          <circle cx="7" cy="22" r="3.5" fill="none" stroke="#111210" strokeWidth="1.5" />
          <circle cx="7" cy="22" r="1.2" fill="#111210" />
          {/* Rear wheel */}
          <circle cx="25" cy="22" r="3.5" fill="none" stroke="#111210" strokeWidth="1.5" />
          <circle cx="25" cy="22" r="1.2" fill="#111210" />
          {/* Undercarriage */}
          <line x1="1" y1="22" x2="3.5" y2="22" stroke="#111210" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10.5" y1="22" x2="21.5" y2="22" stroke="#111210" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="28.5" y1="22" x2="32" y2="22" stroke="#111210" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        
        {/* Blue accent dot - centered above roofline */}
        <circle cx="18" cy="12" r="2.5" fill="#1A56DB" />
        
        {/* Primary Text: ÉCLAT AUTO */}
        <text
          x="54"
          y="24"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          fontSize="14"
          fontWeight="800"
          fill="#111210"
          letterSpacing="3"
        >
          ÉCLAT AUTO
        </text>
        
        {/* Subtitle: DIJON */}
        <text
          x="54"
          y="38"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          fontSize="10"
          fontWeight="500"
          fill="#1A56DB"
          letterSpacing="4"
        >
          DIJON
        </text>
      </svg>
    )
  }

  // Footer Logo (Stacked Primary) - 80px height
  if (variant === "footer") {
    return (
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", className)}
        aria-label="Éclat Auto Dijon"
      >
        {/* Car silhouette */}
        <g transform="translate(20, 4)">
          <path
            d="M 4,18 Q 10,8 20,6 Q 30,4 38,10 Q 44,14 52,14 L 72,14 Q 78,14 80,18 L 82,24 L 2,24 L 2,18 Z"
            fill="#F9F8F5"
          />
          {/* Front wheel */}
          <circle cx="14" cy="32" r="5" fill="none" stroke="#F9F8F5" strokeWidth="2" />
          <circle cx="14" cy="32" r="1.8" fill="#F9F8F5" />
          {/* Rear wheel */}
          <circle cx="68" cy="32" r="5" fill="none" stroke="#F9F8F5" strokeWidth="2" />
          <circle cx="68" cy="32" r="1.8" fill="#F9F8F5" />
          {/* Undercarriage */}
          <line x1="2" y1="32" x2="9" y2="32" stroke="#F9F8F5" strokeWidth="2" strokeLinecap="round" />
          <line x1="19" y1="32" x2="63" y2="32" stroke="#F9F8F5" strokeWidth="2" strokeLinecap="round" />
          <line x1="73" y1="32" x2="82" y2="32" stroke="#F9F8F5" strokeWidth="2" strokeLinecap="round" />
        </g>
        
        {/* Blue accent dot above É */}
        <circle cx="36" cy="8" r="3" fill="#1A56DB" />
        
        {/* ÉCLAT wordmark */}
        <text
          x="60"
          y="58"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          fontSize="18"
          fontWeight="800"
          fill="#F9F8F5"
          textAnchor="middle"
          letterSpacing="6"
        >
          ÉCLAT
        </text>
        
        {/* AUTO · DIJON subtitle */}
        <text
          x="60"
          y="72"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          fontSize="9"
          fontWeight="500"
          fill="#1A56DB"
          textAnchor="middle"
          letterSpacing="3"
        >
          AUTO · DIJON
        </text>
      </svg>
    )
  }

  // Dark variant (light colors for dark backgrounds) - used in mobile nav
  if (variant === "dark" || variant === "light") {
    const textColor = variant === "dark" ? "#F9F8F5" : "#111210"
    return (
      <svg
        width="140"
        height="48"
        viewBox="0 0 200 48"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", className)}
        aria-label="Éclat Auto Dijon"
      >
        {/* Icon Badge */}
        <rect x="4" y="4" width="40" height="40" rx="7" fill={variant === "dark" ? "#2A2A28" : "#E8E6DE"} />
        
        {/* Car silhouette inside badge */}
        <g transform="translate(8, 12)">
          <path
            d="M 2,16 Q 5,10 10,9 Q 14,8 17,11 Q 19,13 22,13 L 28,13 Q 30,13 31,15 L 32,18 L 1,18 L 1,16 Z"
            fill={textColor}
          />
          <circle cx="7" cy="22" r="3.5" fill="none" stroke={textColor} strokeWidth="1.5" />
          <circle cx="7" cy="22" r="1.2" fill={textColor} />
          <circle cx="25" cy="22" r="3.5" fill="none" stroke={textColor} strokeWidth="1.5" />
          <circle cx="25" cy="22" r="1.2" fill={textColor} />
          <line x1="1" y1="22" x2="3.5" y2="22" stroke={textColor} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10.5" y1="22" x2="21.5" y2="22" stroke={textColor} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="28.5" y1="22" x2="32" y2="22" stroke={textColor} strokeWidth="1.5" strokeLinecap="round" />
        </g>
        
        {/* Blue accent dot */}
        <circle cx="18" cy="12" r="2.5" fill="#1A56DB" />
        
        {/* Text */}
        <text
          x="54"
          y="24"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          fontSize="14"
          fontWeight="800"
          fill={textColor}
          letterSpacing="3"
        >
          ÉCLAT AUTO
        </text>
        <text
          x="54"
          y="38"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          fontSize="10"
          fontWeight="500"
          fill="#1A56DB"
          letterSpacing="4"
        >
          DIJON
        </text>
      </svg>
    )
  }

  return null
}
