# Design System: Open React Template

## 1. Visual Theme & Atmosphere
A stealth, high-impact developer and open-source software landing interface. Tailored for developer tools, technical infrastructure, and cutting-edge SaaS products.
- **Density:** 4 (Spacious canvas focusing attention on code syntax, product architecture, and value proposition)
- **Variance:** 7 (Offset asymmetric grids, technical bento cards, and interactive feature spotlights)
- **Motion:** 6 (Micro-interactions, scroll-triggered fade reveals via AOS/CSS, and sleek interactive modals)

The aesthetic embodies technical luxury: deep slate void backgrounds, subtle gradient mesh borders, and crisp emerald-teal accents.

## 2. Color Palette & Roles
- **Deep Slate Void** (`#0F172A`) — Primary dark background (Slate-900)
- **Elevated Obsidian** (`#1E293B`) — Bento cards, code containers, and dialog modal fills (Slate-800)
- **Pure Headings** (`#F8FAFC`) — Primary headlines, hero claims, and high-contrast titles
- **Subtle Gray** (`#94A3B8`) — Body text, technical descriptions, and secondary navigation (Slate-400)
- **Grid Divider Line** (`#334155`) — 1px structural grid lines and card borders (Slate-700)
- **Emerald Teal Accent** (`#0D9488`) — Focused single accent for primary call-to-actions, terminal highlights, and status pills
*(Total ban on AI neon purple/pink glow and oversaturated gradients.)*

## 3. Typography Rules
- **Display & Hero Headings:** `Cabinet Grotesk` or `Outfit` — Striking letterforms with tight tracking (`-0.03em`)
- **Body & Explanations:** `Geist` — Modern technical clarity, line-height `1.6`, maximum line width `65ch`
- **Code & CLI Snippets:** `Geist Mono` — Monospace font for npm/pnpm install commands, code blocks, and configuration flags
- **Banned:** `Inter`, generic serifs, playful display typefaces

## 4. Component Stylings
- **Hero & Video Lightbox:** Asymmetric hero block with inline typography badges, accompanied by an interactive video lightbox modal with crisp backdrop blur.
- **Buttons:** Flat, tactile push feedback. Primary button uses Emerald Teal fill with off-white text (`#F8FAFC`). Secondary buttons use 1px border (`#334155`) with hover surface lift.
- **Bento Feature Grid:** 1px subtle borders with rounded corners (`rounded-xl`). Elevation communicated through border contrast and deep dark surface tints rather than drop shadows.
- **Auth Forms (`(auth)`):** Centered card form with clean labels strictly above inputs, standard tap target `44px`, and discrete error text beneath invalid fields.

## 5. Layout Principles
- **Container Boundaries:** Max-width containment constrained to `1152px` (max-w-6xl).
- **Asymmetric Feature Flow:** Alternating two-column blocks with code illustration on one side and technical breakdown on the other.
- **Mobile Responsiveness:** Strict single-column reflow for all grid columns below `768px`. Zero horizontal document bleed.

## 6. Motion & Interaction
- **Scroll Reveals:** Staggered viewport entrance animations with clean CSS transforms (`translate-y` and `opacity`).
- **Modal Transitions:** Instant opacity and scale in/out (`duration: 200ms ease-out`).
- **Performance:** Hardware-accelerated transforms exclusively.

## 7. Anti-Patterns (Banned)
- No emojis anywhere in UI, code blocks, or buttons
- No pure black (`#000000`)
- No neon button halos, diffuse purple radial glows, or blinding laser gradients
- No 3-column equal card rows
- No generic copy clichés ("Elevate your workflow", "Supercharge your stack")
- No fake testimonial avatars with broken external links
