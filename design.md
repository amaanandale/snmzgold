# SNMZ Gold & Diamonds — Design System

> **Single source of truth for all visual and brand decisions.**
> Read this file before making any UI change. Update here first when a brand decision changes.

---

## Brand Identity

| Element | Value |
|---|---|
| Company | SNMZ Gold & Diamonds |
| Tagline | *[Tagline to be provided by SNMZ]* |
| Primary product | 24K Gold TT Bars |
| Tone | Premium · Trustworthy · Authoritative · Restrained |
| Visual direction | Investment-grade digital platform meets luxury bullion brand |

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `emerald` | `#063926` | Primary brand · dominant backgrounds · headers |
| `emerald-dark` | `#042a1c` | Deep backgrounds · hero overlays |
| `emerald-light` | `#0a5438` | Section alternates · hover states |
| `gold` | `#DFAF24` | Accents · CTAs · headings on dark · borders |
| `gold-antique` | `#B8860B` | Gold gradients · secondary accents |
| `gold-light` | `#ECC84A` | Hover gold · highlights |
| `gold-pale` | `#F5DFA0` | Subtle gold tints on light backgrounds |
| `ivory` | `#F7F1E5` | Light section backgrounds |
| `ivory-dark` | `#EDE4CF` | Cards on ivory · dividers |
| `white` | `#FFFFFF` | Text on dark · card surfaces |

### Color Rules
- **Emerald must be dominant.** It should cover at least 60% of visible screen area.
- **Gold is an accent, never a background fill** for large sections.
- Never use plain red, blue, or green outside the palette.
- Text on emerald: `white` or `gold`. Text on ivory/white: `emerald-dark` or `#1a1a1a`.

---

## Typography

### Fonts (loaded via Google Fonts in `layout.js`)
| Role | Font | Weight |
|---|---|---|
| Display / Headings | Playfair Display | 400, 600, 700 |
| Body / UI | Inter | 300, 400, 500, 600 |
| Mono (data) | JetBrains Mono | 400 |

### Type Scale
| Class | Size | Usage |
|---|---|---|
| `text-hero` | 4xl–6xl (responsive) | Hero headline |
| `text-section` | 2xl–4xl (responsive) | Section headings |
| `text-card` | xl–2xl | Card titles |
| `text-body` | base–lg | Paragraphs |
| `text-small` | sm | Labels · captions |

### Typography Rules
- Section headings: `font-display` (Playfair Display)
- Body copy: `font-body` (Inter)
- Headings on dark backgrounds: `text-gold` or `text-white`
- Headings on light backgrounds: `text-emerald`
- Line height: generous (`leading-relaxed` for body, `leading-tight` for headings)
- Letter spacing: `tracking-wide` on uppercase labels, `tracking-tight` on large headings

---

## Spacing System

Use Tailwind spacing scale consistently. Key breakpoints:

| Element | Padding / Margin |
|---|---|
| Section vertical padding | `py-20 lg:py-28` |
| Container max-width | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Card inner padding | `p-6 lg:p-8` |
| Component gap | `gap-6 lg:gap-8` |
| Hero top padding | `pt-32 pb-20` (accounts for fixed header) |

---

## Component Patterns

### Buttons
```
Primary CTA (gold):     bg-gold text-emerald-dark font-semibold px-8 py-3 rounded-lg
                        hover:bg-gold-light transition-all shadow-gold
Secondary (outline):    border border-gold text-gold px-8 py-3 rounded-lg
                        hover:bg-gold/10 transition-all
Ghost (on dark):        text-white/80 hover:text-white underline-offset-4
```

### Cards
```
Default:   bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow
Dark:      bg-emerald-light/20 border border-gold/20 rounded-2xl p-6
Ivory:     bg-ivory rounded-2xl p-6 shadow-card
```

### Dividers
```
Gold accent line:  w-16 h-0.5 bg-gold-gradient mx-auto or ml-0
Section rule:      border-t border-gold/20
```

### Badges / Tags
```
bg-gold/10 text-gold-antique text-xs font-semibold uppercase tracking-widest
px-3 py-1 rounded-full
```

---

## Layout Grid

- **Desktop:** 12-column grid, `gap-8`
- **Tablet:** 2-column, `gap-6`
- **Mobile:** single column, `gap-4`
- Sidebar layouts (2:1 ratio): `grid-cols-1 lg:grid-cols-3` with main spanning 2 cols

---

## Animation & Motion

| Token | Tailwind class | Purpose |
|---|---|---|
| Fade in | `animate-fade-in` | Page and section reveals |
| Slide up | `animate-slide-up` | Card / content entrance |
| Float | `animate-float` | Hero decorative elements |
| Shimmer | `animate-shimmer` | Gold text / loading |
| Transition standard | `transition-all duration-300 ease-in-out` | All interactive elements |

### Motion Rules
- **Animations must be subtle.** No aggressive bouncing or spinning.
- Respect `prefers-reduced-motion` — wrap non-essential animations in `motion-safe:`.
- Hover states: scale max `scale-105`, never larger.
- Stagger entrance animations by `100ms` per element.

---

## Imagery

- Gold bars and bullion: use high-quality images or generated alternatives.
- Style: dark studio photography with warm gold lighting on emerald/dark backgrounds.
- Avoid: stock-photo business handshakes, generic "money" imagery.
- Alt text: always descriptive, never empty on meaningful images.
- Image aspect ratios: hero `16:9`, card thumbnails `4:3`, team/profile `1:1`.

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| `sm` | 640px | Mobile → tablet transition |
| `md` | 768px | Tablet layout |
| `lg` | 1024px | Desktop layout activates |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide cap (max-w-8xl) |

Mobile-first. All layouts start single-column and expand at `lg`.

---

## Section Order (Homepage)

1. Header (sticky, transparent → solid on scroll)
2. Hero
3. About SNMZ
4. Gold Trading & TT Bars
5. Purity, Certifications & Compliance
6. Trading Capabilities & Trust
7. Blog / Market Insights Preview
8. Latest Gold News Preview
9. Contact CTA
10. Footer

---

## Premium UI Checklist

- [ ] Every section has a clear visual hierarchy
- [ ] Sufficient whitespace between sections
- [ ] Gold accent lines under every section heading
- [ ] No orphaned text (widows) on headings
- [ ] Hover states on all interactive elements
- [ ] Focus rings visible for keyboard accessibility
- [ ] Consistent border-radius (`rounded-lg` = 8px, `rounded-2xl` = 16px, `rounded-full` = pill)
- [ ] Dark sections alternate with ivory/white sections for visual rhythm
- [ ] All placeholder text is clearly marked with `[PLACEHOLDER]` or `[TO BE SUPPLIED]`
