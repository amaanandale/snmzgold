import Link from 'next/link';

/**
 * Homepage — "Why Dubai?" preview section.
 * Links to the full /why-dubai page.
 * Server Component.
 */
export function WhyDubaiPreview() {
  const highlights = [
    {
      icon: '📍',
      title: 'Strategic Location',
      body: 'Dubai sits at the crossroads of Africa, Asia, and Europe — connecting gold-producing regions with the world\'s largest consumer markets.',
    },
    {
      icon: '🏛️',
      title: 'DMCC Free Zone',
      body: 'The Dubai Multi Commodities Centre provides regulated infrastructure for precious metals trading, recognised internationally.',
    },
    {
      icon: '💰',
      title: 'Open Trade Policy',
      body: 'Low gold import tariffs and a stable AED/USD peg have made Dubai a natural hub for physical gold trading since the mid-20th century.',
    },
    {
      icon: '⚖️',
      title: 'Transparent Pricing',
      body: 'Dubai gold prices are publicly posted, derived from international spot rates — creating a transparent marketplace for buyers and sellers.',
    },
  ];

  return (
    <section
      id="why-dubai"
      className="section-padding bg-emerald-dark"
      aria-labelledby="why-dubai-preview-heading"
    >
      <div className="section-container">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.25em] font-body font-semibold block mb-2">
              The Gold Capital
            </span>
            <h2
              id="why-dubai-preview-heading"
              className="font-display text-3xl sm:text-4xl text-white"
            >
              Why Dubai Leads
            </h2>
            <div className="w-12 h-0.5 bg-gold/40 mt-3" />
          </div>
          <Link
            href="/why-dubai"
            className="self-start lg:self-auto flex items-center gap-2 text-gold/70 hover:text-gold text-sm font-body transition-colors"
          >
            Full story → Why Dubai?
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:border-gold/25 transition-colors group"
            >
              <span className="text-3xl mb-4 block" aria-hidden="true">{item.icon}</span>
              <h3 className="text-white font-display font-semibold text-base mb-2 group-hover:text-gold-light transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/why-dubai"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold rounded-xl text-sm font-body hover:bg-gold/8 transition-colors"
          >
            Discover the Full Dubai Gold Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
