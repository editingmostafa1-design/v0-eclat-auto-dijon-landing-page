# Landing page implementation plan (Conversion + Speed)

Goal: Turn the site into a **high-converting lead funnel** (target **5–15%** conversion) while achieving **Vercel Real Experience Score ≥ 90** on **mobile + desktop** and keeping the **same visual output** (same car, same angle, same design).

This plan merges:
- **Conversion structure + copy** (your A–Z funnel)
- **Performance** (Core Web Vitals → Score 90+)
- **SEO + tracking**

---

## Non‑negotiables (constraints)
- **No visual regression**: hero must still show the same exact before/after car and angle; layout and brand look remain “premium”.
- **One primary CTA** across the entire page (same label, same action).
- **Real photos only**.
- **Mobile-first**: thumb-friendly CTAs + fast LCP.

---

## Targets (definition of done)

### Primary (Vercel)
- [ ] **Mobile Real Experience Score ≥ 90**
- [ ] **Desktop Real Experience Score ≥ 90**

### Supporting (what usually produces Score 90+)
- [ ] **Mobile**: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, TTFB < 800ms (and < 500ms cached repeat)
- [ ] **Desktop**: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1

---

## Positioning (pick ONE and align everything)
Recommended positioning for this brand look: **Premium interior detailing (visible transformation) + convenience (at home in Dijon)**.

### Final positioning sentence (use everywhere)
Template: “On aide [cible] à [résultat] sans [douleur] en [délai]”

Proposed version:
> “On aide les conducteurs à Dijon à retrouver un intérieur ‘comme neuf’ sans perdre leur week‑end — intervention rapide, résultat visible.”

Checklist:
- [ ] Confirm the ONE positioning is reflected in: hero, services, process, offer, FAQ, meta description.

---

## Final page structure (high-conversion flow)
Order on the homepage (`app/page.tsx`):
1. Hero (headline + subheadline + CTA + visual proof)
2. Visual proof gallery (replace testimonials)
3. Benefits (outcomes)
4. Services (interior packages)
5. Process (4 steps, frictionless)
6. Offer / urgency (limited weekly slots)
7. Trust / guarantee (redo / satisfaction)
8. Founder section (face + story + craftsmanship)
9. FAQ
10. Final CTA + contact

Checklist:
- [ ] Reorder/insert sections to match the structure above.
- [ ] Ensure CTA appears every 1–2 sections.

---

## Hero (highest impact for both conversion + LCP)
Files:
- [`components/sections/hero.tsx`](components/sections/hero.tsx)
- (CTA target section) likely inside [`components/sections/final-cta.tsx`](components/sections/final-cta.tsx) or a form section if present

### Copy (use this as baseline)
Headline (H1):
> “Redonnez à votre voiture un effet ‘comme neuf’ en 24h à Dijon”

Subheadline:
> “Nettoyage et detailing intérieur professionnel — sans effort de votre part, avec un résultat visible dès le premier regard.”

Primary CTA button:
> “Obtenir un devis gratuit”

Secondary line under CTA:
> “Sans engagement • Réponse rapide • Places limitées cette semaine”

Hero checklist:
- [ ] H1 follows format: **[Résultat] + [délai] + [lieu]**
- [ ] Subheadline removes doubt (à domicile, délai, résultat, sérieux)
- [ ] Primary CTA is the same everywhere
- [ ] Before/after visual proof remains mandatory
- [ ] Add “Dijon” in hero copy at least once

Performance checklist (hero):
- [ ] Only **one** hero image loads with `priority` (becomes LCP)
- [ ] The slider loads after idle / interaction (progressive enhancement)
- [ ] Avoid heavy JS animations before LCP

---

## Visual proof section (replace testimonials for now)
Objective: “Trust without reviews”.

Files:
- New section component under [`components/sections/`](components/sections/)
- Images in [`public/`](public/)

Content:
- Title: “Le résultat parle de lui-même”
- Text: “Chaque véhicule est traité avec précision pour retrouver son éclat d’origine — voire mieux.”

Checklist:
- [ ] Add **5–10 real photos** (before/after + closeups)
- [ ] Use consistent framing (same angle) for before/after pairs
- [ ] Each image has a short caption (“Sièges tachés”, “Poils d’animaux”, “Odeurs”, etc.)
- [ ] Images lazy-load below the fold; use `next/image` with correct `sizes`

---

## Benefits (outcomes, not features)
Files:
- [`components/sections/services.tsx`](components/sections/services.tsx) (may be split) or a new `benefits.tsx`

Suggested benefit cards:
- “Un résultat ‘comme neuf’”
- “Gagnez du temps”
- “Valorisez votre véhicule”
- “Nettoyage en profondeur”

Checklist:
- [ ] Each benefit is: **title + 1–2 lines max**
- [ ] Use “problem-aware” words: taches, odeurs, poils, négligé, etc.

---

## Services (interior packages, clear & believable)
Files:
- [`components/sections/services.tsx`](components/sections/services.tsx)

Structure:
1) **Nettoyage intérieur essentiel** (entretien régulier)
2) **Nettoyage intérieur approfondi** (sale / négligé)
3) **Rénovation intérieure complète** (“comme neuf”)
4) **Option premium** (vapeur / anti-odeur / protection)

Pricing clarity block (mandatory):
- “Le prix dépend de la taille du véhicule, de l’état intérieur, du niveau choisi.”
- CTA: “Devis gratuit en 30 secondes”

Checklist:
- [ ] Each service includes: **pour qui**, **ce qui est inclus**, **résultat**
- [ ] Add “À partir de XX€” anchors (even if ranges)
- [ ] Explain pricing logic to reduce friction

---

