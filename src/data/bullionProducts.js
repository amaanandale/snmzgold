/**
 * SNMZ Gold & Diamonds — Standard Bullion Inventory Dataset.
 *
 * All products specify exact physical weights, industry standard purities,
 * clean titles, and pricing parameters for client-side live spot valuation.
 *
 * Formula:
 * productPrice = Math.round(weightInGrams * liveRate + premiumPerUnit)
 */

export const BULLION_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'gold-bars', label: 'Gold Bars' },
  { id: 'tt-bars', label: '10 Tola TT Bars' },
  { id: 'silver-bars', label: 'Silver Bars' },
];

export const STANDARD_INVENTORY = [
  // ─── Minted Gold Bars ──────────────────────────────────────────────────────
  {
    id: 'gold-bar-1g',
    title: 'Minted Gold Bar',
    brand: 'SNMZ Minted',
    category: 'gold-bars',
    weight: '1g',
    weightGrams: 1,
    purity: '999.9',
    spec: '1g • 999.9',
    metal: 'gold',
    form: 'bar',
    premium: 5,
    featured: false,
    description: '1 Gram 999.9 fine gold investment bar in high-security tamper-evident assay blister card.',
  },
  {
    id: 'gold-bar-2-5g',
    title: 'Minted Gold Bar',
    brand: 'SNMZ Minted',
    category: 'gold-bars',
    weight: '2.5g',
    weightGrams: 2.5,
    purity: '999.9',
    spec: '2.5g • 999.9',
    metal: 'gold',
    form: 'bar',
    premium: 15,
    featured: false,
    description: '2.5 Gram 999.9 fine gold bar sealed in tamper-evident certipack with individual serial number.',
  },
  {
    id: 'gold-bar-5g',
    title: 'Minted Gold Bar',
    brand: 'SNMZ Minted',
    category: 'gold-bars',
    weight: '5g',
    weightGrams: 5,
    purity: '999.9',
    spec: '5g • 999.9',
    metal: 'gold',
    form: 'bar',
    premium: 25,
    featured: false,
    description: '5 Gram 999.9 pure gold investment bar with polished mirror finish and assay certification.',
  },
  {
    id: 'gold-bar-10g',
    title: 'Minted Gold Bar',
    brand: 'SNMZ Minted',
    category: 'gold-bars',
    weight: '10g',
    weightGrams: 10,
    purity: '999.9',
    spec: '10g • 999.9',
    metal: 'gold',
    form: 'bar',
    premium: 35,
    featured: true,
    description: '10 Gram high-liquidity 999.9 gold minted bar sealed in security blister packaging.',
  },
  {
    id: 'gold-bar-20g',
    title: 'Minted Gold Bar',
    brand: 'SNMZ Minted',
    category: 'gold-bars',
    weight: '20g',
    weightGrams: 20,
    purity: '999.9',
    spec: '20g • 999.9',
    metal: 'gold',
    form: 'bar',
    premium: 50,
    featured: false,
    description: '20 Gram 999.9 fine gold bar, standard portable wealth asset with verifiable assay hallmark.',
  },
  {
    id: 'gold-bar-1oz',
    title: 'Minted Gold Bar',
    brand: 'SNMZ Minted',
    category: 'gold-bars',
    weight: '31.1g (1oz)',
    weightGrams: 31.1035,
    purity: '999.9',
    spec: '31.1g • 999.9',
    metal: 'gold',
    form: 'bar',
    premium: 65,
    featured: true,
    description: '1 Troy Ounce (31.103g) 999.9 investment gold ingot in airtight security certipack card.',
  },
  {
    id: 'gold-bar-50g',
    title: 'Minted Gold Bar',
    brand: 'SNMZ Minted',
    category: 'gold-bars',
    weight: '50g',
    weightGrams: 50,
    purity: '999.9',
    spec: '50g • 999.9',
    metal: 'gold',
    form: 'bar',
    premium: 80,
    featured: false,
    description: '50 Gram high-purity gold bullion bar sealed with official SNMZ refinery hallmark.',
  },
  {
    id: 'gold-bar-100g',
    title: 'Minted Gold Bar',
    brand: 'SNMZ Minted',
    category: 'gold-bars',
    weight: '100g',
    weightGrams: 100,
    purity: '999.9',
    spec: '100g • 999.9',
    metal: 'gold',
    form: 'bar',
    premium: 100,
    featured: true,
    description: '100 Gram 999.9 fine gold bar in luxury certipack. The gold standard for institutional trading.',
  },
  {
    id: 'gold-bar-250g',
    title: 'Minted Gold Bar',
    brand: 'SNMZ Minted',
    category: 'gold-bars',
    weight: '250g',
    weightGrams: 250,
    purity: '999.9',
    spec: '250g • 999.9',
    metal: 'gold',
    form: 'bar',
    premium: 180,
    featured: false,
    description: '250 Gram precision minted gold bar with serial identification and official refinery hallmarks.',
  },
  {
    id: 'gold-bar-1kg',
    title: 'Minted Gold Bar',
    brand: 'SNMZ Minted',
    category: 'gold-bars',
    weight: '1kg',
    weightGrams: 1000,
    purity: '999.9',
    spec: '1kg • 999.9',
    metal: 'gold',
    form: 'bar',
    premium: 250,
    featured: true,
    description: '1 Kilogram (1,000g) 999.9 fine gold bullion bar. Benchmark asset for wealth preservation.',
  },

  // ─── Dubai Regional Benchmark: 10 Tola TT Bar ──────────────────────────────
  {
    id: 'gold-bar-10tola',
    title: '10 Tola TT Bar',
    brand: 'Dubai Benchmark',
    category: 'tt-bars',
    weight: '116.64g (10 Tola)',
    weightGrams: 116.64,
    purity: '999.0',
    spec: '10 Tola • 999.0',
    metal: 'gold',
    form: 'bar',
    premium: 120,
    featured: true,
    description: '10 Tola (116.64g) 999.0 traditional TT cast bar. The premier bullion format of Dubai Gold Souk.',
  },

  // ─── Silver Bullion ────────────────────────────────────────────────────────
  {
    id: 'silver-bar-100g',
    title: 'Fine Silver Bar',
    brand: 'SNMZ Minted',
    category: 'silver-bars',
    weight: '100g',
    weightGrams: 100,
    purity: '999.0',
    spec: '100g • 999.0',
    metal: 'silver',
    form: 'bar',
    premium: 32,
    featured: false,
    description: '100 Gram 999 fine physical silver minted ingot with security packaging.',
  },
  {
    id: 'silver-bar-500g',
    title: 'Fine Silver Bar',
    brand: 'Dubai Benchmark',
    category: 'silver-bars',
    weight: '500g',
    weightGrams: 500,
    purity: '999.0',
    spec: '500g • 999.0',
    metal: 'silver',
    form: 'bar',
    premium: 115,
    featured: false,
    description: '500 Gram investment-grade physical silver bar for portfolio allocation.',
  },
  {
    id: 'silver-bar-1kg',
    title: 'Fine Silver Cast Ingot',
    brand: 'Dubai Benchmark',
    category: 'silver-bars',
    weight: '1kg',
    weightGrams: 1000,
    purity: '999.0',
    spec: '1kg • 999.0',
    metal: 'silver',
    form: 'bar',
    premium: 150,
    featured: true,
    description: '1 Kilogram (1,000g) physical 999 fine silver cast ingot with refinery serial number.',
  },
];

