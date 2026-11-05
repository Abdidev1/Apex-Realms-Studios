import React from 'react';
import { ArrowRight } from 'lucide-react';
import { playClick } from '../utils/audio';

interface AboutAgencySectionProps {
  onOpenMenu: () => void;
}

export default function AboutAgencySection({ onOpenMenu }: AboutAgencySectionProps) {
  return (
    <section className="relative z-20 py-24 md:py-36 px-6 md:px-12 bg-white text-slate-900 border-t border-slate-100 select-none overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#0a0524] font-black uppercase leading-[0.9] mb-8">
          ALWAYS ORIGINAL, <br />
          <span className="text-[#5a1df5]">NEVER COPIED.</span>
        </h2>

        <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-relaxed font-body mb-10 max-w-3xl">
          Abdullah Mohsin Founded Apex Realms Studios back in June 2025 because he wanted to build proper, custom Roblox games from scratch. Armed with big ideas, he turned a simple passion project into a big community.
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
    </section>
  );
}
