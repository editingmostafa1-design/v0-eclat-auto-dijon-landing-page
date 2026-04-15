"use client"

import { useEffect, useState } from "react"
import { CarSilhouette } from "@/components/logo/car-silhouette"
import { cn } from "@/lib/utils"

export function DynamicHeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize position to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-near-black">
      {/* Mesh Gradient Layers */}
      <div className="absolute inset-0 opacity-40">
        {/* Layer 1: Navy Primary */}
        <div 
          className="animate-mesh-1 absolute -top-1/4 -left-1/4 h-[100%] w-[100%] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, #10346E 0%, transparent 70%)"
          }}
        />
        {/* Layer 2: Deep Ink / Black */}
        <div 
          className="animate-mesh-2 absolute -bottom-1/4 -right-1/4 h-[120%] w-[120%] rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, #111210 0%, transparent 60%)"
          }}
        />
        {/* Layer 3: Subtle Accent Blue */}
        <div 
          className="animate-mesh-3 absolute top-1/2 left-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(16, 52, 110, 0.4) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Parallax Car Silhouette Watermark */}
      <div 
        className="absolute right-[-5%] top-1/2 w-[900px] -translate-y-1/2 opacity-[0.05] transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -30}px, calc(-50% + ${mousePosition.y * -20}px)) scale(1.1)`,
        }}
      >
        <CarSilhouette />
      </div>

      {/* Fade to page background at the bottom */}
      <div className="video-overlay absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface" />
    </div>
  )
}
