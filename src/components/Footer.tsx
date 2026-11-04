import React from 'react';
import { ArrowUp, ShieldCheck, Award, Star, Github, Gamepad2, Send } from 'lucide-react';
import { playClick } from '../utils/audio';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenMenu: () => void;
}

export default function Footer({ onOpenQuote, onOpenMenu }: FooterProps) {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative z-20 bg-[#5a1df5] text-white pt-24 pb-12 px-6 md:px-12 curved-top-white shadow-[0_-25px_60px_rgba(0,0,0,0.25)] select-none overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Giant Top Kicker */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/20 pb-12 mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/70 block mb-2">
              APEX REALMS STUDIOS
            </span>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white font-black uppercase leading-none">
              YOUR REALM. UNLEASHED.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playClick();
                onOpenMenu();
              }}
              className="px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Explore Menu
            </button>
            <button
              onClick={() => {
                playClick();
                onOpenQuote();
              }}
              className="px-8 py-3 rounded-full bg-white hover:bg-slate-100 text-[#5a1df5] font-extrabold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
            >
              Commission Studio
            </button>
          </div>
        </div>

        {/* 4-Column Mega Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/20">
          {/* Column 1 */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-1.5 font-display text-3xl font-extrabold lowercase mb-4">
                <span>apex</span>
                <span className="font-light opacity-90">realms</span>
                <span className="text-xs text-[#34f546] font-mono">studios®</span>
              </div>

              <p className="text-xs text-white/80 font-body leading-relaxed max-w-xs mb-4">
                Founded & Solo-Engineered by <strong>Abdullah Mohsin (Abdidev1)</strong>. Lahore, Pakistan & Global Developer Community.
              </p>

              {/* Verified Badges */}
              <div className="flex items-center gap-3 text-white/90 mb-6">
                <div className="flex items-center gap-1.5 text-xs font-mono bg-white/10 px-2.5 py-1 rounded-md">
                  <Gamepad2 size={14} className="text-[#34f546]" />
                  <span>116M+ Visits</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono bg-white/10 px-2.5 py-1 rounded-md">
                  <Star size={14} className="text-[#34f546] fill-current" />
                  <span>96% Rating</span>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-white/60">
              © {new Date().getFullYear()} Apex Realms Studios. All rights reserved.
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#34f546] font-mono mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-body text-white/90">
              <li><a href="#games" className="hover:text-white hover:underline transition-colors">Games & Obbies</a></li>
              <li><a href="#studio" className="hover:text-white hover:underline transition-colors">About Abdidev1</a></li>
              <li><a href="#method" className="hover:text-white hover:underline transition-colors">Production Pipeline</a></li>
              <li><a href="https://github.com/Abdidev1" target="_blank" rel="noreferrer" className="hover:text-white hover:underline transition-colors">GitHub Repos</a></li>
              <li><a href="#contact" className="hover:text-white hover:underline transition-colors">Commission Us</a></li>
            </ul>
          </div>

          {/* Column 3: CAPABILITIES */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#34f546] font-mono mb-4">
              ENGINEERING
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-body text-white/90">
              <li><a href="#engineering" className="hover:text-white hover:underline transition-colors">Luau Engine Architecture</a></li>
              <li><a href="#engineering" className="hover:text-white hover:underline transition-colors">Procedural Obby Systems</a></li>
              <li><a href="#engineering" className="hover:text-white hover:underline transition-colors">Raycast Physics Kinematics</a></li>
              <li><a href="#engineering" className="hover:text-white hover:underline transition-colors">Multiplayer Networking</a></li>
              <li><a href="#engineering" className="hover:text-white hover:underline transition-colors">Anti-Cheat Frameworks</a></li>
              <li><a href="#engineering" className="hover:text-white hover:underline transition-colors">60 FPS Mobile Optimization</a></li>
            </ul>
          </div>

          {/* Column 4: TOP GAMES */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#34f546] font-mono mb-4">
              FEATURED TITLES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-body text-white/90">
              <li><a href="#games" className="hover:text-white hover:underline transition-colors">Pixel Climb (240 Stages)</a></li>
              <li><a href="#games" className="hover:text-white hover:underline transition-colors">Undead Outbreak (Survival)</a></li>
              <li><a href="#games" className="hover:text-white hover:underline transition-colors">Cart Rush: Neon Odyssey</a></li>
              <li><a href="#games" className="hover:text-white hover:underline transition-colors">Aetheria: Forgotten Realms</a></li>
              <li><a href="#games" className="hover:text-white hover:underline transition-colors">Hack Club Campfire Jam</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 font-mono gap-4">
          <div className="flex items-center gap-6">
            <a href="https://github.com/Abdidev1" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Github size={14} />
              <span>GitHub (@Abdidev1)</span>
            </a>
            <a href="https://abdidev1.github.io/Apex-Realms-Studios/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Discord Server
            </a>
            <a href="https://roblox.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Roblox Group
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white cursor-pointer ml-4">
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
