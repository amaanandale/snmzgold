'use client';

import { useState } from 'react';
import { calculateSilverValue, formatAED } from '@/lib/silverRates';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function SilverCalculator({ rates = [] }) {
  const [selectedPurity, setSelectedPurity] = useState(rates[0]?.grade || '999');
  const [weight, setWeight] = useState('1000'); // default 1 kg

  const currentRateObj = rates.find((r) => r.grade === selectedPurity) || rates[0];
  const ratePerGram = currentRateObj?.perGram || null;

  const numWeight = parseFloat(weight);
  const calculation = calculateSilverValue(ratePerGram, numWeight);

  const waUrl = getWhatsAppUrl('silverRates');

  return (
    <section className="section-padding bg-emerald-light/20 border-t border-gold/15">
      <div className="section-container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-gold text-xs font-mono uppercase tracking-widest block mb-1">
            Estimation Tool
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Physical Silver Value Calculator
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-1">
            Calculate the indicative spot value of physical silver in UAE Dirhams (AED).
          </p>
        </div>

        <div className="bg-emerald-dark/90 border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Purity selector */}
            <div>
              <label htmlFor="silver-purity-select" className="block text-xs font-mono text-white/70 mb-2 uppercase">
                Silver Purity / Grade
              </label>
              <select
                id="silver-purity-select"
                value={selectedPurity}
                onChange={(e) => setSelectedPurity(e.target.value)}
                className="w-full bg-emerald-light/40 border border-gold/25 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold"
              >
                {rates.map((r) => (
                  <option key={r.grade} value={r.grade} className="bg-emerald-dark text-white">
                    {r.label} ({r.purity})
                  </option>
                ))}
              </select>
            </div>

            {/* Weight input */}
            <div>
              <label htmlFor="silver-weight-input" className="block text-xs font-mono text-white/70 mb-2 uppercase">
                Weight in Grams (g)
              </label>
              <div className="relative">
                <input
                  id="silver-weight-input"
                  type="number"
                  min="0.1"
                  step="any"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 1000"
                  className="w-full bg-emerald-light/40 border border-gold/25 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-gold"
                />
                <span className="absolute right-4 top-3.5 text-xs text-white/40 font-mono">
                  Grams
                </span>
              </div>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-[11px] text-white/50 font-mono uppercase mr-1">Presets:</span>
            {[
              { label: '1 Troy Oz (31.1g)', val: '31.1035' },
              { label: '100g Bar', val: '100' },
              { label: '500g Bar', val: '500' },
              { label: '1 kg Bar', val: '1000' },
            ].map((preset) => (
              <button
                key={preset.val}
                type="button"
                onClick={() => setWeight(preset.val)}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 text-xs font-mono border border-white/10 transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Calculated Output Box */}
          <div className="p-6 rounded-xl bg-emerald-light/30 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-mono text-gold tracking-wider block mb-1">
                Estimated Spot Value (AED)
              </span>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-white">
                {calculation.value != null ? formatAED(calculation.value) : '—'}
              </div>
              <span className="text-[11px] text-white/50 block mt-1">
                Spot rate:{' '}
                {ratePerGram != null ? `${formatAED(ratePerGram)} / gram` : 'Unavailable'}
              </span>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-emerald-dark font-body font-semibold text-xs uppercase tracking-wider text-center transition-all shadow-md"
            >
              Enquire Live Silver Rate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
