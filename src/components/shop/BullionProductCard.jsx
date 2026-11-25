'use client';

import {
  calculateDynamicPrice,
  formatCurrencyAED,
  getProductWhatsAppUrl,
} from '@/data/bullionProducts';

/**
 * High-Converting Tora Bullion Card Architecture for SNMZ Gold & Diamonds.
 *
 * Implements:
 * - Dynamic live price calculation based on passed live gold/silver spot rates (0 extra API hits)
 * - Clean visual hierarchy with zero clutter and no redundant "24K" labels
 * - Aspect-[4/5] padded container fixing certipack bottom cutoff on all screens
 * - Single-line "Enquire Now" WhatsApp CTA with pre-filled enquiry text
 * - Dark luxury surface (#161C26) with crisp 1px border (#252F3F) and soft gold hover glow
 *
 * @param {{
 *   product: import('@/data/bullionProducts').STANDARD_INVENTORY[0],
 *   liveGoldRate24k?: number,
 *   liveSilverRate?: number,
 *   className?: string
 * }} props
 */
export function BullionProductCard({
  product,
  liveGoldRate24k = 480.09,
  liveSilverRate = 6.13,
  theme = 'dark',
  className = '',
}) {
  // Client-side dynamic pricing calculation without extra API requests
  const dynamicPrice = calculateDynamicPrice(product, liveGoldRate24k, liveSilverRate);
  const formattedPrice = formatCurrencyAED(dynamicPrice);
  const waUrl = getProductWhatsAppUrl(product.title, product.weight);

  const isSilver = product.metal === 'silver';
  const isTT = product.category === 'tt-bars';
  const isBeige = theme === 'beige';

  return (
    <article
      className={`group relative rounded-2xl transition-all duration-300 flex flex-col p-3 sm:p-4 overflow-hidden ${
        isBeige
          ? 'bg-[#EFE8DC] border border-[#E2D7C5] hover:border-[#D4AF37] shadow-sm hover:shadow-[0_12px_36px_rgba(212,175,55,0.18)]'
          : 'bg-[#161C26] border border-[#252F3F] hover:border-amber-400/50 hover:shadow-[0_10px_35px_rgba(212,175,55,0.12)]'
      } ${className}`}
    >
      {/* ── 1. TOP BAR: Minimal Brand Badge & Live Availability Dot ─────────── */}
      <div className="flex items-center justify-between mb-2.5 z-10">
        <span
          className={`text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${
            isBeige
              ? 'text-[#997300] bg-[#F4EFE6] border-[#E2D7C5]'
              : 'text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/25'
          }`}
        >
          {product.brand}
        </span>

        {/* Live Availability Status Indicator */}
        <div className="flex items-center gap-1.5" title="Available for physical handover in Dubai">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span
            className={`text-[10px] font-mono font-medium hidden sm:inline ${
              isBeige ? 'text-emerald-700' : 'text-emerald-400'
            }`}
          >
            In Stock
          </span>
        </div>
      </div>

      {/* ── 2. DEDICATED IMAGE WRAPPER (Fixes Bottom Cutoff on Mobile & Desktop) ── */}
      <div
        className={`relative aspect-[4/5] sm:h-56 w-full flex items-center justify-center p-3 sm:p-4 rounded-xl overflow-hidden mb-3.5 border shadow-inner ${
          isBeige
            ? 'bg-[#F4EFE6] border-[#E2D7C5]'
            : 'bg-[#111622]/60 border-[#252F3F]/60'
        }`}
      >
        {/* Subtle warm backlight glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.1),transparent_70%)] pointer-events-none" />

        {/* High-fidelity Assay Blister Card with brightness/contrast/glow filter */}
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          style={{
            filter: 'brightness(1.12) contrast(1.08) drop-shadow(0 12px 24px rgba(212, 175, 55, 0.28))',
          }}
        >
          <CertipackAssaySVG product={product} isSilver={isSilver} isTT={isTT} />
        </div>
      </div>

      {/* ── 3. PRODUCT TITLE (Bold & Clean) ─────────────────────────────────── */}
      <h3
        className={`font-heading font-bold text-sm sm:text-base transition-colors leading-snug line-clamp-1 mb-1 ${
          isBeige
            ? 'text-[#1A1E24] group-hover:text-[#997300]'
            : 'text-white group-hover:text-[#D4AF37]'
        }`}
      >
        {product.title}
      </h3>

      {/* ── 4. WEIGHT & FINENESS (Clean Minimal Subtitle Pill) ───────────────── */}
      <div
        className={`font-mono text-[11px] sm:text-xs tracking-wide mb-3 flex items-center gap-1.5 ${
          isBeige ? 'text-[#615849]' : 'text-white/65'
        }`}
      >
        <span className={`font-medium ${isBeige ? 'text-[#1A1E24]' : 'text-white/80'}`}>
          {product.spec}
        </span>
        <span className="opacity-30">•</span>
        <span
          className={`text-[10px] uppercase font-semibold ${
            isBeige ? 'text-[#997300]' : 'text-[#D4AF37]'
          }`}
        >
          {isSilver ? 'Fine Silver' : 'Fine Gold'}
        </span>
      </div>

      {/* ── 5. LIVE PRICE (Gold Pricing Badges) ─────────────────────────────── */}
      <div className="mt-auto mb-3.5">
        <div
          className={`font-display font-bold text-base sm:text-lg tracking-tight ${
            isBeige ? 'text-[#997300]' : 'text-[#D4AF37]'
          }`}
        >
          {formattedPrice}
        </div>
        <span className={`text-[10px] font-mono ${isBeige ? 'text-[#718096]' : 'text-white/40'}`}>
          Live Spot Linked
        </span>
      </div>

      {/* ── 6. SINGLE-LINE "ENQUIRE NOW" WHATSAPP CTA ───────────────────────── */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg bg-[#D4AF37] hover:bg-[#C5A059] text-[#1A1E24] transition-all duration-200 active:scale-[0.98] shadow-md flex items-center justify-center gap-1.5 whitespace-nowrap overflow-hidden"
        aria-label={`Enquire now for ${product.title} ${product.weight} on WhatsApp`}
      >
        <WhatsAppSmallIcon className="w-4 h-4 shrink-0 fill-current" />
        <span className="truncate">Enquire Now</span>
      </a>
    </article>
  );
}

/**
 * Self-contained Certipack Assay Card SVG.
 * Strictly formatted with `max-h-full max-w-full object-contain` so 100% of the blister card
 * (header, ingot, purity, barcode, and serial number) fits with zero bottom cutoff.
 */
function CertipackAssaySVG({ product, isSilver, isTT }) {
  const primaryGold = '#D4AF37';
  const lightGold = '#FFF5C0';
  const darkGold = '#8C6D1F';
  const accentColor = isSilver ? '#E2E8F0' : primaryGold;

  return (
    <svg
      viewBox="0 0 200 300"
      className="max-h-full max-w-full object-contain drop-shadow-xl select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Card Background Gradient */}
        <linearGradient id={`cardBg-${product.id}`} x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E1922" />
          <stop offset="50%" stopColor="#131017" />
          <stop offset="100%" stopColor="#0B090F" />
        </linearGradient>

        {/* Gold Border Gradient */}
        <linearGradient id={`cardBorder-${product.id}`} x1="0" y1="0" x2="200" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E5C158" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8C6D1F" stopOpacity="0.7" />
        </linearGradient>

        {/* Ingot Metallic Gradient */}
        <linearGradient id={`ingotGrad-${product.id}`} x1="0" y1="0" x2="100" y2="150" gradientUnits="userSpaceOnUse">
          {isSilver ? (
            <>
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#E2E8F0" />
              <stop offset="70%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#FFF7CC" />
              <stop offset="25%" stopColor="#ECC84A" />
              <stop offset="55%" stopColor="#D4AF37" />
              <stop offset="80%" stopColor="#9E7618" />
              <stop offset="100%" stopColor="#ECC84A" />
            </>
          )}
        </linearGradient>

        {/* Blister Drop Shadow */}
        <filter id={`blisterShadow-${product.id}`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.8" />
        </filter>
      </defs>

      {/* ── CARD BASE: Dark Carbon/Burgundy Assay Card ── */}
      <rect
        x="6"
        y="6"
        width="188"
        height="288"
        rx="16"
        fill={`url(#cardBg-${product.id})`}
        stroke={`url(#cardBorder-${product.id})`}
        strokeWidth="1.5"
      />

      {/* Inner fine hairline border */}
      <rect
        x="12"
        y="12"
        width="176"
        height="276"
        rx="12"
        stroke={accentColor}
        strokeOpacity="0.15"
        strokeWidth="1"
      />

      {/* Security guilloche background lattice */}
      <g stroke={accentColor} strokeOpacity="0.04" strokeWidth="0.5">
        <line x1="20" y1="20" x2="180" y2="280" />
        <line x1="180" y1="20" x2="20" y2="280" />
        <circle cx="100" cy="140" r="45" />
        <circle cx="100" cy="140" r="60" />
      </g>

      {/* ── CARD HEADER: SNMZ Emblem & Typography ── */}
      <g transform="translate(100, 28)">
        {/* Diamond Icon */}
        <path
          d="M 0 -12 L 8 -5 L 0 3 L -8 -5 Z"
          fill={accentColor}
          stroke={lightGold}
          strokeWidth="0.5"
        />
        <text
          y="15"
          fill={accentColor}
          fontSize="9"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="2.5"
        >
          SNMZ
        </text>
        <text
          y="23"
          fill={accentColor}
          fillOpacity="0.65"
          fontSize="5.5"
          fontFamily="monospace"
          textAnchor="middle"
          letterSpacing="2"
        >
          BULLION
        </text>
      </g>

      {/* ── SPINE TEXT (Left Edge) ── */}
      <text
        transform="translate(18, 185) rotate(-90)"
        fill={accentColor}
        fillOpacity="0.4"
        fontSize="5.5"
        fontFamily="monospace"
        letterSpacing="2.5"
      >
        TRUST • PURITY • LEGACY
      </text>

      {/* ── 3D ACRYLIC BLISTER BUBBLE ── */}
      <rect
        x="45"
        y="65"
        width="110"
        height="150"
        rx="10"
        fill="white"
        fillOpacity="0.05"
        stroke="white"
        strokeOpacity="0.25"
        strokeWidth="1"
        filter={`url(#blisterShadow-${product.id})`}
      />

      {/* Acrylic blister gloss reflection */}
      <rect
        x="48"
        y="68"
        width="104"
        height="4"
        rx="2"
        fill="white"
        fillOpacity="0.25"
      />

      {/* ── METALLIC BULLION BAR INSIDE BLISTER ── */}
      <g transform="translate(58, 77)">
        {/* Ingot base */}
        <rect
          x="0"
          y="0"
          width="84"
          height="126"
          rx="5"
          fill={`url(#ingotGrad-${product.id})`}
          stroke="#000000"
          strokeOpacity="0.5"
          strokeWidth="1"
        />

        {/* Beveled edge border */}
        <rect
          x="2"
          y="2"
          width="80"
          height="122"
          rx="4"
          stroke="white"
          strokeOpacity="0.45"
          strokeWidth="0.8"
          fill="none"
        />

        {/* TT Bar Special Edge */}
        {isTT && (
          <rect
            x="4"
            y="4"
            width="76"
            height="118"
            rx="3"
            stroke="#8C6D1F"
            strokeWidth="1"
            fill="none"
          />
        )}

        {/* Stamped Emblem on Ingot */}
        <path
          d="M 42 16 L 49 22 L 42 28 L 35 22 Z"
          fill="black"
          fillOpacity="0.75"
        />
        <text
          x="42"
          y="38"
          fill="black"
          fillOpacity="0.85"
          fontSize="7"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="1.5"
        >
          SNMZ
        </text>

        {/* Stamped Weight */}
        <text
          x="42"
          y="70"
          fill="black"
          fillOpacity="0.9"
          fontSize="9.5"
          fontWeight="bold"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {product.weight}
        </text>

        {/* Stamped Fineness Hallmark */}
        <text
          x="42"
          y="83"
          fill="black"
          fillOpacity="0.75"
          fontSize="7"
          fontWeight="bold"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {product.purity}
        </text>

        {/* Ingot Assay Label */}
        <line x1="22" y1="94" x2="62" y2="94" stroke="black" strokeOpacity="0.3" strokeWidth="0.8" />
        <text
          x="42"
          y="105"
          fill="black"
          fillOpacity="0.75"
          fontSize="5.5"
          fontWeight="bold"
          fontFamily="monospace"
          textAnchor="middle"
          letterSpacing="1"
        >
          {isSilver ? 'FINE SILVER' : 'FINE GOLD'}
        </text>
      </g>

      {/* ── CARD FOOTER: Certipack Assay Serial Window ── */}
      <g transform="translate(100, 245)">
        <line x1="-70" y1="0" x2="70" y2="0" stroke={accentColor} strokeOpacity="0.2" strokeWidth="0.8" />

        <text
          y="12"
          fill={accentColor}
          fontSize="7.5"
          fontFamily="monospace"
          fontWeight="bold"
          textAnchor="middle"
          letterSpacing="1.5"
        >
          {product.spec}
        </text>

        {/* Simulated Micro-Barcode */}
        <g transform="translate(-40, 18)" stroke={accentColor} strokeOpacity="0.5" strokeWidth="1">
          <line x1="0" y1="0" x2="0" y2="8" strokeWidth="1.5" />
          <line x1="4" y1="0" x2="4" y2="8" />
          <line x1="8" y1="0" x2="8" y2="8" strokeWidth="2" />
          <line x1="13" y1="0" x2="13" y2="8" />
          <line x1="17" y1="0" x2="17" y2="8" strokeWidth="1.5" />
          <line x1="22" y1="0" x2="22" y2="8" />
          <line x1="26" y1="0" x2="26" y2="8" strokeWidth="2" />
          <line x1="31" y1="0" x2="31" y2="8" />
          <line x1="35" y1="0" x2="35" y2="8" strokeWidth="1.5" />
          <line x1="40" y1="0" x2="40" y2="8" />
          <line x1="44" y1="0" x2="44" y2="8" strokeWidth="2" />
          <line x1="49" y1="0" x2="49" y2="8" />
          <line x1="53" y1="0" x2="53" y2="8" strokeWidth="1.5" />
          <line x1="58" y1="0" x2="58" y2="8" />
          <line x1="62" y1="0" x2="62" y2="8" strokeWidth="2" />
          <line x1="66" y1="0" x2="66" y2="8" />
          <line x1="70" y1="0" x2="70" y2="8" strokeWidth="1.5" />
          <line x1="75" y1="0" x2="75" y2="8" />
          <line x1="80" y1="0" x2="80" y2="8" strokeWidth="2" />
        </g>

        {/* Serial Number Text */}
        <text
          y="35"
          fill="white"
          fillOpacity="0.45"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
          letterSpacing="1.5"
        >
          SNMZ-{product.weight.replace(/[^a-zA-Z0-9]/g, '')}-{(product.weightGrams * 7 + 101).toFixed(0)}
        </text>
      </g>
    </svg>
  );
}

function WhatsAppSmallIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
