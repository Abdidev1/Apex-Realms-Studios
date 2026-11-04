import React from 'react';
import { playClick } from '../utils/audio';

interface IsoSectionProps {
  onOpenQuote: () => void;
}

export default function IsoSection({ onOpenQuote }: IsoSectionProps) {
  return (
    <section
      id="studio"
      className="relative z-20 -mt-10 md:-mt-16 pt-24 md:pt-36 pb-32 px-6 md:px-12 bg-white text-slate-900 curved-top-white shadow-[0_-25px_60px_rgba(0,0,0,0.12)] overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Screen 1 */}
        <div className="w-full py-16 md:py-24 border-b border-slate-100 flex flex-col items-center">
          <h2 className="font-display text-[12vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.9] tracking-tight font-extrabold uppercase">
            <span className="block text-[#0a0524]">
              MADE BY
            </span>
            <span className="block text-[#0a0524]">
              PEOPLE WHO
            </span>
            <span className="block text-[#5a1df5]">
              ACTUALLY PLAY.
            </span>
          </h2>
        </div>

        {/* Screen 2 */}
        <div className="w-full pt-20 md:pt-28 flex flex-col items-center">
          <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0a0524] tracking-tight leading-[1.12] max-w-4xl font-body">
            <span className="block mb-4 text-[#0a0524]">
              Apex Realms Studios<sup className="text-2xl md:text-3xl font-bold text-[#5a1df5]">®</sup>
            </span>
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-700 leading-snug">
              An independent game studio with 6K+ visits, turning Luau code into immersive experiences for players worldwide.
            </span>
          </h3>

          <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed font-body">
            Founded and led by <strong>Abdullah Mohsin (Abdidev1)</strong>, Apex Realms Studios makes fun obbies, platformers, and competitive games on Roblox.
          </p>

          {/* 3 Verification Cards with Vibrant Green/Yellow Vertical Stripes Background */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl text-left">
            {/* Box 1: Visits */}
            <div className="relative p-6 md:p-8 rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 group">
              {/* Vertical Stripes Gradient Background */}
              <div 
                className="absolute inset-0 z-0 opacity-90"
                style={{
                  background: 'repeating-linear-gradient(90deg, #76ff03, #76ff03 10px, #aeea00 10px, #aeea00 20px, #ccff00 20px, #ccff00 30px)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />

              <div className="relative z-10">
                <div className="text-xs font-black uppercase tracking-wider text-black/80 font-mono mb-2 bg-white/40 backdrop-blur-xs px-2.5 py-1 rounded-md inline-block">
                  Visits
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-black font-display mb-2 drop-shadow-sm">
                  6K+ Visits
                </h4>
                <p className="text-xs sm:text-sm text-black/90 font-bold leading-relaxed font-body drop-shadow-xs">
                  Concurrent sessions across survival, obby, and arcade experiences worldwide.
                </p>
              </div>
            </div>

            {/* Box 2: Community Members */}
            <div className="relative p-6 md:p-8 rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 group">
              {/* Vertical Stripes Gradient Background */}
              <div 
                className="absolute inset-0 z-0 opacity-90"
                style={{
                  background: 'repeating-linear-gradient(90deg, #76ff03, #76ff03 10px, #aeea00 10px, #aeea00 20px, #ccff00 20px, #ccff00 30px)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />

              <div className="relative z-10">
                <div className="text-xs font-black uppercase tracking-wider text-black/80 font-mono mb-2 bg-white/40 backdrop-blur-xs px-2.5 py-1 rounded-md inline-block">
                  Community Member
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-black font-display mb-2 drop-shadow-sm">
                  1K+ Community Members
                </h4>
                <p className="text-xs sm:text-sm text-black/90 font-bold leading-relaxed font-body drop-shadow-xs">
                  Active players and developers collaborating daily in our vibrant Discord hub.
                </p>
              </div>
            </div>

            {/* Box 3: Games Built */}
            <div className="relative p-6 md:p-8 rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 group">
              {/* Vertical Stripes Gradient Background */}
              <div 
                className="absolute inset-0 z-0 opacity-90"
                style={{
                  background: 'repeating-linear-gradient(90deg, #76ff03, #76ff03 10px, #aeea00 10px, #aeea00 20px, #ccff00 20px, #ccff00 30px)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />

              <div className="relative z-10">
                <div className="text-xs font-black uppercase tracking-wider text-black/80 font-mono mb-2 bg-white/40 backdrop-blur-xs px-2.5 py-1 rounded-md inline-block">
                  Games Built
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-black font-display mb-2 drop-shadow-sm">
                  4 Games Built
                </h4>
                <p className="text-xs sm:text-sm text-black/90 font-bold leading-relaxed font-body drop-shadow-xs">
                  Published experiences featuring custom Luau scripts, obstacle courses, and immersive mechanics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
