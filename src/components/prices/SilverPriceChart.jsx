'use client';

import { useState, useId } from 'react';
import { formatAED } from '@/lib/goldRates';

export function SilverPriceChart({ initialData, currentSpotGram }) {
  const gradientId = useId();
  const [range, setRange] = useState(initialData?.range || '1M');
  const [data, setData] = useState(initialData || { status: 'unavailable', points: [] });
  const [loading, setLoading] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const ranges = [
    { id: '1W', label: '1W (7 Days)' },
    { id: '1M', label: '1M (30 Days)' },
    { id: '3M', label: '3M (90 Days)' },
    { id: '1Y', label: '1Y (12 Months)' },
  ];

  const handleRangeChange = async (newRange) => {
    if (newRange === range || loading) return;
    setRange(newRange);
    setLoading(true);
    setHoverIndex(null);

    try {
      const res = await fetch(`/api/silver-history?range=${newRange}`);
      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        setData({ status: 'unavailable', points: [] });
      }
    } catch {
      setData({ status: 'unavailable', points: [] });
    } finally {
      setLoading(false);
    }
  };

  const points = data?.points || [];
  const hasData = data?.status === 'available' && points.length >= 2;

  // Compute metrics
  const prices = points.map((p) => p.perGram);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;
  const priceRange = maxPrice - minPrice || 1;
  const padding = priceRange * 0.1;
  const yMin = Math.max(0, minPrice - padding);
  const yMax = maxPrice + padding;
  const ySpan = yMax - yMin;

  const firstPrice = prices[0] || 0;
  const lastPrice = prices[prices.length - 1] || 0;
  const changeAED = lastPrice - firstPrice;
  const changePct = firstPrice > 0 ? (changeAED / firstPrice) * 100 : 0;
  const isPositive = changeAED >= 0;

  // SVG dimensions
  const width = 800;
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Coordinate mapping
  const getX = (index) => margin.left + (index / (points.length - 1)) * innerWidth;
  const getY = (val) => margin.top + innerHeight - ((val - yMin) / ySpan) * innerHeight;

  let pathD = '';
  let areaD = '';

  if (hasData) {
    const coords = points.map((p, idx) => ({ x: getX(idx), y: getY(p.perGram) }));
    pathD = coords.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`, '');
    areaD = `${pathD} L ${coords[coords.length - 1].x} ${margin.top + innerHeight} L ${coords[0].x} ${margin.top + innerHeight} Z`;
  }

  const activePoint = hoverIndex !== null ? points[hoverIndex] : points[points.length - 1];

  return (
    <section className="py-12 sm:py-16 bg-[#F8F5EE] border-t border-[#E5D8B8]" aria-labelledby="chart-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Range Filters */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#997300]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#997300] font-bold">
                Market Trends · AED per Gram
              </span>
            </div>
            <h2 id="chart-heading" className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1A202C]">
              Silver Price Trends
            </h2>
            <p className="text-[#4A5568] text-xs sm:text-sm mt-1 font-body">
              Historical spot benchmark observations in UAE Dirhams.
            </p>
          </div>

          {/* Timeframe Switcher */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl border border-[#E5D8B8] self-start md:self-auto shadow-xs">
            {ranges.map((r) => {
              const active = range === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => handleRangeChange(r.id)}
                  disabled={loading}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    active
                      ? 'bg-[#D4AF37] text-[#0B0F17] font-bold shadow-xs'
                      : 'text-[#4A5568] hover:text-[#1A202C] hover:bg-[#F8F5EE]'
                  }`}
                >
                  {r.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chart Container Card */}
        <div className="bg-white border border-[#E5D8B8] rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
          {/* Top summary stats */}
          {hasData ? (
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E5D8B8]">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#718096] block">
                  {hoverIndex !== null ? `Observed on ${activePoint.date}` : `Latest Observation (${data.lastUpdated})`}
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-[#1A202C]">
                    {formatAED(activePoint.perGram)} <span className="text-xs font-normal text-[#718096]">/ g</span>
                  </span>
                  <span className="text-xs font-mono text-[#997300]">
                    ({formatAED(activePoint.perOz)} / oz)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono">
                <div>
                  <span className="text-[#718096] block text-[10px] uppercase">Period Range</span>
                  <span className={`font-semibold ${isPositive ? 'text-emerald-700' : 'text-red-600'}`}>
                    {isPositive ? '+' : ''}{changeAED.toFixed(2)} AED ({isPositive ? '+' : ''}{changePct.toFixed(1)}%)
                  </span>
                </div>
                <div>
                  <span className="text-[#718096] block text-[10px] uppercase">Low</span>
                  <span className="text-[#1A202C] font-semibold">{minPrice.toFixed(2)} AED</span>
                </div>
                <div>
                  <span className="text-[#718096] block text-[10px] uppercase">High</span>
                  <span className="text-[#1A202C] font-semibold">{maxPrice.toFixed(2)} AED</span>
                </div>
              </div>
            </div>
          ) : null}

          {/* Chart Rendering */}
          {loading ? (
            <div className="h-64 sm:h-80 flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-[#E5D8B8] border-t-[#D4AF37] animate-spin" />
              <span className="text-xs font-mono text-[#718096]">
                Fetching historical observations for {range}…
              </span>
            </div>
          ) : hasData ? (
            <div className="relative">
              <svg
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-auto overflow-visible select-none"
                onMouseLeave={() => setHoverIndex(null)}
              >
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.20" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Grid lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((pct) => {
                  const val = yMin + pct * ySpan;
                  const y = getY(val);
                  return (
                    <g key={pct}>
                      <line
                        x1={margin.left}
                        y1={y}
                        x2={width - margin.right}
                        y2={y}
                        stroke="#E5D8B8"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={margin.left - 10}
                        y={y + 4}
                        fill="#718096"
                        fontSize="10"
                        fontFamily="monospace"
                        textAnchor="end"
                      >
                        {val.toFixed(2)}
                      </text>
                    </g>
                  );
                })}

                {/* Area Fill */}
                <path d={areaD} fill={`url(#${gradientId})`} />

                {/* Price Line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#997300"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points */}
                {points.map((p, i) => {
                  const x = getX(i);
                  const y = getY(p.perGram);
                  const isHovered = hoverIndex === i;

                  return (
                    <g key={p.date}>
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 6 : 3}
                        fill={isHovered ? '#D4AF37' : '#FFFFFF'}
                        stroke="#997300"
                        strokeWidth="2"
                        className="transition-all duration-150"
                      />
                      {/* Invisible hover target */}
                      <rect
                        x={x - innerWidth / points.length / 2}
                        y={margin.top}
                        width={innerWidth / points.length}
                        height={innerHeight}
                        fill="transparent"
                        className="cursor-pointer"
                        onMouseEnter={() => setHoverIndex(i)}
                      />
                    </g>
                  );
                })}

                {/* Active Hover Crosshair Line */}
                {hoverIndex !== null && (
                  <line
                    x1={getX(hoverIndex)}
                    y1={margin.top}
                    x2={getX(hoverIndex)}
                    y2={margin.top + innerHeight}
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                )}

                {/* X-Axis Dates */}
                {points.map((p, i) => {
                  if (i !== 0 && i !== Math.floor(points.length / 2) && i !== points.length - 1) {
                    return null;
                  }
                  const x = getX(i);
                  return (
                    <text
                      key={p.date}
                      x={x}
                      y={height - 10}
                      fill="#718096"
                      fontSize="10"
                      fontFamily="monospace"
                      textAnchor={i === 0 ? 'start' : i === points.length - 1 ? 'end' : 'middle'}
                    >
                      {p.date}
                    </text>
                  );
                })}
              </svg>
            </div>
          ) : (
            /* Unavailable State */
            <div className="py-12 px-4 text-center max-w-lg mx-auto">
              <h3 className="font-heading font-semibold text-[#1A202C] text-lg mb-2">
                Historical Series Temporarily Unavailable
              </h3>
              <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed mb-6 font-body">
                Historical benchmark observations for this period are being refreshed. Live spot rates continue to update normally.
              </p>
              {currentSpotGram && (
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#F8F5EE] border border-[#E5D8B8] font-mono text-xs text-[#1A202C]">
                  <span>Current Spot:</span>
                  <span className="font-bold text-[#997300]">{formatAED(currentSpotGram)} / g</span>
                </div>
              )}
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-6 pt-4 border-t border-[#E5D8B8] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#718096] font-mono">
            <span>Market Benchmark: Physical Silver (AED)</span>
            <span className="italic text-center sm:text-right">
              Historical performance is indicative and does not predict future prices.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
