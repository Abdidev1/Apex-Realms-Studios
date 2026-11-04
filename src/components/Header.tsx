import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { toggleAudio, playClick } from '../utils/audio';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenQuote: () => void;
}

export default function Header({ onOpenMenu, onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [themeMode, setThemeMode] = useState<'violet' | 'white' | 'green' | 'cyan' | 'dark'>('violet');
  const [audioOn, setAudioOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const winHeight = window.innerHeight;
      if (scrollY < winHeight * 0.8) {
        setThemeMode('violet');
      } else if (scrollY < winHeight * 1.8) {
        setThemeMode('white');
      } else if (scrollY < winHeight * 2.8) {
        setThemeMode('green');
      } else if (scrollY < winHeight * 3.8) {
        setThemeMode('white');
      } else if (scrollY < winHeight * 4.8) {
        setThemeMode('cyan');
      } else {
        setThemeMode('dark');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const nextState = toggleAudio();
    setAudioOn(nextState);
    if (nextState) playClick();
  };

  const isLightBackground = themeMode === 'white' || themeMode === 'cyan';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-5 flex items-center justify-between ${
        isScrolled
          ? isLightBackground
            ? 'bg-white/85 backdrop-blur-md shadow-xs'
            : 'bg-black/30 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Brand Zone: Original Logo Image */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          playClick();
        }}
        className="group flex items-center transition-transform duration-200 select-none hover:scale-105"
      >
        <img 
          src="/assets/images/logo.png" 
          alt="Apex Realms Studios Logo" 
          className="h-11 md:h-12 w-auto object-contain rounded-xl shadow-xl border border-white/20 bg-black/40 p-0.5" 
        />
      </a>

      {/* Center Zone: Floating Pill Menu */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            playClick();
            onOpenMenu();
          }}
          className={`flex items-center gap-2.5 px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer ${
            isLightBackground
              ? 'bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 border border-slate-900/10'
              : 'bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md'
          }`}
          aria-label="Open Navigation Menu"
        >
          <span className="flex items-center gap-1">
            <span className={`w-1.5 h-1.5 rounded-full ${isLightBackground ? 'bg-slate-900' : 'bg-white'}`} />
            <span className={`w-1.5 h-1.5 rounded-full ${isLightBackground ? 'bg-slate-900' : 'bg-white'}`} />
            <span className={`w-1.5 h-1.5 rounded-full ${isLightBackground ? 'bg-slate-900' : 'bg-white'}`} />
          </span>
          <span className="font-body">Menu</span>
        </button>

        {/* Ambient sound toggle */}
        <button
          onClick={handleAudioToggle}
          className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
            isLightBackground
              ? 'text-slate-700 hover:bg-slate-100'
              : 'text-white/80 hover:bg-white/10'
          }`}
          title={audioOn ? 'Mute Sound FX' : 'Enable 8-Bit Ambient FX'}
          aria-label="Toggle Sound"
        >
          {audioOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      </div>

      {/* Primary Action CTA */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            playClick();
            onOpenQuote();
          }}
          className={`px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm font-extrabold tracking-tight transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap ${
            isLightBackground
              ? 'bg-[#5a1df5] hover:bg-[#4b14d8] text-white'
              : themeMode === 'green'
              ? 'bg-slate-950 hover:bg-black text-white'
              : 'bg-white hover:bg-slate-100 text-[#5a1df5]'
          }`}
        >
          Commission Studio
        </button>
      </div>
    </header>
  );
}
