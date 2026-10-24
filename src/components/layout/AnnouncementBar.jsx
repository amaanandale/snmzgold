import Link from 'next/link';
import { UAEFlag } from '@/components/ui/UAEFlag';

/**
 * Premium announcement bar above navigation.
 * Features UAE flag, brand announcement, and quick link.
 * Server Component.
 */
export function AnnouncementBar() {
  return (
    <div
      className="w-full bg-emerald-dark border-b border-gold/10 py-2 px-4"
      role="banner"
      aria-label="Site announcement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        {/* UAE flag — tasteful, single instance */}
        <UAEFlag height={14} className="flex-shrink-0 rounded-[2px] shadow-sm" />

        <p className="text-xs font-body text-white/55 tracking-wide text-center">
          <span className="text-gold/80 font-semibold">SNMZ Gold & Diamonds</span>
          {' — '}
          <span>Premium gold and precious metals for the UAE market.</span>
          {' '}
          <Link
            href="/#contact"
            className="text-gold/70 hover:text-gold underline underline-offset-2 transition-colors duration-200 ml-1 focus-visible:ring-1 focus-visible:ring-gold rounded-sm"
          >
            Enquire now →
          </Link>
        </p>
      </div>
    </div>
  );
}
