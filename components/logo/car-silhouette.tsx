import { cn } from "@/lib/utils"

interface CarSilhouetteProps {
  className?: string
}

// Ghost watermark: fill #111210 at 3% opacity - a "whisper" on the background
export function CarSilhouette({ className }: CarSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 320 80"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      {/* Car body - hardcoded #111210 at 0.03 opacity */}
      <path
        d="M 30,46 Q 44,22 72,20 Q 96,18 112,30 Q 124,38 138,38 L 236,38 Q 248,38 252,46 L 256,56 L 26,56 L 26,46 Z"
        fill="#111210"
        opacity="0.03"
      />
      
      {/* Pillars */}
      <line x1="26" y1="64" x2="26" y2="56" stroke="#111210" strokeWidth="4" strokeLinecap="round" opacity="0.03" />
      <line x1="256" y1="64" x2="256" y2="56" stroke="#111210" strokeWidth="4" strokeLinecap="round" opacity="0.03" />
      
      {/* Front wheel */}
      <circle cx="54" cy="68" r="10" fill="none" stroke="#111210" strokeWidth="3.5" opacity="0.03" />
      <circle cx="54" cy="68" r="3.5" fill="#111210" opacity="0.03" />
      
      {/* Rear wheel */}
      <circle cx="226" cy="68" r="10" fill="none" stroke="#111210" strokeWidth="3.5" opacity="0.03" />
      <circle cx="226" cy="68" r="3.5" fill="#111210" opacity="0.03" />
      
      {/* Undercarriage lines */}
      <line x1="26" y1="68" x2="44" y2="68" stroke="#111210" strokeWidth="4" strokeLinecap="round" opacity="0.03" />
      <line x1="64" y1="68" x2="216" y2="68" stroke="#111210" strokeWidth="4" strokeLinecap="round" opacity="0.03" />
      <line x1="236" y1="68" x2="256" y2="68" stroke="#111210" strokeWidth="4" strokeLinecap="round" opacity="0.03" />
    </svg>
  )
}
