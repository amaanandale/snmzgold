/**
 * 4-Column Minimal Luxury Trust Badge Row.
 *
 * Implements:
 * - Minimal gold iconography (#D4AF37)
 * - 4 badges: DET Licensed, 999.9 Purity, Souq Settlement, Buyback Desk
 * - 4 columns on desktop (lg:grid-cols-4), 2 columns on mobile (grid-cols-2)
 * - Dark charcoal surfaces (#161C26) with crisp 1px borders (#252F3F)
 */
export function TrustBadgesRow({ className = '' }) {
  const badges = [
    {
      title: 'DET Licensed #1531797',
      subtitle: 'Dubai Economic Authority',
      icon: <ShieldCheckIcon />,
    },
    {
      title: '999.9 Guaranteed Purity',
      subtitle: 'Assay Certified Hallmark',
      icon: <DiamondSparkleIcon />,
    },
    {
      title: 'Souq Settlement Desk',
      subtitle: 'Al Dhagaya, Deira Handover',
      icon: <BuildingVaultIcon />,
    },
    {
      title: 'Liquid Buyback Desk',
      subtitle: 'Spot Linked Settlement',
      icon: <ExchangeArrowsIcon />,
    },
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {badges.map((b) => (
          <div
            key={b.title}
            className="bg-[#161C26] border border-[#252F3F] hover:border-[#D4AF37]/50 rounded-xl p-3.5 sm:p-5 flex items-center gap-3 sm:gap-4 transition-all duration-300 group shadow-sm hover:shadow-[0_4px_20px_rgba(212,175,55,0.08)]"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#D4AF37] group-hover:text-[#0B0F17] transition-all duration-300">
              {b.icon}
            </div>
            <div className="min-w-0">
              <div className="font-heading font-bold text-xs sm:text-sm text-white leading-tight truncate group-hover:text-[#D4AF37] transition-colors">
                {b.title}
              </div>
              <div className="text-[10px] sm:text-[11px] text-white/50 font-mono mt-0.5 truncate">
                {b.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function DiamondSparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M11 3 8 9l4 12 4-12-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}

function BuildingVaultIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 8h10" />
      <path d="M7 12h10" />
      <path d="M7 16h10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function ExchangeArrowsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m16 3 4 4-4 4" />
      <path d="M20 7H4" />
      <path d="m8 21-4-4 4-4" />
      <path d="M4 17h16" />
    </svg>
  );
}
