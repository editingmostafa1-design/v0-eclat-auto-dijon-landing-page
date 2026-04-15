# Éclat Auto Dijon — Implementation Kickstart

## Project Overview

A single-page promotional landing site for a premium automotive detailing service in Dijon, France. Frontend-only prototype using Next.js, Tailwind CSS, and shadcn/ui.

---

## Design Tokens

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Surface | `#F9F8F5` | Page background, light section fills |
| Ink | `#111210` | Primary text, dark section backgrounds |
| Blue Primary | `#1A56DB` | CTAs, links, accent highlights |
| Blue Hover | `#1E40AF` | Button hover state |
| Blue Focus Ring | `#1A56DB40` | Focus outline (25% opacity) |
| Warm Gray | `#D8D5CE` | "Before" placeholder panels |
| Near Black | `#1A1A18` | "After" placeholder panels |

### Typography

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| H1 | Lora | 600 | 48px / 36px mobile | 1.1 |
| H2 | Lora | 600 | 32px / 26px mobile | 1.2 |
| H3 | Lora | 600 | 22px | 1.3 |
| Body | Plus Jakarta Sans | 400 | 16px | 1.6 |
| Body Bold | Plus Jakarta Sans | 600 | 16px | 1.6 |
| Small/Caption | Plus Jakarta Sans | 500 | 14px | 1.4 |
| Button | Plus Jakarta Sans | 600 | 16px | 1 |
| Nav Link | Plus Jakarta Sans | 500 | 15px | 1 |

### Spacing & Radii

- Border Radius: `rounded-xl` (12px)
- Section Padding: `py-20 lg:py-24` (80px / 96px)
- Container Max Width: `max-w-6xl` (1152px)
- Card Padding: `p-6`

---

## Component Architecture

### Logo Variants

- **Dark** — Ink color on Surface background
- **Light** — Surface color on Ink background
- **Blue** — Blue Primary, used sparingly
- **Nav** — Horizontal lockup with car + wordmark

### Reusable Components

```
components/
├── logo/
│   ├── concept-c-logo.tsx      # Full logo with variant prop
│   └── car-silhouette.tsx      # Standalone car for watermarks
├── sections/
│   ├── nav.tsx                 # Sticky navigation
│   ├── hero.tsx                # Hero with before/after
│   ├── services.tsx            # 3-column service cards
│   ├── process.tsx             # 4-step dark section
│   ├── social-proof.tsx        # Before/after + testimonials
│   ├── guarantees.tsx          # 3-pillar trust section
│   ├── faq.tsx                 # Accordion
│   ├── final-cta.tsx           # Blue band CTA
│   └── footer.tsx              # Footer with form
├── ui/
│   └── before-after-slider.tsx # Interactive comparison
└── mobile-nav.tsx              # Full-screen overlay
```

---

## Section Specifications

### Section 01: Sticky Navigation

- **Height**: 68px
- **Background**: Surface with `backdrop-blur-md` on scroll
- **Left**: Nav logo (horizontal lockup)
- **Center**: Anchor links (Services, Comment ça marche, Avis, FAQ)
- **Right**: Blue CTA button "Réserver"
- **Mobile**: Hamburger icon, opens full-screen overlay

### Section 02: Hero

- **Layout**: 2-column (text left, visual right)
- **Headline**: "L'éclat d'une voiture neuve, sans compromis."
- **Subhead**: "Rénovation esthétique haut de gamme pour véhicules exigeants — à Dijon."
- **CTA**: Blue button "Découvrir nos services" → scrolls to #services
- **Visual**: Before/After interactive slider
- **Watermark**: Car silhouette at 6% opacity, bottom-right

### Section 03: Services

- **Background**: Surface
- **Layout**: 3-column grid (stacks on mobile)
- **Cards**: White fill, subtle shadow, rounded-xl
- **Content per card**:
  - Lucide icon (blue)
  - H3 title
  - Body description
  - "À partir de XX €" price
  - Text link "En savoir plus →"

**Services**:
1. Lavage Premium Intérieur & Extérieur
2. Correction & Polish Carrosserie
3. Traitement Céramique

### Section 04: Process (Comment ça marche)

- **Background**: Ink (dark)
- **Text**: Surface (light)
- **Layout**: 4-column numbered steps
- **Steps**:
  1. Prise de rendez-vous
  2. Diagnostic personnalisé
  3. Rénovation experte
  4. Livraison & suivi
- **Watermark**: Car silhouette at 5% opacity

### Section 05: Social Proof

- **Background**: Surface
- **Left**: Large before/after slider
- **Right**: 3 stacked testimonial cards
- **Card style**: White, shadow, rounded-xl
- **Content**: Quote, name, car model

