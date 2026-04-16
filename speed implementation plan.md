# Speed implementation plan (Éclat Auto Dijon)

Goal: **Real Experience Score 90+** (Vercel Speed Insights) on **mobile + desktop** while keeping the **exact same visuals** (same car, same angle, same design).

## What “targets” mean (plain English)
Targets are just the **numbers we want to end up with**. They define “done”.

How we’ll achieve Score 90+: **drive the Core Web Vitals metrics down** (Score is essentially a roll-up of these real-user signals).
- **LCP** (Largest Contentful Paint): how fast the main content (usually hero) appears.
  - Good: **≤ 2.5s**
- **INP** (Interaction to Next Paint): how responsive it feels when you tap/click.
  - Good: **≤ 200ms**
- **CLS** (Cumulative Layout Shift): whether things jump around while loading.
  - Good: **≤ 0.1**

Supporting metric:
- **TTFB** (Time to First Byte): how fast the server starts responding.
  - Landing pages should typically be **< 800ms** (and **< 500ms** on cached repeat views).

Baseline (Vercel Speed Insights, mobile)
- **Real Experience Score**: 30
- **FCP**: 5.94s
- **LCP**: 5.94s
- **INP**: 1,024ms
- **CLS**: 0.01
- **FID**: 55ms
- **TTFB**: 1.96s

## What the numbers suggest (quick diagnosis)

### LCP (5.94s) is the priority
Most likely the LCP element is in the hero area. Current `Hero` is a client component that includes:
- `framer-motion` (animations)
- `BeforeAfterSlider` which eagerly loads **two** `next/image` images with `priority`
- `DynamicHeroBackground` which attaches a `mousemove` listener and animates multiple large blurred layers

Even if each part is “fine” alone, together they increase:
- JS needed before first meaningful paint
- Main-thread work on mobile
- Network contention (two hero images compete for bandwidth)

### TTFB (1.96s) is high for a landing page
This often means one of:
- the route is accidentally **dynamic** (can’t be fully edge-cached)
- the first request is missing cache (cold / no CDN hit)
- server is doing more work than needed on initial render

### INP (1,024ms) indicates main-thread pressure
This is consistent with continuous animations, heavy client components in the first viewport, and large React hydration cost.

## Strategy (keep look identical, change loading + hydration)

Principles:
- Make above-the-fold HTML/CSS render **immediately** without waiting for heavy client JS.
- Make the LCP image load **first and alone**, then progressively enhance to the slider.
- Defer non-essential animations and interactive components until after LCP / idle.
- Ensure the home route is **static** and served from edge cache.

## Implementation structure

### Priority order (what to fix first)
Because your mobile metrics show **LCP 5.94s** and **TTFB 1.96s**, the most reliable order is:
- **P0: LCP** (hero / above-the-fold payload + render path)
- **P0: TTFB** (ensure `/` is static + cached)
- **P1: INP** (reduce hydration / main-thread work after initial paint)
- **P2: remaining polish** (fonts, third-party, edge-case regressions)

### Phase 0 — Measurement & guardrails (do first)
Checklist:
- [ ] Confirm the current LCP element on mobile (Vercel “Web Vitals” / Chrome Performance panel).
- [ ] Record a baseline run:
  - [ ] Vercel Speed Insights (mobile + desktop)
  - [ ] Lighthouse/PSI (mobile) with screenshots/waterfall saved
- [ ] Identify biggest bytes in first viewport:
  - [ ] Hero images file sizes and formats
  - [ ] Largest JS chunks (initial)
- [ ] Confirm whether `/` is static or dynamic in `next build` output (look for static `○` vs dynamic `ƒ`).

Acceptance criteria for this phase:
- You can point to: “This element is LCP”, “These requests block it”, “This chunk causes hydration cost”.

### Phase 1 — Fix LCP by making the hero “progressively enhanced”
Target outcome:
- LCP becomes a single optimized image (or text) that renders without waiting for client JS.

Checklist:
- [ ] Change hero rendering so **initial render** is server-friendly and light:
  - [ ] Keep the same final appearance, but ensure the first viewport is not dependent on Framer Motion to appear.
- [ ] Stop loading two hero images at `priority`.
  - [ ] Only one image should be `priority` (the one that will be LCP on mobile).
  - [ ] The second image should be `loading="lazy"` (default in `next/image`) and fetched after LCP/idle.
- [ ] Add a visually identical “static hero” fallback:
  - [ ] Render the after (or before) image as a normal hero image with the same crop/size.
  - [ ] Overlay labels (“AVANT/APRÈS”) in the same positions so the user sees the same design immediately.
- [ ] Mount the interactive `BeforeAfterSlider` only after:
  - [ ] first user interaction in the hero area, or
  - [ ] `requestIdleCallback` / a short timeout after LCP (e.g., 2–3s), or
  - [ ] when the hero enters the viewport (if not already).
  - (Implementation: dynamic import with `ssr: false`, or conditional render.)
- [ ] Ensure the LCP image has correct `sizes` and predictable layout:
  - [ ] Use explicit aspect ratio and stable container sizing (avoid layout shifts).
  - [ ] Provide `placeholder="blur"` if the image is local and you can generate blur data cheaply.

Acceptance criteria:
- Mobile LCP improves materially (goal: **≤ 2.5s** on repeat runs; initial target **≤ 3.0–3.5s** during iteration).

