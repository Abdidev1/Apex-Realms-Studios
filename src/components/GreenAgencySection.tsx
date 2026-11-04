import React from 'react';

export default function GreenAgencySection() {
  return (
    <section
      id="engineering"
      className="relative z-20 -mt-10 md:-mt-16 pt-24 md:pt-36 pb-32 px-6 md:px-12 bg-[#36f13e] text-black curved-top-white shadow-[0_-25px_60px_rgba(0,0,0,0.2)] overflow-hidden select-none"
    >
      {/* 3D Glass Triangular Louvers / Domino Pillars in center background */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70 overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative w-full max-w-7xl h-96 flex items-center justify-center gap-3 sm:gap-6 -rotate-12 translate-x-12 sm:translate-x-28">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="relative w-6 sm:w-10 h-72 sm:h-96 rounded-md bg-gradient-to-r from-white/70 via-white/40 to-transparent border-r-2 border-white/90 shadow-xl backdrop-blur-xs transform"
              style={{
                transform: `perspective(800px) rotateY(-45deg) translateZ(${i * 8}px) translateY(${
                  Math.sin(i * 0.4) * 20
                }px)`,
                clipPath: 'polygon(0% 0%, 100% 12%, 100% 100%, 0% 88%)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.08] font-body">
              Our studio amplifies the thrill of next-generation gaming. We equip players who want to push the boundaries, across all genres.
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 lg:pt-36 flex flex-col justify-end">
            <div className="p-6 md:p-8 rounded-3xl bg-black/10 border border-black/15 backdrop-blur-xs">
              <p className="text-base sm:text-lg text-black font-medium leading-relaxed font-body">
                Our players seek adrenaline, memorable adventures, and mechanics that feel crisp. With fluid movement, zero input lag, and immersive worlds, we give gameplay what matters most:{' '}
                <span className="font-extrabold underline decoration-black decoration-2">
                  sheer delight.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
