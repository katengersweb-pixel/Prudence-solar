import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { SuryaGharSection } from './components/SuryaGharSection';
import { CalculatorSection } from './components/CalculatorSection';
import { ProductsSection } from './components/ProductsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { QuoteModal } from './components/QuoteModal';
import { FloatingActions } from './components/FloatingActions';
import { Preloader } from './components/Preloader';
import type { GalleryItem, ProductItem } from './types';
import './App.css';

export const App: React.FC = () => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefilledSolution, setPrefilledSolution] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  const handleOpenQuoteModal = (solution?: string) => {
    if (solution) setPrefilledSolution(solution);
    setIsQuoteModalOpen(true);
  };

  const handleProductSelect = (product: ProductItem) => {
    setPrefilledSolution(product.title);
    setPrefilledMessage(`I would like to receive detailed specifications and pricing for ${product.title}.`);
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (estimate: {
    bill: number;
    capacity: number;
    netCost: number;
    monthlySavings: number;
  }) => {
    setPrefilledSolution('PM Surya Ghar Rooftop Subsidy');
    setPrefilledMessage(
      `Calculator Estimate: Recommended capacity ${estimate.capacity} kW for monthly bill ₹${estimate.bill.toLocaleString('en-IN')}. Estimated net cost ~₹${estimate.netCost.toLocaleString('en-IN')} with monthly savings of ~₹${estimate.monthlySavings.toLocaleString('en-IN')}. Please contact me to schedule a site survey.`
    );
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireSimilar = (item: GalleryItem) => {
    setPrefilledSolution(item.title);
    setPrefilledMessage(`I saw your completed installation project "${item.title}" in ${item.location} and would like a similar solar setup for my site.`);
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* Branded Preloader / Splash Intro Screen */}
      <Preloader />

      {/* 1. Header with Sticky Navigation & Logo */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main id="main-content">
        {/* 2. Hero Section with Large Carousel & Clear CTAs */}
        <HeroSection
          onExploreClick={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onQuoteClick={() => handleOpenQuoteModal()}
        />

        {/* 3. Trusted Partner / About Prudence */}
        <AboutSection
          onLearnMoreClick={() => {
            const el = document.getElementById('enquiry-form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Company Statistics / Impact in Numbers */}
        <StatsSection />

        {/* 5. PM Surya Ghar Govt Scheme */}
        <SuryaGharSection
          onEnquireClick={() => {
            setPrefilledSolution('PM Surya Ghar Rooftop Subsidy');
            const el = document.getElementById('enquiry-form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 6. Interactive Solar Savings Calculator */}
        <CalculatorSection onApplyEstimate={handleApplyEstimate} />

        {/* 7. Solar Products Showcase (6 cards) */}
        <ProductsSection onProductSelect={handleProductSelect} />

        {/* 8. Customer Photo Gallery */}
        <GallerySection onImageClick={(item) => setSelectedGalleryItem(item)} />

        {/* 9. Reviews / Testimonials */}
        <ReviewsSection />

        {/* 10. Enquiry Form & Contact Details with Map */}
        <EnquirySection
          prefilledSolution={prefilledSolution}
          prefilledMessage={prefilledMessage}
        />
      </main>

      {/* 11. Rich Corporate Navy Footer */}
      <Footer />

      {/* Floating Quick Action Buttons (Call & WhatsApp) */}
      <FloatingActions />

      {/* Lightbox Modal for Gallery Photos */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onEnquireSimilar={handleEnquireSimilar}
      />

      {/* Get a Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultSolution={prefilledSolution}
      />
    </div>
  );
};

export default App;
