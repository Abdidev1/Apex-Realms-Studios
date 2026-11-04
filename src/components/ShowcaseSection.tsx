import React from 'react';
import { Maximize2, Sparkles, Gamepad2 } from 'lucide-react';
import { playClick } from '../utils/audio';

export interface SlideItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
  metrics: string;
  techSecrets: string[];
}

export const SHOWCASE_SLIDES: SlideItem[] = [
  {
    id: 'pixel-climb',
    title: 'Pixel Climb • The Ultimate 240-Stage Obby',
    category: 'Precision Parkour & Obby',
    image: '/src/assets/images/slide_space_earth_1793646163026.jpg',
    tags: ['240+ Precision Stages', 'Dynamic Momentum Engine', 'Zero Latency Checkpoints'],
    description: 'The definitive competitive obstacle experience on Roblox. Over 240 meticulously crafted stages designed for speedrunners and casual players alike with zero physics desync.',
    metrics: '42M+ Plays · 96% Player Approval',
    techSecrets: [
      'Custom client-predicted raycast collision for micro-precision landing',
      'Dynamic momentum conservation and air-strafe Luau controller',
      'Modular stage chunk streaming for ultra-low memory usage on mobile devices',
    ],
  },
  {
    id: 'undead-outbreak',
    title: 'Undead Outbreak • Wave Co-op Defense',
    category: 'Survival & Multiplayer Co-op',
    image: '/src/assets/images/slide_keynote_speaker_1793646163009.jpg',
    tags: ['Custom Horde AI', 'Weapon Upgrade Crafting', 'Epic Boss Encounters'],
    description: 'Survive unrelenting waves of infected with up to 8 players. Built with server-authoritative projectile physics, barricade construction, and atmospheric sound design.',
    metrics: '28M+ Plays · 94% Retention Rate',
    techSecrets: [
      'Spatial hashing algorithm handling 100+ simultaneous zombie entities at 60 FPS',
      'Lag-compensated hit registration ensuring fair gunplay across all pings',
      'Dynamic progressive difficulty scaling based on team player count',
    ],
  },
  {
    id: 'cart-rush',
    title: 'Cart Rush: Neon Odyssey • 60 FPS Coaster',
    category: 'Physics Coaster & Arcade',
    image: '/src/assets/images/slide_hypercar_mobility_1793646164240.jpg',
    tags: ['Custom Spring Suspension', 'Futuristic Neon Track', 'Loop-de-Loop Physics'],
    description: 'High-octane rail racing featuring custom physics equations that simulate realistic centrifugal force, rail friction, and adrenaline-pumping speed boosts.',
    metrics: '26M+ Plays · Top Platform Ranked',
    techSecrets: [
      'RunService-bound physics calculations bypassing clunky standard Roblox seats',
      'Procedural neon track lighting with bloom optimization for mobile',
      'Interactive track triggers, splits, and community ghost lap replays',
    ],
  },
  {
    id: 'aetheria-forgotten',
    title: 'Aetheria • Forgotten Realms RPG Adventure',
    category: 'Open World RPG & Dungeons',
    image: '/src/assets/images/slide_equestrian_luxury_1793646164149.jpg',
    tags: ['Elemental Spell System', 'Persistent Inventory DataStore2', 'Dungeon Raids'],
    description: 'An expansive fantasy realm featuring responsive combo combat, puzzle-driven ancient ruins, and cooperative boss raids for high-tier loot.',
    metrics: '20M+ Plays · Hackathon Winner',
    techSecrets: [
      'Transactional DataStore architecture preventing any item duplication or rollbacks',
      'VFX mesh deformation and particle lighting in real-time',
      'State-machine driven dungeon bosses with telegraph attack patterns',
    ],
  },
];

interface ShowcaseSectionProps {
  onSelectSlide: (slide: SlideItem) => void;
  onOpenQuote: () => void;
}

export default function ShowcaseSection({ onSelectSlide, onOpenQuote }: ShowcaseSectionProps) {
  return (
    <section
      id="games"
      className="relative z-20 -mt-10 md:-mt-16 pt-24 md:pt-36 pb-32 px-6 md:px-12 bg-white text-slate-900 curved-top-white shadow-[0_-25px_60px_rgba(0,0,0,0.12)] overflow-hidden select-none"
    >
      {/* Background diagonal louvers */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25 overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative w-full max-w-7xl h-96 flex items-center justify-center gap-4 -rotate-12">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-80 rounded-md bg-gradient-to-r from-slate-200 to-transparent border-r border-slate-300"
              style={{
                transform: `rotateY(-40deg) translateY(${Math.sin(i * 0.5) * 20}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#0a0524] font-extrabold uppercase leading-[0.88]">
            ONE STUDIO, <br />
            ENDLESS <span className="text-[#5a1df5]">FUN</span>{' '}
            <span className="block text-slate-300 text-3xl sm:text-5xl md:text-6xl tracking-widest mt-1">
              GAMES
            </span>
          </h2>
        </div>

        {/* 2-Column Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {SHOWCASE_SLIDES.map((slide) => (
            <div
              key={slide.id}
              onClick={() => {
                playClick();
                onSelectSlide(slide);
              }}
              className="group relative rounded-3xl sm:rounded-4xl overflow-hidden bg-slate-950 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={slide.image}
                  alt={slide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider font-mono">
                    {slide.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#5a1df5] group-hover:text-white transition-colors">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Bottom title */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="text-xl sm:text-2xl font-bold font-body text-white drop-shadow-sm">
                    {slide.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {slide.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/15 text-white/90 border border-white/10"
                      >
                        ✦ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
