import React, { useState } from 'react';
import {
  Calculator,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Info,
  ChevronDown,
  ChevronUp,
  Building2,
  Zap,
  ShieldCheck,
  Check
} from 'lucide-react';
import { G2_G3_PACKAGES, calculateG2G3Estimate } from '../data/solarData';
import './CalculatorSection.css';

interface CalculatorSectionProps {
  onApplyEstimate?: (estimateDetails: {
    bill: number;
    capacity: number;
    netCost: number;
    monthlySavings: number;
    grossCost?: number;
    subsidy?: number;
    packageType?: string;
  }) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onApplyEstimate }) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(4000);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [selectedKw, setSelectedKw] = useState<number | null>(null);
  const [showPackageTable, setShowPackageTable] = useState<boolean>(false);

  // Realistic Indian Solar Calculations & PM Surya Ghar Subsidy Rules
  // Average tariff: approx ₹7.5/unit residential, ₹9.5 commercial
  const tariff = propertyType === 'residential' ? 7.5 : 9.5;

  // Calculated capacity
  const calculatedCapacity = selectedKw !== null
    ? selectedKw
    : Math.max(1, Math.round(((monthlyBill / tariff) / 120) * 10) / 10);

  // Official G+2 / G+3 promotional pricing calculation
  const estimate = calculateG2G3Estimate(calculatedCapacity, propertyType === 'commercial');
  const { grossPrice: grossCost, subsidy, netPrice: netCost, phase } = estimate;

  // Expected monthly savings approx 88% of bill or solar generation value
  const monthlySavings = Math.round(
    selectedKw !== null
      ? calculatedCapacity * 120 * tariff * 0.88
      : monthlyBill * 0.88
  );
  const annualSavings = monthlySavings * 12;
  const paybackYears = annualSavings > 0 ? (netCost / annualSavings).toFixed(1) : '4.5';

  const handleBillChange = (newBill: number) => {
    setMonthlyBill(newBill);
    setSelectedKw(null);
  };

  const handleSelectPackageKw = (kw: number) => {
    setSelectedKw(kw);
    // Sync representative bill for this kW capacity
    const approxBill = Math.round((kw * 120 * tariff) / 100) * 100;
    setMonthlyBill(approxBill);
  };

  const handleApply = () => {
    if (onApplyEstimate) {
      onApplyEstimate({
        bill: monthlyBill,
        capacity: calculatedCapacity,
        netCost,
        monthlySavings,
        grossCost,
        subsidy,
        packageType: propertyType === 'residential' ? 'G+2 / G+3 Building Elevated Structure' : 'Commercial Rooftop'
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
            period with official G+2 / G+3 Building promotional package costs.
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
                  onClick={() => {
                    setPropertyType('residential');
                  }}
                >
                  Residential (Subsidy Eligible)
                </button>
                <button
                  type="button"
                  className={`type-tab ${propertyType === 'commercial' ? 'active' : ''}`}
                  onClick={() => {
                    setPropertyType('commercial');
                    setSelectedKw(null);
                  }}
                >
                  Commercial / Industrial
                </button>
              </div>

              {propertyType === 'residential' && (
                <div className="calc-promo-tag-row">
                  <span className="promo-highlight-badge">
                    <Building2 size={13} /> G+2 / G+3 Building Package Rates
                  </span>
                  <span className="promo-tech-badge">
                    <Zap size={13} /> DCR TOPCon Bifacial
                  </span>
                </div>
              )}

              {/* Standard Capacity Presets (1 kW to 10 kW) */}
              {propertyType === 'residential' && (
                <div className="calc-package-chips-wrap">
                  <div className="chips-label-row">
                    <span className="chips-label">Standard Packages (G+2 / G+3):</span>
                    {selectedKw !== null && (
                      <button
                        type="button"
                        className="reset-chip-btn"
                        onClick={() => setSelectedKw(null)}
                      >
                        Reset to bill slider
                      </button>
                    )}
                  </div>
                  <div className="package-chips-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((kw) => {
                      const isSelected = selectedKw === kw || (selectedKw === null && calculatedCapacity === kw);
                      return (
                        <button
                          key={kw}
                          type="button"
                          onClick={() => handleSelectPackageKw(kw)}
                          className={`package-chip-btn ${isSelected ? 'active' : ''}`}
                          title={`Select ${kw} kW Package`}
                        >
                          {kw} kW
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

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
                  onChange={(e) => handleBillChange(Number(e.target.value))}
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
                <span className="preset-label">Quick Bill Presets:</span>
                {[2000, 3500, 4000, 5000, 8000, 15000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleBillChange(amt)}
                    className={`preset-btn ${monthlyBill === amt && selectedKw === null ? 'selected' : ''}`}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              {/* Assumptions Notice with Image Reference */}
              <div className="calc-info-note">
                <Info size={18} className="info-icon" />
                <p>
                  Pricing based on official promotional packages for <strong>G+2 / G+3 Building</strong> elevated
                  structures with <strong>DCR N-Type TOPCon Bifacial Solar Modules</strong> (GST included).
                  Subsidy reflects official PM Surya Ghar scheme criteria.
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
                  <span className="metric-sub">
                    Requires ~{Math.round(calculatedCapacity * 100)} sq. ft. shade-free roof
                  </span>
                  {propertyType === 'residential' && (
                    <span className="metric-tag">{phase} • G+2/G+3</span>
                  )}
                </div>

                <div className="metric-box highlight-box">
                  <span className="metric-label">Est. Monthly Savings</span>
                  <div className="metric-value-wrap">
                    <strong className="metric-val text-green">₹{monthlySavings.toLocaleString('en-IN')}</strong>
                    <span className="metric-unit">/mo</span>
                  </div>
                  <span className="metric-sub">Up to ₹{annualSavings.toLocaleString('en-IN')} annually</span>
                </div>

                <div className="metric-box hero-net-cost-box">
                  <span className="metric-label">Estimated Net Cost</span>
                  <div className="metric-value-wrap">
                    <strong className="metric-val text-navy">₹{netCost.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="cost-breakdown-sub">
                    {propertyType === 'residential' ? (
                      <>
                        <span className="breakdown-line">
                          Package: ₹{grossCost.toLocaleString('en-IN')} (G+2/G+3)
                        </span>
                        {subsidy > 0 && (
                          <span className="breakdown-subsidy">
                            − ₹{subsidy.toLocaleString('en-IN')} PM Surya Ghar Subsidy
                          </span>
                        )}
                        <span className="breakdown-gst">GST Included</span>
                      </>
                    ) : (
                      <span className="breakdown-line">Commercial turnkey estimate</span>
                    )}
                  </div>
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
                <span>Zero obligations. Package rates include DCR TOPCon bifacial modules & G+2/G+3 structure.</span>
              </div>
            </div>
          </div>

          {/* Toggleable Official G+2 / G+3 Package Rates Table */}
          {propertyType === 'residential' && (
            <div className="calc-table-accordion">
              <button
                type="button"
                className="accordion-toggle-btn"
                onClick={() => setShowPackageTable(!showPackageTable)}
                aria-expanded={showPackageTable}
              >
                <div className="toggle-btn-left">
                  <ShieldCheck size={18} className="shield-icon" />
                  <span className="toggle-btn-title">
                    View Official G+2 / G+3 Building Package Rates (1 kW – 10 kW)
                  </span>
                  <span className="badge-official">GST Included</span>
                </div>
                <div className="toggle-btn-right">
                  <span className="toggle-action-text">{showPackageTable ? 'Hide Table' : 'Show Table'}</span>
                  {showPackageTable ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              {showPackageTable && (
                <div className="package-table-container">
                  <div className="package-table-header-banner">
                    <div className="banner-title-group">
                      <h4>DCR N-TYPE TOPCon BIFACIAL SOLAR • ON-GRID ROOFTOP SYSTEMS</h4>
                      <p>RESIDENTIAL SOLAR PACKAGES • PROMOTIONAL PACKAGE PRICES (GST INCLUDED)</p>
                    </div>
                    <div className="banner-badges">
                      <span className="banner-pill teal">DCR TOPCon MODULES</span>
                      <span className="banner-pill magenta">BIFACIAL TECHNOLOGY</span>
                      <span className="banner-pill gold">ELEVATED STRUCTURE (G+2 / G+3)</span>
                    </div>
                  </div>

                  <div className="table-responsive-wrapper">
                    <table className="package-rates-table">
                      <thead>
                        <tr>
                          <th>CAPACITY</th>
                          <th>GRID PHASE</th>
                          <th>G+2 / G+3 BUILDING COST</th>
                          <th>PM SURYA GHAR CFA</th>
                          <th>NET CUSTOMER COST</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {G2_G3_PACKAGES.map((pkg) => {
                          const isCurrent = calculatedCapacity === pkg.capacity;
                          return (
                            <tr key={pkg.capacity} className={isCurrent ? 'selected-row' : ''}>
                              <td className="capacity-cell">
                                <strong>{pkg.capacity} kW</strong>
                              </td>
                              <td className="phase-cell">
                                <span>{pkg.phase}</span>
                                {pkg.notes && <small className="phase-note">{pkg.notes}</small>}
                              </td>
                              <td className="gross-cell">
                                ₹{pkg.grossPrice.toLocaleString('en-IN')}
                              </td>
                              <td className="subsidy-cell">
                                <span className="subsidy-pill">
                                  ₹{pkg.subsidy.toLocaleString('en-IN')}
                                </span>
                              </td>
                              <td className="net-cell">
                                <strong className="net-price-val">₹{pkg.netPrice.toLocaleString('en-IN')}</strong>
                              </td>
                              <td className="action-cell">
                                <button
                                  type="button"
                                  onClick={() => handleSelectPackageKw(pkg.capacity)}
                                  className={`table-select-btn ${isCurrent ? 'active' : ''}`}
                                >
                                  {isCurrent ? (
                                    <>
                                      <Check size={14} /> Selected
                                    </>
                                  ) : (
                                    'Select'
                                  )}
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="table-footer-notice">
                    <Sparkles size={15} />
                    <span>
                      <strong>PM Surya Ghar Central Financial Assistance:</strong> 1 kW: ₹30,000 | 2 kW: ₹60,000 |
                      3 kW & Above: ₹78,000. All prices include GST, Tier-1 DCR N-Type TOPCon bifacial modules,
                      and elevated GI mounting structure for G+2 / G+3 buildings.
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
