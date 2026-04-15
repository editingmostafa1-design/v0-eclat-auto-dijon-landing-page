# IMPLEMENTATION_UPDATE_VISUALS: Eclat Auto Dijon

This plan outlines the steps required to transform the current prototype into a premium, high-converting local service landing page for **Éclat Auto Dijon**.

## Core Priorities
1. **Authentic Imagery**: Replace all placeholder sliders and SVGs with real automotive detailing photography.
2. **Conversion Optimization**: Refine navigation, CTAs, and the reservation form to drive bookings.
3. **Credibility & Trust**: Enhance testimonials, guarantees, and local proof (Google Reviews).
4. **Local SEO & Legal**: Implement schema markup and mandatory French legal pages.

---

## Technical & Visual Strategy

### 1. Navigation & Header
- **Expand Desktop Nav**: Lower breakpoint from `lg` to `md` (768px) for better tablet experience.
- **CTA Contrast**: Style the "Réserver" button to stand out (Solid Blue vs Ghost/Outline links).
- **Direct Contact**: Add a click-to-call phone number in the top bar.
- **Visual Polish**: Add a subtle `border-b` to the sticky nav for better separation.

### 2. Hero Section
- **Real Photography**: Replace the before/after slider with actual high-res detailing shots.
- **CTA Hierarchy**: 
  - Primary (Solid Blue): **Réserver**
  - Secondary (Outline): **Découvrir nos services**
- **Trust Row**: Add a row of trust badges (Google 5-star, 150+ Clients, etc.) below the CTAs.
- **Micro-copy**: Increase mobile font size for the subheadline.

### 3. Services Section
- **Specific Naming**: Rename "Canapés" and "Tapis" to "Sièges" and "Tapis de sol" to focus on automotive.
- **Pricing Clarity**: Replace "60€+" with "À partir de 60€" or a range.
- **Interaction**: Default-expand the first service card.
- **CTA Integration**: Add a direct "Réserver ce service" link in each card.

### 4. Process Section
- **Visual Flow**: Add a dotted/arrow line connector between the 4 steps (Horizontal on desktop, Vertical on mobile).
- **Descriptive Copy**: Add one sentence of reassurance to each step label.
- **Watermark**: Increase opacity or swap for a subtle technical drawing.

### 5. Social Proof
- **Authenticity**: Add "Avis Google vérifié" badges and (silhouettes/placeholders for) reviewer photos.
- **Summary Stat**: Add an "Average 4.9/5" summary at the top of the section.
- **Real Photos**: Set a high-impact before/after slider next to the reviews.
- **External Link**: Link to the actual Google Business profile.

### 6. Guarantees
- **Courtesy Vehicle**: Elevate this differentiator with a unique UI treatment (larger card or highlight).
- **Details**: Add explicit text about the "30-day satisfaction" (e.g., "Nous revenons gratuitement").

### 7. FAQ Section
- **Modern Accordion**: Switch to `type="multiple"` to allow multiple open items.
- **Conversion Focus**: Replace location questions with "How to book?" or "Timeframe?".
- **Layout**: Widen the container on `xl` screens.

### 8. Footer & Reservation Form
- **Form Enrichment**: Add `Preferred Date/Time` and `Service Type` fields.
- **Lead Generation**: Connect to a real backend (or mock service with better feedback).
- **Mobile Reordering**: Ensure the Form appears first on mobile devices.
- **Legal**: Create a `/mentions-legales` page.

### 9. Visual Polish & SEO
- **Premium Palette**: Refine the blue accent to a more sophisticated navy/royal shade.
- **Local SEO**: Add `LocalBusiness` JSON-LD schema.
- **Meta Tags**: Optimize `<title>` and `description` for "Detailing Dijon".
- **Performance**: Audit unused shadcn components.

---

## Checklist: Progress Tracker

### Phase 1: Navigation & Global Styles
- [x] Extend desktop nav to `md` breakpoint
- [x] Add click-to-call in Nav
- [x] Add subtle border-bottom to sticky nav
- [x] Refine blue accent color palette

### Phase 2: Hero & Imagery
- [x] Source/Generate real Before/After car photos
- [x] Implement real photography in Hero slider
- [x] Swap Hero CTA weights (Primary: Réserver)
- [x] Add trust badge row in Hero
- [x] Adjust mobile font sizes for readability

### Phase 3: Services & Process
- [x] Rename services to be strictly automotive (Sièges/Tapis)
- [x] Update pricing labels ("À partir de")
- [x] Set first service card to default-open
- [x] Add directional connectors in Process section
- [x] Expand process step descriptions

### Phase 4: Social Proof & Guarantees
- [x] Implement real photos in Social Proof slider
- [x] Add Google Review stats summary
- [x] Highlight "Véhicule de courtoisie" guarantee
- [x] Add "Avis Google vérifié" badges

### Phase 5: FAQ & Conversions
- [x] Update FAQ questions for conversion focus
- [x] Enable multiple-open in Accordion
- [x] Add Date/Time preference to Reservation Form
- [x] Fix success/error animations in Form
- [x] Reorder footer columns for mobile

### Phase 6: SEO & Legal
- [x] Add LocalBusiness JSON-LD Schema
- [x] Optimize Meta tags (Title/Description)
- [x] Create Mentions Légales page
- [x] Audit unused components (Audit completed - see walkthrough)
