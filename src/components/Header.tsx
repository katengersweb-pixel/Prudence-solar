import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, PRODUCTS } from '../data/solarData';
import './Header.css';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsSolutionsDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo-link" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <img
            src="/assets/logo/prudence-logo.png"
            alt="Prudence Solar & Scientific Solutions Logo"
            className="brand-logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            <li>
              <a href="#hero" className="nav-link active" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
                Home
              </a>
            </li>

            {/* Solar Solutions with Dropdown */}
            <li
              className="nav-item-dropdown"
              onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
              onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
            >
              <button
                className="nav-link nav-dropdown-trigger"
                onClick={() => scrollTo('products')}
                aria-expanded={isSolutionsDropdownOpen}
              >
                Solar Solutions
                <ChevronDown size={15} className={`dropdown-arrow ${isSolutionsDropdownOpen ? 'open' : ''}`} />
              </button>

              {isSolutionsDropdownOpen && (
                <div className="nav-dropdown-menu">
                  <div className="dropdown-grid">
                    {PRODUCTS.map((prod) => (
                      <a
                        key={prod.id}
                        href={`#${prod.id}`}
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo('products');
                        }}
                      >
                        <div className="dropdown-item-content">
                          <span className="dropdown-item-title">{prod.title}</span>
                          <span className="dropdown-item-desc">{prod.subtitle}</span>
                        </div>
                        <ArrowRight size={14} className="dropdown-item-arrow" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <a href="#pm-surya-ghar" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('pm-surya-ghar'); }}>
                PM Surya Ghar
              </a>
            </li>

            <li>
              <a href="#calculator" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('calculator'); }}>
                Calculator
              </a>
            </li>

            <li>
              <a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}>
                Gallery
              </a>
            </li>

            <li>
              <a href="#team" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('team'); }}>
                Team
              </a>
            </li>

            <li>
              <a href="#reviews" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('reviews'); }}>
                Reviews
              </a>
            </li>

            <li>
              <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right CTA Area: Phone numbers + Get a Quote */}
        <div className="header-action-area">
          <div className="header-phone-badge" title="Call Prudence Industries">
            <div className="phone-icon-wrapper">
              <Phone size={16} />
            </div>
            <div className="phone-numbers-text">
              <a
                href={`tel:${CONTACT_INFO.phones[0].replace(/\s+/g, '')}`}
                className="phone-primary"
                title="Call primary contact"
              >
                {CONTACT_INFO.phones[0]}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phones[1].replace(/\s+/g, '')}`}
                className="phone-secondary"
                title="Call secondary contact"
              >
                {CONTACT_INFO.phones[1]}
              </a>
            </div>
          </div>

          <button
            onClick={() => {
              if (onOpenQuoteModal) {
                onOpenQuoteModal();
              } else {
                scrollTo('enquiry-form');
              }
            }}
            className="header-quote-btn"
          >
            <span>Get a Quote</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-links">
            <li>
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>
                About Prudence
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => { e.preventDefault(); scrollTo('products'); }}>
                Solar Solutions
              </a>
            </li>
            <li>
              <a href="#pm-surya-ghar" onClick={(e) => { e.preventDefault(); scrollTo('pm-surya-ghar'); }}>
                PM Surya Ghar Scheme
              </a>
            </li>
            <li>
              <a href="#calculator" onClick={(e) => { e.preventDefault(); scrollTo('calculator'); }}>
                Solar Savings Calculator
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}>
                Installation Gallery
              </a>
            </li>
            <li>
              <a href="#team" onClick={(e) => { e.preventDefault(); scrollTo('team'); }}>
                Leadership & Team
              </a>
            </li>
            <li>
              <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollTo('reviews'); }}>
                Customer Reviews
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                Contact Us
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-phone-group">
              <a
                href={`tel:${CONTACT_INFO.phones[0].replace(/\s+/g, '')}`}
                className="mobile-phone-link"
              >
                <Phone size={16} />
                <span>{CONTACT_INFO.phones[0]}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phones[1].replace(/\s+/g, '')}`}
                className="mobile-phone-link"
              >
                <Phone size={16} />
                <span>{CONTACT_INFO.phones[1]}</span>
              </a>
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollTo('enquiry-form');
              }}
              className="btn-primary mobile-quote-btn"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
