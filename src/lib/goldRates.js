/**
 * Gold rates data layer for SNMZ Gold & Diamonds — Dubai.
 *
 * ARCHITECTURE:
 * - Single source of truth for all rate data and currency formatting.
 * - UI components import from here only — never hardcode rates in components.
 * - Never expose API secrets here — this file runs server-side.
 *
 * DATA STATUS FLAGS:
 *   'live'        — rates from a verified, connected live API
 *   'unavailable' — API unreachable or returned invalid data
 *
 * CURRENCY: AED (UAE Dirham)
 * FORMAT:   en-AE locale, AED symbol, 2 decimal places
 *
 * API SOURCE: fawazahmed0/exchange-api via jsDelivr CDN (no API key, no signup)
 * ENDPOINT:  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xau.json
 * RESPONSE:  { date: "YYYY-MM-DD", xau: { aed: <troy_oz_in_AED>, usd: ..., inr: ..., ... } }
 *
 * CONVERSION CHAIN:
 *   1. API returns: 1 troy ounce of gold in AED   (data.xau.aed)
 *   2. Troy oz → grams: 1 troy oz = 31.1034768 g
 *   3. perGram24K  = xau.aed / 31.1034768
 *   4. perGram22K  = perGram24K × (22/24)   [916 purity]
 *   5. perGram21K  = perGram24K × (21/24)   [875 purity — common in UAE market]
 *   6. perGram18K  = perGram24K × (18/24)   [750 purity]
 *
 * NOTE: Per-gram purity rates are application-derived from the 24K base.
 * They reflect spot gold value by purity fraction — not retail jewellery prices,
 * which may carry making charges, VAT (5%), premiums, and other fees.
 */

/**
 * @typedef {Object} PurityRate
 * @property {string}       karat       — e.g. '24K'
 * @property {string}       label       — e.g. '24 Karat'
 * @property {string}       purity      — e.g. '999'
 * @property {string}       purityLabel — e.g. '999.9 Fine'
 * @property {number|null}  perGram     — AED per gram, null if unavailable
 */

/**
 * @typedef {Object} GoldRatesData
 * @property {'live'|'unavailable'} status
 * @property {string|null}   updatedAt  — ISO date string or null
 * @property {string}        source     — Attribution string
 * @property {string}        currency   — Always 'AED'
 * @property {PurityRate[]}  rates
 */

/** Troy ounce to grams — exact LBMA/ISO constant */
const TROY_OZ_TO_GRAMS = 31.1034768;

/** Purity definitions in UAE market order (24K, 22K, 21K, 18K) */
export const PURITY_DEFINITIONS = [
  { karat: '24K', label: '24 Karat', purity: '999', purityLabel: '999.9 Fine' },
  { karat: '22K', label: '22 Karat', purity: '916', purityLabel: '916 Hallmark' },
  { karat: '21K', label: '21 Karat', purity: '875', purityLabel: '875 Fine' },
  { karat: '18K', label: '18 Karat', purity: '750', purityLabel: '750 Fine' },
];

/** Purity multipliers keyed by karat — used to derive sub-purity rates from 24K base */
const PURITY_MULTIPLIERS = {
  '24K': 1,
  '22K': 22 / 24,
  '21K': 21 / 24,
  '18K': 18 / 24,
};

/**
 * Fetches live XAU/AED rate from the fawazahmed0 free CDN.
 * No API key required. Revalidates every 30 minutes via Next.js ISR.
 *
 * Returns the full GoldRatesData structure. Falls back to 'unavailable'
 * silently on any network or parsing error.
 *
 * @returns {Promise<GoldRatesData>}
 */
export async function fetchLiveGoldRates() {
  const API_URL =
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xau.json';

  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 1800 }, // Next.js ISR — 30 minutes
    });

    if (!res.ok) {
      throw new Error(`API responded ${res.status}`);
    }

    const data = await res.json();

    // Use AED directly from the API response — no cross-currency conversion needed
    const xauAed = data?.xau?.aed;

    if (!xauAed || !isFinite(xauAed) || xauAed <= 0) {
      throw new Error('Invalid AED rate in API response');
    }

    // 24K base rate per gram in AED
    const perGram24k = xauAed / TROY_OZ_TO_GRAMS;

    return {
      status: 'live',
      currency: 'AED',
      updatedAt: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      source: 'fawazahmed0/exchange-api (XAU→AED) via jsDelivr',
      rates: PURITY_DEFINITIONS.map((p) => ({
        ...p,
        perGram: round2(perGram24k * PURITY_MULTIPLIERS[p.karat]),
      })),
    };
  } catch {
    return getUnavailableRates();
  }
}

/**
 * Synchronous fallback — used when the live API is unreachable.
 * @returns {GoldRatesData}
 */
export function getUnavailableRates() {
  return {
    status: 'unavailable',
    currency: 'AED',
    updatedAt: null,
    source: 'Live rates temporarily unavailable',
    rates: PURITY_DEFINITIONS.map((p) => ({ ...p, perGram: null })),
  };
}

// ─── Calculation Utilities ─────────────────────────────────────────────────────

/**
 * Rounds a number to 2 decimal places.
 * @param {number} n
 * @returns {number}
 */
function round2(n) {
  return Math.round(n * 100) / 100;
}

/**
 * Derives per-10-gram price from per-gram price.
 * @param {number|null} perGram
 * @returns {number|null}
 */
export function per10g(perGram) {
  if (perGram == null || !isFinite(perGram) || perGram <= 0) return null;
  return round2(perGram * 10);
}

/**
 * Calculates indicative gold value in AED.
 * @param {number|null} ratePerGram — AED per gram for selected purity
 * @param {number}      weightGrams — weight entered by user
 * @returns {{ value: number|null, error: string|null }}
 */
export function calculateGoldValue(ratePerGram, weightGrams) {
  if (ratePerGram == null) {
    return { value: null, error: 'Rate unavailable for selected purity.' };
  }
  if (!isFinite(weightGrams) || weightGrams <= 0) {
    return { value: null, error: 'Please enter a valid weight greater than zero.' };
  }
  return { value: round2(ratePerGram * weightGrams), error: null };
}

// ─── Currency Formatting ───────────────────────────────────────────────────────

/**
 * Formats a number as UAE Dirhams (AED).
 * Single source of truth for all AED formatting in the application.
 *
 * @param {number} amount
 * @returns {string}  e.g. "AED 473.50"
 */
export function formatAED(amount) {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formats a number as a plain AED string with label.
 * Use when the currency context is already clear from surrounding UI.
 * @param {number} amount
 * @returns {string}  e.g. "473.50"
 */
export function formatAEDPlain(amount) {
  return new Intl.NumberFormat('en-AE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
