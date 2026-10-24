'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Manual refresh button — fetches /api/gold-rates client-side,
 * then calls router.refresh() to re-render server components with fresh data.
 * Client Component.
 */
export function PricesRefreshButton() {
  const router = useRouter();
  const [state, setState] = useState('idle'); // 'idle' | 'loading' | 'done' | 'error'
  const [lastRefreshed, setLastRefreshed] = useState(null);

  const handleRefresh = useCallback(async () => {
    if (state === 'loading') return;
    setState('loading');

    try {
      // Ping the route handler to bust the CDN cache
      const res = await fetch('/api/gold-rates', { cache: 'no-store' });
      if (!res.ok) throw new Error('API error');

      // Re-render all server components on this page
      router.refresh();
      setLastRefreshed(new Date());
      setState('done');
    } catch {
      setState('error');
    } finally {
      // Reset button label after 3 seconds
      setTimeout(() => setState('idle'), 3000);
    }
  }, [router, state]);

  const label = {
    idle: 'Refresh Rates',
    loading: 'Refreshing…',
    done: 'Rates Updated',
    error: 'Refresh Failed — Try Again',
  }[state];

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleRefresh}
        disabled={state === 'loading'}
        aria-busy={state === 'loading'}
        aria-label="Refresh gold rates"
        className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border text-sm font-body font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-not-allowed ${
          state === 'done'
            ? 'border-green-400/40 text-green-400 bg-green-400/5'
            : state === 'error'
            ? 'border-red-400/40 text-red-400 bg-red-400/5'
            : 'border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50 bg-transparent disabled:opacity-60'
        }`}
      >
        {state === 'loading' ? (
          <SpinnerIcon />
        ) : state === 'done' ? (
          <CheckIcon />
        ) : (
          <RefreshIcon />
        )}
        {label}
      </button>
      {lastRefreshed && (
        <p className="text-white/25 text-xs font-body">
          Last refreshed:{' '}
          {lastRefreshed.toLocaleTimeString('en-AE', { hour: '2-digit', minute: '2-digit' })}
        </p>
      )}
    </div>
  );
}

function RefreshIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="animate-spin"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
