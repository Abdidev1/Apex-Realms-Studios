import React from 'react';
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
  externalUrl?: string;
}

export const SHOWCASE_SLIDES: SlideItem[] = [
  {
    id: 'pixel-climb',
    title: 'Pixel Climb',
    category: '',
    image: '/assets/images/pixel_climb_banner.jpg',
    tags: [],
    description: 'Precision parkour and obby experience.',
    metrics: '',
    techSecrets: [],
    externalUrl: 'https://www.roblox.com/games/119809860666287/Pixel-Climb',
  },
  {
    id: 'lucky-block-obby',
    title: 'Obby, But Every 5 Stages You Get A Lucky Block',
    category: '',
    image: '/assets/images/jm.png',
    tags: [],
    description: 'Stage progression with lucky block rewards.',
    metrics: '',
    techSecrets: [],
    externalUrl: 'https://www.roblox.com/games/132276009709641/Obby-But-Every-5-Stages-You-Get-A-Lucky-Block',
  },
  {
    id: 'interstellar-glass-bridge',
    title: 'Interstellar Glass Bridge',
    category: '',
    image: '/assets/images/Untitled.png',
    tags: [],
    description: 'Suspenseful glass bridge challenge.',
    metrics: '',
    techSecrets: [],
    externalUrl: 'https://www.roblox.com/games/87705680073722/Interstellar-Glass-Bridge',
  },
  {
    id: 'badges-everything',
    title: 'Badges for Absolutely Everything',
    category: '',
    image: '/assets/images/fdf.png',
    tags: [],
    description: 'Earn badges for everything you do.',
    metrics: '',
    techSecrets: [],
    externalUrl: 'https://www.roblox.com/games/98010957959094/Badges-for-Absolutely-Everything',
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
                if (slide.externalUrl) {
                  window.open(slide.externalUrl, '_blank', 'noopener,noreferrer');
                } else {
                  onSelectSlide(slide);
                }
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Bottom title */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-body text-white drop-shadow-md">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
