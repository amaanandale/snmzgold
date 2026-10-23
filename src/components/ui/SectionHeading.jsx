import { cn } from '@/lib/utils';

/**
 * Section heading group with label, title, gold rule and optional subtitle.
 */
export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={cn('flex flex-col gap-4', alignClass, className)}>
      {label && (
        <span className="section-label">{label}</span>
      )}
      <h2 className={cn(
        'section-title',
        light ? 'text-emerald' : 'text-white'
      )}>
        {title}
      </h2>
      <div className={cn('gold-rule', align === 'center' && 'mx-auto')} />
      {subtitle && (
        <p className={cn(
          'section-subtitle max-w-2xl',
          light ? 'text-emerald/70' : 'text-white/70',
          align === 'center' && 'mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
