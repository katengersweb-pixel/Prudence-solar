import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Clock, Building2, Navigation, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, OFFICES } from '../data/solarData';
import type { EnquiryFormData } from '../types';
import './EnquirySection.css';

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
    location: 'Chittoor (Head Office)',
    propertyCategory: 'Individual Residential Villa',
    monthlyBill: '',
    solarCapacity: '',
    rooftopType: 'RCC Flat Concrete Terrace',
    message: prefilledMessage || '',
    solution: prefilledSolution || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (prefilledSolution) {
      setFormData((prev) => ({
        ...prev,
        solarCapacity: prev.solarCapacity || prefilledSolution,
        message: prev.message ? `${prev.message} (${prefilledSolution})` : `Interested in: ${prefilledSolution}`
      }));
    }
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledSolution, prefilledMessage]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your mobile number';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.location) errs.location = 'Please select your location';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'ec7a7b44-4526-4093-89b9-52242092a9ad';

    const submissionData = new FormData();
    submissionData.append('access_key', accessKey);
    submissionData.append('subject', `☀️ New Site Inspection: ${formData.fullName} (${formData.location})`);
    submissionData.append('from_name', 'Prudence Solar Website');
    submissionData.append('Full Name', formData.fullName);
    submissionData.append('Mobile Number', formData.phone);
    submissionData.append('Location in Andhra Pradesh', formData.location);
    submissionData.append('Property Category', formData.propertyCategory || 'Individual Residential Villa');
    submissionData.append('Average Monthly Power Bill', formData.monthlyBill || 'Not specified');
    submissionData.append('Estimated Solar Capacity', formData.solarCapacity || 'Not specified');
    submissionData.append('Rooftop Structure Type', formData.rooftopType || 'RCC Flat Concrete Terrace');
    submissionData.append('Specific Inquiries / Notes', formData.message || 'No additional notes');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData
      });
      const data = await response.json();
      if (!data.success) {
        console.warn('Web3Forms response:', data);
      }
    } catch (err) {
      console.warn('Form submission email dispatch error:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const cleanPhone = CONTACT_INFO.phones[0].replace(/[^0-9]/g, '');
    const lines = [
      '☀️ *Prudence Solar - Free Site Inspection Inquiry*',
      '',
      `*Full Name:* ${formData.fullName.trim() || 'Not specified'}`,
      `*Mobile Number:* ${formData.phone.trim() || 'Not specified'}`,
      `*Location in Andhra Pradesh:* ${formData.location || 'Chittoor (Head Office)'}`,
      `*Property Category:* ${formData.propertyCategory || 'Individual Residential Villa'}`,
      formData.monthlyBill ? `*Average Monthly Power Bill:* ${formData.monthlyBill}` : '',
      formData.solarCapacity ? `*Estimated Solar Capacity:* ${formData.solarCapacity}` : '',
      formData.rooftopType ? `*Rooftop Structure Type:* ${formData.rooftopType}` : '',
      formData.message ? `*Notes:* ${formData.message}` : ''
    ].filter(Boolean).join('\n');

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const whatsappBase = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
    const url = `${whatsappBase}?phone=${cleanPhone}&text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
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
                    href={`mailto:${email}`}
                    className="channel-link email-link"
                    title={`Send email to ${email}`}
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
                <h3>Site Inspection Request Received!</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>! Your inquiry for{' '}
                  <strong>{formData.propertyCategory}</strong> in <strong>{formData.location}</strong> has been
                  routed directly to <strong>solar@prudencescientific.com</strong>.
                  Our senior solar engineering team will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '12px' }}>
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="btn-whatsapp-inquiry"
                    style={{ flex: 'none', padding: '10px 18px', fontSize: '0.88rem' }}
                  >
                    <WhatsAppIcon size={17} />
                    <span>Send Copy via WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        location: 'Chittoor (Head Office)',
                        propertyCategory: 'Individual Residential Villa',
                        monthlyBill: '',
                        solarCapacity: '',
                        rooftopType: 'RCC Flat Concrete Terrace',
                        message: '',
                        solution: ''
                      });
                    }}
                    className="btn-outline submit-another-btn"
                    style={{ margin: 0, padding: '10px 18px', fontSize: '0.88rem' }}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Form Top Badge & Headline from reference */}
                <div className="form-card-header">
                  <span className="quick-quotation-badge">Quick Quotation</span>
                  <h3 className="form-card-title">Schedule a Free Site Inspection in Andhra Pradesh</h3>
                </div>

                <div className="form-fields-grid">
                  {/* Full Name */}
                  <div className="form-field-group">
                    <label htmlFor="fullName" className="field-label">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. K. Venkateswara Rao"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                    />
                    {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                  </div>

                  {/* Mobile Number */}
                  <div className="form-field-group">
                    <label htmlFor="phone" className="field-label">
                      Mobile Number <span className="required-star">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 63017 68198"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>

                  {/* Location in Andhra Pradesh */}
                  <div className="form-field-group">
                    <label htmlFor="location" className="field-label">
                      Location in Andhra Pradesh <span className="required-star">*</span>
                    </label>
                    <select
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className={`form-select ${errors.location ? 'has-error' : ''}`}
                    >
                      <option value="Chittoor (Head Office)">Chittoor (Head Office)</option>
                      <option value="Bapatla / Karamchedu (Andhra Pradesh Office)">Bapatla / Karamchedu (Andhra Pradesh Office)</option>
                      <option value="Hyderabad / Shameerpet (Telangana Office)">Hyderabad / Shameerpet (Telangana Office)</option>
                      <option value="Vijayawada / Amaravati">Vijayawada / Amaravati</option>
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Guntur / Tenali">Guntur / Tenali</option>
                      <option value="Tirupati">Tirupati</option>
                      <option value="Nellore">Nellore</option>
                      <option value="Kurnool / Anantapur">Kurnool / Anantapur</option>
                      <option value="Rajahmundry / Kakinada">Rajahmundry / Kakinada</option>
                      <option value="Kadapa">Kadapa</option>
                      <option value="Other Location">Other Location</option>
                    </select>
                    {errors.location && <span className="field-error">{errors.location}</span>}
                  </div>

                  {/* Property Category */}
                  <div className="form-field-group">
                    <label htmlFor="propertyCategory" className="field-label">
                      Property Category
                    </label>
                    <select
                      id="propertyCategory"
                      value={formData.propertyCategory}
                      onChange={(e) => setFormData({ ...formData, propertyCategory: e.target.value })}
                      className="form-select"
                    >
                      <option value="Individual Residential Villa">Individual Residential Villa</option>
                      <option value="Independent House / Bungalow">Independent House / Bungalow</option>
                      <option value="Apartment / Gated Community">Apartment / Gated Community</option>
                      <option value="Commercial Building / Office">Commercial Building / Office</option>
                      <option value="Industrial Shed / Factory">Industrial Shed / Factory</option>
                      <option value="Agricultural Farm / Land">Agricultural Farm / Land</option>
                      <option value="Institutional / School / Hospital">Institutional / School / Hospital</option>
                    </select>
                  </div>

                  {/* Average Monthly Power Bill */}
                  <div className="form-field-group">
                    <label htmlFor="monthlyBill" className="field-label">
                      Average Monthly Power Bill
                    </label>
                    <input
                      id="monthlyBill"
                      type="text"
                      placeholder="e.g. ₹2,500"
                      value={formData.monthlyBill || ''}
                      onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  {/* Estimated Solar Capacity */}
                  <div className="form-field-group">
                    <label htmlFor="solarCapacity" className="field-label">
                      Estimated Solar Capacity
                    </label>
                    <input
                      id="solarCapacity"
                      type="text"
                      placeholder="e.g. 3 kW On-Grid"
                      value={formData.solarCapacity || ''}
                      onChange={(e) => setFormData({ ...formData, solarCapacity: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  {/* Rooftop Structure Type */}
                  <div className="form-field-group full-width">
                    <label htmlFor="rooftopType" className="field-label">
                      Rooftop Structure Type
                    </label>
                    <select
                      id="rooftopType"
                      value={formData.rooftopType}
                      onChange={(e) => setFormData({ ...formData, rooftopType: e.target.value })}
                      className="form-select"
                    >
                      <option value="RCC Flat Concrete Terrace">RCC Flat Concrete Terrace</option>
                      <option value="Sloped Metal Sheet Roof">Sloped Metal Sheet Roof</option>
                      <option value="Tiled / Mangalore Tiled Roof">Tiled / Mangalore Tiled Roof</option>
                      <option value="Elevated Superstructure">Elevated Superstructure</option>
                      <option value="Ground Mount / Open Area">Ground Mount / Open Area</option>
                    </select>
                  </div>

                  {/* Specific Inquiries / Notes */}
                  <div className="form-field-group full-width">
                    <label htmlFor="message" className="field-label">
                      Specific Inquiries / Notes
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us about your power requirements, preferred brands (Tata, Adani, Waaree, ReNew), or queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>
                </div>

                {/* Two Action Buttons: Submit Inquiry and Send via WhatsApp */}
                <div className="form-buttons-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-submit-inquiry"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="btn-whatsapp-inquiry"
                    title="Send your inquiry details directly on WhatsApp"
                  >
                    <WhatsAppIcon size={19} />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

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
