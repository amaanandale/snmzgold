'use client';

import { useState, useId } from 'react';
import { calculateGoldValue, formatAED } from '@/lib/goldRates';
import { getWhatsAppUrl } from '@/lib/whatsapp';

/**
 * Interactive gold value calculator.
 * Strict 2-Color Palette: Warm Beige / Ivory (#F4EFE6, #EFE8DC, #E2D7C5) and Metallic Champagne Gold (#D4AF37).
 * Zero Pure White.
 * Client Component — handles purity selection, weight input, live calculation.
 *
 * @param {{ rates: import('@/lib/goldRates').PurityRate[] }} props
 */
export function GoldCalculator({ rates }) {
  const formId = useId();
  const [selectedKarat, setSelectedKarat] = useState(rates[0]?.karat ?? '24K');
  const [weightInput, setWeightInput] = useState('');
  const [touched, setTouched] = useState(false);

  // Find the selected purity's rate
  const selectedRate = rates.find((r) => r.karat === selectedKarat) ?? null;
  const rateAvailable = selectedRate?.perGram != null;

  // Parse weight
  const weight = parseFloat(weightInput);
  const weightValid = isFinite(weight) && weight > 0;

  // Calculate
  const { value: calcValue, error: calcError } = calculateGoldValue(
    selectedRate?.perGram ?? null,
    weightValid ? weight : NaN
  );

  const showResult = rateAvailable && weightValid && calcValue != null;
  const showWeightError = touched && weightInput !== '' && !weightValid;

  const handleReset = () => {
    setWeightInput('');
    setTouched(false);
  };

  return (
    <section
      className="py-12 sm:py-16 bg-[#F4EFE6]"
      aria-labelledby="calc-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left — heading + explainer */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-[#997300] text-xs font-mono font-bold uppercase tracking-widest block mb-1">
                Value Estimator
              </span>
              <h2
                id="calc-heading"
                className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1A1E24] leading-tight"
              >
                Estimate Your Gold Value
              </h2>
              <div className="w-12 h-0.5 bg-[#D4AF37] mt-3" />
            </div>

            <p className="text-[#615849] font-body text-sm sm:text-base leading-relaxed">
              Select a gold purity benchmark and enter the total weight in grams to calculate an immediate indicative spot value in UAE Dirhams (AED).
            </p>

            {/* Disclaimer box */}
            <div className="bg-[#EFE8DC] border border-[#E2D7C5] rounded-2xl p-6 shadow-xs">
              <h3 className="text-[#997300] text-xs uppercase tracking-widest font-mono font-bold mb-3">
                Trading Desk Guidance
              </h3>
              <ul className="space-y-2.5 text-[#615849] text-xs sm:text-sm font-body leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#997300] font-bold" aria-hidden="true">·</span>
                  <span>This estimate is <strong className="text-[#1A1E24]">indicative only</strong> based on live benchmark spot feeds.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#997300] font-bold" aria-hidden="true">·</span>
                  <span>Physical bullion bars (999.9 fine) are exempt from 5% VAT under UAE Federal tax regulations.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#997300] font-bold" aria-hidden="true">·</span>
                  <span>Retail jewellery may incur fabrication making charges and statutory retail duties.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#997300] font-bold" aria-hidden="true">·</span>
                  <span>Direct settlement is executed at our trading desk in Al Dhagaya, Deira.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right — calculator form */}
          <div className="bg-[#EFE8DC] border border-[#E2D7C5] rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-[#1A1E24] font-heading font-bold text-lg mb-6">
              Live Calculation Tool
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              aria-label="Gold value calculator"
              noValidate
            >
              {/* Purity selector */}
              <fieldset className="mb-6">
                <legend className="text-[#718096] text-xs font-mono font-semibold uppercase tracking-widest mb-3">
                  Select Purity
                </legend>
                <div
                  className="grid grid-cols-3 gap-2"
                  role="radiogroup"
                  aria-label="Gold purity selection"
                >
                  {rates.map((rate) => {
                    const isSelected = selectedKarat === rate.karat;
                    const hasRate = rate.perGram != null;
                    return (
                      <button
                        key={rate.karat}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        aria-label={`${rate.karat} — ${rate.purityLabel}${!hasRate ? ' (rate unavailable)' : ''}`}
                        onClick={() => {
                          setSelectedKarat(rate.karat);
                          setTouched(false);
                        }}
                        className={`relative rounded-xl py-3 px-2 text-center transition-all duration-200 border focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                          isSelected
                            ? 'bg-[#D4AF37] border-[#D4AF37] text-[#1A1E24] shadow-xs font-bold'
                            : 'bg-[#F4EFE6] border-[#E2D7C5] text-[#1A1E24] hover:border-[#D4AF37]'
                        }`}
                      >
                        <span className="block font-heading font-bold text-base leading-tight">
                          {rate.karat}
                        </span>
                        <span className="block text-[10px] font-mono opacity-80 leading-tight mt-0.5">
                          {rate.purityLabel}
                        </span>
                        {!hasRate && (
                          <span
                            className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#8C8275]"
                            aria-hidden="true"
                            title="Rate unavailable"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Weight input */}
              <div className="mb-6">
                <label
                  htmlFor={`${formId}-weight`}
                  className="block text-[#718096] text-xs font-mono font-semibold uppercase tracking-widest mb-2"
                >
                  Weight (grams)
                </label>
                <div className="relative">
                  <input
                    id={`${formId}-weight`}
                    type="number"
                    min="0.01"
                    step="0.01"
                    inputMode="decimal"
                    placeholder="e.g. 10.00"
                    value={weightInput}
                    onChange={(e) => {
                      setWeightInput(e.target.value);
                      setTouched(true);
                    }}
                    onBlur={() => setTouched(true)}
                    aria-describedby={showWeightError ? `${formId}-weight-error` : `${formId}-weight-hint`}
                    aria-invalid={showWeightError}
                    className={`w-full bg-[#F4EFE6] border rounded-xl px-4 py-3.5 text-[#1A1E24] font-mono text-base placeholder-[#8C8275] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-colors duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                      showWeightError
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-[#E2D7C5] focus:border-[#D4AF37]'
                    }`}
                  />
                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#718096] text-sm font-mono font-semibold"
                    aria-hidden="true"
                  >
                    g
                  </span>
                </div>
                {showWeightError ? (
                  <p
                    id={`${formId}-weight-error`}
                    className="mt-2 text-red-600 text-xs font-mono"
                    role="alert"
                  >
                    Please enter a positive weight (e.g. 10 or 0.5).
                  </p>
                ) : (
                  <p
                    id={`${formId}-weight-hint`}
                    className="mt-2 text-[#718096] text-xs font-mono"
                  >
                    Enter weight in grams (e.g., 100g, 116.64g for 10 Tola, or 1000g).
                  </p>
                )}
              </div>

              {/* Result */}
              <div
                className={`rounded-xl border p-5 mb-5 transition-all duration-300 ${
                  showResult
                    ? 'border-[#D4AF37] bg-[#F4EFE6] shadow-2xs'
                    : 'border-[#E2D7C5] bg-[#F4EFE6]'
                }`}
                aria-live="polite"
                aria-atomic="true"
              >
                <p className="text-[#718096] text-xs font-mono uppercase tracking-widest mb-1.5">
                  Indicative Spot Value
                </p>
                {showResult ? (
                  <>
                    <p className="font-display font-bold text-3xl text-[#997300] leading-tight">
                      {formatAED(calcValue)}
                    </p>
                    <p className="text-[#718096] text-xs font-mono mt-1.5 mb-3.5">
                      {weight}g of {selectedKarat} ({selectedRate?.purityLabel}) ×{' '}
                      {formatAED(selectedRate.perGram)}/g
                    </p>
                    <a
                      href={getWhatsAppUrl('goldRates')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-lg bg-[#D4AF37] hover:bg-[#C5A059] text-[#1A1E24] font-body font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      Enquire Current Rate on WhatsApp
                    </a>
                  </>
                ) : (
                  <p className="font-display text-xl text-[#8C8275]">
                    {!rateAvailable
                      ? 'Rate unavailable for this purity'
                      : weightInput === ''
                      ? 'Enter weight to calculate'
                      : calcError ?? '—'}
                  </p>
                )}
              </div>

              {/* Reset */}
              <button
                type="button"
                onClick={handleReset}
                className="w-full text-center text-[#718096] hover:text-[#1A1E24] text-xs font-mono transition-colors duration-200 py-1"
              >
                Reset calculator
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
