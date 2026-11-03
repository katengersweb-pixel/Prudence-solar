import React from 'react';
import { ExternalLink, Home, Leaf, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import './SuryaGharSection.css';

interface SuryaGharSectionProps {
  onEnquireClick?: () => void;
}

export const SuryaGharSection: React.FC<SuryaGharSectionProps> = ({ onEnquireClick }) => {
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pm-surya-ghar" className="section surya-ghar-section" aria-label="PM Surya Ghar Scheme">
      <div className="container">
        <div className="surya-ghar-card">
          <div className="surya-ghar-grid">
            {/* Left Column: Rooftop Photo */}
            <div className="surya-image-col">
              <div className="surya-image-wrapper">
                <img
                  src="/assets/hero/pmsuryaghar-rooftop.jpg"
                  alt="PM Surya Ghar Rooftop Solar Setup on Modern Home"
                  className="surya-image"
                  loading="lazy"
                  width="480"
                  height="360"
                />
                <div className="surya-scheme-badge">
                  <ShieldCheck size={16} />
                  <span>Govt. Subsidized</span>
                </div>
              </div>
            </div>

            {/* Middle Column: Scheme Overview & CTAs */}
            <div className="surya-content-col">
              <span className="badge-tag">GOVERNMENT SCHEME</span>

              <h2 className="surya-title">
                Explore Rooftop Solar with <br className="hidden-mobile" />
                PM Surya Ghar
              </h2>

              <p className="surya-description">
                The <strong>PM Surya Ghar: Muft Bijli Yojana</strong> aims to promote rooftop solar
                and help households reduce electricity bills with direct government subsidy support
                up to ₹78,000. Prudence Solar handles complete installation, paperwork, and DISCOM net-metering.
              </p>

              <div className="surya-cta-group">
                <a
                  href="https://pmsuryaghar.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary surya-portal-btn"
                >
                  <span>Visit Official Portal</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  onClick={() => {
                    if (onEnquireClick) onEnquireClick();
                    else scrollToEnquiry();
                  }}
                  className="btn-outline surya-enquire-btn"
                >
                  <span>Enquire About Installation</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Column: Key Benefits with Icons */}
            <div className="surya-benefits-col">
              <div className="surya-benefit-item">
                <div className="benefit-icon-wrapper">
                  <Home size={22} className="benefit-icon" />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-heading">Subsidy support</h4>
                  <p className="benefit-sub">for eligible households (up to ₹78,000)</p>
                </div>
              </div>

              <div className="surya-benefit-item">
                <div className="benefit-icon-wrapper">
                  <Leaf size={22} className="benefit-icon" />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-heading">Clean, renewable</h4>
                  <p className="benefit-sub">energy for sustainable living</p>
                </div>
              </div>

              <div className="surya-benefit-item">
                <div className="benefit-icon-wrapper">
                  <Zap size={22} className="benefit-icon" />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-heading">Lower electricity</h4>
                  <p className="benefit-sub">bills (up to 300 free units/month)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
