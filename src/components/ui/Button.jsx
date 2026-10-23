import { cn } from '@/lib/utils';

/**
 * Primary reusable button component.
 * @param {'primary'|'outline'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}) {
  const base = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }[variant];

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: '',
    lg: 'px-10 py-4 text-lg',
  }[size];

  const classes = cn(base, sizes, className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
