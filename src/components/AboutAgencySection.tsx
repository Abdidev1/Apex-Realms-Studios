import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { playClick } from '../utils/audio';

interface AboutAgencySectionProps {
  onOpenMenu: () => void;
}

export default function AboutAgencySection({ onOpenMenu }: AboutAgencySectionProps) {
  return (
    <section className="relative z-20 py-24 md:py-36 px-6 md:px-12 bg-white text-slate-900 border-t border-slate-100 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column in English */}
        <div className="lg:col-span-7">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#0a0524] font-black uppercase leading-[0.9] mb-8">
            ALWAYS SHARP. <br />
            <span className="text-[#5a1df5]">NEVER GENERIC.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl font-body mb-8">
            An independent engineering studio that combines mathematical software rigor with boundless gaming passion. Led and solo-developed by software engineer <strong>Abdullah Mohsin (Abdidev1)</strong>.
          </p>

          <a
            href="https://github.com/Abdidev1"
            target="_blank"
            rel="noreferrer"
            onClick={playClick}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm tracking-tight transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer font-body border border-slate-200"
          >
            <span>Meet Lead Developer (@Abdidev1)</span>
            <div className="w-6 h-6 rounded-full bg-[#5a1df5] text-white flex items-center justify-center">
              <ArrowRight size={12} />
            </div>
          </a>
        </div>

        {/* Right Column: 3D violet brand box with "apex®" */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-3xl bg-gradient-to-tr from-[#3a0ab8] via-[#5a1df5] to-[#7b3df8] p-8 shadow-2xl flex flex-col justify-between text-white transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/20">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono tracking-widest text-white/70">
                Indie Game Studio
              </span>
              <div className="w-3 h-3 rounded-full bg-[#34f546]" />
            </div>

            <div className="my-auto text-center">
              <span className="font-display text-6xl sm:text-7xl font-extrabold tracking-tighter lowercase text-white">
                apex<sup className="text-2xl font-bold">®</sup>
              </span>
              <span className="block text-xs uppercase tracking-widest font-mono text-white/70 mt-1">
                Realms Studios • By Abdidev1
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-white/60 font-mono border-t border-white/10 pt-3">
              <span>Solo Developed</span>
              <span>116M+ Visits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
