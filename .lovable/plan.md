## Plan: CSIT Durg Premium Website

### Goal
Reconstruct the CSIT Durg website as a premium, modern academic site. Extracted content includes: about, vision/mission, infrastructure, gallery, media coverage, video gallery, company recruiters, placement stats, and testimonials. The site is a single landing page with distinct visual sections, using the "Modern Academic Prestige" design direction (deep navy + gold accent, Playfair Display serif headings, generous whitespace, editorial layouts).

### Architecture
- **Single landing page**: All content lives on the home route (`src/routes/index.tsx`).
- **No backend**: Static content only (no Cloud, no auth, no server functions).
- **Image strategy**: Reuse existing public image URLs from csitdurg.in for campus photos, testimonials, and company logos. Generate premium hero/section images for areas where originals are low quality or repetitive.
- **Animations**: GSAP + ScrollTrigger for scroll-driven reveals, marquee, and section transitions.

### Sections (top to bottom)

1. **Navigation** — Sticky top bar with CSIT logo, nav links (Academics, Admissions, Placements, Research, Contact), "Apply Now" CTA. Accreditation badges (AICTE, NBA, ISO, NAAC A+) subtly integrated.

2. **Hero** — Full-height hero with campus photo background, admissions 2026-27 banner, headline ("Engineering the Future of Innovation"), subheadline, CTAs (Download Prospectus, Explore Campus), and key stat pills.

3. **About & Impact** — Vision, Mission, key stats row (24+ Years, 95% Placement, 200+ Research Papers, 15k+ Alumni), and a brief institutional narrative.

4. **Infrastructure** — Grid of 4 campus facilities (Research Labs, Digital Library, Sports Hub, Main Building) with images from csitdurg.in.

5. **Moments Gallery** — Masonry/staggered grid of 4 campus event photos from the original site, with "View More" link.

6. **Media Coverage** — Horizontal scrolling card row of media stories from the original site (dated headlines).

7. **Video Gallery** — Featured campus tour video card + 3 YouTube embeds (College Events, Student Success, Faculty Interviews).

8. **Recruiters Marquee** — Auto-scrolling infinite marquee of company logos from csitdurg.in (Wipro, Accenture, Infosys, TCS, IBM, Amazon, Capgemini, HCL, Mahindra, Bosch, etc.).

9. **Placement Highlights** — 3 stat cards (Highest Package, Average Package, Companies Visited) styled as editorial callout boxes.

10. **Student Testimonials** — Carousel/slider of 5 testimonials with real student photos, names, departments, and quotes from the original site.

11. **Footer / Enquiry** — Contact info (Shivaji Nagar, Balod Road, Durg, CG 491001), phone/email, department links, and an admission enquiry form (name, email, phone, interest area).

### Design Decisions
- **Color**: Deep navy (`#0A192F`) as primary, warm gold (`#C5A059`) as accent, cream (`#FCFAF7`) as surface.
- **Typography**: Playfair Display for headings (serif, elegant), Inter for body (clean, readable).
- **Spacing**: Very generous whitespace — editorial magazine feel, not cramped.
- **Border radius**: Sharp corners (2px or none) for a prestigious, academic feel.

### Implementation Steps
1. Install `gsap` for scroll animations and marquee.
2. Update `src/styles.css` with the new color tokens and font declarations.
3. Add Google Fonts (Playfair Display, Inter) to `src/routes/__root.tsx` head.
4. Build all sections as components in `src/components/sections/`.
5. Compose them in `src/routes/index.tsx`.
6. Generate premium hero image and any missing section images.
7. Verify responsive behavior and scroll animations.

### Out of Scope
- No multi-page routing (all content on homepage with anchor nav).
- No backend, database, or authentication.
- No enquiry form submission logic (static form UI only).