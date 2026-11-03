import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, X, Copy, Check, Clock, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/solarData';
import './FloatingActions.css';

export const FloatingActions: React.FC = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const callCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (callCardRef.current && !callCardRef.current.contains(e.target as Node)) {
        setIsCallModalOpen(false);
      }
    };
    if (isCallModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCallModalOpen]);

  const copyNumber = (num: string, index: number) => {
    navigator.clipboard.writeText(num.replace(/\s+/g, ''));
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2200);
  };

  const cleanPhone = CONTACT_INFO.phones[0].replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(CONTACT_INFO.whatsappText);

  // Use web.whatsapp.com on desktop so users already signed into WhatsApp Web in their browser connect instantly
  const whatsappUrl = isMobile
    ? `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`
    : `https://web.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;

  return (
    <div className="floating-actions-container" aria-label="Quick Contact Actions" ref={callCardRef}>
      {/* Call Options Popup Dialog */}
      {isCallModalOpen && (
        <div className="call-options-popup" role="dialog" aria-label="Call Prudence Solar Experts">
          <div className="call-popup-header">
            <div className="call-header-left">
              <div className="call-header-icon">
                <PhoneCall size={18} />
              </div>
              <div>
                <h4 className="call-popup-title">Call Solar Experts</h4>
                <span className="call-popup-company">Prudence Industries Pvt. Ltd.</span>
              </div>
            </div>
            <button
              onClick={() => setIsCallModalOpen(false)}
              className="call-popup-close-btn"
              aria-label="Close call options"
            >
              <X size={18} />
            </button>
          </div>

          <div className="call-numbers-list">
            {CONTACT_INFO.phones.map((phone, idx) => (
              <div key={idx} className="call-number-card">
                <div className="call-number-info">
                  <span className="call-number-label">
                    {idx === 0 ? 'Primary Support & Sales' : 'Technical & Subsidy Help'}
                  </span>
                  <span className="call-number-value">{phone}</span>
                </div>
                <div className="call-action-btns">
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="call-dial-btn"
                    title="Dial number"
                  >
                    <Phone size={13} />
                    <span>Call</span>
                  </a>
                  <button
                    onClick={() => copyNumber(phone, idx)}
                    className="call-copy-btn"
                    title="Copy phone number to clipboard"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check size={13} className="check-icon" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="call-popup-footer">
            <Clock size={13} className="call-clock-icon" />
            <span>Mon – Sat: 9:30 AM – 7:00 PM</span>
          </div>
        </div>
      )}

      {/* Floating Call Button */}
      <button
        type="button"
        onClick={() => setIsCallModalOpen((prev) => !prev)}
        className={`floating-btn call-btn ${isCallModalOpen ? 'active' : ''}`}
        title="Call Prudence Industries (+91 9515969797 / +91 9390445571)"
        aria-label="Call Prudence Industries"
      >
        <Phone size={20} />
        <span className="floating-btn-tooltip">Call Solar Experts</span>
      </button>

      {/* Floating WhatsApp Chat Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        title="Chat with Prudence on WhatsApp"
        aria-label="Chat with Prudence on WhatsApp"
      >
        <MessageCircle size={22} />
        <span className="floating-btn-tooltip">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
