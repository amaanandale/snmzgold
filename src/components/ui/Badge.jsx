import { cn } from '@/lib/utils';

/**
 * Reusable badge/tag component for labels and category indicators.
 */
export function Badge({ children, className = '' }) {
  return (
    <span className={cn('badge', className)}>
      {children}
    </span>
  );
}
