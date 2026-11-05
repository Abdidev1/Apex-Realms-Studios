import React, { useState } from 'react';
import { Plus, Minus, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { playClick } from '../utils/audio';

const TESTIMONIALS = [
  {
    quote: "I was playing tower of hell and i just decided to join, i finished all the stages, i didn't talk much, i hope you guys get even more popular, or whatever",
    author: "Ezra",
    company: "Verified Community Member",
  },
  {
    quote: "I like how kind the owner was, and the obby is so cool and, color full , i love it so much, tysm for trusting me to be a member",
    author: "Its_Noraineskiii",
    company: "Verified Community Member",
  },
  {
    quote: "This obby is a high quality obby with manyyyyy easy levels!",
    author: "SpiderWoman",
    company: "Verified Community Member",
  },
];

const FAQS = [
  {
    q: 'What is Apex Realms Studios?',
    a: 'Apex Realms Studios is a Roblox game development studio and community dedicated to engineering engaging, high quality platforming experiences, obbies, and interactive games on Roblox.',
  },
  {
    q: 'Do games by Apex Realms Studios support cross platform play?',
    a: 'Yes. All games are built to support seamless cross platform functionality across PC, mobile, tablet, and console devices.',
  },
  {
    q: 'How can I join and engage with the community?',
    a: 'You can join the official Apex Realms Studios Roblox Group directly through the Roblox platform to receive operational updates, access game specific perks, and connect with other players across the community.',
  },
  {
    q: 'How are game data and stage progress saved?',
    a: 'All stage progression and player stats are saved automatically using secure cloud DataStore systems. Your progress syncs across your sessions every time you leave or rejoin a game.',
  },
  {
    q: 'Can community members suggest features or report bugs?',
    a: 'Yes! Feedback, feature requests, and bug reports are actively welcomed through the official Roblox community group wall and developer channels to help improve continuous update cycles.',
  },
];

export default function TestimonialsAndFaqSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const nextTestimonial = () => {
    playClick();
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    playClick();
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const toggleFaq = (idx: number) => {
    playClick();
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="relative z-20 py-24 md:py-36 px-6 md:px-12 bg-white text-slate-900 border-t border-slate-100 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials Slider */}
        <div className="mb-28">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5a1df5] font-mono">
              Player & Developer Testimonials
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-[#5a1df5] hover:bg-[#4711d4] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm relative overflow-hidden">
            <Quote size={48} className="text-[#5a1df5]/15 absolute top-6 right-6 pointer-events-none" />
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug font-body relative z-10 max-w-4xl">
              "{TESTIMONIALS[currentTestimonial].quote}"
            </p>
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 font-mono gap-2">
              <span className="font-bold text-slate-800">
                {TESTIMONIALS[currentTestimonial].author}
              </span>
              <span>{TESTIMONIALS[currentTestimonial].company}</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#0a0524] font-black uppercase leading-[0.9]">
              WE ANSWER <span className="text-[#5a1df5]">YOUR QUESTIONS</span>
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left text-lg sm:text-xl font-bold text-slate-900 font-body hover:text-[#5a1df5] transition-colors cursor-pointer gap-4"
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-sm sm:text-base text-slate-600 font-body leading-relaxed max-w-3xl animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
