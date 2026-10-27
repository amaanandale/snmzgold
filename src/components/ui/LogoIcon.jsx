import Image from 'next/image';

/**
 * SNMZ Brand Logo component.
 *
 * Renders the official logo from: public/images/brand/snmz-logo.png
 *
 * The logo is square (~1:1), with a solid emerald-green background (#063926),
 * a gold diamond lettermark (S N M Z) and white wordmark below.
 * It blends seamlessly on emerald-dark header and footer backgrounds.
 *
 * SIZE GUIDE:
 *   sm → 44 × 44 px  (compact / mobile)
 *   md → 56 × 56 px  (default header)
 *   lg → 72 × 72 px  (footer / hero contexts)
 *
 * @param {{ className?: string, size?: 'sm'|'md'|'lg' }} props
 */
export function LogoIcon({ className = '', size = 'md' }) {
  const sizeClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12 md:h-14 lg:h-16 xl:h-[68px]',
    lg: 'h-16 sm:h-20 lg:h-24',
  };

  const selectedSize = sizeClasses[size] || size;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/images/brand/snmz-logo.png"
        alt="SNMZ Gold &amp; Diamonds"
        width={200}
        height={200}
        priority
        className={`w-auto ${selectedSize} object-contain transition-all duration-300 drop-shadow-[0_2px_10px_rgba(223,175,36,0.15)]`}
      />
    </div>
  );
}

/**
 * Footer / hero size logo variant.
 * @param {{ className?: string, size?: number }} props
 */
export function LogoWide({ className = '', size = 88 }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/images/brand/snmz-logo.png"
        alt="SNMZ Gold &amp; Diamonds"
        width={size * 2}
        height={size * 2}
        className="w-auto h-20 lg:h-24 object-contain"
      />
    </div>
  );
}
