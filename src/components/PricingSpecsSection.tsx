import React from 'react';
import {
  BadgePercent,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Check
} from 'lucide-react';
import './PricingSpecsSection.css';

interface PricingSpecsSectionProps {
  onGetQuote?: () => void;
}

export const PricingSpecsSection: React.FC<PricingSpecsSectionProps> = ({ onGetQuote }) => {
  const handleAction = () => {
    if (onGetQuote) {
      onGetQuote();
    } else {
      const el = document.getElementById('enquiry-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing-specs" className="section pricing-specs-section" aria-label="Pricing and Technical Specifications">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-tag">PRICING & TECHNICAL SPECIFICATIONS</span>
          <h2 className="specs-main-title">Pricing & Technical Specifications</h2>
          <p className="specs-subtitle">
            Engineered with uncompromising safety standards, heavy-duty structural steel, and 100% transparent pricing for every rooftop.
          </p>
        </div>

        {/* 3 Separate Feature Cards */}
        <div className="specs-grid">
          {/* Card 1: Flexible Pricing */}
          <div className="spec-card spec-card-pricing">
            <div className="spec-card-top">
              <div className="spec-icon-wrapper spec-icon-pricing">
                <BadgePercent size={28} />
              </div>
              <span className="spec-pill-badge spec-pill-pricing">Flexible Pricing</span>
            </div>

            <h3 className="spec-card-title">Flexible Pricing</h3>
            <p className="spec-card-desc">
              Transparent, competitive commercial terms customized to your building height and elevation needs:
            </p>

            <ul className="spec-features-list">
              <li>
                <CheckCircle2 size={18} className="spec-check-icon" />
                <div>
                  <strong>G & G+1 Buildings:</strong>
                  <span> Prices for G (Ground floor) and G+1 buildings are negotiable and customized to your specific site conditions.</span>
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="spec-check-icon" />
                <div>
                  <strong>G+2 & G+3 Buildings:</strong>
                  <span> Elevated structure fabrication and mounting costs for G+2 and G+3 buildings are fully included in the quoted pricing.</span>
                </div>
              </li>
            </ul>

            <div className="spec-card-footer">
              <div className="spec-chip">
                <Check size={14} />
                <span>Zero Hidden Costs • Custom Site Estimates</span>
              </div>
            </div>
          </div>

          {/* Card 2: 100% Copper Earthing */}
          <div className="spec-card spec-card-copper">
            <div className="spec-card-top">
              <div className="spec-icon-wrapper spec-icon-copper">
                <Zap size={28} />
              </div>
              <span className="spec-pill-badge spec-pill-copper">100% Copper Earthing</span>
            </div>

            <h3 className="spec-card-title">100% Copper Earthing</h3>
            <p className="spec-card-desc">
              Maximum electrical safety and lightning surge protection using certified pure copper conductors:
            </p>

            <ul className="spec-features-list">
              <li>
                <CheckCircle2 size={18} className="spec-check-icon" />
                <div>
                  <strong>100% Pure Copper Wire:</strong>
                  <span> All earthing wires across AC, DC, and module structure grounding are 100% pure copper for zero oxidation.</span>
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="spec-check-icon" />
                <div>
                  <strong>1 Core × 6 sq. mm Minimum:</strong>
                  <span> Engineered with a guaranteed minimum specification of 1 Core × 6 sq. mm wire gauge for heavy fault discharge.</span>
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="spec-check-icon" />
                <div>
                  <strong>MNRE Guidelines Compliant:</strong>
                  <span> Full compliance with applicable Ministry of New and Renewable Energy (MNRE) and DISCOM electrical standards.</span>
                </div>
              </li>
            </ul>

            <div className="spec-card-footer">
              <div className="spec-chip">
                <ShieldCheck size={14} />
                <span>1 Core × 6 sq. mm • MNRE Certified</span>
              </div>
            </div>
          </div>

          {/* Card 3: Heavy-Duty Galvanized Structures */}
          <div className="spec-card spec-card-structures">
            <div className="spec-card-top">
              <div className="spec-icon-wrapper spec-icon-structures">
                <Building2 size={28} />
              </div>
              <span className="spec-pill-badge spec-pill-structures">Galvanized Structures</span>
            </div>

            <h3 className="spec-card-title">Heavy-Duty Galvanized Structures</h3>
            <p className="spec-card-desc">
              Industrial-grade elevated steel structures designed for extreme weather resilience and stability:
            </p>

            <ul className="spec-features-list">
              <li>
                <CheckCircle2 size={18} className="spec-check-icon" />
                <div>
                  <strong>HDG & PG Structures:</strong>
                  <span> Hot-Dip Galvanized (HDG) and Pre-Galvanized (PG) steel structures for 25+ years of rust-free performance.</span>
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="spec-check-icon" />
                <div>
                  <strong>High-Strength Support Legs:</strong>
                  <div className="spec-suboptions">
                    <span className="suboption-item">• 72 mm × 72 mm square pipe with 3 mm thickness, <em>OR</em></span>
                    <span className="suboption-item">• C-Channel: 80 mm × 40 mm × 5 mm thickness.</span>
                  </div>
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="spec-check-icon" />
                <div>
                  <strong>Rafters, Purlins & Supports:</strong>
                  <span> Custom-engineered and provided as per structural requirements to ensure unmatched strength, stability, and durability.</span>
                </div>
              </li>
            </ul>

            <div className="spec-card-footer">
              <div className="spec-chip">
                <Layers size={14} />
                <span>3 mm / 5 mm Steel • 150+ km/h Wind Resilient</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner with Quick Quote CTA */}
        <div className="specs-bottom-banner">
          <div className="specs-banner-content">
            <div className="specs-banner-icon">
              <Sparkles size={24} />
            </div>
            <div className="specs-banner-text">
              <h4>Need a Custom Rooftop Elevation or Tailored Site Engineering?</h4>
              <p>
                Our structural and electrical engineers perform free on-site assessments across Telangana & Andhra Pradesh to design the ideal mounting setup for your terrace.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleAction}
            className="btn-primary specs-banner-btn"
          >
            <span>Request Custom Quote</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};
