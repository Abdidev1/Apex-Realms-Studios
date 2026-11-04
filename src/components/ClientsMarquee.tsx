import React from 'react';

const ECOSYSTEM = [
  'ROBLOX ECOSYSTEM',
  'LUAU LANGUAGE',
  'HACK CLUB',
  'BLENDER 3D',
  'GITHUB',
  'DEVFORUM',
  'DISCORD COMMUNITY',
  'APEX REALMS STUDIOS',
  'PIXEL CLIMB',
  'FASTFLAGS ENGINE',
];

export default function ClientsMarquee() {
  return (
    <section className="relative z-20 py-16 bg-white border-y border-slate-200 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
          Powered by industry-standard engineering tools and global developer communities
        </span>
      </div>

      {/* Infinite Marquee Track */}
      <div className="flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex items-center gap-12 sm:gap-20 whitespace-nowrap animate-[marquee_26s_linear_infinite]">
          {[...ECOSYSTEM, ...ECOSYSTEM].map((item, idx) => (
            <span
              key={idx}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tighter text-slate-300 hover:text-slate-900 transition-colors duration-300 font-display uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
