# Open React Template

A dark-mode developer and open-source landing page template built with Next.js 15, React 19, and Tailwind CSS v4.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.11-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)

## Installation

Clone the repository and install dependencies with `pnpm`:

```bash
git clone https://github.com/DiaztMF/open-react-template.git
cd open-react-template
pnpm install
```

## Quick Start

Launch the local development environment:

```bash
pnpm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

## What

Open React Template is a landing page template designed specifically for software engineers, open-source projects, and technical SaaS products. It features an asymmetric hero block with an interactive video lightbox, code feature grids, customer testimonials, and pre-built authentication screen layouts.

## Why

Developer tools require a focused, non-distracting visual language that communicates engineering rigor. Open React Template delivers an aesthetic centered around dark backgrounds, subtle border grids, and sharp typography, completely upgraded to Tailwind CSS v4 and React 19.

## API & Routes

| Route | Type | Description |
|---|---|---|
| `/` | Page (RSC) | Master technical landing page with hero, inquiry form, and video preview |
| `/api/seed` | Route Handler (GET, POST) | Multi-schema verification, auto-migration bootstrap, and seeding endpoint |
| `/api/hello` | Route Handler (GET) | Health check probe |
| `/(auth)/signin` | Page (Client) | Developer sign-in form with OAuth action hooks |
| `/(auth)/signup` | Page (Client) | Account registration form with terms acknowledgement |
| `/(auth)/reset-password` | Page (Client) | Password recovery and email reset request screen |

## Database & Backend

- **ORM**: Drizzle ORM with `postgres` (postgres-js driver).
- **Schema**: PostgreSQL multi-schema under `open_react` namespace (`open_react.newsletter`, `open_react.inquiries`, `open_react.leads`).
- **Connection**: Supabase transaction pooler (port 6543) compatible with `prepare: false` and graceful fallback mode when environment variables are unconfigured.
- **Server Actions**: Type-safe mutations validated with Zod schemas (`subscribeNewsletter`, `submitInquiry`).

## Examples

### Embedding Video Lightbox
Trigger the built-in modal video player seamlessly in the hero section:

```tsx
import ModalVideo from "@/components/modal-video";

export function HeroVideo() {
  return (
    <ModalVideo
      thumb="/images/video-thumb.jpg"
      thumbWidth={768}
      thumbHeight={432}
      thumbAlt="Product Walkthrough"
      video="/videos/walkthrough.mp4"
      videoWidth={1920}
      videoHeight={1080}
    />
  );
}
```

## Architecture & Development Guides

```
open-react-template/
├── app/                     # Next.js 15 App Router structure
│   ├── (auth)/              # Route group for authentication pages
│   ├── layout.tsx           # Global layout and font configuration
│   └── page.tsx             # Master landing page
├── components/              # Feature sections, modals, and navigation
├── public/                  # Static media, icons, and video assets
├── DESIGN.md                # Semantic Design System specification
├── package.json             # Dependencies and build scripts
└── tsconfig.json            # TypeScript configuration
```

See [DESIGN.md](DESIGN.md) for typography hierarchy, emerald-teal accent roles, and spacing rules.

## License

This project is licensed under the MIT License.
