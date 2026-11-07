import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
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

  const handleEnquire = () => {
    if (onEnquireClick) {
      onEnquireClick();
    } else {
      scrollToEnquiry();
    }
  };

  return (
    <section id="pm-surya-ghar" className="section surya-ghar-section" aria-label="PM Surya Ghar Scheme">
      <div className="container">
        <div className="surya-banner-container">
          {/* Main Official Banner matching Reference Image */}
          <div className="surya-banner-card">
            <img
              src="/assets/hero/pm-surya-ghar-banner.png"
              alt="PM Surya Ghar: Muft Bijli Yojana - Enjoy Free Electricity Up To 300 Units"
              className="surya-banner-img"
              loading="lazy"
            />
          </div>

          {/* Action CTAs right below the banner */}
          <div className="surya-banner-actions">
            <a
              href="https://pmsuryaghar.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary surya-portal-btn"
            >
              <span>Visit Official PM Surya Ghar Portal</span>
              <ExternalLink size={16} />
            </a>

            <button
              type="button"
              onClick={handleEnquire}
              className="btn-outline surya-enquire-btn"
            >
              <span>Enquire for Subsidy Installation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
