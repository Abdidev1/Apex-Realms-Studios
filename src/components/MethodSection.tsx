import React from 'react';
import { PenTool, Palette, PlayCircle, ShieldCheck, Code2, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Kinematic & Level Architecture',
    desc: 'We map jump arcs, momentum vectors, and player velocity curves down to the millisecond. Every obstacle is mathematically paced for flow state.',
    icon: PenTool,
  },
  {
    num: '02',
    title: 'Modular Luau Engineering',
    desc: 'Clean, object-oriented Luau architecture separating client prediction, server validation, and DataStore persistence with zero memory leaks.',
    icon: Code2,
  },
  {
    num: '03',
    title: 'Visual FX & Spatial Audio',
    desc: 'Futuristic lighting, volumetric bloom, responsive particle bursts, and reactive 3D audio designed to make every jump and interaction tactile.',
    icon: Sparkles,
  },
  {
    num: '04',
    title: '60 FPS Multi-Platform QA',
    desc: 'Stress-tested across low-end Android phones, iPads, Mac, Windows, and consoles to guarantee zero input lag and consistent 60 FPS performance.',
    icon: CheckCircle2,
  },
];

export default function MethodSection() {
  return (
    <section id="method" className="relative z-20 py-24 px-6 md:px-12 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5a1df5] font-mono">
            Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-body mt-2">
            Our 4-Step Production Pipeline
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-body">
            A battle-tested workflow refined over 116M+ player visits ensuring every game launch is smooth, balanced, and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-[#5a1df5] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#5a1df5] group-hover:text-white transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-body mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-slate-400 font-mono">
                  Verified Phase Deliverable
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
