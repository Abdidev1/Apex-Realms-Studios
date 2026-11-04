import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, ShieldCheck, Star, Zap } from 'lucide-react';
import { playSlide } from '../utils/audio';

const SLIDES = [
  {
    headline: '116M+ visits across our catalog.',
    sub: 'We employ rigorous testing pipelines and server-authoritative Luau code to ensure glitch-free game launches.',
    highlight: 'Zero Server Crash Record',
  },
  {
    headline: 'Locked 60 FPS on mobile and PC.',
    sub: 'Our proprietary chunk streaming and memory pooling algorithms eliminate stutter even on budget smartphones.',
    highlight: 'Ultra-Low Latency',
  },
];

export default function CyanQualitySection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    playSlide();
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    playSlide();
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const current = SLIDES[activeSlide];

  return (
    <section className="relative z-20 py-24 md:py-36 px-6 md:px-12 bg-[#00d8ea] text-[#0a0524] curved-top-white shadow-[0_-25px_60px_rgba(0,0,0,0.18)] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: 4 Triangular Prisms Pinwheel Aperture */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-[spin_24s_linear_infinite]">
            {/* Shard 1 (Top) */}
            <div
              className="absolute top-0 left-1/4 w-32 sm:w-44 h-32 sm:h-44 bg-gradient-to-br from-white/75 via-white/35 to-transparent border border-white/80 shadow-2xl backdrop-blur-xs"
              style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)' }}
            />
            {/* Shard 2 (Right) */}
            <div
              className="absolute top-1/4 right-0 w-32 sm:w-44 h-32 sm:h-44 bg-gradient-to-br from-white/75 via-white/35 to-transparent border border-white/80 shadow-2xl backdrop-blur-xs"
              style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 0%)' }}
            />
            {/* Shard 3 (Bottom) */}
            <div
              className="absolute bottom-0 right-1/4 w-32 sm:w-44 h-32 sm:h-44 bg-gradient-to-br from-white/75 via-white/35 to-transparent border border-white/80 shadow-2xl backdrop-blur-xs"
              style={{ clipPath: 'polygon(100% 100%, 0% 100%, 100% 0%)' }}
            />
            {/* Shard 4 (Left) */}
            <div
              className="absolute bottom-1/4 left-0 w-32 sm:w-44 h-32 sm:h-44 bg-gradient-to-br from-white/75 via-white/35 to-transparent border border-white/80 shadow-2xl backdrop-blur-xs"
              style={{ clipPath: 'polygon(0% 100%, 0% 0%, 100% 100%)' }}
            />
          </div>
        </div>

        {/* Right Side: Text and Badges in English */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="min-h-[220px]">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0a0524] tracking-tight leading-[1.08] font-body">
              {current.headline}
            </h3>
            <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-[#0a0524]/85 leading-snug font-body">
              {current.sub}
            </p>
          </div>

          {/* Badges strip */}
          <div className="mt-12 pt-8 border-t border-[#0a0524]/15 flex flex-wrap items-center gap-6 sm:gap-10">
            {/* Badge 1 */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0a0524]/10 flex items-center justify-center font-bold text-xs font-mono">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider font-body">
                  116M+ Visits
                </div>
                <div className="text-[11px] opacity-75 font-mono">
                  Verified platform reach
                </div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0a0524]/10 flex items-center justify-center font-bold text-xs font-mono">
                <Zap size={24} />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider font-body">
                  100% Solo Luau
                </div>
                <div className="text-[11px] opacity-75 font-mono">
                  By Abdidev1
                </div>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0a0524]/10 flex items-center justify-center font-bold text-xs font-mono">
                <Star size={24} className="fill-current" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider font-body">
                  96% Approval
                </div>
                <div className="text-[11px] opacity-75 font-mono">
                  Active community feedback
                </div>
              </div>
            </div>

            {/* Slide Arrows */}
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#0a0524]/10 hover:bg-[#0a0524]/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#0a0524]/10 hover:bg-[#0a0524]/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
