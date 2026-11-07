import React from 'react';
import {
  Tag,
  Zap,
  Building2,
  CheckCircle2
} from 'lucide-react';
import './PricingSpecsSection.css';

interface PricingSpecsSectionProps {
  onGetQuote?: () => void;
}

export const PricingSpecsSection: React.FC<PricingSpecsSectionProps> = () => {
  return (
    <section id="pricing-specs" className="pricing-specs-section" aria-label="Pricing and Technical Specifications">
      <div className="container">
        {/* Section Header */}
        <div className="specs-header text-center">
          <span className="badge-tag">SPECIFICATIONS</span>
          <h2 className="specs-title">Pricing & Technical Specifications</h2>
        </div>

        {/* 3 Clean Feature Cards */}
        <div className="specs-simple-grid">
          {/* 1. Flexible Pricing */}
          <div className="spec-simple-card">
            <div className="spec-header-row">
              <div className="spec-icon-box">
                <Tag size={20} />
              </div>
              <h3 className="spec-card-heading">Flexible Pricing</h3>
            </div>
            <ul className="spec-clean-list">
              <li>
                <CheckCircle2 size={16} className="spec-check" />
                <span>Prices for <strong>G and G+1</strong> buildings are <strong>negotiable</strong>.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-check" />
                <span>Prices for <strong>G+2 and G+3</strong> buildings are <strong>included</strong> in the quoted pricing.</span>
              </li>
            </ul>
          </div>

          {/* 2. 100% Copper Earthing */}
          <div className="spec-simple-card">
            <div className="spec-header-row">
              <div className="spec-icon-box">
                <Zap size={20} />
              </div>
              <h3 className="spec-card-heading">100% Copper Earthing</h3>
            </div>
            <ul className="spec-clean-list">
              <li>
                <CheckCircle2 size={16} className="spec-check" />
                <span>All earthing wires will be <strong>100% copper</strong>.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-check" />
                <span>Minimum specification: <strong>1 Core × 6 sq. mm</strong>.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-check" />
                <span>Installed as per applicable <strong>MNRE guidelines</strong>.</span>
              </li>
            </ul>
          </div>

          {/* 3. Heavy-Duty Galvanized Structures */}
          <div className="spec-simple-card">
            <div className="spec-header-row">
              <div className="spec-icon-box">
                <Building2 size={20} />
              </div>
              <h3 className="spec-card-heading">Heavy-Duty Galvanized Structures</h3>
            </div>
            <ul className="spec-clean-list">
              <li>
                <CheckCircle2 size={16} className="spec-check" />
                <span><strong>Hot-Dip Galvanized (HDG)</strong> and <strong>Pre-Galvanized (PG)</strong> structures.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-check" />
                <div>
                  <strong>High-Strength Support Legs:</strong>
                  <div className="spec-sublist">
                    <span>• 72 mm × 72 mm square pipe with 3 mm thickness, <em>OR</em></span>
                    <span>• C-Channel: 80 mm × 40 mm × 5 mm thickness.</span>
                  </div>
                </div>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-check" />
                <span><strong>Rafters, Purlins & Supports:</strong> Designed and provided as per structural requirements to ensure strength, stability, and durability.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
