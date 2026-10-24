/**
 * SNMZ Gold & Diamonds — News data layer.
 *
 * PROVIDER: GNews API (https://gnews.io/)
 *   - Free tier: 100 requests/day, 10 articles per request
 *   - Registration: https://gnews.io/ → Sign Up → API Key
 *
 * REQUIRED ENVIRONMENT VARIABLE:
 *   GNEWS_API_KEY=your_key_here   (server-side only — never NEXT_PUBLIC_)
 *
 * HOW TO SET UP:
 *   1. Register at https://gnews.io/ (free, no credit card required)
 *   2. Copy your API key from the dashboard
 *   3. Add to .env.local: GNEWS_API_KEY=your_key_here
 *   4. Restart the dev server
 *
 * DATA SHAPE: NewsArticle
 *   { title, url, source, publishedAt, summary, imageUrl }
 *
 * When GNEWS_API_KEY is not set, fetchNews() returns { articles: [], status: 'unconfigured' }
 * This is NOT an error — it is an honest "setup required" state.
 *
 * CACHING: Next.js ISR revalidates every 30 minutes (matching gold-rates page).
 * GNews free tier: do not exceed ~3 requests/minute to stay within limits.
 *
 * IMPORTANT:
 *   - Never fabricate news articles or publication dates.
 *   - Never expose GNEWS_API_KEY to the client (no NEXT_PUBLIC_ prefix).
 *   - Always validate article URLs before rendering external links.
 */

const GNEWS_BASE = 'https://gnews.io/api/v4';
const REVALIDATE_SECONDS = 1800; // 30 minutes

/**
 * @typedef {Object} NewsArticle
 * @property {string}      title       — Article headline
 * @property {string}      url         — Original article URL (validated)
 * @property {string}      source      — Publication name
 * @property {string}      publishedAt — ISO timestamp from provider
 * @property {string|null} summary     — Short article description
 * @property {string|null} imageUrl    — Article cover image URL
 */

/**
 * @typedef {Object} NewsResult
 * @property {'live'|'unconfigured'|'error'} status
 * @property {NewsArticle[]} articles
 * @property {string|null}   fetchedAt  — ISO timestamp of this fetch, or null
 * @property {string|null}   message    — Human-readable status description
 */

/**
 * Validates that a string is a safe https:// URL.
 * @param {string|undefined} url
 * @returns {string|null}
 */
function safeUrl(url) {
  if (!url || typeof url !== 'string') return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' ? url : null;
  } catch {
    return null;
  }
}

/**
 * Normalizes a raw GNews article into a NewsArticle.
 * @param {Object} raw
 * @returns {NewsArticle|null}
 */
function normalizeArticle(raw) {
  const url = safeUrl(raw?.url);
  if (!url || !raw?.title) return null;

  return {
    title:       String(raw.title).trim(),
    url,
    source:      raw?.source?.name ? String(raw.source.name).trim() : 'Unknown Source',
    publishedAt: raw?.publishedAt  ? String(raw.publishedAt) : null,
    summary:     raw?.description  ? String(raw.description).trim() : null,
    imageUrl:    safeUrl(raw?.image),
  };
}

/**
 * Fetches news from GNews API for a given query.
 * Falls back cleanly when API key is not configured.
 *
 * @param {{ query: string, max?: number }} options
 * @returns {Promise<NewsResult>}
 */
async function fetchNews({ query, max = 10 }) {
  const apiKey = process.env.GNEWS_API_KEY;

  if (!apiKey) {
    return {
      status:    'unconfigured',
      articles:  [],
      fetchedAt: null,
      message:   'News API key not configured. See src/lib/news.js for setup instructions.',
    };
  }

  const url = new URL(`${GNEWS_BASE}/search`);
  url.searchParams.set('q',       query);
  url.searchParams.set('lang',    'en');
  url.searchParams.set('max',     String(max));
  url.searchParams.set('apikey',  apiKey);
  url.searchParams.set('sortby',  'publishedAt');

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (res.status === 403) {
      return {
        status:    'error',
        articles:  [],
        fetchedAt: null,
        message:   'Invalid or expired API key. Check GNEWS_API_KEY in .env.local.',
      };
    }

    if (res.status === 429) {
      return {
        status:    'error',
        articles:  [],
        fetchedAt: null,
        message:   'GNews daily request limit reached. Resets at midnight UTC.',
      };
    }

    if (!res.ok) {
      return {
        status:    'error',
        articles:  [],
        fetchedAt: null,
        message:   `GNews API error: HTTP ${res.status}`,
      };
    }

    const data = await res.json();
    const rawArticles = Array.isArray(data?.articles) ? data.articles : [];

    const articles = rawArticles
      .map(normalizeArticle)
      .filter(Boolean);

    // Deduplicate by URL
    const seen = new Set();
    const unique = articles.filter((a) => {
      if (seen.has(a.url)) return false;
      seen.add(a.url);
      return true;
    });

    return {
      status:    'live',
      articles:  unique,
      fetchedAt: new Date().toISOString(),
      message:   null,
    };
  } catch {
    return {
      status:    'error',
      articles:  [],
      fetchedAt: null,
      message:   'Failed to reach the news provider. Please try again later.',
    };
  }
}

/**
 * Fetches gold and precious-metals news.
 * Targeted at gold prices, bullion, jewellery, and UAE gold market.
 *
 * @param {{ max?: number }} options
 * @returns {Promise<NewsResult>}
 */
export async function fetchGoldNews({ max = 10 } = {}) {
  return fetchNews({
    query: 'gold price OR gold market OR bullion OR precious metals OR gold Dubai UAE',
    max,
  });
}

/**
 * Fetches UAE and global economic news.
 * Targeted at UAE economy, Dubai business, inflation, monetary policy.
 *
 * @param {{ max?: number }} options
 * @returns {Promise<NewsResult>}
 */
export async function fetchEconomicNews({ max = 10 } = {}) {
  return fetchNews({
    query: 'UAE economy OR Dubai business OR UAE central bank OR inflation AED OR global economy trade',
    max,
  });
}