### Phase 2 — Reduce hydration & main-thread work (INP)
Checklist:
- [ ] Minimize client components above the fold:
  - [ ] If `Hero` is `use client`, split it into:
    - [ ] a server-rendered “HeroShell” (text, layout, single image)
    - [ ] a client “HeroEnhancements” (Framer Motion, slider, dynamic background)
- [ ] Defer `framer-motion` usage:
  - [ ] Prefer CSS animations for simple effects.
  - [ ] If motion is required, only animate after mount and avoid expensive box-shadow animations on many elements.
- [ ] Throttle/disable pointer tracking:
  - [ ] `DynamicHeroBackground`’s `mousemove` work should be disabled on touch devices and reduced on desktop:
    - [ ] only attach the listener for `pointer:fine`
    - [ ] throttle to 30–60ms
    - [ ] use `requestAnimationFrame` batching
- [ ] Mark non-critical UI as lower priority:
  - [ ] `StickyCTA` should not block anything (it already shows after scroll; keep it lightweight).

Acceptance criteria:
- Mobile INP trends down (goal: **≤ 200ms**; interim: **≤ 300–400ms** while still iterating).

### Phase 3 — Bring TTFB down (static + caching correctness)
Checklist:
- [ ] Ensure the homepage can be fully cached and served from edge:
  - [ ] Avoid using `cookies()`, `headers()`, `draftMode()`, or per-request logic in server components for `/`.
  - [ ] If needed, explicitly force static rendering for `/`:
    - [ ] `export const dynamic = 'force-static'`
    - [ ] `export const revalidate = <number>` (or `false` if fully static)
- [ ] Verify `next.config.*` headers do not unintentionally prevent caching.
  - [ ] Confirm HTML caching behavior is desired (especially for first-time visitors).
- [ ] Confirm images are served efficiently:
  - [ ] Local images from `/public` should be optimized through `next/image` (already in use).
  - [ ] Make sure remote image domains (if any) are configured and optimized.

Acceptance criteria:
- Repeat-view TTFB is low (goal: **< 500ms** on edge-cached responses).
- First-view TTFB improves (goal: **< 800ms** if the route is static).

### Phase 4 — Asset optimization (same image, smaller bytes)
Checklist:
- [ ] Optimize hero images without changing appearance:
  - [ ] Keep the same crop/angle; generate better encodes (AVIF/WebP) for mobile sizes.
  - [ ] Ensure you are not shipping a multi‑MB hero at mobile width.
- [ ] Fonts:
  - [ ] Keep `next/font` (already used) with `display: 'swap'`.
  - [ ] Reduce font weights to only what is actually used above the fold (commonly 2 weights per family is enough).
  - [ ] Confirm no additional font files are loaded by CSS.
- [ ] Remove unused CSS / heavy effects in the first viewport if they cost paint time:
  - [ ] Large blurred animated gradients can be expensive on mobile GPUs; prefer a pre-rendered static background image if needed (identical look).

Acceptance criteria:
- Total bytes in the first viewport drop significantly (hero + CSS + initial JS).

### Phase 5 — Third-party & instrumentation hygiene
Checklist:
- [ ] Confirm `@vercel/analytics` and `@vercel/speed-insights` do not meaningfully impact LCP:
  - [ ] Keep them, but ensure they aren’t loaded in a way that blocks rendering.
- [ ] Audit any other third-party scripts (tag managers, embeds, chat widgets):
  - [ ] Defer or load after interaction where possible.

## Concrete file-level hotspots to address first

### Hero complexity
- [`components/sections/hero.tsx`](components/sections/hero.tsx)
  - Current: `use client`, `framer-motion`, `BeforeAfterSlider`, `DynamicHeroBackground`.
  - Action: split into server shell + deferred enhancements; avoid dual `priority` images.

### Slider loads two priority images
- [`components/ui/before-after-slider.tsx`](components/ui/before-after-slider.tsx)
  - Current: both before/after `Image` have `priority`.
  - Action: only one can be `priority`; load the second after LCP/idle.

### Dynamic background uses continuous animation + pointer tracking
- [`components/sections/dynamic-hero-background.tsx`](components/sections/dynamic-hero-background.tsx)
  - Current: adds `mousemove` listener and animates multiple blurred layers.
  - Action: disable on touch; throttle on desktop; consider static equivalent for mobile.

### Layout scripts
- [`app/layout.tsx`](app/layout.tsx)
  - Current: includes `Analytics` + `SpeedInsights` (fine; just keep non-blocking).

### Route caching configuration
- [`next.config.ts`](next.config.ts)
  - Current: custom `headers()` includes HTML `s-maxage` caching.
  - Action: confirm it’s not accidentally causing dynamic behavior; validate with `next build` output and response headers in production.

## Test plan (repeatable)
For each change-set:
- [ ] Run `next build` and confirm `/` is static when intended.
- [ ] In Chrome DevTools:
  - [ ] Test “Slow 4G” + 4× CPU throttling
  - [ ] Confirm LCP element and timing improves
  - [ ] Confirm no layout shift regressions (CLS stays ≤ 0.1)
- [ ] In Vercel Speed Insights:
  - [ ] Compare before/after for mobile LCP + INP + TTFB
- [ ] Visual regression:
  - [ ] Compare hero (before/after) screenshots on mobile and desktop to confirm identical appearance.

## Definition of done (targets)
- **Primary (Vercel)**:
  - **Mobile Real Experience Score ≥ 90**
  - **Desktop Real Experience Score ≥ 90**
- **Supporting (the concrete numbers that usually produce Score 90+)**:
  - **Mobile**: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, TTFB < 800ms (and < 500ms cached repeat)
  - **Desktop**: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1