## Process (reduce uncertainty, remove friction)
Files:
- [`components/sections/process.tsx`](components/sections/process.tsx)

Recommended 4-step process:
1. “Demandez votre devis”
2. “On vous répond rapidement”
3. “Intervention sur votre véhicule”
4. “Vous récupérez votre voiture”

Checklist:
- [ ] No jargon
- [ ] Mentions: délai de réponse, photos si nécessaire, créneaux, à domicile

---

## Offer / urgency (reason to act now)
Files:
- New section: `offer.tsx` under [`components/sections/`](components/sections/)

Copy:
- Title: “Places limitées chaque semaine”
- Text: “Pour garantir un travail de qualité, nous limitons le nombre de véhicules traités.”
- CTA: same primary CTA

Checklist:
- [ ] Add simple scarcity (e.g. “5 créneaux cette semaine”)
- [ ] Never fake urgency; keep it realistic

---

## Trust / guarantee (no reviews compensation)
Files:
- [`components/sections/guarantees.tsx`](components/sections/guarantees.tsx)

Checklist:
- [ ] Add/confirm: “Satisfaction ou on recommence”
- [ ] Add “zéro risque” framing
- [ ] Add local proof: zone Dijon + map/service radius (simple)

---

## Founder section (personal branding)
Files:
- New section: `founder.tsx` under [`components/sections/`](components/sections/)
- Founder photo in [`public/`](public/)

Checklist:
- [ ] Add founder portrait (real)
- [ ] 3–5 lines max: serious, precise, passion, “comme si c’était le nôtre”
- [ ] Add a signature / name for authenticity

---

## CTA strategy (sitewide consistency)
Files:
- Hero CTA in [`components/sections/hero.tsx`](components/sections/hero.tsx)
- Sticky CTA in [`components/ui/sticky-cta.tsx`](components/ui/sticky-cta.tsx)
- Final CTA in [`components/sections/final-cta.tsx`](components/sections/final-cta.tsx)

Checklist:
- [ ] One primary CTA label everywhere
- [ ] Sticky CTA on mobile always visible, large tap target
- [ ] After every 1–2 sections: add an inline CTA row
- [ ] CTA destination is frictionless (short form or direct call)

---

## Mobile optimization (conversion + speed)
Checklist:
- [ ] Buttons: ≥ 44px height, generous spacing
- [ ] Forms: minimal fields (name + phone + vehicle + “state”)
- [ ] Keep above-the-fold readable without waiting for JS
- [ ] Avoid expensive background effects on mobile (pointer: coarse)

---

## SEO basics (local intent)
Files:
- [`app/layout.tsx`](app/layout.tsx) metadata
- [`app/page.tsx`](app/page.tsx) content headings

Checklist:
- [ ] Exactly one H1 with local keyword intent (Dijon)
- [ ] H2s for: services, process, FAQ, guarantee
- [ ] Add “Dijon”, “Dijon et alentours”, neighborhoods if appropriate
- [ ] Ensure LocalBusiness JSON-LD remains valid

---

## Analytics & tracking (measure conversions)
Files:
- [`app/layout.tsx`](app/layout.tsx) (existing Vercel Analytics/Speed Insights)
- Add event tracking hooks to CTA components

Events to track:
- [ ] Primary CTA clicks (hero, sticky, mid-page, final)
- [ ] Form submit
- [ ] Phone tap (tel:)
- [ ] WhatsApp tap (if used)

Checklist:
- [ ] Choose one analytics stack: Vercel Analytics only, or GA4 + conversions
- [ ] Define the conversion event that equals “lead”

---

## Speed optimization checklist (keep the look, cut the cost)
Key hotspots:
- Hero before/after media
- Animated background
- Fonts and below-the-fold images

Checklist:
- [ ] Hero: single `priority` image, slider deferred
- [ ] Avoid loading two hero images at `priority`
- [ ] Defer non-essential animation to after LCP/idle
- [ ] Ensure `/` is static and edge-cached
- [ ] Image formats: AVIF/WebP enabled; correct `sizes`
- [ ] Keep CLS stable (fixed aspect ratio containers)

Files to focus:
- [`components/sections/hero.tsx`](components/sections/hero.tsx)
- [`components/ui/before-after-slider.tsx`](components/ui/before-after-slider.tsx)
- [`components/sections/dynamic-hero-background.tsx`](components/sections/dynamic-hero-background.tsx)
- [`next.config.mjs`](next.config.mjs)

---

## Execution roadmap (fastest path to wins)

### Week 1 (big conversion lift)
- [ ] Finalize positioning sentence
- [ ] Rewrite hero copy + CTA + secondary line
- [ ] Add visual proof gallery (5–10 images)
- [ ] Rewrite services into interior packages + pricing clarity block
- [ ] Rewrite process into 4 steps
- [ ] Add offer/urgency block
- [ ] Add guarantee wording + local signals

### Week 2 (trust + differentiation)
- [ ] Add founder section (photo + short story)
- [ ] Expand FAQ with objection handling (time, at-home, free quote, odors/taches/poils)
- [ ] Add more real case examples (“sièges tachés”, “odeurs”, “poils d’animaux”)

### Week 3 (score 90+ hardening)
- [ ] Run repeated Speed Insights (mobile/desktop) and lock CWV
- [ ] Optimize remaining below-the-fold images (sizes, lazy)
- [ ] Add CTA event tracking + conversion reporting

---

## Test plan (every PR/change-set)
- [ ] Visual regression: compare hero + before/after frames on mobile/desktop
- [ ] Performance: check LCP element and image priority behavior
- [ ] Accessibility: tap targets, focus states for CTA
- [ ] SEO: single H1, correct headings, JSON-LD valid
- [ ] Conversion: CTA anchors scroll correctly, sticky CTA works, form submits

