import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, CheckCircle2, Info } from 'lucide-react';
import './CalculatorSection.css';

interface CalculatorSectionProps {
  onApplyEstimate?: (estimateDetails: {
    bill: number;
    capacity: number;
    netCost: number;
    monthlySavings: number;
  }) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onApplyEstimate }) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(3500);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');

  // Realistic Indian Solar Calculations & PM Surya Ghar Subsidy Rules
  // Average tariff: approx ₹7.5/unit residential, ₹9.5 commercial
  const tariff = propertyType === 'residential' ? 7.5 : 9.5;
  const monthlyUnits = monthlyBill / tariff;
  // 1 kW solar generates approx 120 units per month in Northern/Central India (Varanasi / UP climate)
  const calculatedCapacity = Math.max(1, Math.round((monthlyUnits / 120) * 10) / 10);

  // Gross cost ~ ₹60,000 per kW for Tier-1 on-grid setup
  const grossCost = Math.round(calculatedCapacity * 60000);

  // PM Surya Ghar Subsidy:
  // 1 kW: ₹30,000
  // 2 kW: ₹60,000
  // 3 kW and above: ₹78,000 (cap for residential)
  let subsidy = 0;
  if (propertyType === 'residential') {
    if (calculatedCapacity >= 3) {
      subsidy = 78000;
    } else if (calculatedCapacity >= 2) {
      subsidy = 60000;
    } else if (calculatedCapacity >= 1) {
      subsidy = 30000;
    }
  }

  const netCost = Math.max(0, grossCost - subsidy);
  // Expected monthly savings approx 85% of monthly bill
  const monthlySavings = Math.round(monthlyBill * 0.88);
  const annualSavings = monthlySavings * 12;
  const paybackYears = annualSavings > 0 ? (netCost / annualSavings).toFixed(1) : '3.5';

  const handleApply = () => {
    if (onApplyEstimate) {
      onApplyEstimate({
        bill: monthlyBill,
        capacity: calculatedCapacity,
        netCost,
        monthlySavings
      });
    } else {
      const el = document.getElementById('enquiry-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="section calculator-section" aria-label="Solar Savings Calculator">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-tag">SOLAR CALCULATOR</span>
          <h2 className="calc-main-title">Estimate Your Solar Savings</h2>
          <p className="calc-subtitle">
            Calculate your recommended system capacity, government subsidy, and estimated payback
            period in seconds.
          </p>
        </div>

        <div className="calculator-card">
          <div className="calculator-grid">
            {/* Input Controls */}
            <div className="calc-inputs-col">
              <div className="calc-type-selector">
                <button
                  type="button"
                  className={`type-tab ${propertyType === 'residential' ? 'active' : ''}`}
                  onClick={() => setPropertyType('residential')}
                >
                  Residential (Subsidy Eligible)
                </button>
                <button
                  type="button"
                  className={`type-tab ${propertyType === 'commercial' ? 'active' : ''}`}
                  onClick={() => setPropertyType('commercial')}
                >
                  Commercial / Industrial
                </button>
              </div>

              <div className="calc-input-group">
                <div className="input-label-row">
                  <label htmlFor="bill-range" className="calc-label">
                    Average Monthly Electricity Bill
                  </label>
                  <span className="calc-bill-value">₹{monthlyBill.toLocaleString('en-IN')}</span>
                </div>

                <input
                  id="bill-range"
                  type="range"
                  min="1000"
                  max="40000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="calc-range-slider"
                />

                <div className="range-limits">
                  <span>₹1,000/mo</span>
                  <span>₹20,000/mo</span>
                  <span>₹40,000+/mo</span>
                </div>
              </div>

              {/* Quick Bill Preset Chips */}
              <div className="preset-chips">
                <span className="preset-label">Quick Presets:</span>
                {[2000, 3500, 5000, 8000, 15000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setMonthlyBill(amt)}
                    className={`preset-btn ${monthlyBill === amt ? 'selected' : ''}`}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              {/* Assumptions Notice */}
              <div className="calc-info-note">
                <Info size={18} className="info-icon" />
                <p>
                  Calculated based on standard Tier-1 mono-crystalline PV panels generating ~4 units/day
                  per kW. Subsidy reflects official PM Surya Ghar scheme criteria.
                </p>
              </div>
            </div>

            {/* Live Results Panel */}
            <div className="calc-results-col">
              <div className="results-header">
                <div className="results-title-wrap">
                  <Calculator size={20} className="results-icon" />
                  <h3>Your Solar Projection</h3>
                </div>
                {propertyType === 'residential' && subsidy > 0 && (
                  <span className="subsidy-badge">
                    <Sparkles size={14} /> ₹{subsidy.toLocaleString('en-IN')} Subsidy
                  </span>
                )}
              </div>

              <div className="results-metrics-grid">
                <div className="metric-box">
                  <span className="metric-label">Recommended Capacity</span>
                  <div className="metric-value-wrap">
                    <strong className="metric-val text-navy">{calculatedCapacity}</strong>
                    <span className="metric-unit">kW</span>
                  </div>
                  <span className="metric-sub">Requires ~{Math.round(calculatedCapacity * 100)} sq. ft. shade-free roof</span>
                </div>

                <div className="metric-box highlight-box">
                  <span className="metric-label">Est. Monthly Savings</span>
                  <div className="metric-value-wrap">
                    <strong className="metric-val text-green">₹{monthlySavings.toLocaleString('en-IN')}</strong>
                    <span className="metric-unit">/mo</span>
                  </div>
                  <span className="metric-sub">Up to ₹{(annualSavings).toLocaleString('en-IN')} annually</span>
                </div>

                <div className="metric-box">
                  <span className="metric-label">Estimated Net Cost</span>
                  <div className="metric-value-wrap">
                    <strong className="metric-val text-navy">₹{netCost.toLocaleString('en-IN')}</strong>
                  </div>
                  <span className="metric-sub">
                    {subsidy > 0 ? `After ₹${subsidy.toLocaleString('en-IN')} govt subsidy` : 'Indicative turnkey cost'}
                  </span>
                </div>

                <div className="metric-box">
                  <span className="metric-label">Payback Period</span>
                  <div className="metric-value-wrap">
                    <strong className="metric-val text-navy">~{paybackYears}</strong>
                    <span className="metric-unit">Years</span>
                  </div>
                  <span className="metric-sub">Followed by 20+ years of free power</span>
                </div>
              </div>

              <div className="calc-action-row">
                <button onClick={handleApply} className="btn-primary calc-apply-btn">
                  <span>Get Quotation for {calculatedCapacity} kW System</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="calc-disclaimer">
                <CheckCircle2 size={14} />
                <span>Zero obligations. Accurate site assessment provided by our solar engineer.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
