import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Zap, Award, Leaf } from 'lucide-react';
import { HERO_SLIDES } from '../data/solarData';
import './HeroSection.css';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onQuoteClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onQuoteClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 64;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Section">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Headline, Actions & Highlights on White Background */}
          <div className="hero-content-col">
            {/* Tagline Pill */}
            <div className="hero-tag-pill">
              <Leaf size={14} className="hero-tag-icon" />
              <span className="hero-tag-text">{currentSlide.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              <span className="hero-title-line1">{currentSlide.headline}</span>
              <span className="hero-title-line2">
                {currentSlide.prefixText ?? ''}
                <span className="hero-highlight-solar">{currentSlide.highlightWord ?? currentSlide.highlightText}</span>
                {currentSlide.suffixText ?? ''}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="hero-description">{currentSlide.description}</p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <button
                onClick={() => {
                  if (onExploreClick) onExploreClick();
                  else handleScroll('products');
                }}
                className="hero-btn-primary"
              >
                <span>{currentSlide.primaryCtaText}</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => {
                  if (onQuoteClick) onQuoteClick();
                  else handleScroll('enquiry-form');
                }}
                className="hero-btn-secondary"
              >
                <span>{currentSlide.secondaryCtaText}</span>
              </button>
            </div>

            {/* Quick Trust Highlights under CTA */}
            <div className="hero-quick-trust">
              <div className="trust-item">
                <ShieldCheck size={22} className="trust-icon" />
                <div className="trust-text">
                  <span>Tier-1 Approved</span>
                  <span>Panels</span>
                </div>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <Zap size={22} className="trust-icon" />
                <div className="trust-text">
                  <span>PM Surya Ghar</span>
                  <span>Subsidy</span>
                </div>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <Award size={22} className="trust-icon" />
                <div className="trust-text">
                  <span>25-Yr Performance</span>
                  <span>Warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Solar Installation Showcase */}
          <div
            className="hero-media-col"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="hero-image-card">
              {HERO_SLIDES.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`hero-card-image ${index === currentSlideIndex ? 'active' : ''}`}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: slide.imagePosition || 'center'
                  }}
                  aria-hidden={index !== currentSlideIndex}
                />
              ))}

              {/* Navigation Arrows on Media Card */}
              <button
                onClick={prevSlide}
                className="hero-card-arrow arrow-prev"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="hero-card-arrow arrow-next"
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>

              {/* Pagination Dots on Media Card */}
              <div className="hero-card-dots">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`card-dot ${idx === currentSlideIndex ? 'active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
