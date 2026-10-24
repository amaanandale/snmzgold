import { NextResponse } from 'next/server';
import { fetchLiveGoldRates } from '@/lib/goldRates';

/**
 * GET /api/gold-rates
 * Returns live gold rates in GoldRatesData shape.
 * Used by the client-side refresh button.
 *
 * Cache: 30 minutes (Next.js route segment config)
 */
export const revalidate = 1800;

export async function GET() {
  const data = await fetchLiveGoldRates();
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
    },
  });
}
