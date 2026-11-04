import React from 'react';

export default function InnovationMarqueeSection() {
  const TICKER_ITEMS = [
    '2022',
    '116M+ VISITS',
    '240 STAGES',
    '100% LUAU',
    '60 FPS',
    'APEX REALMS',
    '0 DESYNC',
    'GLOBAL COMMUNITY',
  ];

  return (
    <section className="relative z-20 py-20 bg-white text-slate-900 overflow-hidden select-none border-t border-slate-100">
      {/* Giant Violet Marquee */}
      <div className="flex w-full overflow-hidden whitespace-nowrap mb-16 py-4">
        <div className="flex items-center gap-10 sm:gap-16 animate-[marquee_22s_linear_infinite]">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 sm:gap-16">
              <span className="font-display text-7xl sm:text-9xl md:text-[11rem] font-black text-[#5a1df5] tracking-tight">
                {item}
              </span>
              <span className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#5a1df5] shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* 2-Column Statement in English */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0524] tracking-tight leading-[1.12] font-body">
            Harnessing cutting-edge Luau engine architecture and procedural generation to craft games millions remember
          </h3>
        </div>

        <div className="lg:col-span-5 lg:pt-4">
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed font-body">
            At Apex Realms Studios, founded and led by Abdullah Mohsin (Abdidev1), we engineer unforgettable multiplayer mechanics from the ground up. Zero lag, buttery-smooth movement, and boundless replayability for communities worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
