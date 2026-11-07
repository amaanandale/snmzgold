/**
 * Silver rates data layer for SNMZ Gold & Diamonds — Dubai.
 *
 * ARCHITECTURE:
 * - Single source of truth for all silver rate data and calculations.
 * - Primary & Fallback CDN endpoints with zero API keys required.
 * - Exact LBMA/ISO troy ounce conversion: 31.1034768 grams.
 * - Genuine historical observations via Cloudflare Pages archive.
 *
 * PRIMARY ENDPOINT:  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xag.json
 * FALLBACK ENDPOINT: https://latest.currency-api.pages.dev/v1/currencies/xag.json
 * HISTORICAL ENDPOINT: https://{YYYY-MM-DD}.currency-api.pages.dev/v1/currencies/xag.json
 */

import { formatAED, formatAEDPlain } from './goldRates';

export { formatAED, formatAEDPlain };

/** Exact LBMA/ISO troy ounce to grams conversion constant */
export const TROY_OZ_TO_GRAMS = 31.1034768;

/** Purity definitions for silver bullion */
export const SILVER_PURITY_DEFINITIONS = [
  { grade: '999.9', label: 'Fine Silver 999.9', purity: '999.9', multiplier: 1.0 },
  { grade: '999', label: 'Fine Silver 999', purity: '999', multiplier: 0.999 },
  { grade: '925', label: 'Sterling Silver 925', purity: '925', multiplier: 0.925 },
];

/**
 * Rounds a number to 2 decimal places.
 * @param {number} n
 * @returns {number}
 */
export function round2(n) {
  return Math.round(n * 100) / 100;
}

/**
 * Fetches live XAG/AED rate from the free jsDelivr CDN, with Cloudflare mirror fallback.
 * Revalidates every 30 minutes via Next.js ISR.
 */
export async function fetchLiveSilverRates() {
  const endpoints = [
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xag.json',
    'https://latest.currency-api.pages.dev/v1/currencies/xag.json',
  ];

  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        next: { revalidate: 1800 },
      });

      if (!res.ok) continue;

      const data = await res.json();
      const xagAed = data?.xag?.aed;

      if (!xagAed || !isFinite(xagAed) || xagAed <= 0) {
        continue;
      }

      // 999.9 base rate per gram in AED
      const perGramBase = xagAed / TROY_OZ_TO_GRAMS;
      const perKg = perGramBase * 1000;
      const perOz = xagAed;

      return {
        status: 'live',
        currency: 'AED',
        updatedAt: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        source: 'fawazahmed0/exchange-api (XAG→AED)',
        spotOz: round2(perOz),
        spotKg: round2(perKg),
        spotGram: round2(perGramBase),
        rates: SILVER_PURITY_DEFINITIONS.map((p) => {
          const perG = perGramBase * p.multiplier;
          return {
            ...p,
            perGram: round2(perG),
            per10g: round2(perG * 10),
            per100g: round2(perG * 100),
            perKg: round2(perG * 1000),
            perOz: round2(perG * TROY_OZ_TO_GRAMS),
          };
        }),
      };
    } catch {
      // Try next endpoint
      continue;
    }
  }

  return getUnavailableSilverRates();
}

/**
 * Synchronous fallback if live API is unreachable.
 */
export function getUnavailableSilverRates() {
  return {
    status: 'unavailable',
    currency: 'AED',
    updatedAt: null,
    source: 'Live silver rates temporarily unavailable',
    spotOz: null,
    spotKg: null,
    spotGram: null,
    rates: SILVER_PURITY_DEFINITIONS.map((p) => ({
      ...p,
      perGram: null,
      per10g: null,
      per100g: null,
      perKg: null,
      perOz: null,
    })),
  };
}

/**
 * Calculates indicative silver value in AED.
 */
export function calculateSilverValue(ratePerGram, weightGrams) {
  if (ratePerGram == null) {
    return { value: null, error: 'Rate unavailable for selected purity.' };
  }
  if (!isFinite(weightGrams) || weightGrams <= 0) {
    return { value: null, error: 'Please enter a valid weight greater than zero.' };
  }
  return { value: round2(ratePerGram * weightGrams), error: null };
}

/**
 * Generates sample date strings (YYYY-MM-DD) for historical queries.
 * @param {'1W'|'1M'|'3M'|'1Y'} range
 * @returns {string[]} Array of date strings in YYYY-MM-DD
 */
export function getHistoricalDates(range = '1M') {
  const dates = [];
  const now = new Date();

  // Subtract 1 day as the latest closed market date baseline
  const baseDate = new Date(now);
  baseDate.setDate(baseDate.getDate() - 1);

  if (range === '1W') {
    // 7 consecutive days
    for (let i = 6; i >= 0; i--) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() - i);
      dates.push(d.toISOString().split('T')[0]);
    }
  } else if (range === '1M') {
    // 10 points over 30 days (every 3 days)
    for (let i = 9; i >= 0; i--) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() - i * 3);
      dates.push(d.toISOString().split('T')[0]);
    }
  } else if (range === '3M') {
    // 12 points over 90 days (every ~7-8 days)
    for (let i = 11; i >= 0; i--) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() - i * 8);
      dates.push(d.toISOString().split('T')[0]);
    }
  } else if (range === '1Y') {
    // 12 monthly points
    for (let i = 11; i >= 0; i--) {
      const d = new Date(baseDate);
      d.setMonth(baseDate.getMonth() - i);
      dates.push(d.toISOString().split('T')[0]);
    }
  }

  return dates;
}

/**
 * Fetches genuine historical silver observations for a given date.
 * Uses Cloudflare Pages mirror with Next.js ISR (24h cache).
 *
 * @param {string} dateStr YYYY-MM-DD
 * @returns {Promise<{ date: string, perGram: number, perOz: number }|null>}
 */
export async function fetchHistoricalSilverPoint(dateStr) {
  const url = `https://${dateStr}.currency-api.pages.dev/v1/currencies/xag.json`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 }, // Past dates never change
    });

    if (!res.ok) return null;

    const data = await res.json();
    const aed = data?.xag?.aed;

    if (!aed || !isFinite(aed) || aed <= 0) return null;

    const perGram = aed / TROY_OZ_TO_GRAMS;

    return {
      date: dateStr,
      perGram: round2(perGram),
      perOz: round2(aed),
    };
  } catch {
    return null;
  }
}

/**
 * Fetches a complete series of genuine historical silver observations for a timeframe.
 * Only returns genuine observations. Never invents data points.
 *
 * @param {'1W'|'1M'|'3M'|'1Y'} range
 * @returns {Promise<{ status: 'available'|'unavailable', range: string, points: Array<{ date: string, perGram: number, perOz: number }>, lastUpdated: string }>}
 */
export async function fetchHistoricalSilverSeries(range = '1M') {
  const dates = getHistoricalDates(range);

  try {
    const results = await Promise.allSettled(
      dates.map((dateStr) => fetchHistoricalSilverPoint(dateStr))
    );

    const validPoints = results
      .filter((r) => r.status === 'fulfilled' && r.value != null)
      .map((r) => r.value)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (validPoints.length >= 2) {
      return {
        status: 'available',
        range,
        points: validPoints,
        lastUpdated: validPoints[validPoints.length - 1].date,
      };
    }

    return {
      status: 'unavailable',
      range,
      points: [],
      lastUpdated: new Date().toISOString().split('T')[0],
    };
  } catch {
    return {
      status: 'unavailable',
      range,
      points: [],
      lastUpdated: new Date().toISOString().split('T')[0],
    };
  }
}
