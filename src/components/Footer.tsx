import React from 'react';
import { ArrowUp } from 'lucide-react';
import { playClick } from '../utils/audio';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenMenu: () => void;
}

export default function Footer({ onOpenQuote, onOpenMenu }: FooterProps) {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative z-20 bg-[#5a1df5] text-white pt-24 pb-12 px-6 md:px-12 shadow-[0_-25px_60px_rgba(0,0,0,0.25)] select-none overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Giant Top Kicker */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/20 pb-12 mb-16 gap-6">
          <div>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white font-black uppercase leading-none">
             Transforming ideas into games.
            </h2>
          </div>
        </div>

        {/* Clean Minimal Footer content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-16 border-b border-white/20 gap-8">
          <div>
            <div className="flex items-baseline gap-1.5 font-display text-3xl font-extrabold lowercase mb-4">
              <span>apex</span>
              <span className="font-light opacity-90">realms</span>
              <span className="font-normal opacity-90">studios</span>
            </div>

            <p className="text-sm text-white/90 font-body leading-relaxed max-w-md">
              Founded By Abdullah Mohsin in 2025.
            </p>
          </div>

          <div>
            <button 
              onClick={scrollToTop} 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer border border-white/20"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex items-center justify-between text-xs text-white/60 font-mono">
          <span>© {new Date().getFullYear()} Apex Realms Studios. All rights reserved.</span>
          <span>Lahore, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
