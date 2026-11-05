import React, { useState } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IsoSection from './components/IsoSection';
import GreenAgencySection from './components/GreenAgencySection';
import ShowcaseSection, { SHOWCASE_SLIDES, SlideItem } from './components/ShowcaseSection';
import InnovationMarqueeSection from './components/InnovationMarqueeSection';
import ExpertisesListSection from './components/ExpertisesListSection';
import AboutAgencySection from './components/AboutAgencySection';
import TestimonialsAndFaqSection from './components/TestimonialsAndFaqSection';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';
import QuoteModal from './components/QuoteModal';
import SlideModal from './components/SlideModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<SlideItem | null>(null);

  const handleOpenDemo = () => {
    setSelectedSlide(SHOWCASE_SLIDES[0]);
  };

  const handleScrollToNext = () => {
    const el = document.getElementById('agence');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextSlideInModal = () => {
    if (!selectedSlide) return;
    const currentIndex = SHOWCASE_SLIDES.findIndex((s) => s.id === selectedSlide.id);
    const nextIndex = (currentIndex + 1) % SHOWCASE_SLIDES.length;
    setSelectedSlide(SHOWCASE_SLIDES[nextIndex]);
  };

  const handlePrevSlideInModal = () => {
    if (!selectedSlide) return;
    const currentIndex = SHOWCASE_SLIDES.findIndex((s) => s.id === selectedSlide.id);
    const prevIndex = (currentIndex - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length;
    setSelectedSlide(SHOWCASE_SLIDES[prevIndex]);
  };

  return (
    <div className="relative min-h-screen bg-[#5a1df5] font-body text-slate-900 selection:bg-[#34f546] selection:text-black">
      {/* 3D Floating Crystals Three.js Canvas */}
      <ThreeCanvas />

      {/* Adaptive Header Navigation */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        {/* 1. Hero */}
        <HeroSection
          onOpenDemo={handleOpenDemo}
          onScrollToNext={handleScrollToNext}
        />

        {/* 2. White: Studio & Stats */}
        <IsoSection
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 3. Lime Green: Agency statement */}
        <GreenAgencySection />

        {/* 4. White: Games Showcase */}
        <ShowcaseSection
          onSelectSlide={(slide) => setSelectedSlide(slide)}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 5. Giant Violet Marquee */}
        <InnovationMarqueeSection />

        {/* 6. Expertises */}
        <ExpertisesListSection
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 7. White: About Agency */}
        <AboutAgencySection
          onOpenMenu={() => setIsMenuOpen(true)}
        />

        {/* 8. Testimonials & FAQ */}
        <TestimonialsAndFaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Interactive Overlays */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <SlideModal
        slide={selectedSlide}
        onClose={() => setSelectedSlide(null)}
        onOpenQuote={() => setIsQuoteOpen(true)}
        onNextSlide={handleNextSlideInModal}
        onPrevSlide={handlePrevSlideInModal}
      />
    </div>
  );
}
