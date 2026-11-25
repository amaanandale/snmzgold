'use client';

/**
 * High-Security Certipack Assay Blister Card Component.
 *
 * Replicates the exact luxury blister card architecture of Tora Bullion
 * featuring:
 * - Tamper-evident dark carbon/burgundy assay card with gold foil trim
 * - Official SNMZ diamond monogram & "SNMZ BULLION" foil hallmark
 * - Left spine security ribbon: "TRUST • PURITY • LEGACY"
 * - 3D raised crystal acrylic blister with realistic specular highlights
 * - Stamped 24K gold / 999 silver bar or reeded legal tender coin
 * - Serial number window & assay authentication stamp
 *
 * @param {{ product: import('@/data/bullionProducts').BULLION_PRODUCTS[0], className?: string }} props
 */
export function CertipackBlister({ product, className = '' }) {
  const isSilver = product.metal === 'silver';
  const isCoin = product.form === 'coin';
  const isTT = product.category === 'tt-bars';

  // Metallic palette variables based on metal
  const goldPrimary = '#D4AF37';
  const goldLight = '#F3E5AB';
  const goldDark = '#8C6D1F';
  const silverPrimary = '#E2E8F0';
  const silverLight = '#FFFFFF';
  const silverDark = '#94A3B8';

  const primaryAccent = isSilver ? silverPrimary : goldPrimary;

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      {/* 3D Blister Card Container */}
      <div className="relative w-[82%] sm:w-[80%] aspect-[1/1.42] rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#1E161C] via-[#141217] to-[#0D0B10] border border-[#D4AF37]/35 shadow-[0_12px_36px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(212,175,55,0.25)] flex flex-col justify-between overflow-hidden">
        {/* Subtle guilloche luxury security pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${primaryAccent} 1px, transparent 1px), radial-gradient(circle at 0% 0%, ${primaryAccent} 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Outer Fine Gold Foil Border Line */}
        <div className="absolute inset-1.5 rounded-xl border border-[#D4AF37]/20 pointer-events-none" />

        {/* ── CARD HEADER: SNMZ Logo & Branding ─────────────────────────── */}
        <div className="relative z-10 text-center pt-0.5">
          {/* Geometric Diamond Emblem */}
          <div className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 mb-0.5">
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
              <path
                d="M12 2L21 8.5L12 15L3 8.5L12 2Z"
                stroke={primaryAccent}
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="url(#goldLuster)"
              />
              <path
                d="M12 15L21 8.5V15.5L12 22L3 15.5V8.5L12 15Z"
                stroke={primaryAccent}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="goldLuster" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF3C4" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8C6D1F" stopOpacity="0.9" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="font-heading font-extrabold text-[9px] sm:text-[10px] tracking-[0.22em] text-[#D4AF37] uppercase">
            SNMZ
          </div>
          <div className="text-[6.5px] sm:text-[7.5px] tracking-[0.25em] text-[#D4AF37]/70 font-mono uppercase">
            BULLION
          </div>
        </div>

        {/* ── CARD BODY: Left Ribbon + Central Blister Cavity ───────────── */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-1">
          {/* Left Security Spine Ribbon */}
          <div className="absolute left-0.5 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[5.5px] sm:text-[6.5px] font-mono tracking-[0.28em] text-[#D4AF37]/50 whitespace-nowrap uppercase">
            TRUST • PURITY • LEGACY
          </div>

          {/* 3D Acrylic Blister Bubble */}
          <div
            className={`relative flex items-center justify-center p-2.5 sm:p-3 rounded-xl border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4)] ${
              isCoin ? 'w-20 h-20 sm:w-24 sm:h-24 rounded-full' : 'w-24 sm:w-28 aspect-[1/1.5]'
            }`}
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0.35) 100%)',
            }}
          >
            {/* Blister specular top-left highlight */}
            <div className="absolute top-1 left-1.5 right-1.5 h-1.5 bg-gradient-to-r from-white/40 via-white/10 to-transparent rounded-full pointer-events-none" />

            {/* ── THE METALLIC BULLION BAR / COIN ────────────────────── */}
            {isCoin ? (
              // Circular Minted Coin
              <div
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-black/40 shadow-2xl flex flex-col items-center justify-center p-1.5 overflow-hidden"
                style={{
                  background: isSilver
                    ? 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #E2E8F0 30%, #CBD5E1 65%, #64748B 100%)'
                    : 'radial-gradient(circle at 35% 30%, #FFF3B0 0%, #F5D061 25%, #D4AF37 55%, #8C6D1F 100%)',
                }}
              >
                {/* Reeded coin rim */}
                <div className="absolute inset-0.5 rounded-full border border-black/20" />
                <div className="absolute inset-1 rounded-full border border-white/30" />
                <div className="text-[7px] sm:text-[8px] font-heading font-black tracking-wider text-black/80 uppercase">
                  SNMZ
                </div>
                <div className="text-[6px] sm:text-[7px] font-mono font-bold text-black/70 my-0.5">
                  {product.weight}
                </div>
                <div className="text-[5.5px] font-mono tracking-widest text-black/60">
                  {product.purity}
                </div>
              </div>
            ) : (
              // Rectangular Minted / Cast Bar
              <div
                className={`relative w-full h-full rounded-md sm:rounded-lg border border-black/50 shadow-2xl flex flex-col items-center justify-between py-2 px-1.5 overflow-hidden ${
                  isTT ? 'border-2 border-[#B8860B]' : ''
                }`}
                style={{
                  background: isSilver
                    ? 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 25%, #CBD5E1 50%, #94A3B8 75%, #F8FAFC 100%)'
                    : 'linear-gradient(135deg, #FFF6C8 0%, #ECC84A 20%, #D4AF37 50%, #A67C1E 75%, #ECC84A 100%)',
                }}
              >
                {/* Metallic bevel edge sheen */}
                <div className="absolute inset-0.5 rounded border border-white/40 pointer-events-none" />

                {/* Stamped Logo on Bar */}
                <div className="flex flex-col items-center">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black/75" fill="currentColor">
                    <path d="M12 2L2 9L12 16L22 9L12 2Z" />
                    <path d="M2 12L12 19L22 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                  <span className="text-[7.5px] sm:text-[8.5px] font-heading font-black tracking-widest text-black/85 mt-0.5">
                    SNMZ
                  </span>
                </div>

                {/* Center Weight & Karat Stamp */}
                <div className="text-center py-0.5">
                  <div className="text-[8px] sm:text-[9.5px] font-mono font-black text-black/90 leading-tight">
                    {product.weight}
                  </div>
                  <div className="text-[6.5px] sm:text-[7.5px] font-mono font-bold text-black/70">
                    {isSilver ? 'FINE SILVER' : '24K'}
                  </div>
                </div>

                {/* Bottom Purity Hallmark */}
                <div className="text-[6px] sm:text-[7px] font-mono font-bold tracking-wider text-black/80 border-t border-black/20 pt-0.5 w-full text-center">
                  {product.purity}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── CARD FOOTER: Serial Code & Weight Specs ───────────────────── */}
        <div className="relative z-10 pt-1 border-t border-[#D4AF37]/20 flex items-center justify-between text-[6px] sm:text-[7.5px] font-mono text-[#D4AF37]/80">
          <div className="tracking-widest uppercase">
            {product.weight} | {product.purity}
          </div>
          <div className="text-white/45 tracking-wider font-mono">
            {product.serialPrefix}-{(product.numericPrice % 900 + 100).toFixed(0)}
          </div>
        </div>
      </div>
    </div>
  );
}
