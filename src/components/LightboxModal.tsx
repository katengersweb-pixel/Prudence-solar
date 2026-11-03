import React, { useEffect } from 'react';
import { X, MapPin, Zap, ArrowRight } from 'lucide-react';
import type { GalleryItem } from '../types';
import './LightboxModal.css';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onEnquireSimilar?: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onEnquireSimilar }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="lightbox-image-wrap">
          <img src={item.image} alt={item.title} className="lightbox-photo" />
        </div>

        <div className="lightbox-details">
          <div className="lightbox-info-top">
            <span className="lightbox-category">{item.category} Project</span>
            <h3 className="lightbox-title">{item.title}</h3>
            <div className="lightbox-meta">
              <span className="meta-loc">
                <MapPin size={15} /> {item.location}
              </span>
              {item.capacity && (
                <span className="meta-cap">
                  <Zap size={15} /> {item.capacity}
                </span>
              )}
            </div>
          </div>

          {item.description && (
            <p className="lightbox-description">{item.description}</p>
          )}

          <div className="lightbox-action-row">
            <button
              onClick={() => {
                onClose();
                if (onEnquireSimilar) onEnquireSimilar(item);
                else {
                  const el = document.getElementById('enquiry-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary lightbox-enquire-btn"
            >
              <span>Enquire Similar Setup</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
