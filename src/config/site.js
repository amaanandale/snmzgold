/**
 * Centralised site configuration for SNMZ Gold & Diamonds — Dubai.
 * All configurable values live here — never hardcode in components.
 *
 * HOW TO CONFIGURE WHATSAPP:
 *   Set NEXT_PUBLIC_WHATSAPP in your .env.local file.
 *   Format: country code + number, no + sign, no spaces.
 *   Example: '971501234567' for a UAE number.
 *   When not set, the WhatsApp button links to https://www.whatsapp.com/
 */
export const SiteConfig = {
  name: 'SNMZ Gold & Diamonds',
  shortName: 'SNMZ',
  tagline: 'Gold, Refined for Dubai.',
  description:
    'Explore live gold rates in AED and discover gold and diamond offerings from SNMZ Gold & Diamonds — a premium precious-metals brand for the UAE market.',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://snmzgold.com',

  // ── Contact ─────────────────────────────────────────────────────────────
  // To configure WhatsApp: set NEXT_PUBLIC_WHATSAPP in .env.local
  // Format: UAE country code + number, no + sign. e.g. '971501234567'
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '',
  email:    process.env.NEXT_PUBLIC_EMAIL    || '',
  phone:    process.env.NEXT_PUBLIC_PHONE    || '',
  address:  '',  // [TO BE SUPPLIED BY SNMZ — UAE address]

  // ── WhatsApp greeting ────────────────────────────────────────────────────
  whatsappGreeting:
    'Hello, I would like to enquire about SNMZ Gold & Diamonds.',

  // ── Social ───────────────────────────────────────────────────────────────
  social: {
    instagram: '',
    linkedin:  '',
    twitter:   '',
  },

  // ── Navigation ───────────────────────────────────────────────────────────
  nav: [
    { label: 'Home',           href: '/' },
    { label: 'Gold Rates',     href: '/gold-prices' },
    { label: 'Why Dubai?',     href: '/why-dubai' },
    { label: 'Blogs',          href: '/blogs' },
    { label: 'Gold News',      href: '/gold-news' },
    { label: 'Economic News',  href: '/economic-news' },
    { label: 'Who We Are',     href: '/who-we-are' },
    { label: 'Contact',        href: '/#contact' },
  ],

  // ── SEO ──────────────────────────────────────────────────────────────────
  keywords: [
    'gold rates Dubai',
    'gold price today UAE',
    'AED gold rate per gram',
    '24K gold Dubai',
    '22K gold Dubai',
    '21K gold UAE',
    'gold and diamonds Dubai',
    'SNMZ Gold',
    'gold bullion UAE',
    'precious metals Dubai',
    'gold TT bars',
    'gold trading UAE',
    'Dubai gold souk',
    'why Dubai is called city of gold',
  ],
};
