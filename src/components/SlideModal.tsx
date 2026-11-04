import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';
import { SlideItem } from './ShowcaseSection';
import { playClick, playSlide } from '../utils/audio';

interface SlideModalProps {
  slide: SlideItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
  onNextSlide?: () => void;
  onPrevSlide?: () => void;
}

export default function SlideModal({
  slide,
  onClose,
  onOpenQuote,
  onNextSlide,
  onPrevSlide,
}: SlideModalProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'secrets' | 'impact'>('preview');

  if (!slide) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-800/80 flex items-center justify-between text-white bg-slate-900/50">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34f546]" />
            <h3 className="text-sm font-bold tracking-tight text-white font-body truncate">
              {slide.title}
            </h3>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              · {slide.category}
            </span>
          </div>

          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="overflow-y-auto p-6 flex-1 flex flex-col gap-6">
          {/* Main Visual Presentation Frame 16:9 */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-xl group">
            <img
              src={slide.image}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Top Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#34f546] font-mono text-xs font-bold border border-white/15">
              100% NATIVE POWERPOINT (.PPTX)
            </div>
          </div>

          {/* Interactive Inspection Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
            <button
              onClick={() => {
                playClick();
                setActiveTab('preview');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-colors cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-white text-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Vue d'ensemble
            </button>
            <button
              onClick={() => {
                playClick();
                setActiveTab('secrets');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-colors cursor-pointer ${
                activeTab === 'secrets'
                  ? 'bg-[#5a1df5] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Anatomie Technique PPT
            </button>
            <button
              onClick={() => {
                playClick();
                setActiveTab('impact');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-colors cursor-pointer ${
                activeTab === 'impact'
                  ? 'bg-[#34f546] text-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Impact Business
            </button>
          </div>

          {/* Tab Contents */}
          {activeTab === 'preview' && (
            <div className="space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {slide.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                  >
                    ✦ {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'secrets' && (
            <div className="space-y-3">
              <div className="text-xs uppercase font-bold text-slate-400 font-mono">
                Secrets de conception native Microsoft PowerPoint :
              </div>
              <div className="space-y-2">
                {slide.techSecrets.map((secret, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-[#34f546] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 font-body">{secret}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#5a1df5]/20 to-[#34f546]/10 border border-[#34f546]/30">
              <span className="text-xs uppercase font-bold text-[#34f546] font-mono block mb-1">
                Résultat client vérifié
              </span>
              <p className="text-2xl font-black text-white font-body">
                {slide.metrics}
              </p>
              <p className="text-xs text-slate-400 mt-2 font-body">
                Mesuré lors de l'audit de satisfaction ISO 9001 post-livraison.
              </p>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/50">
          <div className="flex items-center gap-2">
            {onPrevSlide && (
              <button
                onClick={() => {
                  playSlide();
                  onPrevSlide();
                }}
                className="px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-xs font-semibold text-slate-300 cursor-pointer flex items-center gap-1"
              >
                <ChevronLeft size={14} /> Précédente
              </button>
            )}
            {onNextSlide && (
              <button
                onClick={() => {
                  playSlide();
                  onNextSlide();
                }}
                className="px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-xs font-semibold text-slate-300 cursor-pointer flex items-center gap-1"
              >
                Suivante <ChevronRight size={14} />
              </button>
            )}
          </div>

          <button
            onClick={() => {
              playClick();
              onClose();
              onOpenQuote();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#5a1df5] hover:bg-[#4711d4] text-white text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer"
          >
            Demander un devis pour ce format
          </button>
        </div>
      </div>
    </div>
  );
}
