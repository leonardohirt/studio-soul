import React from 'react';
import { LESSON_PLANS } from '../data/studioData';
import { Check, ArrowRight } from 'lucide-react';

export default function CoursesSection({ onOpenBooking }) {
  const instruments = [
    "Violão", "Guitarra", "Teclado / Piano", "Canto & Técnica Vocal", 
    "Bateria Acústica", "Contrabaixo", "Produção Musical"
  ];

  return (
    <section id="aulas" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
            01 • Instituto de Música
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Aulas de Música
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Metodologia prática com <strong className="text-white font-medium">aulas individuais</strong> diretamente nas salas do estúdio. Do primeiro acorde à técnica avançada, vivenciando o ambiente real de ensaio e gravação.
          </p>

          {/* Instruments tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {instruments.map((inst) => (
              <span
                key={inst}
                className="text-xs px-3.5 py-1.5 rounded-full border border-white/10 text-slate-300 bg-white/[0.02]"
              >
                {inst}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing Grid (From Flyer) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LESSON_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                plan.popular
                  ? 'border-cyan-500/50 bg-cyan-950/20'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {plan.name}
                  </span>
                  {plan.popular && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-400 text-black">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-4 mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    R$ {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 ml-1">/mês</span>
                  <p className="text-[11px] text-slate-400 mt-1">1 aula semanal (50 a 60 min)</p>
                </div>

                <ul className="space-y-2 text-xs text-slate-300 font-light mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Individual ou em dupla</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Iniciante ao avançado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Parcelamento até 10x</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenBooking('aula', `Plano ${plan.name} de Aulas`)}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                  plan.popular
                    ? 'bg-cyan-400 hover:bg-cyan-300 text-black'
                    : 'border border-white/15 text-white hover:bg-white/10'
                }`}
              >
                Agendar Experimental
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
