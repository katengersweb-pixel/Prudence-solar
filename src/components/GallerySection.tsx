import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, MapPin, Zap } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/solarData';
import type { GalleryItem } from '../types';
import './GallerySection.css';

interface GallerySectionProps {
  onImageClick?: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onImageClick }) => {
  const [direction, setDirection] = useState<'forward' | 'reverse'>('forward');
  const [isTouchPaused, setIsTouchPaused] = useState(false);

  return (
    <section id="gallery" className="section gallery-section" aria-label="Customer Installation Gallery">
      <div className="container">
        <div className="gallery-header-row">
          <div className="gallery-title-wrap">
            <span className="badge-tag">OUR GALLERY</span>
            <h2 className="gallery-main-title">Real Installations. Happy Customers.</h2>
          </div>

          {/* Direction Navigation Controls */}
          <div className="gallery-nav-controls">
            <button
              onClick={() => setDirection('reverse')}
              className={`gallery-nav-btn ${direction === 'reverse' ? 'active-nav' : ''}`}
              aria-label="Loop towards right"
              title="Move left to right"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setDirection('forward')}
              className={`gallery-nav-btn ${direction === 'forward' ? 'active-nav' : ''}`}
              aria-label="Loop towards left"
              title="Move right to left"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Continuous Infinite Loop Gallery Track */}
        <div
          className={`gallery-loop-wrapper ${isTouchPaused ? 'is-paused' : ''}`}
          onTouchStart={() => setIsTouchPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsTouchPaused(false), 2000);
          }}
        >
          <div className={`gallery-loop-track ${direction === 'reverse' ? 'reverse-direction' : ''}`}>
            {/* Primary Image Set */}
            <div className="gallery-loop-group">
              {GALLERY_ITEMS.map((item, idx) => (
                <div
                  key={`primary-${item.id}-${idx}`}
                  className="gallery-image-card"
                  onClick={() => onImageClick && onImageClick(item)}
                  title={`${item.title} - Click to expand`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image-photo"
                    loading="lazy"
                  />
                  {/* Bottom Geotag & Location Bar matching Reference Design */}
                  <div className="gallery-card-bottom-info">
                    <span className="gallery-card-loc">
                      <MapPin size={12} className="loc-pin" /> {item.location}
                    </span>
                    {item.capacity && (
                      <span className="gallery-card-cap">
                        <Zap size={11} /> {item.capacity}
                      </span>
                    )}
                  </div>
                  <div className="gallery-image-overlay">
                    <div className="gallery-view-icon">
                      <Eye size={22} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cloned Duplicate Set for 100% Seamless Infinite Looping */}
            <div className="gallery-loop-group" aria-hidden="true">
              {GALLERY_ITEMS.map((item, idx) => (
                <div
                  key={`duplicate-${item.id}-${idx}`}
                  className="gallery-image-card"
                  onClick={() => onImageClick && onImageClick(item)}
                  title={`${item.title} - Click to expand`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image-photo"
                    loading="lazy"
                  />
                  {/* Bottom Geotag & Location Bar matching Reference Design */}
                  <div className="gallery-card-bottom-info">
                    <span className="gallery-card-loc">
                      <MapPin size={12} className="loc-pin" /> {item.location}
                    </span>
                    {item.capacity && (
                      <span className="gallery-card-cap">
                        <Zap size={11} /> {item.capacity}
                      </span>
                    )}
                  </div>
                  <div className="gallery-image-overlay">
                    <div className="gallery-view-icon">
                      <Eye size={22} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
