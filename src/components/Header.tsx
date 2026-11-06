import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { toggleAudio, playClick } from '../utils/audio';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
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
      {/* Brand Zone: Bold Neon Green APEX REALMS STUDIOS text */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          playClick();
        }}
        className="group flex items-center gap-2 transition-transform duration-200 select-none hover:scale-105"
      >
        <span className="font-display font-black text-lg md:text-xl tracking-tight uppercase text-[#34f546] drop-shadow-[0_0_12px_rgba(52,245,70,0.6)]">
          APEX REALMS STUDIOS
        </span>
      </a>

      {/* Right Zone: Ambient sound toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleAudioToggle}
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
            isLightBackground
              ? 'text-slate-700 hover:bg-slate-100'
              : 'text-white/85 hover:bg-white/10'
          }`}
          title={audioOn ? 'Mute Sound FX' : 'Enable 8-Bit Ambient FX'}
          aria-label="Toggle Sound"
        >
          {audioOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      </div>
    </header>
  );
}
