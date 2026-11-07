/**
 * Centralised site configuration for SNMZ Gold & Diamonds — Dubai.
 * Single source of truth for brand, contact info, navigation, and enquiry routing.
 * Never duplicate these values across individual components.
 */
export const SiteConfig = {
  name: 'SNMZ Gold & Diamonds',
  shortName: 'SNMZ',
  tagline: 'Premium Precious Metals & Bullion · Dubai',
  description:
    'Licensed precious metals and bullion dealer in Dubai offering investment-grade 24K gold TT bars, cast bars, minted bullion, and physical silver. Live AED spot rates and institutional trading standards.',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://snmzgold.com',

  // ── Confirmed Business & Contact Information ──────────────────────────────
  whatsapp: '971527549259',
  whatsappDisplay: '+971 52 754 9259',
  phone: '+97143441832',
  phoneDisplay: '+971 4 344 1832',
  email: process.env.NEXT_PUBLIC_EMAIL || 'desk@snmzgold.com',
  address: 'F03, Al Fadan Building, Al Dhagaya, Dubai, UAE',
  businessHours: '9:00 AM – 7:00 PM (GST)',
  tradeLicence: '1531797',
  establishedYear: '2025',

  // ── Pre-configured Contextual WhatsApp Messages ───────────────────────────
  whatsappMessages: {
    general:
      'Hello SNMZ Gold & Diamonds, I would like to enquire about your bullion services.',
    homepage:
      'Hello SNMZ Gold & Diamonds, I would like to enquire about your bullion services. I found you through the homepage.',
    shop:
      'Hello SNMZ Gold & Diamonds, I would like to enquire about your bullion products. I found you through your Shop catalogue.',
    shopProduct: (productName, weight) =>
      `Hello SNMZ Gold & Diamonds, I would like to enquire about the ${productName}${weight ? ` (${weight})` : ''}. I found this on your Shop page.`,
    goldRates:
      'Hello SNMZ Gold & Diamonds, I would like to enquire about the current gold rate.',
    silverRates:
      'Hello SNMZ Gold & Diamonds, I would like to enquire about the current silver rate.',
    silverHomepage:
      'Hello SNMZ Gold & Diamonds, I would like to enquire about the current silver rate. I found you through the homepage.',
    whyDubai:
      'Hello SNMZ Gold & Diamonds, I would like to know more about gold trading opportunities in Dubai.',
    gallery:
      'Hello SNMZ Gold & Diamonds, I viewed your gallery and would like more information.',
    contact:
      'Hello SNMZ Gold & Diamonds, I would like to contact SNMZ Gold & Diamonds.',
  },

  // ── Social Media (rendered only when provided) ────────────────────────────
  social: {
    instagram: '',
    linkedin: '',
    twitter: '',
  },

  // ── Navigation Structure ──────────────────────────────────────────────────
  nav: [
    {
      label: 'Live Prices',
      hasDropdown: true,
      items: [
        {
          label: 'Gold Price',
          href: '/gold-prices',
          description: 'Live 24K, 22K, 21K, 18K spot rates in AED per gram',
        },
        {
          label: 'Silver Price',
          href: '/silver-prices',
          description: 'Live 999 physical silver spot rates in AED',
        },
      ],
    },
    { label: 'Shop', href: '/shop' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Why Dubai?', href: '/why-dubai' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/#contact' },
  ],

  // ── SEO Keywords ──────────────────────────────────────────────────────────
  keywords: [
    'gold rates Dubai',
    'gold price today UAE',
    'silver price Dubai',
    'AED gold rate per gram',
    '24K gold Dubai',
    'gold bullion UAE',
    'precious metals Dubai',
    'gold TT bars',
    'silver bullion bars',
    'buy gold dubai',
    'gold trading UAE',
    'Dubai gold souk',
    'SNMZ Gold & Diamonds',
    'Al Dhagaya Dubai',
  ],
};
