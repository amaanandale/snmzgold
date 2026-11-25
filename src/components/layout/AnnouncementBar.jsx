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
      className={`hidden lg:block w-full bg-[#111622] backdrop-blur-md border-b border-[#252F3F] py-2 transition-all duration-300 ${className}`}
      role="region"
      aria-label="Site announcement"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3">
        {/* UAE flag — tasteful, single instance */}
        <UAEFlag height={14} className="flex-shrink-0 rounded-[2px] shadow-sm" />

        <p className="text-xs font-body text-white/75 tracking-wide text-center">
          <span className="text-[#D4AF37] font-semibold">SNMZ Gold &amp; Diamonds</span>
          <span className="text-white/20 mx-2" aria-hidden="true">|</span>
          <span>Premium 24K gold and investment bullion for the UAE market.</span>
        </p>
      </div>
    </aside>
  );
}

