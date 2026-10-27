import { UAEFlag } from '@/components/ui/UAEFlag';

/**
 * Premium announcement bar above navigation.
 * Features UAE flag and brand announcement.
 * Hidden on screens below laptop (< lg).
 * Server Component.
 *
 * @param {{ className?: string }} props
 */
export function AnnouncementBar({ className = '' }) {
  return (
    <aside
      className={`hidden lg:block w-full bg-emerald-dark/95 backdrop-blur-md border-b border-gold/15 py-2 px-4 transition-all duration-300 ${className}`}
      role="region"
      aria-label="Site announcement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        {/* UAE flag — tasteful, single instance */}
        <UAEFlag height={14} className="flex-shrink-0 rounded-[2px] shadow-sm" />

        <p className="text-xs font-body text-white/75 tracking-wide text-center">
          <span className="text-gold font-semibold">SNMZ Gold &amp; Diamonds</span>
          <span className="text-gold/40 mx-2" aria-hidden="true">|</span>
          <span>Premium gold and precious metals for the UAE market.</span>
        </p>
      </div>
    </aside>
  );
}

