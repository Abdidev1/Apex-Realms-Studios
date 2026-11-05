import React, { useState } from 'react';
import { Sparkles, Glasses, Cpu, Compass, Video, Gamepad2, Layers } from 'lucide-react';
import { playClick } from '../utils/audio';

const EXPERTISES = [
  {
    id: 'luau-arch',
    title: 'FOUNDER & SENIOR ENGINEER (ABDI)',
    desc: 'Abdullah Mohsin, also known as Abdi/batman1917a, founded Apex Realms Studios back in 2025 and is the senior engineer. He builds all the core of the games.',
  },
  {
    id: 'procedural-levels',
    title: 'CO-FOUNDER & LEAD DEVELOPER (GRIMM)',
    desc: 'Grimm Co-Founded Apex Realms Studios with Abdi & Nyx, he makes stages in obbies.',
  },
  {
    id: 'vfx-lighting',
    title: 'CO-FOUNDER & LEAD DEVELOPER (NYX)',
    desc: 'Nyx Co-Founded Apex Realms Studios in 2025 with Abdi & Grimm. She gives core ideas, make stages and design management.',
  },
  {
    id: 'multiplayer-rep',
    title: 'HEAD MODERATOR',
    desc: 'KREEKKRAFT6000 is the head moderator of Apex Realms Studios and He leads the discord community and all the moderator staff.',
  },
  {
    id: 'game-economy',
    title: 'ECONOMY & BATTLE PASS',
    desc: 'Monetization that respects the player: ethical cosmetic rewards, trading systems, and high day-30 retention mechanics.',
  },
  {
    id: 'crossplay-opt',
    title: '60 FPS CROSS-PLAY',
    desc: 'Seamless multiplatform accessibility. Players on phones, tablets, PCs, and consoles play together with parity.',
  },
];

interface ExpertisesListSectionProps {
  onOpenQuote: () => void;
}

export default function ExpertisesListSection({ onOpenQuote }: ExpertisesListSectionProps) {
  const [activeItem, setActiveItem] = useState(EXPERTISES[0]);

  return (
    <section className="relative z-20 py-24 md:py-36 px-6 md:px-12 bg-white text-slate-900 border-t border-slate-100 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Giant Typographic List in English */}
        <div className="lg:col-span-7 flex flex-col gap-2">
          {EXPERTISES.map((item) => {
            const isHovered = activeItem.id === item.id;
            return (
              <button
                key={item.id}
                onMouseEnter={() => {
                  playClick();
                  setActiveItem(item);
                }}
                onClick={() => {
                  playClick();
                  setActiveItem(item);
                }}
                className={`text-left py-3 sm:py-4 transition-all duration-200 cursor-pointer flex items-baseline justify-between group border-b border-slate-100 ${
                  isHovered ? 'translate-x-2' : 'opacity-40 hover:opacity-100'
                }`}
              >
                <span
                  className={`font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight ${
                    isHovered ? 'text-[#0a0524]' : 'text-slate-400'
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Floating Interactive Preview Card in English */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div 
            className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group p-8 flex flex-col justify-end text-white"
            style={{ backgroundColor: '#7d12ff' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h4 className="text-xl sm:text-2xl font-black font-body mb-3 drop-shadow-sm">
                {activeItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-white/90 font-body leading-relaxed drop-shadow-xs">
                {activeItem.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