### Section 06: Guarantee Pillars

- **Background**: Surface
- **Layout**: 3-column with icons
- **Pillars**:
  1. Produits professionnels certifiés
  2. Garantie satisfaction 30 jours
  3. Véhicule de courtoisie disponible

### Section 07: FAQ

- **Background**: Surface
- **Component**: shadcn Accordion
- **Animation**: 150ms ease
- **Questions** (5 items):
  1. Combien de temps dure une rénovation complète?
  2. Proposez-vous un service de véhicule de courtoisie?
  3. Quels types de véhicules prenez-vous en charge?
  4. Comment puis-je payer?
  5. Où êtes-vous situés?

### Section 08: Final CTA Band

- **Background**: Blue Primary
- **Text**: White
- **Headline**: "Prêt à redonner vie à votre véhicule?"
- **CTA**: White button with blue text "Réserver maintenant"
- **Scrolls to**: #reserver

### Section 09: Footer

- **Background**: Ink
- **Text**: Surface
- **Layout**: 3-column
- **Left**: Logo (light variant) + tagline
- **Center**: Contact info (placeholder)
- **Right**: Reservation form (3 fields)
  - Nom
  - Téléphone
  - Véhicule (marque / modèle)
  - Submit button
- **Bottom**: Copyright + "Mentions légales" link

---

## Interactive Elements

### Before/After Slider

- **Type**: Range input with custom styling
- **Handle**: 48x48px blue circle with grip lines
- **Labels**: "AVANT" / "APRÈS" in corners
- **Mobile**: Static side-by-side or swipe gesture

### Mobile Navigation

- **Trigger**: Hamburger icon (3 lines)
- **Overlay**: Full-screen, Ink background
- **Animation**: 200ms fade + translate-Y
- **Links**: Lora serif, large size, centered
- **Close**: X icon top-right

### Form States

- **Default**: Surface fill, 1px Ink/10% border
- **Focus**: Blue ring (3px, 25% opacity)
- **Success**: Green checkmark + "Merci! Nous vous recontactons sous 24h."

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| Default (mobile) | Single column, stacked layouts |
| `md:` (768px) | 2-column grids where applicable |
| `lg:` (1024px) | Full 3-4 column layouts |

---

## Accessibility Requirements

- `lang="fr"` on HTML element
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- `aria-label` on icon-only buttons
- Focus rings on all interactive elements
- Alt text on decorative elements: `alt=""`
- Skip link (optional enhancement)

---

## Implementation Checklist

### Phase 1: Foundations
- [ ] Configure Tailwind tokens in `tailwind.config.ts`
- [ ] Update `globals.css` with CSS custom properties
- [ ] Add fonts (Lora + Plus Jakarta Sans) in `layout.tsx`
- [ ] Set `lang="fr"` and `bg-background` on `<html>`

### Phase 2: Logo Components
- [ ] Create `components/logo/concept-c-logo.tsx`
- [ ] Create `components/logo/car-silhouette.tsx`

### Phase 3: Section Components
- [ ] Create `components/sections/nav.tsx`
- [ ] Create `components/sections/hero.tsx`
- [ ] Create `components/ui/before-after-slider.tsx`
- [ ] Create `components/sections/services.tsx`
- [ ] Create `components/sections/process.tsx`
- [ ] Create `components/sections/social-proof.tsx`
- [ ] Create `components/sections/guarantees.tsx`
- [ ] Create `components/sections/faq.tsx`
- [ ] Create `components/sections/final-cta.tsx`
- [ ] Create `components/sections/footer.tsx`

### Phase 4: Mobile Navigation
- [ ] Create `components/mobile-nav.tsx`

### Phase 5: Page Assembly
- [ ] Assemble all sections in `app/page.tsx`
- [ ] Add section IDs for anchor navigation
- [ ] Implement smooth scroll with 68px offset

### Phase 6: Polish
- [ ] Test responsive layouts
- [ ] Verify accessibility
- [ ] Final visual review

---

## File References

- **Brand Tokens**: `user_read_only_context/text_attachments/brand-tokens-Qq7bY.md`
- **Clarifications**: `user_read_only_context/text_attachments/pasted-text-o8lRE.txt`
- **Logo SVG**: `user_read_only_context/text_attachments/image-56sFN.svg`

---

## Notes

- No backend or payment processing
- All contact info uses placeholders
- Email: `hello@eclatAutodijon.fr` (placeholder)
- Phone: `+33 (0)X XX XX XX XX` (placeholder)
- No external images — styled div placeholders with car silhouette watermarks
