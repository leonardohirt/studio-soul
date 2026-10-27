import React from 'react';
import { REHEARSAL_PACKAGES } from '../data/studioData';
import { Clock } from 'lucide-react';

export default function RehearsalSection({ onOpenBooking }) {
  return (
    <section id="ensaio" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
            03 • Salas de Ensaio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pacotes de Hora de Ensaio
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Salas tratadas com ar condicionado, bateria completa e amplificadores para ensaios individuais ou bandas completas.
          </p>
        </div>

        {/* Minimal clean list / cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
          {REHEARSAL_PACKAGES.map((pkg) => (
            <div
              key={pkg.number}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                pkg.highlight
                  ? 'border-cyan-500/50 bg-cyan-950/20'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  0{pkg.number}
                </span>
                <p className="text-sm font-semibold text-white mt-2 mb-4 leading-snug">
                  {pkg.description}
                </p>
              </div>

              <div>
                <span className="text-2xl font-black text-cyan-400 block mb-3">
                  {pkg.priceFormatted}
                </span>
                <button
                  onClick={() => onOpenBooking('ensaio', `Pacote ${pkg.number}: ${pkg.description}`)}
                  className="w-full py-2 rounded-xl text-xs font-semibold border border-white/10 hover:border-white/30 text-white transition-colors"
                >
                  Reservar
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-500 text-center">
          * Horários após as 22h, domingos e feriados possuem alteração nos valores. Atualizado em 2026.
        </p>

      </div>
    </section>
  );
}
