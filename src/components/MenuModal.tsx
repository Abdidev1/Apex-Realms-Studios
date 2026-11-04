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
  { id: 'hero', num: '01', title: 'HOME', desc: 'The greatest games build the future' },
  { id: 'studio', num: '02', title: 'ABOUT STUDIO', desc: '116M+ visits solo engineered by Abdidev1' },
  { id: 'engineering', num: '03', title: 'LUAU ARCHITECTURE', desc: '60 FPS, zero lag, procedural generation' },
  { id: 'games', num: '04', title: 'GAMES & REALMS', desc: 'Pixel Climb, Undead Outbreak, Cart Rush' },
  { id: 'method', num: '05', title: 'PRODUCTION PIPELINE', desc: '4-step game engineering method' },
  { id: 'contact', num: '06', title: 'COMMISSION & CONTACT', desc: 'Work with Abdullah Mohsin' },
];

export default function MenuModal({ isOpen, onClose, onNavigate, onOpenQuote }: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-12 animate-in fade-in duration-300 overflow-y-auto">
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-baseline gap-1.5 font-display text-2xl font-bold lowercase">
          <span>apex</span>
          <span className="font-light opacity-80">realms</span>
          <span className="text-xs text-[#34f546] font-mono">studios®</span>
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

      {/* Main Menu Links Grid */}
      <div className="my-auto py-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 flex flex-col gap-4">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                playClick();
                onNavigate(item.id);
                onClose();
              }}
              className="group text-left py-3 border-b border-white/10 hover:border-white/40 flex items-baseline justify-between transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#34f546] group-hover:translate-x-1 transition-transform">
                  {item.num}
                </span>
                <span className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white group-hover:text-[#34f546] transition-colors">
                  {item.title}
                </span>
              </div>
              <span className="hidden sm:inline-block text-xs text-white/50 font-body group-hover:text-white/80">
                {item.desc}
              </span>
            </button>
          ))}
        </div>

        {/* Studio Info & Creator Contacts */}
        <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5a1df5]/30 text-[#34f546] text-xs font-bold font-mono mb-6">
              <Gamepad2 size={13} />
              <span>116M+ PLATFORM VISITS</span>
            </div>

            <h4 className="text-xl font-bold font-body mb-4">
              Building next-gen community experiences.
            </h4>

            <div className="space-y-4 text-sm text-slate-300 font-body">
              <div className="flex items-center gap-3">
                <Github size={16} className="text-[#34f546]" />
                <a href="https://github.com/Abdidev1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  github.com/Abdidev1
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#34f546]" />
                <span>abdullahmohsin@apexrealms.dev</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#34f546]" />
                <span>Lahore, Pakistan & Global</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                playClick();
                onClose();
                onOpenQuote();
              }}
              className="w-full py-3.5 rounded-full bg-[#34f546] hover:bg-[#2ae03c] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg"
            >
              Commission a Project
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 pt-6 border-t border-white/10 font-body gap-4">
        <div>© {new Date().getFullYear()} Apex Realms Studios. Founded by Abdullah Mohsin (Abdidev1).</div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Abdidev1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://abdidev1.github.io/Apex-Realms-Studios/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Portfolio</a>
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </div>
  );
}
