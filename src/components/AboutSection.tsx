import React from 'react';
import { ShieldCheck, Wrench, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';
import './AboutSection.css';

interface AboutSectionProps {
  onLearnMoreClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreClick }) => {
  const scrollToContact = () => {
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section about-section" aria-label="About Prudence">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Story & 3 Pillars */}
          <div className="about-text-col">
            <span className="badge-tag">ABOUT PRUDENCE</span>

            <h2 className="about-title">Your Trusted Partner in Solar Energy</h2>

            <p className="about-description">
              Prudence Solar & Scientific Solutions delivers high-quality solar products, expert
              installation and reliable after-sales support to help you achieve a cleaner, greener
              and more cost-effective future.
            </p>

            {/* 3 Pillars matching reference */}
            <div className="about-features-list">
              <div className="about-feature-card">
                <div className="about-feature-icon-wrapper">
                  <ShieldCheck size={22} className="feature-icon" />
                </div>
                <div className="about-feature-content">
                  <h3 className="about-feature-title">Quality Products</h3>
                  <p className="about-feature-desc">Reliable and efficient solar solutions.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-icon-wrapper">
                  <Wrench size={22} className="feature-icon" />
                </div>
                <div className="about-feature-content">
                  <h3 className="about-feature-title">Expert Installation</h3>
                  <p className="about-feature-desc">Skilled team for safe and professional setup.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-icon-wrapper">
                  <Headphones size={22} className="feature-icon" />
                </div>
                <div className="about-feature-content">
                  <h3 className="about-feature-title">After-Sales Support</h3>
                  <p className="about-feature-desc">We're with you, always.</p>
                </div>
              </div>
            </div>

            {/* Learn More Action */}
            <div className="about-action">
              <button
                onClick={() => {
                  if (onLearnMoreClick) onLearnMoreClick();
                  else scrollToContact();
                }}
                className="btn-green about-learn-btn"
              >
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Photo Card with Trust Badge */}
          <div className="about-media-col">
            <div className="about-image-wrapper">
              <img
                src="/assets/hero/solar-installers.jpg"
                alt="Prudence Solar Installation Technicians at Work"
                className="about-main-image"
                loading="lazy"
                width="640"
                height="420"
              />
              <div className="about-image-overlay-badge">
                <CheckCircle2 size={20} className="badge-check-icon" />
                <div>
                  <strong>Certified Engineers</strong>
                  <span>MNRE Compliant Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
