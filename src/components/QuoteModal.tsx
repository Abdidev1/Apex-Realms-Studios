import React, { useState } from 'react';
import { X, Check, ShieldCheck, Clock, FileText, Send } from 'lucide-react';
import { playClick } from '../utils/audio';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROJECT_TYPES = [
  'Présentation Stratégique & Comex',
  'Pitch Deck & Levée de Fonds',
  'Template / Masque Corporate .potx',
  'Convention & Événement Hybride',
  'Formation & Coaching Équipes',
];

const VOLUMES = ['Moins de 20 slides', '20 à 50 slides', '50 à 100 slides', '100+ slides'];
const DEADLINES = ['Urgent (< 72h)', '1 à 2 semaines', 'Sous 1 mois', 'Projet au long cours'];

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [volume, setVolume] = useState(VOLUMES[1]);
  const [deadline, setDeadline] = useState(DEADLINES[1]);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 sm:px-8 py-5 bg-[#5a1df5] text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#34f546] font-mono">
              <ShieldCheck size={14} />
              <span>Engagement Qualité ISO 9001 · Accord NDA Garanti</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-body mt-1">
              Demander un devis sur mesure
            </h3>
          </div>

          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#34f546]/20 text-[#15803d] flex items-center justify-center mb-6">
                <Check size={32} className="stroke-[3]" />
              </div>
              <h4 className="text-2xl font-bold font-body text-slate-900">
                Demande bien reçue !
              </h4>
              <p className="mt-3 text-slate-600 max-w-md text-sm sm:text-base font-body leading-relaxed">
                Notre directeur conseil étudie votre brief en toute confidentialité. Un devis détaillé et chiffré vous sera transmis sous <strong>2 heures ouvrées</strong>.
              </p>
              <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left w-full max-w-md text-xs space-y-1 text-slate-600 font-mono">
                <div>Type : {projectType}</div>
                <div>Volume : {volume}</div>
                <div>Échéance : {deadline}</div>
                <div>Contact : {formData.email || 'transmis'}</div>
              </div>
              <button
                onClick={() => {
                  playClick();
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-8 px-8 py-3 rounded-full bg-slate-900 text-white text-xs font-bold tracking-tight uppercase hover:bg-black transition-colors cursor-pointer"
              >
                Fermer la fenêtre
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type of project */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                  1. Quel est votre besoin ?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => {
                        playClick();
                        setProjectType(type);
                      }}
                      className={`text-left p-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        projectType === type
                          ? 'bg-[#5a1df5] text-white border-[#5a1df5] shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Volume and Deadline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                    2. Volume estimé
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5a1df5]"
                  >
                    {VOLUMES.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                    3. Échéance souhaitée
                  </label>
                  <select
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5a1df5]"
                  >
                    {DEADLINES.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                  4. Vos coordonnées professionnelles
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    required
                    placeholder="Nom & Prénom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5a1df5]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Entreprise / Organisation"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5a1df5]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email professionnel"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5a1df5]"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone (facultatif)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5a1df5]"
                  />
                </div>
                <textarea
                  rows={3}
                  placeholder="Détails du projet, contexte de la prise de parole..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full mt-3 p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5a1df5]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#5a1df5] hover:bg-[#4711d4] text-white font-bold text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={15} />
                <span>Envoyer ma demande (Réponse sous 2h)</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
