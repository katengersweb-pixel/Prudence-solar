import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Clock, Building2, Navigation, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, OFFICES, PRODUCTS, getGmailComposeUrl } from '../data/solarData';
import type { EnquiryFormData } from '../types';
import './EnquirySection.css';

interface EnquirySectionProps {
  prefilledSolution?: string;
  prefilledMessage?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  prefilledSolution,
  prefilledMessage
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    solution: prefilledSolution || '',
    city: '',
    message: prefilledMessage || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (prefilledSolution) {
      setFormData((prev) => ({ ...prev, solution: prefilledSolution }));
    }
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledSolution, prefilledMessage]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.solution) errs.solution = 'Please select a solution';
    if (!formData.city.trim()) errs.city = 'Please enter your city/location';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="section enquiry-section" aria-label="Contact and Enquiry">
      <div className="container">
        {/* Section Heading */}
        <div className="enquiry-header">
          <span className="badge-tag">OFFICIAL CONTACT & ENQUIRY</span>
          <h2 className="enquiry-main-title">Contact Prudence Industries</h2>
          <p className="enquiry-subtitle">
            Fill in your requirements for solar installations, EPC solutions, or visit our registered offices in Hyderabad and Andhra Pradesh.
          </p>
        </div>

        {/* Contact Channels Grid: Phones, Emails & Registered Company */}
        <div className="contact-channels-grid">
          {/* Phone Numbers Channel */}
          <div className="contact-channel-card">
            <div className="channel-icon-circle">
              <Phone size={20} />
            </div>
            <div className="channel-content">
              <span className="channel-label">Call Our Experts</span>
              <div className="channel-links-stack">
                <a
                  href={`tel:${CONTACT_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="channel-link phone-link"
                >
                  {CONTACT_INFO.phones[0]}
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phones[1].replace(/\s+/g, '')}`}
                  className="channel-link phone-link"
                >
                  {CONTACT_INFO.phones[1]}
                </a>
              </div>
              <span className="channel-subtext">Click to call directly from mobile or desktop</span>
            </div>
          </div>

          {/* Email Addresses Channel */}
          <div className="contact-channel-card">
            <div className="channel-icon-circle">
              <Mail size={20} />
            </div>
            <div className="channel-content">
              <span className="channel-label">Official Email Addresses</span>
              <div className="channel-links-stack">
                {CONTACT_INFO.emails.map((email) => (
                  <a
                    key={email}
                    href={getGmailComposeUrl(email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-link email-link"
                    title={`Compose email to ${email} directly in Gmail`}
                  >
                    {email}
                  </a>
                ))}
              </div>
              <span className="channel-subtext">Click to compose directly in Gmail</span>
            </div>
          </div>

          {/* Company Details Channel */}
          <div className="contact-channel-card">
            <div className="channel-icon-circle">
              <Building2 size={20} />
            </div>
            <div className="channel-content">
              <span className="channel-label">Registered Company</span>
              <span className="channel-company-name">{CONTACT_INFO.companyName}</span>
              <span className="channel-subtext">
                Solar & Scientific Solutions • Tier-1 Photovoltaic Engineering
              </span>
            </div>
          </div>
        </div>

        {/* Form and Office Locations Grid */}
        <div id="enquiry-form" className="enquiry-content-grid">
          {/* Form Card */}
          <div className="enquiry-form-card">
            {isSubmitted ? (
              <div className="submission-success-banner">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Thank You, {formData.fullName}!</h3>
                <p>
                  Your enquiry for <strong>{formData.solution}</strong> has been received successfully.
                  Our solar engineer will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      solution: '',
                      city: '',
                      message: ''
                    });
                  }}
                  className="btn-outline submit-another-btn"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-fields-grid">
                  {/* Full Name */}
                  <div className="form-field-group">
                    <label htmlFor="fullName" className="field-label">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                    />
                    {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                  </div>

                  {/* Phone Number */}
                  <div className="form-field-group">
                    <label htmlFor="phone" className="field-label">
                      Phone Number <span className="required-star">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>

                  {/* Interested Solution */}
                  <div className="form-field-group">
                    <label htmlFor="solution" className="field-label">
                      Interested Solution <span className="required-star">*</span>
                    </label>
                    <select
                      id="solution"
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      className={`form-select ${errors.solution ? 'has-error' : ''}`}
                    >
                      <option value="">Select a solution</option>
                      {PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.title}>
                          {prod.title}
                        </option>
                      ))}
                      <option value="PM Surya Ghar Rooftop Subsidy">PM Surya Ghar Rooftop Subsidy</option>
                      <option value="Commercial & Industrial Solar Plant">Commercial & Industrial Solar Plant</option>
                      <option value="Solar Consultation & Site Survey">Solar Consultation & Site Survey</option>
                    </select>
                    {errors.solution && <span className="field-error">{errors.solution}</span>}
                  </div>

                  {/* City / Location */}
                  <div className="form-field-group">
                    <label htmlFor="city" className="field-label">
                      City / Location <span className="required-star">*</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder="Your city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={`form-input ${errors.city ? 'has-error' : ''}`}
                    />
                    {errors.city && <span className="field-error">{errors.city}</span>}
                  </div>

                  {/* Message (Optional) */}
                  <div className="form-field-group full-width">
                    <label htmlFor="message" className="field-label">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>
                </div>

                {/* Submit Button matching reference */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary form-submit-btn"
                >
                  <span>{isSubmitting ? 'Sending Enquiry...' : 'Submit Enquiry'}</span>
                  <ArrowRight size={18} />
                </button>

                <p className="form-privacy-note">
                  🔒 We respect your privacy. Your information is strictly used for quotation purposes.
                </p>
              </form>
            )}
          </div>

          {/* Office Locations & Google Maps Directions Panel */}
          <div className="enquiry-offices-panel">
            <div className="offices-panel-header">
              <h3 className="offices-panel-title">Our Office Locations</h3>
              <p className="offices-panel-sub">Official registered addresses & Google Maps directions</p>
            </div>

            <div className="offices-cards-list">
              {OFFICES.map((office) => (
                <div key={office.id} id={office.id} className="office-location-card">
                  <div className="office-card-header">
                    <span className="office-badge-pill">{office.badge}</span>
                  </div>

                  <h4 className="office-company-name">{office.company}</h4>

                  <div className="office-address-row">
                    <MapPin size={18} className="office-pin-svg" />
                    <address className="office-address-lines">
                      {office.addressLines.map((line, idx) => (
                        <span key={idx} className="address-line">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>

                  <div className="office-card-actions">
                    <a
                      href={office.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="office-directions-link"
                      title={`Get directions to ${office.name}`}
                    >
                      <Navigation size={14} />
                      <span>Get Directions</span>
                      <ExternalLink size={12} className="ext-arrow-icon" />
                    </a>
                    <a
                      href={office.searchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="office-mapview-link"
                      title={`View ${office.name} on Google Maps`}
                    >
                      <MapPin size={13} />
                      <span>View Map</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours Banner */}
            <div className="office-hours-banner">
              <Clock size={18} className="clock-icon" />
              <div className="hours-text-group">
                <strong className="hours-title">Working Hours:</strong>
                <span className="hours-time">{CONTACT_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
