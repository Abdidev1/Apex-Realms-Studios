import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, AlertCircle } from 'lucide-react';
import { playClick } from '../utils/audio';

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section className="relative z-20 py-24 px-6 md:px-12 bg-slate-950 text-white overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#34f546] text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            <Sparkles size={13} />
            <span>Engineering Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-body">
            The Apex Realms Effect<sup className="text-[#34f546]">®</sup>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg font-body">
            Drag the split-slider to see how we transform sluggish generic game physics into millisecond-accurate competitive platforming.
          </p>
        </div>

        {/* Split Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => {
            isDragging.current = true;
            playClick();
          }}
          onMouseUp={() => {
            isDragging.current = false;
          }}
          onMouseLeave={() => {
            isDragging.current = false;
          }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 cursor-ew-resize bg-slate-900"
        >
          {/* AFTER SLIDE (Apex Realms Proprietary Engine) */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#180a3a] to-black p-6 sm:p-12 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34f546]" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80 font-mono">
                  AFTER : APEX REALMS ENGINE (100% CUSTOM LUAU)
                </span>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#34f546] text-black font-mono">
                +420% Player Retention
              </span>
            </div>

            <div className="my-auto max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#34f546] font-mono block mb-2">
                PRECISION PARKOUR • PIXEL CLIMB
              </span>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-body">
                Silky 60 FPS physics with sub-millisecond jump responsiveness.
              </h3>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <span className="block text-xl sm:text-2xl font-black text-[#34f546] font-body">0.0 ms</span>
                  <span className="text-[11px] text-white/70 font-body">Input Buffer Lag</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <span className="block text-xl sm:text-2xl font-black text-[#34f546] font-body">60 FPS</span>
                  <span className="text-[11px] text-white/70 font-body">Locked on Mobile</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <span className="block text-xl sm:text-2xl font-black text-[#34f546] font-body">116M+</span>
                  <span className="text-[11px] text-white/70 font-body">Happy Gamers</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-white/50 font-mono">
              <span>Raycast Kinematics & Client Prediction</span>
              <span>Stage 240 / 240 Completed</span>
            </div>
          </div>

          {/* BEFORE SLIDE (Clunky default generic mechanics) */}
          <div
            className="absolute inset-y-0 left-0 bg-[#f4f4f6] text-slate-800 p-6 sm:p-12 flex flex-col justify-between overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="min-w-[500px] sm:min-w-[800px] flex flex-col h-full justify-between">
              <div className="flex items-center gap-2 text-slate-500">
                <AlertCircle size={16} className="text-red-500" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  BEFORE : DEFAULT ENGINE TEMPLATE
                </span>
              </div>

              <div className="my-auto max-w-xl">
                <h4 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2">
                  Generic Starter Obby Template
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-slate-700 list-disc list-inside leading-relaxed">
                  <li>Floated jump arcs causing annoying missed edges and rage quits.</li>
                  <li>Spaghetti code prone to script freezing on low-end smartphones.</li>
                  <li>Inconsistent collision triggers desyncing checkpoint saves.</li>
                  <li>High bounce variance ruining competitive speedrunning flow.</li>
                </ul>
              </div>

              <div className="text-xs text-slate-400 font-mono">
                Standard Free Model Obby - High Churn Rate
              </div>
            </div>
          </div>

          {/* Draggable Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] flex items-center justify-center -translate-x-1/2 z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-[#5a1df5]">
              <MoveHorizontal size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
