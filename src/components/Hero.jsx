import React from 'react';
import { ArrowRight, Music, Disc } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Minimal CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="flex flex-col items-center lg:items-start gap-4">
              <img
                src="/images/logo-studio-soul.png"
                alt="Studio Soul - Instituto de Música"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              />
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Guarapuava, Paraná
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Studio Soul.
              <span className="block text-slate-400 font-light mt-1 text-3xl sm:text-5xl lg:text-6xl">
                Instituto de Música.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
              Aulas individuais no estúdio, ensaios climatizados, produção musical e gravação de vídeo clipes sob a direção de André Prado (+20 anos de experiência em áudio e vídeo).
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenBooking('aula')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-all duration-200"
              >
                Agendar Aula
              </button>

              <button
                onClick={() => onOpenBooking('gravacao')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:border-white transition-all duration-200"
              >
                Gravação & Vídeo Clipe
              </button>
            </div>

            {/* Quick clean info */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-xs text-slate-400 font-light">
              <div>
                <span className="block font-semibold text-white">Aulas Individuais</span>
                <span>a partir de R$ 170/mês</span>
              </div>
              <div className="w-px h-6 bg-white/10 hidden sm:block"></div>
              <div>
                <span className="block font-semibold text-white">Áudio & Vídeo</span>
                <span>Gravação de Clipes</span>
              </div>
              <div className="w-px h-6 bg-white/10 hidden sm:block"></div>
              <div>
                <span className="block font-semibold text-white">Ensaios</span>
                <span>a partir de R$ 50/hora</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photo of André Prado */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                <img
                  src="/images/andre-prado.jpg"
                  alt="André Prado - Studio Soul Guarapuava"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-widest text-cyan-400 font-medium">Direção & Produção</p>
                  <h3 className="text-xl font-bold text-white">André Prado</h3>
                  <p className="text-xs text-slate-400 mt-0.5">+20 anos no ramo de áudio e vídeo</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
