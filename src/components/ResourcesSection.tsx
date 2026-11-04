import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { playClick } from '../utils/audio';

const RESOURCES = [
  {
    type: 'Devlog Article',
    date: 'OCT 2026',
    title: 'LUAU ENGINE NETWORKING: ACHIEVING SUB-15MS REPLICATION',
    desc: 'How custom client prediction, packet compression, and state interpolation eliminate phantom hits and rubberbanding in competitive multiplayer.',
    bg: 'bg-slate-900 text-white',
    border: 'border-slate-800',
    typeColor: 'bg-white/10 text-white',
  },
  {
    type: 'Case Study',
    date: 'NOV 2026',
    title: 'SCALING PIXEL CLIMB: 240 STAGES STREAMED WITH ZERO MEMORY LEAKS',
    desc: 'Deep dive into procedural spatial chunking, dynamic asset garbage collection, and keeping frame rates locked at 60 FPS on 2GB RAM devices.',
    bg: 'bg-slate-900 text-white',
    border: 'border-slate-800',
    typeColor: 'bg-[#34f546]/20 text-[#34f546]',
  },
  {
    type: 'Studio Blueprint',
    date: 'NOV 2026',
    title: 'THE INDIE ROBLOX BLUEPRINT: FROM ZERO TO 116M+ VISITS',
    desc: 'The comprehensive engineering guide to architectural design, player progression curves, fair monetization loops, and community management.',
    bg: 'bg-gradient-to-br from-[#5a1df5] to-[#7b3df8] text-white',
    border: 'border-[#5a1df5]',
    typeColor: 'bg-white/20 text-white',
  },
];

export default function ResourcesSection() {
  return (
    <section className="relative z-20 py-24 md:py-36 px-6 md:px-12 bg-white text-slate-900 border-t border-slate-100 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#0a0524] font-black uppercase leading-[0.9]">
              LATEST STUDIO <br />
              <span className="text-[#5a1df5]">RESOURCES</span>
            </h2>
          </div>

          <button
            onClick={playClick}
            className="self-start md:self-end px-7 py-3 rounded-full border border-slate-300 hover:border-slate-900 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Explore All Devlogs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {RESOURCES.map((item, idx) => (
            <div
              key={idx}
              onClick={playClick}
              className={`p-8 rounded-3xl ${item.bg} border ${item.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between group min-h-[360px]`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${item.typeColor}`}>
                    {item.type}
                  </span>
                  <span className="text-xs font-mono opacity-60">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-tight group-hover:underline decoration-2">
                  {item.title}
                </h3>

                <p className="mt-4 text-xs sm:text-sm opacity-80 leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider font-mono">
                <span>Read Full Devlog</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
