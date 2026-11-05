import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Pause,
  Play,
  X,
  ShieldCheck,
  Sparkles,
  User,
  ArrowRight
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/solarData';
import type { TeamMember } from '../types';
import './TeamSection.css';

interface TeamSectionProps {
  onConsultClick?: (member: TeamMember) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onConsultClick }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'leadership' | 'technical'>('all');
  const [direction, setDirection] = useState<'right-to-left' | 'left-to-right'>('right-to-left');
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [isTouchPaused, setIsTouchPaused] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredMembers = TEAM_MEMBERS.filter((m) => {
    if (activeCategory === 'all') return true;
    return m.roleCategory === activeCategory;
  });

  // Ensure enough items exist in the loop group for seamless infinite animation
  const loopItems = filteredMembers.length <= 2
    ? [...filteredMembers, ...filteredMembers, ...filteredMembers, ...filteredMembers]
    : [...filteredMembers, ...filteredMembers];

  const handleConsult = (member: TeamMember) => {
    if (selectedMember) {
      setSelectedMember(null);
    }
    if (onConsultClick) {
      onConsultClick(member);
    } else {
      const el = document.getElementById('enquiry-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const renderCard = (member: TeamMember, keyPrefix: string, index: number) => {
    const hasImgError = imgErrors[member.id] || !member.image;

    return (
      <div key={`${keyPrefix}-${member.id}-${index}`} className="team-carousel-card">
        {/* Card Top: Avatar & Badges */}
        <div className="member-avatar-container">
          <div
            className="avatar-media-box"
            style={{ background: member.avatarColor }}
          >
            {!hasImgError ? (
              <img
                src={member.image}
                alt={`${member.name} - ${member.designation}`}
                className="member-photo"
                style={{ objectPosition: member.imagePosition || 'center 20%' }}
                onError={() => handleImageError(member.id)}
                loading="lazy"
              />
            ) : (
              <div className="avatar-fallback-placeholder">
                <div className="avatar-initials-circle">
                  <span className="avatar-initials">{member.initials}</span>
                </div>
                <span className="photo-placeholder-note">
                  <User size={13} /> Official Photo Coming Soon
                </span>
              </div>
            )}
          </div>

          {/* Role Category Tag */}
          <span className={`member-role-badge ${member.roleCategory}`}>
            {member.roleCategory === 'leadership' ? (
              <>
                <ShieldCheck size={13} /> Managing Partner
              </>
            ) : (
              <>
                <Sparkles size={13} /> Installation Expert
              </>
            )}
          </span>

          {/* Qualification Pill */}
          <span className="member-degree-pill">
            <GraduationCap size={13} /> {member.qualifications}
          </span>
        </div>

        {/* Card Body */}
        <div className="member-content-body">
          <div className="member-name-row">
            <h3 className="member-name">{member.name}</h3>
            <span className="member-qual-sub">{member.qualifications}</span>
          </div>

          <p className="member-designation">
            <Briefcase size={14} className="designation-icon" />
            <span>{member.designation}</span>
          </p>

          <p className="member-short-bio">{member.shortBio}</p>

          {/* Key Areas of Expertise */}
          <div className="member-expertise-list">
            <span className="expertise-heading">Core Focus Areas:</span>
            <div className="expertise-tags-wrap">
              {member.expertise.slice(0, 3).map((exp, idx) => (
                <span key={idx} className="expertise-tag">
                  {exp}
                </span>
              ))}
              {member.expertise.length > 3 && (
                <span className="expertise-tag more-tag">
                  +{member.expertise.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="member-actions-row">
            <button
              type="button"
              onClick={() => setSelectedMember(member)}
              className="btn-know-more"
              aria-label={`Know more about ${member.name}`}
            >
              <span>Know More</span>
              <ChevronRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => handleConsult(member)}
              className="btn-consult-member"
              aria-label={`Consult with ${member.name}`}
            >
              <span>Consult</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="team" className="section team-section" aria-label="Leadership & Technical Team">
      <div className="container">
        {/* Header Row with Navigation Controls */}
        <div className="team-header-row">
          <div className="team-title-wrap">
            <span className="badge-tag">LEADERSHIP & EXPERTS</span>
            <h2 className="team-main-title">The Minds Behind Engineered Solar Precision</h2>
            <p className="team-subtitle">
              Meet our managing partners, directors, and certified installation experts guiding
              high-yield solar installations and PM Surya Ghar subsidies.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="team-nav-controls">
            <button
              type="button"
              onClick={() => setDirection('right-to-left')}
              className={`team-nav-btn ${direction === 'right-to-left' ? 'active-nav' : ''}`}
              aria-label="Loop moving right to left"
              title="Move right to left"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => setDirection('left-to-right')}
              className={`team-nav-btn ${direction === 'left-to-right' ? 'active-nav' : ''}`}
              aria-label="Loop moving left to right"
              title="Move left to right"
            >
              <ChevronRight size={20} />
            </button>

            <button
              type="button"
              onClick={() => setIsManualPaused(!isManualPaused)}
              className={`team-nav-btn pause-toggle-btn ${isManualPaused ? 'active-nav' : ''}`}
              aria-label={isManualPaused ? 'Play carousel' : 'Pause carousel'}
              title={isManualPaused ? 'Resume Carousel' : 'Pause Carousel'}
            >
              {isManualPaused ? <Play size={17} /> : <Pause size={17} />}
            </button>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="team-filter-tabs">
          <button
            type="button"
            className={`team-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Members ({TEAM_MEMBERS.length})
          </button>
          <button
            type="button"
            className={`team-filter-btn ${activeCategory === 'leadership' ? 'active' : ''}`}
            onClick={() => setActiveCategory('leadership')}
          >
            Managing Partners & Directors (2)
          </button>
          <button
            type="button"
            className={`team-filter-btn ${activeCategory === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveCategory('technical')}
          >
            Installation & Technical Experts (2)
          </button>
        </div>
      </div>

      {/* Horizontal Carousel in Infinite Loop */}
      <div
        className={`team-loop-wrapper ${isManualPaused || isTouchPaused ? 'is-paused' : ''}`}
        onTouchStart={() => setIsTouchPaused(true)}
        onTouchEnd={() => {
          setTimeout(() => setIsTouchPaused(false), 2500);
        }}
      >
        <div
          className={`team-loop-track ${direction === 'left-to-right' ? 'direction-left-to-right' : 'direction-right-to-left'}`}
        >
          {/* Loop Group A */}
          <div className="team-loop-group">
            {loopItems.map((member, idx) => renderCard(member, 'grpA', idx))}
          </div>

          {/* Loop Group B (Cloned for 100% Seamless Infinite Looping) */}
          <div className="team-loop-group" aria-hidden="true">
            {loopItems.map((member, idx) => renderCard(member, 'grpB', idx))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Bottom Assurance Banner */}
        <div className="team-trust-banner">
          <div className="trust-banner-item">
            <CheckCircle2 size={18} className="trust-icon" />
            <span>Direct Director Oversight on Every Rooftop System</span>
          </div>
          <div className="trust-banner-item">
            <CheckCircle2 size={18} className="trust-icon" />
            <span>M.Tech & B.Tech Qualified On-Site Engineering Teams</span>
          </div>
          <div className="trust-banner-item">
            <CheckCircle2 size={18} className="trust-icon" />
            <span>Complete PM Surya Ghar Subsidy Assistance</span>
          </div>
        </div>
      </div>

      {/* Modal Dialog: "Know More About Manager / Owner / Expert" */}
      {selectedMember && (
        <div
          className="team-modal-backdrop"
          onClick={() => setSelectedMember(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-member-name"
        >
          <div
            className="team-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="team-modal-header">
              <div className="modal-header-avatar" style={{ background: selectedMember.avatarColor }}>
                {!imgErrors[selectedMember.id] && selectedMember.image ? (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="modal-photo"
                    style={{ objectPosition: selectedMember.imagePosition || 'center 20%' }}
                    onError={() => handleImageError(selectedMember.id)}
                  />
                ) : (
                  <span className="modal-avatar-initials">{selectedMember.initials}</span>
                )}
              </div>

              <div className="modal-header-info">
                <div className="modal-badge-row">
                  <span className={`modal-role-badge ${selectedMember.roleCategory}`}>
                    {selectedMember.roleCategoryLabel}
                  </span>
                  <span className="modal-qual-badge">
                    <GraduationCap size={13} /> {selectedMember.qualifications}
                  </span>
                </div>
                <h3 id="modal-member-name" className="modal-name">
                  {selectedMember.name}
                </h3>
                <p className="modal-designation">{selectedMember.designation}</p>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedMember(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="team-modal-body">
              <div className="modal-section-block">
                <h4 className="modal-section-title">Professional Background & Leadership</h4>
                {selectedMember.fullBio.map((paragraph, pIdx) => (
                  <p key={pIdx} className="modal-bio-para">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="modal-section-block">
                <h4 className="modal-section-title">Key Areas of Expertise</h4>
                <div className="modal-expertise-grid">
                  {selectedMember.expertise.map((exp, expIdx) => (
                    <div key={expIdx} className="modal-expertise-item">
                      <CheckCircle2 size={16} className="item-check-icon" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="team-modal-footer">
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="btn-modal-cancel"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleConsult(selectedMember)}
                className="btn-primary btn-modal-consult"
              >
                <span>Request Consultation with {selectedMember.name.split(' ')[0]}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
