'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Next/Image wrapper with automatic fallback to a styled placeholder
 * when the image is unavailable (e.g. during development).
 */
export function GoldImage({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  fallbackText = 'Image',
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-emerald to-emerald-light relative ${className}`}
        aria-label={alt}
        role="img"
        style={fill ? undefined : { width, height }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #DFAF24 0, #DFAF24 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px',
          }} />
        <div className="relative text-center px-4">
          <div className="text-gold/30 font-display text-3xl font-bold mb-1">SNMZ</div>
          <div className="text-white/20 text-xs font-body">{fallbackText}</div>
        </div>
      </div>
    );
  }

  const imgProps = {
    src,
    alt,
    className,
    priority,
    onError: () => setError(true),
    ...(fill ? { fill: true, sizes } : { width, height }),
  };

  return <Image {...imgProps} />;
}
