import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO, PRODUCTS, getGmailComposeUrl } from '../data/solarData';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container footer-main-container">
        <div className="footer-columns-grid">
          {/* Column 1: Company Logo & Identity */}
          <div className="footer-brand-col">
            <div className="footer-logo-card">
              <img
                src="/assets/logo/prudence-logo.png"
                alt="Prudence Solar & Scientific Solutions"
                className="footer-logo-img"
                width="200"
                height="68"
              />
            </div>
            <h3 className="footer-company-name">{CONTACT_INFO.companyName}</h3>
            <p className="footer-tagline">Inspired by Science. Powered by Sun.</p>
            <p className="footer-bio">
              Delivering high-efficiency solar energy solutions, Tier-1 rooftop EPC, solar street
              lights, agricultural solar pumps, and government PM Surya Ghar subsidy installations.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                  About Prudence
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>
                  Solar Solutions
                </a>
              </li>
              <li>
                <a href="#pm-surya-ghar" onClick={(e) => { e.preventDefault(); scrollToSection('pm-surya-ghar'); }}>
                  PM Surya Ghar Scheme
                </a>
              </li>
              <li>
                <a href="#calculator" onClick={(e) => { e.preventDefault(); scrollToSection('calculator'); }}>
                  Solar Savings Calculator
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
                  Installation Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#office-hyderabad" onClick={(e) => { e.preventDefault(); scrollToSection('office-hyderabad'); }}>
                  Office 1 – Hyderabad, Telangana
                </a>
              </li>
              <li>
                <a href="#office-andhra-pradesh" onClick={(e) => { e.preventDefault(); scrollToSection('office-andhra-pradesh'); }}>
                  Office 2 – Andhra Pradesh
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solar Products */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Solar Products</h4>
            <ul className="footer-links-list">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <a
                    href={`#${prod.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('products');
                    }}
                  >
                    {prod.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Official Contact</h4>
            <div className="footer-company-badge">{CONTACT_INFO.companyName}</div>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone size={15} className="footer-contact-icon" />
                <div className="footer-contact-stack">
                  <a href={`tel:${CONTACT_INFO.phones[0].replace(/\s+/g, '')}`}>
                    {CONTACT_INFO.phones[0]}
                  </a>
                  <a href={`tel:${CONTACT_INFO.phones[1].replace(/\s+/g, '')}`}>
                    {CONTACT_INFO.phones[1]}
                  </a>
                </div>
              </li>
              <li className="footer-contact-item">
                <Mail size={15} className="footer-contact-icon" />
                <div className="footer-contact-stack">
                  {CONTACT_INFO.emails.map((email) => (
                    <a
                      key={email}
                      href={getGmailComposeUrl(email)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Compose email to ${email} directly in Gmail`}
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>
              <li className="footer-contact-item">
                <MapPin size={15} className="footer-contact-icon" />
                <div className="footer-contact-offices">
                  <span className="footer-office-line">
                    <strong>Office 1:</strong> Shameerpet, Hyderabad, Telangana – 500078
                  </span>
                  <span className="footer-office-line">
                    <strong>Office 2:</strong> Karamchedu, Bapatla, AP – 523170
                  </span>
                </div>
              </li>
            </ul>

            <div className="footer-socials-row">
              <span className="socials-label">Follow Us</span>
              <div className="social-icons-wrap">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 {CONTACT_INFO.companyName}. All rights reserved.
          </p>

          <div className="legal-links-wrap">
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span className="legal-sep">|</span>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
