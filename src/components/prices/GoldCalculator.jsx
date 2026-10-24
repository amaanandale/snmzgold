'use client';

import { useState, useId } from 'react';
import { calculateGoldValue, formatAED } from '@/lib/goldRates';

/**
 * Interactive gold value calculator.
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
      className="section-padding bg-emerald"
      aria-labelledby="calc-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — heading + explainer */}
          <div className="flex flex-col gap-5">
            <span className="section-label">Gold Calculator</span>
            <h2
              id="calc-heading"
              className="font-display text-3xl sm:text-4xl text-white leading-tight"
            >
              Estimate Your Gold Value
            </h2>
            <div className="gold-rule" />
            <p className="text-white/65 font-body leading-relaxed">
              Select a gold purity and enter a weight in grams to see an indicative
              value based on the available rate.
            </p>

            {/* Disclaimer box */}
            <div className="card-dark mt-2">
              <h3 className="text-gold text-xs uppercase tracking-widest font-body font-semibold mb-3">
                Important Notice
              </h3>
              <ul className="space-y-2 text-white/55 text-sm font-body leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-gold/60 mt-0.5" aria-hidden="true">·</span>
                  This estimate is <strong className="text-white/75">indicative only</strong>
                  {' '}and not a trade offer or guaranteed price.
                </li>
                <li className="flex gap-2">
                  <span className="text-gold/60 mt-0.5" aria-hidden="true">·</span>
                  Making charges, VAT (5%), stones and other fees are <strong className="text-white/75">not included</strong>.
                </li>
                <li className="flex gap-2">
                  <span className="text-gold/60 mt-0.5" aria-hidden="true">·</span>
                  Retail jewellery prices in the UAE may differ significantly from gold spot rates.
                </li>
                <li className="flex gap-2">
                  <span className="text-gold/60 mt-0.5" aria-hidden="true">·</span>
                  Contact SNMZ for actual B2B trading rates and terms.
                </li>
              </ul>
            </div>
          </div>

          {/* Right — calculator form */}
          <div className="card-dark">
            <h3 className="text-white font-display font-semibold text-lg mb-6">
              Calculator
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              aria-label="Gold value calculator"
              noValidate
            >
              {/* Purity selector */}
              <fieldset className="mb-6">
                <legend className="text-gold/80 text-xs font-body font-semibold uppercase tracking-widest mb-3">
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
                        className={`relative rounded-xl py-3 px-2 text-center transition-all duration-200 border focus-visible:ring-2 focus-visible:ring-gold ${
                          isSelected
                            ? 'bg-gold border-gold text-emerald-dark shadow-gold'
                            : 'bg-white/5 border-white/10 text-white/70 hover:border-gold/40 hover:text-white'
                        }`}
                      >
                        <span className="block font-display font-bold text-base leading-tight">
                          {rate.karat}
                        </span>
                        <span className="block text-xs font-body opacity-70 leading-tight mt-0.5">
                          {rate.purityLabel}
                        </span>
                        {!hasRate && (
                          <span
                            className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-white/25"
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
                  className="block text-gold/80 text-xs font-body font-semibold uppercase tracking-widest mb-2"
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
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white font-body text-base placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-gold transition-colors duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                      showWeightError
                        ? 'border-red-400/50 focus:ring-red-400/50'
                        : 'border-white/15 focus:border-gold/50'
                    }`}
                  />
                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 text-sm font-body"
                    aria-hidden="true"
                  >
                    g
                  </span>
                </div>
                {showWeightError ? (
                  <p
                    id={`${formId}-weight-error`}
                    className="mt-2 text-red-400/80 text-xs font-body"
                    role="alert"
                  >
                    Please enter a positive number (e.g. 10 or 0.5).
                  </p>
                ) : (
                  <p
                    id={`${formId}-weight-hint`}
                    className="mt-2 text-white/30 text-xs font-body"
                  >
                    Enter the gold weight in grams.
                  </p>
                )}
              </div>

              {/* Result */}
              <div
                className={`rounded-xl border p-5 mb-5 transition-all duration-300 ${
                  showResult
                    ? 'border-gold/35 bg-gold/10'
                    : 'border-white/10 bg-white/5'
                }`}
                aria-live="polite"
                aria-atomic="true"
              >
                <p className="text-white/40 text-xs font-body uppercase tracking-widest mb-2">
                  Indicative Value
                </p>
                {showResult ? (
                  <>
                    <p className="font-display font-bold text-3xl text-gold leading-tight">
                      {formatAED(calcValue)}
                    </p>
                    <p className="text-white/40 text-xs font-body mt-2">
                      {weight}g of {selectedKarat} ({selectedRate?.purityLabel}) ×{' '}
                      {formatAED(selectedRate.perGram)}/g
                    </p>
                  </>
                ) : (
                  <p className="font-display text-2xl text-white/20">
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
                className="w-full text-center text-white/40 hover:text-gold text-sm font-body transition-colors duration-200 py-2"
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
