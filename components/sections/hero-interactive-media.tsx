"use client"

import { useEffect, useState } from "react"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"

type Props = {
  beforeImage: string
  afterImage: string
  className?: string
}

function supportsIdleCallback(): boolean {
  return typeof (globalThis as any).requestIdleCallback === "function"
}

export function HeroInteractiveMedia({ beforeImage, afterImage, className }: Props) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Defer heavy client work until after initial paint/LCP.
    const enable = () => setEnabled(true)

    if (supportsIdleCallback()) {
      const id = (globalThis as any).requestIdleCallback(enable, { timeout: 2500 })
      return () => (globalThis as any).cancelIdleCallback?.(id)
    }

    const t = window.setTimeout(enable, 1500)
    return () => window.clearTimeout(t)
  }, [])

  if (!enabled) return null

  return (
    <div className={className}>
      <BeforeAfterSlider
        beforeImage={beforeImage}
        afterImage={afterImage}
        className="rounded-xl shadow-2xl"
        // The LCP image is already loaded by the server-rendered static hero.
        priorityAfter={false}
        priorityBefore={false}
      />
    </div>
  )
}

