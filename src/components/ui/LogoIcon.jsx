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
  const dimensions = {
    sm: { width: 44, height: 44 },
    md: { width: 56, height: 56 },
    lg: { width: 72, height: 72 },
  };

  const { width, height } = dimensions[size] || dimensions.md;

  return (
    <Image
      src="/images/brand/snmz-logo.jpeg"
      alt="SNMZ Gold &amp; Diamonds"
      width={width}
      height={height}
      priority
      className={`object-contain ${className}`}
    />
  );
}

/**
 * Footer / hero size logo variant.
 * @param {{ className?: string, size?: number }} props
 */
export function LogoWide({ className = '', size = 88 }) {
  return (
    <Image
      src="/images/brand/snmz-logo.jpeg"
      alt="SNMZ Gold &amp; Diamonds"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
