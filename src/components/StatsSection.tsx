import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Sun, Users } from 'lucide-react';
import { COMPANY_STATS } from '../data/solarData';
import './StatsSection.css';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'stat-experience': 0,
    'stat-projects': 0,
    'stat-customers': 0
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers smoothly
          COMPANY_STATS.forEach((stat) => {
            const duration = 1800;
            const steps = 40;
            const stepTime = duration / steps;
            let current = 0;
            const increment = stat.value / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts((prev) => ({
                ...prev,
                [stat.id]: Math.floor(current)
              }));
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'calendar':
        return <Calendar size={28} className="stat-card-icon" />;
      case 'sun':
        return <Sun size={30} className="stat-card-icon" />;
      case 'users':
        return <Users size={28} className="stat-card-icon" />;
      default:
        return <Sun size={28} className="stat-card-icon" />;
    }
  };

  return (
    <section ref={sectionRef} className="section stats-section" aria-label="Company Statistics">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="stats-main-heading">Our Impact in Numbers</h2>
        </div>

        <div className="stats-grid">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.id} className="stat-column">
              <div className="stat-icon-container">
                {renderIcon(stat.iconName)}
              </div>

              <div className="stat-value-wrap">
                <span className="stat-number">
                  {hasAnimated ? counts[stat.id]?.toLocaleString() : stat.value}
                </span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>

              <h3 className="stat-label">{stat.label}</h3>

              {/* Characteristic accent line shown in reference */}
              <div className="stat-accent-bar" />

              {stat.description && (
                <p className="stat-desc-text">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
