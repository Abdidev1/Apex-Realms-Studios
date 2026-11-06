import React from 'react';
import { ArrowDown } from 'lucide-react';
import { playClick } from '../utils/audio';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onScrollToNext: () => void;
}

export default function HeroSection({ onOpenDemo, onScrollToNext }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 md:px-12 pt-28 pb-10 bg-[#5a1df5] text-white overflow-hidden select-none">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(130,40,250,0.5)_0%,rgba(90,29,245,1)_85%)]"
        aria-hidden="true"
      />

      <div className="w-full h-4" />

      {/* Monumental Headline */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center text-center">
        <h1 className="font-display text-[12vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] leading-[0.88] tracking-tight font-extrabold uppercase">
          <span className="block text-white drop-shadow-md">
            GAMES WITHOUT LIMITS.
          </span>
        </h1>
      </div>

      {/* Bottom Right Rotating Stamp Badge */}
      <div className="relative z-20 w-full flex items-end justify-end gap-6 mt-4">
        <div
          onClick={() => {
            playClick();
            onScrollToNext();
          }}
          className="group relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 shrink-0"
          title="Scroll Down"
        >
          <svg
            className="w-full h-full animate-[spin_16s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="heroCirclePath"
                d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
              />
            </defs>
            <text className="text-[9px] uppercase font-extrabold tracking-[0.25em] fill-white/95">
              <textPath href="#heroCirclePath" startOffset="0%">
                PLAY • ENJOY • REPEAT •
              </textPath>
            </text>
          </svg>

          {/* Center arrow */}
          <div className="absolute inset-0 m-auto w-9 h-9 rounded-full bg-white/15 backdrop-blur-xs border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#5a1df5] transition-all">
            <ArrowDown size={15} />
          </div>
        </div>
      </div>
    </section>
  );
}
