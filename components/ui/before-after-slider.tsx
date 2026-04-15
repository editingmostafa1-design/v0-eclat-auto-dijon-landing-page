"use client"

import { useState, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  className?: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  className,
  beforeLabel = "AVANT",
  afterLabel = "APRÈS",
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
        "relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
    >
      {/* After panel (right side, full) */}
      <div className="absolute inset-0 bg-near-black">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-xs font-medium uppercase tracking-widest text-surface/40">
            {afterLabel}
          </span>
        </div>
        <span className="absolute bottom-4 right-4 text-xs font-medium uppercase tracking-widest text-surface/60">
          {afterLabel}
        </span>
      </div>

      {/* Before panel (left side, clipped) */}
      <div
        className="absolute inset-0 bg-warm-gray"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-xs font-medium uppercase tracking-widest text-ink/40">
            {beforeLabel}
          </span>
        </div>
        <span className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-widest text-ink/60">
          {beforeLabel}
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-1 -translate-x-1/2 bg-blue-primary"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle circle */}
        <div
          className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-blue-primary shadow-lg"
          onMouseDown={handleMouseDown}
          onTouchStart={() => {}}
        >
          {/* Grip lines */}
          <div className="flex gap-1">
            <div className="h-5 w-0.5 rounded-full bg-primary-foreground/80" />
            <div className="h-5 w-0.5 rounded-full bg-primary-foreground/80" />
            <div className="h-5 w-0.5 rounded-full bg-primary-foreground/80" />
          </div>
        </div>
      </div>
    </div>
  )
}
