/**
 * UAE flag — inline SVG representation.
 *
 * Official UAE flag specification:
 *   - Red vertical stripe on the left (1/4 width)
 *   - Three equal horizontal stripes: Green, White, Black (right 3/4)
 *   - Proportions: 1:2 (height:width)
 *
 * Source: UAE Government Portal (u.ae)
 *
 * @param {{ className?: string, height?: number }} props
 */
export function UAEFlag({ className = '', height = 24 }) {
  const width = height * 2;
  const redWidth = width / 4;
  const stripeWidth = (width * 3) / 4;
  const stripeHeight = height / 3;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="UAE flag — United Arab Emirates"
      className={className}
    >
      {/* Red vertical stripe */}
      <rect x="0" y="0" width={redWidth} height={height} fill="#EF3340" />

      {/* Green horizontal stripe (top) */}
      <rect x={redWidth} y="0" width={stripeWidth} height={stripeHeight} fill="#009A44" />

      {/* White horizontal stripe (middle) */}
      <rect x={redWidth} y={stripeHeight} width={stripeWidth} height={stripeHeight} fill="#FFFFFF" />

      {/* Black horizontal stripe (bottom) */}
      <rect x={redWidth} y={stripeHeight * 2} width={stripeWidth} height={stripeHeight} fill="#000000" />
    </svg>
  );
}
