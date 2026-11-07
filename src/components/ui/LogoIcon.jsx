import Image from 'next/image';

/**
 * SNMZ Brand Logo component.
 *
 * Renders the official logo from: /images/brand/snmz-logo.png
 *
 * The official logo is square (~1:1) with a metallic gold diamond emblem (S N M Z)
 * and white wordmark below on transparent background.
 *
 * SIZES:
 *   sm → h-9 sm:h-10     (compact / mobile contexts)
 *   md → h-11 sm:h-12 md:h-13 lg:h-14  (default header, clearly readable)
 *   lg → h-16 sm:h-20    (footer & prominent display)
 *
 * @param {{ className?: string, size?: 'sm'|'md'|'lg'|string, onLightBg?: boolean }} props
 */
export function LogoIcon({ className = '', size = 'md', onLightBg = false }) {
  const sizeClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12 md:h-13 lg:h-14',
    lg: 'h-16 sm:h-20',
  };

  const selectedSize = sizeClasses[size] || size;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${
        onLightBg ? 'bg-emerald-dark/95 px-3 py-1.5 rounded-xl border border-gold/25 shadow-md' : ''
      } ${className}`}
    >
      <Image
        src="/images/brand/snmz-logo.png"
        alt="SNMZ Gold & Diamonds"
        width={240}
        height={240}
        priority
        className={`w-auto ${selectedSize} object-contain transition-all duration-300 drop-shadow-[0_2px_12px_rgba(223,175,36,0.18)]`}
      />
    </div>
  );
}

/**
 * Footer / hero size logo variant.
 * @param {{ className?: string, size?: number }} props
 */
export function LogoWide({ className = '', size = 88 }) {
  return <LogoIcon size="lg" className={className} />;
}
