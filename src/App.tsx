import React, { useState } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IsoSection from './components/IsoSection';
import GreenAgencySection from './components/GreenAgencySection';
import ShowcaseSection, { SHOWCASE_SLIDES, SlideItem } from './components/ShowcaseSection';
import InnovationMarqueeSection from './components/InnovationMarqueeSection';
import CyanQualitySection from './components/CyanQualitySection';
import ExpertisesListSection from './components/ExpertisesListSection';
import PresentationSphereSection from './components/PresentationSphereSection';
import AboutAgencySection from './components/AboutAgencySection';
import BeforeAfterSection from './components/BeforeAfterSection';
import ResourcesSection from './components/ResourcesSection';
import QualityCertificationsSection from './components/QualityCertificationsSection';
import ClientsMarquee from './components/ClientsMarquee';
import TestimonialsAndFaqSection from './components/TestimonialsAndFaqSection';
import MethodSection from './components/MethodSection';
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

      {/* Main Content Sections sequenced exactly like the video & screenshots */}
      <main className="relative">
        {/* 1. Hero: LES MEILLEURES IDEES FONT L'AVENIR */}
        <HeroSection
          onOpenDemo={handleOpenDemo}
          onScrollToNext={handleScrollToNext}
        />

        {/* 2. White: QUAND ELLES SONT BIEN PRÉSENTÉES + ISO 9001 */}
        <IsoSection
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 3. Lime Green: Notre agence PowerPoint amplifie... + 3D Louvers */}
        <GreenAgencySection />

        {/* 4. White: UN SEUL OUTIL, DES POSSIBILITÉS INFINIES + Showcase Cards */}
        <ShowcaseSection
          onSelectSlide={(slide) => setSelectedSlide(slide)}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 5. Giant Violet Marquee: 2002 • ISO 9001 • 5 ÉTOILES GOOGLE... */}
        <InnovationMarqueeSection />

        {/* 6. Cyan: 0 retard sur +8 000 projets + Rotating Pinwheel Aperture */}
        <CyanQualitySection />

        {/* 7. Expertises: COMMUNICATION 360, VR, IA... */}
        <ExpertisesListSection
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 8. Black: 3D Interactive Presentation Globe / Sphere */}
        <PresentationSphereSection />

        {/* 9. White: TOUJOURS CARRÉS. JAMAIS FORMATÉS. + labas® */}
        <AboutAgencySection
          onOpenMenu={() => setIsMenuOpen(true)}
        />

        {/* 10. Interactive Before/After PowerPoint Makeover Slider */}
        <BeforeAfterSection />

        {/* 11. White: NOS DERNIÈRES RESSOURCES (Articles, Cas client, Livre blanc) */}
        <ResourcesSection />

        {/* 12. Deep Indigo: ENGAGÉS POUR LA QUALITÉ (Medal Cards) */}
        <QualityCertificationsSection />

        {/* 13. Brand Marquee */}
        <ClientsMarquee />

        {/* 14. Testimonials Slider & FAQ "ON VOUS RÉPOND" */}
        <TestimonialsAndFaqSection />

        {/* 15. Method in 4 Steps */}
        <MethodSection />
      </main>

      {/* 16. Mega Footer: VOTRE IMPACT. */}
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
