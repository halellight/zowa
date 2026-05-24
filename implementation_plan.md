# Zowa Advisory Brand Transformation

This plan outlines the architectural and design changes needed to elevate the current Zowa website from a digital agency feel to a premium, boutique public sector consulting firm (on par with BCG BrightHouse, McKinsey, etc.), while maintaining the core purple visual identity and integrating inspiration from your Framer prototype.

## User Review Required

> [!IMPORTANT]  
> Please review the proposed 20-year strategic roadmap (available in the `Zowa_Strategic_Roadmap.md` artifact) and the website design changes below. 
> 
> **Key Design Shift:** We will be moving away from "tech/developer" aesthetics (like neon gradients and code-snippet cards) towards a more refined, sophisticated "Purpose & Impact" aesthetic. This means more whitespace, elegant typography (leaning heavily on Instrument Serif), and messaging focused on institutional transformation rather than just software features.

## Open Questions

> [!QUESTION]  
> 1. Do you have specific high-resolution images of African public sector work, people, or architectural shots that we can use to replace the current placeholder/abstract backgrounds? High-end consulting sites rely heavily on powerful human and environmental photography.
> 2. For the "Thought Leadership/Insights" section (which is crucial for consulting firms), do you have any existing articles or whitepapers we should use as placeholders, or should I generate mock consulting reports?

## Proposed Changes

---

### UI & Styling Configuration

We will refine the color palette to be more luxurious and less "neon tech".

#### [MODIFY] tailwind.config.ts
- Deepen the purple palette to include rich, royal purples and indigo (e.g., `#4C1D95`, `#312E81`) alongside crisp whites and deep slate grays for text.
- Add animation utilities for slow, elegant fades and smooth reveals (characteristic of high-end corporate sites).

---

### Core Structure & Pages

We will rewrite the copy and restructure the layout to reflect the new 20-year consulting vision.

#### [MODIFY] app/layout.tsx
- Update Metadata and SEO from "Strategic innovation and communications firm" to "Zowa Advisory | Premium Public Sector Consulting & Institutional Transformation".
- Ensure the font loading (Instrument Serif and Satoshi) remains, as it perfectly fits a modern consulting firm.

#### [MODIFY] app/page.tsx
- **Hero Section:** Remove the busy "neon" background and replace it with a clean, dramatic typography-led hero or a subtle, sophisticated dark purple ambient background. 
  - *New Headline:* Something impactful like "Transforming Public Institutions for the Future."
- **Our Purpose/Mission:** Add a section inspired by BCG BrightHouse ("Results that change companies — and the world"). Focus on the newly drafted 20-year vision.
- **Offerings (What We Do):** Restructure from "Design, Research, AI" to consulting pillars:
  1. *Strategic Advisory & Policy*
  2. *E-Governance Architecture*
  3. *Institutional Culture & Change Management*
  4. *Data-Driven Workflows*
- **Case Studies (Our Work):** Redesign the `CaseStudyCard` to look like whitepapers or premium editorial articles. Focus on metrics: "300% increase in compliance", "₦50B revenue". (Showcasing NG Trak, RateDem, NaijaElections as societal impact tools).
- **Thought Leadership (New Section):** Introduce a "Thinking" or "Insights" section showcasing (mock) reports, e.g., "The Future of African Digital Governance", to build authority.
- **Contact:** Make the contact form cleaner, removing the "tech startup" feel and making it look like an executive inquiry form.

#### [MODIFY] components/case-study-card.tsx
- Redesign the card to look less like a software portfolio and more like a consulting case study (elegant serif headers, subtle hover states, focus on the "Impact").

#### [NEW] components/insight-card.tsx
- Create a new component for the "Thought Leadership" section, mimicking the editorial style of BCG BrightHouse's "Thinking" section.

#### [MODIFY] components/windows-hover-effect.tsx
- Reduce the intensity of the "Windows 98" or "glassmorphism" tech effects. High-end consulting websites prefer stark, clean interactions (subtle opacity changes, slow scaling) over flashy glowing borders.

## Verification Plan

### Automated Tests
- Verify TypeScript compilation and ESLint rules pass.
- Ensure the site is fully responsive and interactive using `npm run dev`.

### Manual Verification
- Review the local deployment visually to ensure the "purple theme" feels luxurious rather than "startup neon".
- Ensure typography (Instrument Serif for impact, Satoshi for reading) creates the desired editorial/consulting hierarchy.