/**
 * Calculates dynamic client-side live price in AED based on passed spot rates.
 * No extra API calls triggered.
 *
 * Formula:
 * productPrice = Math.round(weightInGrams * liveRate + premiumPerUnit)
 *
 * @param {typeof STANDARD_INVENTORY[0]} product
 * @param {number} [liveGoldRate24k]
 * @param {number} [liveSilverRate]
 * @returns {number}
 */
export function calculateDynamicPrice(product, liveGoldRate24k = 480.09, liveSilverRate = 6.13) {
  const isSilver = product.metal === 'silver';
  const baseRate = isSilver ? (liveSilverRate || 6.13) : (liveGoldRate24k || 480.09);
  const purityFraction = product.purity === '999.0' ? (isSilver ? 1 : 999.0 / 999.9) : 1;
  const rawTotal = product.weightGrams * baseRate * purityFraction + (product.premium || 0);
  return Math.round(rawTotal);
}

/**
 * Formats a number as clean AED currency with comma separators and two decimals.
 * e.g., 48009 => "AED 48,009.00"
 *
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrencyAED(amount) {
  if (amount == null || !isFinite(amount)) return 'AED —';
  return `AED ${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/**
 * Generates the direct WhatsApp enquiry URL matching the exact prompt specification:
 * https://wa.me/971527549259?text=Hello%20SNMZ%20Bullion%20Desk,%20I%20would%20like%20to%20enquire%20about%20the%20live%20rate%20for%20[PRODUCT_TITLE]%20([WEIGHT])
 *
 * @param {string} productTitle
 * @param {string} weight
 * @returns {string}
 */
export function getProductWhatsAppUrl(productTitle, weight) {
  const message = `Hello SNMZ Bullion Desk, I would like to enquire about the live rate for ${productTitle} (${weight})`;
  return `https://wa.me/971527549259?text=${encodeURIComponent(message)}`;
}
