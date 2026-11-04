import React from 'react';
import { Play, Plus, ArrowDown, Sparkles, Gamepad2 } from 'lucide-react';
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

      {/* Monumental Headline matching the exact aesthetic */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center text-center">
        <h1 className="font-display text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.88] tracking-tight font-extrabold uppercase">
          <span className="block text-white drop-shadow-md">
            GAMES WORTH
          </span>
          <span className="block text-[#0a0524] drop-shadow-sm mt-1">
            PLAYING
          </span>
        </h1>
      </div>

      {/* Bottom Bar: Video widget with (+) button on left & "Scroll" rotating badge on right */}
      <div className="relative z-20 w-full flex items-end justify-between gap-6 mt-4">
        {/* Left: Floating Game Trailer Card + Plus Button */}
        <div className="flex items-center gap-3">
          <div
            onClick={() => {
              playClick();
              onOpenDemo();
            }}
            className="group relative w-36 sm:w-44 h-48 sm:h-56 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col justify-between p-3"
          >
            {/* Background gameplay image */}
            <img
              src="/src/assets/images/slide_space_earth_1793646163026.jpg"
              alt="Apex Realms Featured Experience"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between text-white">
              <span className="w-2 h-2 rounded-full bg-[#34f546]" />
              <span className="text-[10px] font-mono text-white/90 font-bold bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                116M+ VISITS
              </span>
            </div>

            {/* Caption snippet */}
            <div className="relative z-10">
              <div className="px-2 py-1 rounded-md bg-black/70 backdrop-blur-xs text-[11px] font-medium text-white mb-2 inline-block">
                " ... 240 stages of pure flow. "
              </div>
              <div className="flex items-center justify-between text-[10px] text-white/70 font-mono pt-1 border-t border-white/10">
                <span>Pixel Climb</span>
                <div className="flex items-center gap-1.5 text-white/90">
                  <Play size={10} className="fill-current text-[#34f546]" />
                </div>
              </div>
            </div>
          </div>

          {/* Round (+) button */}
          <button
            onClick={() => {
              playClick();
              onOpenDemo();
            }}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer shadow-lg"
            title="Inspect Game Engine Architecture"
          >
            <Plus size={18} />
          </button>
        </div>

        {/* Right: Rotating "Scroll • Explore •" Circular Stamp Badge */}
        <div
          onClick={() => {
            playClick();
            onScrollToNext();
          }}
          className="group relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 shrink-0"
          title="Scroll Down"
        >
          <svg
            className="w-full h-full animate-[spin_12s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="heroCirclePath"
                d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              />
            </defs>
            <text className="text-[9.5px] uppercase font-bold tracking-[0.24em] fill-white/90">
              <textPath href="#heroCirclePath" startOffset="0%">
                Scroll • Explore • Scroll • Explore •
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
