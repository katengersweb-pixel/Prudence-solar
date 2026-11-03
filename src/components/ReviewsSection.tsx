import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../data/solarData';
import './ReviewsSection.css';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const review = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="section reviews-section" aria-label="Customer Reviews">
      <div className="container">
        <div className="reviews-header text-center">
          <span className="badge-tag">TESTIMONIALS</span>
          <h2 className="reviews-main-title">What Our Customers Say</h2>
        </div>

        <div className="review-carousel-container">
          <div className="review-quote-card">
            {/* Quote Mark Icon */}
            <div className="quote-icon-bubble">
              <Quote size={28} className="quote-svg-icon" />
            </div>

            {/* Star Rating */}
            <div className="review-stars-row">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#F7A900" color="#F7A900" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="review-quote-text">
              "{review.quote}"
            </blockquote>

            {/* Customer Author Info */}
            <div className="review-author-meta">
              <span className="review-author-name">— {review.author}</span>
              <span className="review-author-role">
                {review.role}, {review.location}
              </span>
              {review.systemType && (
                <span className="review-system-badge">
                  <ShieldCheck size={13} /> {review.systemType}
                </span>
              )}
            </div>

            {/* Navigation Arrows inside / at sides of Card matching reference */}
            <div className="review-nav-arrows">
              <button
                onClick={prevReview}
                className="review-arrow-btn prev-btn"
                aria-label="Previous review"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextReview}
                className="review-arrow-btn next-btn"
                aria-label="Next review"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="review-dots">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`review-dot ${i === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
