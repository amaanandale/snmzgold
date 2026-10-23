import { GoldImage } from '@/components/ui/GoldImage';
import { Button } from '@/components/ui/Button';
import { SiteConfig } from '@/config/site';
import { whatsappUrl } from '@/lib/utils';

export function HeroSection() {
  const waUrl = SiteConfig.whatsapp
    ? whatsappUrl(SiteConfig.whatsapp, 'Hello, I would like to enquire about 24K Gold TT Bars.')
    : '#contact';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #DFAF24 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/6 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #DFAF24 0%, transparent 70%)' }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(#DFAF24 1px, transparent 1px), linear-gradient(90deg, #DFAF24 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
      </div>

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Copy */}
          <div className="flex flex-col gap-7 motion-safe:animate-slide-up">
            <div className="flex items-center gap-3">
              <span className="badge">24K Pure Gold</span>
              <span className="badge">TT Bars</span>
            </div>

            <h1
              id="hero-heading"
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-white"
            >
              Trusted in{' '}
              <span className="shimmer-gold">Gold.</span>
              <br />
              Precise in{' '}
              <span className="text-gold">Purity.</span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl font-body leading-relaxed max-w-xl">
              SNMZ Gold & Diamonds is a premium gold trading company specialising in 24K TT bars—offering verified purity, transparent compliance and dependable delivery for institutional and corporate buyers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button href={waUrl} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                Start Trading
                <ArrowRightIcon />
              </Button>
              <Button href="#about" variant="outline" size="lg">
                Learn About SNMZ
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-4 pt-6 border-t border-gold/20">
              {[
                { label: 'Purity', value: '24K / 999.9' },
                { label: 'Product', value: 'TT Gold Bars' },
                { label: 'Standard', value: 'BIS Hallmarked*' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-gold font-display font-semibold text-xl leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-white/50 text-xs font-body uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
              <p className="w-full text-xs text-white/30 italic">
                * Certification details to be confirmed by SNMZ
              </p>
            </div>
          </div>

          {/* Right — Gold bar imagery */}
          <div className="relative flex items-center justify-center motion-safe:animate-float">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl opacity-30 blur-2xl bg-gold-gradient" />

              {/* Image frame */}
              <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-gold-lg bg-emerald-light/20">
                <GoldImage
                  src="/images/hero-gold-bars.jpg"
                  alt="Stack of premium 24K gold TT bars — SNMZ Gold & Diamonds"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority={true}
                  fallbackText="Hero — 24K Gold TT Bars"
                />
                {/* Gold overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-dark/80 to-transparent" />

                {/* Floating label */}
                <div className="absolute bottom-5 left-5 right-5 glass rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-gold text-xs uppercase tracking-widest font-body">Purity</p>
                    <p className="text-white font-display font-semibold text-lg leading-tight">999.9 Fine Gold</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
                    <GoldIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-dark to-transparent" />
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function GoldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#042a1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
