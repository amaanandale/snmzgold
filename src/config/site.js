/**
 * Centralised site configuration for SNMZ Gold & Diamonds.
 * All configurable values live here — never hardcode in components.
 * Update this file when company information is confirmed.
 */
export const SiteConfig = {
  name: 'SNMZ Gold & Diamonds',
  shortName: 'SNMZ',
  tagline: '[Tagline to be provided by SNMZ]',
  description: 'Premium 24K gold TT bar trading with verified purity, transparent pricing and trusted compliance. Your partner in gold investment.',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://snmzgold.com',

  // Contact — [TO BE SUPPLIED BY SNMZ]
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '',   // e.g. '919876543210'
  email: process.env.NEXT_PUBLIC_EMAIL || '',
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  address: '',  // [TO BE SUPPLIED BY SNMZ]

  // Social — [TO BE SUPPLIED BY SNMZ]
  social: {
    instagram: '',
    linkedin: '',
    twitter: '',
  },

  // Navigation links
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Gold Trading', href: '#trading' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ],

  // SEO
  keywords: [
    '24K gold TT bars',
    'gold trading',
    'bullion',
    'SNMZ Gold',
    'gold investment',
    'gold purity',
    'gold compliance',
  ],
};
