import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRODUCTS } from '../data/solarData';
import './QuoteModal.css';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSolution?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultSolution
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [solution, setSolution] = useState(defaultSolution || 'Quality Solar Panels');
  const [city, setCity] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultSolution) setSolution(defaultSolution);
  }, [defaultSolution]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !city.trim()) {
      setError('Please fill in your name, phone number, and city.');
      return;
    }

    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  return (
    <div className="quote-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="quote-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={onClose} aria-label="Close quote modal">
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="quote-success-content">
            <CheckCircle2 size={54} className="quote-success-icon" />
            <h3 className="quote-success-title">Quotation Request Received!</h3>
            <p className="quote-success-desc">
              Thank you, <strong>{fullName}</strong>. Our senior solar technician is preparing
              your customized quotation for <strong>{solution}</strong> and will reach out to you at{' '}
              <strong>{phone}</strong> today.
            </p>
            <div className="quote-next-steps">
              <div className="step-badge">
                <ShieldCheck size={16} /> Free Rooftop Assessment
              </div>
              <div className="step-badge">
                <Zap size={16} /> Direct Subsidy Estimate
              </div>
            </div>
            <button onClick={onClose} className="btn-primary quote-close-btn">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quote-form-content">
            <div className="quote-form-header">
              <span className="badge-tag">FREE CONSULTATION</span>
              <h2 className="quote-header-title">Request a Free Solar Quote</h2>
              <p className="quote-header-sub">
                Get an accurate system estimate, subsidy calculation, and free engineering assessment.
              </p>
            </div>

            {error && <div className="quote-error-banner">{error}</div>}

            <div className="quote-form-grid">
              <div className="modal-field">
                <label className="modal-label">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Anand Mishra"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="modal-input"
                  required
                />
              </div>

              <div className="modal-field">
                <label className="modal-label">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="modal-input"
                  required
                />
              </div>

              <div className="modal-field">
                <label className="modal-label">Interested Solution *</label>
                <select
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  className="modal-select"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                  <option value="PM Surya Ghar Rooftop Subsidy">PM Surya Ghar Rooftop Subsidy</option>
                  <option value="Commercial Rooftop Solar">Commercial Rooftop Solar</option>
                </select>
              </div>

              <div className="modal-field">
                <label className="modal-label">City / District *</label>
                <input
                  type="text"
                  placeholder="e.g. Varanasi, Prayagraj..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="modal-input"
                  required
                />
              </div>

              <div className="modal-field full-width">
                <label className="modal-label">Average Monthly Bill (₹, Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. ₹3,500 / month"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(e.target.value)}
                  className="modal-input"
                />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary quote-submit-btn">
              <span>{isSubmitting ? 'Submitting Details...' : 'Get My Solar Quote'}</span>
              <ArrowRight size={18} />
            </button>

            <span className="quote-confidential-note">
              🔒 100% confidential. No spam guaranteed.
            </span>
          </form>
        )}
      </div>
    </div>
  );
};
