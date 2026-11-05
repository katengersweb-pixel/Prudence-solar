import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/solarData';
import type { ProductItem } from '../types';
import './ProductsSection.css';

interface ProductsSectionProps {
  onProductSelect?: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onProductSelect }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'structures', label: 'Mounting Structures' },
    { id: 'lighting', label: 'Street Lighting' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'security', label: 'Security' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const updateMetrics = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>('.carousel-card');
    const cardWidth = card ? card.offsetWidth : 360;
    const clientWidth = el.clientWidth;
    // Calculate how many cards are visible simultaneously
    const visibleCards = Math.max(1, Math.round(clientWidth / (cardWidth || 1)));
    const totalItems = filteredProducts.length;

    // Number of pages/slides corresponds to full views
    const pages = Math.max(1, Math.ceil(totalItems / visibleCards));
    setPageCount(pages);

    const { scrollLeft, scrollWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);

    setCanScrollPrev(scrollLeft > 6);
    setCanScrollNext(scrollLeft < maxScroll - 6);

    // Synchronize active dot to the current slide/page
    if (pages <= 1 || maxScroll <= 0) {
      setActivePage(0);
    } else if (scrollLeft >= maxScroll - 8) {
      // Reached the very end (last slide) -> activate the last dot
      setActivePage(pages - 1);
    } else {
      const progress = scrollLeft / maxScroll;
      const calculatedPage = Math.round(progress * (pages - 1));
      setActivePage(Math.min(pages - 1, Math.max(0, calculatedPage)));
    }
  }, [filteredProducts.length]);

  // Reset scroll and recompute metrics when category changes
  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.scrollTo({ left: 0, behavior: 'instant' });
    }
    const timer = setTimeout(() => {
      updateMetrics();
    }, 60);

    return () => clearTimeout(timer);
  }, [activeCategory, updateMetrics]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      updateMetrics();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateMetrics]);

  const handleScroll = () => {
    updateMetrics();
  };

  const scroll = (direction: 'prev' | 'next') => {
    const el = carouselRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>('.carousel-card');
    if (!card) return;

    const gap = parseFloat(window.getComputedStyle(el).gap) || 24;
    const cardWidth = card.offsetWidth;
    const clientWidth = el.clientWidth;
    const visibleCards = Math.max(1, Math.round(clientWidth / cardWidth));

    // Scroll by visible cards count (1 full slide)
    const scrollDistance = visibleCards * (cardWidth + gap);
    const scrollOffset = direction === 'next' ? scrollDistance : -scrollDistance;

    el.scrollBy({
      left: scrollOffset,
      behavior: 'smooth'
    });

    setTimeout(() => {
      updateMetrics();
    }, 350);
  };

  const scrollToPage = (pageIndex: number) => {
    const el = carouselRef.current;
    if (!el) return;

    const { scrollWidth, clientWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);

    if (pageCount <= 1 || maxScroll <= 0) return;

    const targetScroll = (pageIndex / (pageCount - 1)) * maxScroll;
    el.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      updateMetrics();
    }, 350);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scroll('prev');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scroll('next');
    }
  };

  // Mouse drag handlers for desktop smooth dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = carouselRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = carouselRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const distance = x - startXRef.current;
    if (Math.abs(distance) > 6) {
      hasDraggedRef.current = true;
    }
    el.scrollLeft = scrollLeftRef.current - distance;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const handleCardClick = (product: ProductItem) => {
    // If user was dragging, do not trigger click action
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false;
      return;
    }
    if (onProductSelect) {
      onProductSelect(product);
    } else {
      const el = document.getElementById('enquiry-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <section id="products" className="section products-section" aria-label="Solar Products & Solutions">
      <div className="container">
        {/* Section Header */}
        <div className="products-header-row">
          <div className="products-title-col">
            <span className="badge-tag">OUR PRODUCTS</span>
            <h2 className="products-main-title">Solar Solutions for a Sustainable Tomorrow</h2>
          </div>

          <div className="products-header-actions">
            <button
              onClick={() => handleCategorySelect('all')}
              className="view-all-link"
              type="button"
            >
              <span>View All Products</span>
              <ArrowRight size={16} />
            </button>

            {/* Header Arrow Controls */}
            <div className="carousel-nav-arrows" aria-label="Carousel navigation">
              <button
                type="button"
                onClick={() => scroll('prev')}
                disabled={!canScrollPrev}
                className="carousel-arrow-btn"
                aria-label="Previous products"
                title="Previous products"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scroll('next')}
                disabled={!canScrollNext}
                className="carousel-arrow-btn"
                aria-label="Next products"
                title="Next products"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="product-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`cat-pill ${activeCategory === cat.id ? 'active' : ''}`}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Carousel Track Wrapper */}
        <div className="products-carousel-wrapper">
          {/* Side Floating Arrow Buttons */}
          <button
            type="button"
            onClick={() => scroll('prev')}
            disabled={!canScrollPrev}
            className={`carousel-side-btn prev ${!canScrollPrev ? 'is-disabled' : ''}`}
            aria-label="Previous products"
            title="Previous products"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            ref={carouselRef}
            className="products-carousel-track"
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Solar Products Carousel"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card carousel-card"
                onClick={() => handleCardClick(product)}
                role="group"
                aria-roledescription="slide"
                aria-label={product.title}
              >
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-img"
                    style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
                    loading="lazy"
                    width="360"
                    height="220"
                    draggable="false"
                  />
                  {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                  )}
                </div>

                <div className="product-card-body">
                  <div className="product-info-top">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-desc">{product.description}</p>
                  </div>

                  {/* Key Spec Highlights */}
                  <div className="product-specs-list">
                    {product.specs.slice(0, 2).map((spec, i) => (
                      <div key={i} className="spec-tag">
                        <Check size={12} className="spec-check" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="product-card-footer">
                    <span className="enquire-text">Enquire Solution</span>
                    <div className="product-arrow-btn" title={`Enquire about ${product.title}`}>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll('next')}
            disabled={!canScrollNext}
            className={`carousel-side-btn next ${!canScrollNext ? 'is-disabled' : ''}`}
            aria-label="Next products"
            title="Next products"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Carousel Pagination Indicator Dots (Page-based) */}
        {pageCount > 1 && (
          <div className="carousel-dots-container" aria-label="Carousel pagination">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToPage(i)}
                className={`carousel-dot ${i === activePage ? 'active' : ''}`}
                aria-label={`Go to slide ${i + 1} of ${pageCount}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
