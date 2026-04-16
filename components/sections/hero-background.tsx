"use client"

import { useEffect, useState } from "react"
import { DynamicHeroBackground } from "@/components/sections/dynamic-hero-background"

function supportsIdleCallback(): boolean {
  return typeof (globalThis as any).requestIdleCallback === "function"
}

export function HeroBackground() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Disable for touch/coarse pointers (mostly mobile) to reduce main-thread work.
    const finePointer = window.matchMedia?.("(pointer: fine)")?.matches ?? false
    if (!finePointer) return

    const enable = () => setEnabled(true)

    if (supportsIdleCallback()) {
      const id = (globalThis as any).requestIdleCallback(enable, { timeout: 2500 })
      return () => (globalThis as any).cancelIdleCallback?.(id)
    }

    const t = window.setTimeout(enable, 1500)
    return () => window.clearTimeout(t)
  }, [])

  if (!enabled) return null

  return <DynamicHeroBackground />
}

