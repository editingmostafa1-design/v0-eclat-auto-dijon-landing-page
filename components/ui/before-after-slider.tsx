"use client"

import Image from "next/image"
import { useState, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  className?: string
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  aspectRatio?: string
}

export function BeforeAfterSlider({
  className,
  beforeImage,
  afterImage,
  beforeLabel = "AVANT",
  afterLabel = "APRÈS",
  aspectRatio = "aspect-square",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }
  const handleMouseLeave = () => setIsDragging(false)

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full cursor-ew-resize select-none overflow-hidden rounded-xl",
        aspectRatio,
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
    >
      {/* After image (right side, full background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <span className="absolute bottom-4 right-4 z-10 rounded-full bg-ink/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-surface backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>

      {/* Before image (left side, clipped) */}
      <div
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <span className="absolute bottom-4 left-4 z-10 rounded-full bg-surface/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink backdrop-blur-sm">
          {beforeLabel}
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 -translate-x-1/2 bg-surface/50 backdrop-blur-sm"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle circle */}
        <div
          className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-blue-primary shadow-xl shadow-blue-primary/40 border-2 border-surface/50"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Grip lines */}
          <div className="flex gap-1">
            <div className="h-4 w-0.5 rounded-full bg-primary-foreground/90" />
            <div className="h-4 w-0.5 rounded-full bg-primary-foreground/90" />
          </div>
        </div>
      </div>
    </div>
  )
}
