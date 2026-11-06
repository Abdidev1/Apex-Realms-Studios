import React from 'react';
import { X, ArrowUpRight, Github, Gamepad2, Users, MapPin, Mail } from 'lucide-react';
import { playClick } from '../utils/audio';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
}

const MENU_ITEMS = [
  { id: 'hero', num: '01', title: 'HOME', desc: 'Games Without Limits' },
  { id: 'studio', num: '02', title: 'ABOUT STUDIO', desc: 'Founded by Abdullah Mohsin in 2025' },
  { id: 'expertises', num: '03', title: 'STUDIO TEAM', desc: 'Abdi, Grimm, Nyx, Kreekcraft6000 & more' },
  { id: 'games', num: '04', title: 'GAMES & REALMS', desc: 'Pixel Climb, Undead Outbreak, Cart Rush' },
  { id: 'faq', num: '05', title: 'TESTIMONIALS & FAQ', desc: 'Community reviews & studio answers' },
];

export default function MenuModal({ isOpen, onClose, onNavigate, onOpenQuote }: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-12 animate-in fade-in duration-300 overflow-y-auto">
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 max-w-6xl mx-auto w-full">
        <div className="font-display text-2xl font-black uppercase tracking-wider text-[#34f546]">
          APEX REALMS STUDIOS
        </div>

        <button
          onClick={() => {
            playClick();
            onClose();
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          <X size={16} />
          <span>Close</span>
        </button>
      </div>

      {/* Main Menu Links Grid - Full Width without right box */}
      <div className="my-auto py-10 max-w-4xl mx-auto w-full flex flex-col gap-4">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              playClick();
              onNavigate(item.id);
              onClose();
            }}
            className="group text-left py-4 border-b border-white/10 hover:border-[#34f546] flex items-baseline justify-between transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-baseline gap-6 sm:gap-8">
              <span className="font-mono text-xs sm:text-sm font-bold text-[#34f546] group-hover:translate-x-1 transition-transform">
                {item.num}
              </span>
              <span className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white group-hover:text-[#34f546] transition-colors">
                {item.title}
              </span>
            </div>
            <span className="hidden sm:inline-block text-xs sm:text-sm text-white/50 font-body group-hover:text-white/80">
              {item.desc}
            </span>
          </button>
        ))}
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 pt-6 border-t border-white/10 font-body gap-4">
        <div>© {new Date().getFullYear()} Apex Realms Studios. Founded by Abdullah Mohsin in 2025.</div>
        <div className="text-[#34f546] font-mono font-bold">Lahore, Pakistan</div>
      </div>
    </div>
  );
}
