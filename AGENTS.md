# SNMZ Gold & Diamonds — Agent & Development Guide

> **Single source of truth for coding conventions, architecture, and workflow.**
> Read this before writing any code. Update here when a project-wide decision changes.
> For all visual/brand decisions, see `design.md`.

---

## Project Overview

| Key | Value |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | JavaScript (no TypeScript) |
| Styling | Tailwind CSS v3 |
| Runtime | Node.js (npm) |
| Rendering | Server Components by default |
| Database | PostgreSQL *(future phase — not yet implemented)* |

---

## Directory Structure

```text
/
├── AGENTS.md               # This file — coding conventions
├── design.md               # Brand/visual system
├── README.md               # Setup instructions
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
├── eslint.config.mjs
├── public/
│   ├── images/             # Static images (jpg, webp, svg)
│   ├── icons/              # Favicons, SVG icons
│   └── logo/               # Logo variants (SVG preferred)
└── src/
    ├── app/                # Next.js App Router pages and layouts
    │   ├── layout.js       # Root layout (fonts, metadata, globals)
    │   ├── page.js         # Homepage
    │   ├── globals.css     # Global CSS + Tailwind directives
    │   ├── robots.js       # Next.js robots metadata
    │   └── sitemap.js      # Next.js sitemap metadata
    ├── components/
    │   ├── layout/         # Header, Footer, Navigation
    │   ├── home/           # Homepage-specific sections
    │   └── ui/             # Reusable primitives (Button, Card, Badge, etc.)
    ├── config/
    │   └── site.js         # Centralised site config (name, domain, contact)
    └── lib/
        └── utils.js        # Shared utility functions
```

---

## Rendering Strategy

| Pattern | When to use |
|---|---|
| **Server Component** (default) | Static content, data fetching, SEO-critical sections |
| **Client Component** (`'use client'`) | Interactivity: scroll events, toggles, modals, forms |
| **Route Handler** (`/app/api/`) | API endpoints (future phases) |

Rules:
- Keep `'use client'` at the **leaf level** — never on layout or page unless unavoidable.
- Pass data down from Server → Client as props; don't fetch in Client Components.
- Use `Suspense` boundaries around async Server Components.

---

## Component Rules

1. **One component per file.** File name = PascalCase component name.
2. **Named exports** for all components (no default exports except `page.js`, `layout.js`).
3. **Props validation**: Use JSDoc `@param` or simple destructuring with defaults.
4. **No inline styles** — use Tailwind classes only. Never `style={{}}` unless unavoidable.
5. **No magic numbers** — use Tailwind config tokens or named constants in `config/`.
6. Wrapper divs: prefer semantic HTML (`section`, `article`, `nav`, `aside`, `main`, `header`, `footer`).

---

## Import Aliases

Use `@/` for all internal imports:
```js
import { SiteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
```

---

## Site Configuration (`src/config/site.js`)

All configurable site-level values (domain, brand name, WhatsApp number, social links) must live in `site.js`. Never hardcode these in components.

```js
export const SiteConfig = {
  name: 'SNMZ Gold & Diamonds',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://snmzgold.com',  // update when live
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '',  // [TO BE PROVIDED]
  email: process.env.NEXT_PUBLIC_EMAIL || '',         // [TO BE PROVIDED]
  phone: process.env.NEXT_PUBLIC_PHONE || '',         // [TO BE PROVIDED]
  address: '',                                         // [TO BE PROVIDED]
  social: {
    instagram: '',   // [TO BE PROVIDED]
    linkedin: '',    // [TO BE PROVIDED]
    twitter: '',     // [TO BE PROVIDED]
  },
};
```

---

## SEO Rules

- **Title template**: `'%s | SNMZ Gold & Diamonds'`
- **Default title**: `'SNMZ Gold & Diamonds — Premium 24K Gold TT Bar Trading'`
- **Meta description**: ≤ 160 characters, include primary keyword naturally.
- Every page exports a `metadata` object (Server Component).
- Open Graph: `og:image` at `1200×630px`, stored in `public/images/og/`.
- Structured data (`application/ld+json`): only where 100% factually accurate.
- `robots.js`: allow all for production domain; `noindex` on staging (use env var).
- `sitemap.js`: auto-generate from known page routes.
- **Never keyword-stuff** descriptions or headings.

---

## Accessibility (a11y)

- One `<h1>` per page.
- Heading hierarchy: `h1 → h2 → h3` (never skip).
- All images: meaningful `alt` text or `alt=""` for decorative.
- All interactive elements: visible focus ring (`focus:ring-2 focus:ring-gold`).
- Color contrast: WCAG AA minimum (4.5:1 for normal text, 3:1 for large).
- Buttons: `type="button"` unless submitting a form.
- Links that open externally: `target="_blank" rel="noopener noreferrer"`.
- Skip-to-main-content link at top of each page layout.

---

## Performance

- Use `next/image` for all images (automatic optimization, lazy loading).
- Use `next/font` for Google Fonts (zero layout shift).
- Avoid importing full icon libraries — use inline SVG or tree-shaken imports.
- Minimize `'use client'` boundaries to reduce JS bundle size.
- Prefer CSS animations over JS-driven animations where possible.
- Use `loading="lazy"` on below-the-fold images.

---

## Security

- No API secrets in client components or `NEXT_PUBLIC_` env vars.
- `NEXT_PUBLIC_` is safe for: site URL, WhatsApp number, public contact info.
- Sanitize all user inputs before display (future form phases).
- Content Security Policy headers: configure in `next.config.mjs` headers (future phase).

---

## Code Style

- **Indentation**: 2 spaces.
- **Quotes**: single quotes for JS strings, double quotes for JSX attributes.
- **Semicolons**: yes.
- **Arrow functions** for components and callbacks.
- **Destructuring** props at function signature level.
- **Comments**: JSDoc for exported functions, inline `//` for non-obvious logic only.
- `console.log` is forbidden in committed code — use proper logging or remove.
- No commented-out dead code in committed files.

---

## Placeholder Convention

When company information is missing, use this pattern consistently:

```jsx
// In JSX:
<span className="placeholder-text">[PLACEHOLDER: Company tagline]</span>

// In data/config:
address: '[TO BE SUPPLIED BY SNMZ]',
```

Never invent business facts (addresses, registration numbers, certifications, trading volumes, etc.).

---

## Git & Workflow

- **Branch naming**: `feat/`, `fix/`, `chore/`, `content/` prefixes.
- **Commits**: imperative mood, max 72 chars: `feat: add Hero section component`.
- `main` branch is always deployable.
- Run `npm run lint && npm run build` before merging.

---

## Future Phases (Do Not Implement Yet)

| Phase | Scope |
|---|---|
| Auth | User accounts, login, sessions |
| Prices | Live/daily gold price feed |
| Forms | Business enquiry submission API |
| Database | PostgreSQL connection, schema, migrations |
| News | External news API integration |
| CMS | Content management for blog/news |

---

## Environment Variables

```env
# .env.local (never commit this file)
NEXT_PUBLIC_SITE_URL=https://snmzgold.com
NEXT_PUBLIC_WHATSAPP=          # WhatsApp number with country code, no +
NEXT_PUBLIC_EMAIL=
NEXT_PUBLIC_PHONE=
```
