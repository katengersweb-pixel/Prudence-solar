import React, { useState } from 'react';
import {
  GraduationCap,
  CheckCircle2,
  X,
  User,
  ArrowRight,
  Info
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/solarData';
import type { TeamMember } from '../types';
import './TeamSection.css';

interface TeamSectionProps {
  onConsultClick?: (member: TeamMember) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onConsultClick }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

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

  return (
    <section id="team" className="section team-modern-section" aria-label="Our Team">
      <div className="container">
        {/* Section Header matching Reference Image */}
        <div className="team-modern-header text-center">
          <span className="team-pill-badge">OUR TEAM</span>
          <h2 className="team-modern-title">Meet the Experts</h2>
          <p className="team-modern-subtitle">
            The brilliant minds driving solar engineering forward with decades of combined experience.
          </p>
        </div>

        {/* Team Members Grid matching Reference Image */}
        <div className="team-modern-grid">
          {TEAM_MEMBERS.map((member) => {
            const hasImgError = imgErrors[member.id] || !member.image;

            return (
              <div
                key={member.id}
                className="expert-card"
                onClick={() => setSelectedMember(member)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedMember(member);
                  }
                }}
                aria-label={`View profile of ${member.name}, ${member.designation}`}
              >
                {/* Circular Profile Photo / Avatar */}
                <div className="expert-avatar-wrapper">
                  <div
                    className="expert-avatar-circle"
                    style={{ background: member.avatarColor }}
                  >
                    {!hasImgError ? (
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.designation}`}
                        className="expert-photo"
                        style={{ objectPosition: member.imagePosition || 'center 10%' }}
                        onError={() => handleImageError(member.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="expert-fallback-initials">
                        <span className="initials-text">{member.initials}</span>
                        <span className="initials-sub">
                          <User size={11} /> Photo coming soon
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Name */}
                <h3 className="expert-name">{member.name}</h3>

                {/* Qualification in Green Accent */}
                <span className="expert-degree">{member.qualifications}</span>

                {/* Role Capsule Badge in Corporate Navy */}
                <div className="expert-role-badge">
                  <span>{member.designation.toUpperCase()}</span>
                </div>

                {/* Subtle Tap Indicator */}
                <span className="expert-tap-hint">
                  <Info size={12} /> Tap to view profile
                </span>
              </div>
            );
          })}
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
                    style={{ objectPosition: selectedMember.imagePosition || 'center 10%' }}
                    onError={() => handleImageError(selectedMember.id)}
                  />
                ) : (
                  <span className="modal-avatar-initials">{selectedMember.initials}</span>
                )}
              </div>

              <div className="modal-header-info">
                <div className="modal-badge-row">
                  <span className="modal-role-badge">
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
