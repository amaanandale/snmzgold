import { NextResponse } from 'next/server';
import { fetchHistoricalSilverSeries } from '@/lib/silverRates';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get('range') || '1M';

  const validRanges = ['1W', '1M', '3M', '1Y'];
  const selectedRange = validRanges.includes(range) ? range : '1M';

  try {
    const historyData = await fetchHistoricalSilverSeries(selectedRange);
    return NextResponse.json(historyData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return NextResponse.json(
      {
        status: 'unavailable',
        range: selectedRange,
        points: [],
        message: 'Failed to retrieve genuine historical silver observations.',
      },
      { status: 500 }
    );
  }
}
