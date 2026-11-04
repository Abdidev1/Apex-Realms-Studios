import React from 'react';
import { Star, ShieldCheck, Award, Users, Code2 } from 'lucide-react';
import { playClick } from '../utils/audio';

const BADGES = [
  {
    title: '116M+ TOTAL VISITS',
    sub: 'GLOBAL ENGAGEMENT',
    badgeText: 'Verified 2026',
    rating: 'Top 1% Creator Tier',
    desc: 'Hundreds of thousands of concurrent hours played across our original interactive Roblox titles.',
    icon: Users,
    gradient: 'from-[#1e0e4f] to-[#2c1370]',
  },
  {
    title: '100% SOLO ENGINEERED',
    sub: 'BY ABDULLAH MOHSIN',
    badgeText: 'Abdidev1 Lead',
    rating: 'Full Stack Luau',
    desc: 'Architecture, math kinematics, level modeling, user interfaces, anti-cheat, and audio production.',
    icon: Code2,
    gradient: 'from-[#2b0e70] via-[#5a1df5] to-[#40129e]',
  },
  {
    title: '96% POSITIVE APPROVAL',
    sub: 'COMMUNITY RATED',
    badgeText: 'Over 25,000 Votes',
    rating: '5.0 Star Feedback',
    desc: 'Uncompromising dedication to fair play, zero pay-to-win mechanics, and bug-free gameplay updates.',
    icon: Star,
    gradient: 'from-[#1e0e4f] to-[#2c1370]',
  },
];

export default function QualityCertificationsSection() {
  return (
    <section className="relative z-20 py-28 md:py-36 px-6 md:px-12 bg-[#0c0424] text-white curved-top-white shadow-[0_-25px_60px_rgba(0,0,0,0.3)] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Monumental Headline */}
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white font-black uppercase leading-[0.88] mb-16">
          ENGINEERED FOR <br />
          <span className="text-[#5a1df5]">EXCELLENCE</span>
        </h2>

        {/* 3 Floating 3D Badge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {BADGES.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                onClick={playClick}
                className={`p-8 rounded-3xl bg-gradient-to-b ${badge.gradient} border border-white/20 shadow-2xl hover:border-[#34f546] hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center justify-between min-h-[380px] text-center group`}
              >
                <div className="w-full flex items-center justify-between text-xs font-mono text-white/60">
                  <span>Verified Metric</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#34f546] font-bold">
                    {badge.badgeText}
                  </span>
                </div>

                {/* Center Icon Medal */}
                <div className="my-auto flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mb-6 shadow-inner group-hover:border-[#34f546] group-hover:scale-110 transition-all">
                    <Icon size={36} className="text-[#34f546]" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                    {badge.title}
                  </h3>
                  {badge.sub && (
                    <span className="text-xs uppercase font-bold text-white/70 font-mono tracking-widest mt-1">
                      {badge.sub}
                    </span>
                  )}
                </div>

                <div className="w-full pt-4 border-t border-white/10">
                  <div className="text-sm font-bold text-[#34f546] font-mono mb-1">
                    {badge.rating}
                  </div>
                  <p className="text-xs text-white/70 font-body leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
