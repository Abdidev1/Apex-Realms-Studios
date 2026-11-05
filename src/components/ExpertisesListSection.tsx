import React, { useState } from 'react';
import { Sparkles, Glasses, Cpu, Compass, Video, Gamepad2, Layers } from 'lucide-react';
import { playClick } from '../utils/audio';

const EXPERTISES = [
  {
    id: 'luau-arch',
    title: 'FOUNDER & SENIOR ENGINEER (ABDI)',
    subtitle: '',
    desc: 'Abdullah Mohsin, also known as Abdi/batman1917a, founded Apex Realms Studios back in 2025 and is the senior engineer. He builds all the core of the games.',
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
                  className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight ${
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
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-200 group">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <div>
                <h4 className="text-2xl font-black font-body mb-3">
                  {activeItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 font-body leading-relaxed">
                  {activeItem.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
