import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Glasses, Cpu, Compass, Video, Gamepad2, Layers } from 'lucide-react';
import { playClick } from '../utils/audio';

const EXPERTISES = [
  {
    id: 'luau-arch',
    title: 'LUAU ENGINE ARCHITECTURE',
    subtitle: 'Server-authoritative networking, anti-exploit, client prediction',
    desc: 'Bulletproof systems engineered from scratch in clean Luau. Built to withstand exploits and scale to thousands of concurrent users.',
    icon: Cpu,
    image: '/src/assets/images/slide_keynote_speaker_1793646163009.jpg',
  },
  {
    id: 'procedural-levels',
    title: 'PROCEDURAL LEVEL DESIGN',
    subtitle: 'Algorithmic parkour generation, smart checkpoints, progressive difficulty',
    desc: 'Level architecture designed with psychological pacing—keeping players in the zone and eager for the next milestone.',
    icon: Compass,
    image: '/src/assets/images/slide_space_earth_1793646163026.jpg',
  },
  {
    id: 'vfx-lighting',
    title: '3D REALM VISUAL FX',
    subtitle: 'Atmospheric volumetric fog, custom particle emitters, cinematic neon',
    desc: 'Pushing Roblox’s Future Is Bright lighting engine to console-grade aesthetic heights without taxing lower-end devices.',
    icon: Sparkles,
    image: '/src/assets/images/slide_hypercar_mobility_1793646164240.jpg',
  },
  {
    id: 'multiplayer-rep',
    title: 'MULTIPLAYER REPLICATION',
    subtitle: 'Low-bandwidth network packets, lag compensation, smooth state interpolation',
    desc: 'Optimized remote event frequency and spatial compression so combat and racing feel responsive regardless of ping.',
    icon: Layers,
    image: '/src/assets/images/slide_equestrian_luxury_1793646164149.jpg',
  },
  {
    id: 'game-economy',
    title: 'ECONOMY & BATTLE PASS',
    subtitle: 'Balanced progression loops, cosmetic shops, daily login retention',
    desc: 'Monetization that respects the player: ethical cosmetic rewards, trading systems, and high day-30 retention mechanics.',
    icon: Gamepad2,
    image: '/src/assets/images/slide_keynote_speaker_1793646163009.jpg',
  },
  {
    id: 'crossplay-opt',
    title: '60 FPS CROSS-PLAY',
    subtitle: 'Adaptive touch controls, controller support, budget mobile scaling',
    desc: 'Seamless multiplatform accessibility. Players on phones, tablets, PCs, and consoles play together with parity.',
    icon: Video,
    image: '/src/assets/images/slide_hypercar_mobility_1793646164240.jpg',
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
                  className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight ${
                    isHovered ? 'text-[#0a0524]' : 'text-slate-400'
                  }`}
                >
                  {item.title}
                </span>
                <ArrowUpRight
                  size={24}
                  className={`transition-opacity duration-200 ${
                    isHovered ? 'opacity-100 text-[#5a1df5]' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Floating Interactive Preview Card in English */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-200 group">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold font-mono">
                  STUDIO ARCHITECTURE
                </span>
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-[#34f546] font-mono block mb-1">
                  {activeItem.subtitle}
                </span>
                <h4 className="text-2xl font-black font-body mb-2">
                  {activeItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
                  {activeItem.desc}
                </p>
                <button
                  onClick={onOpenQuote}
                  className="mt-4 px-5 py-2 rounded-full bg-[#5a1df5] hover:bg-[#4711d4] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Commission Game Engineering
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
