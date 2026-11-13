import React, { useState, useEffect } from 'react';
import './Preloader.css';

export const Preloader: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock scrolling while the preloader splash screen is active
    document.body.classList.add('preloader-active');

    let exitTimeout: ReturnType<typeof setTimeout>;
    let finishTimeout: ReturnType<typeof setTimeout>;

    const handleDismiss = () => {
      // Trigger smooth fade-out transition
      setIsExiting(true);
      document.body.classList.remove('preloader-active');

      // Unmount component from DOM after fade-out transition completes (600ms)
      finishTimeout = setTimeout(() => {
        setIsFinished(true);
      }, 600);
    };

    // Minimum pleasant display time ~2.0 seconds for smooth logo and solar indicator reveal
    const minDisplayTime = 2000;
    const startTime = Date.now();

    const onPageReady = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);
      exitTimeout = setTimeout(handleDismiss, remainingTime);
    };

    if (document.readyState === 'complete') {
      onPageReady();
    } else {
      window.addEventListener('load', onPageReady);
      // Fallback safeguard: never block website longer than 2.8s under any condition
      const fallbackTimer = setTimeout(onPageReady, 2800);

      return () => {
        window.removeEventListener('load', onPageReady);
        clearTimeout(fallbackTimer);
        clearTimeout(exitTimeout);
        clearTimeout(finishTimeout);
        document.body.classList.remove('preloader-active');
      };
    }

    return () => {
      clearTimeout(exitTimeout);
      clearTimeout(finishTimeout);
      document.body.classList.remove('preloader-active');
    };
  }, []);

  if (isFinished) return null;

  return (
    <div
      className={`preloader-overlay ${isExiting ? 'preloader-exiting' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Prudence Solar & Scientific Solutions"
    >
      {/* Background Solar Energy Subtle Glow */}
      <div className="preloader-solar-glow" aria-hidden="true" />

      <div className="preloader-content">
        {/* Official Brand Logo Card */}
        <div className="preloader-logo-card">
          <img
            src="/assets/logo/prudence-logo.png"
            alt="Prudence Solar & Scientific Solutions Logo"
            className="preloader-logo-img"
            width="260"
            height="90"
          />
        </div>

        {/* Brand Tagline */}
        <p className="preloader-tagline">
          Inspired by Science. Powered by Sun.
        </p>

        {/* Solar-Inspired Loading Indicator (Green #4D922D & Yellow #F7A900) */}
        <div className="preloader-indicator-container">
          <div className="solar-progress-track">
            <div className="solar-progress-fill" />
          </div>

          <div className="solar-pulse-dots" aria-hidden="true">
            <span className="solar-dot solar-dot-green" />
            <span className="solar-dot solar-dot-yellow" />
            <span className="solar-dot solar-dot-amber" />
          </div>
        </div>
      </div>
    </div>
  );
};

