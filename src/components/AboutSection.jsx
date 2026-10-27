import React from 'react';
import { STUDIO_INFO } from '../data/studioData';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 border-t border-white/5 bg-[#080a0d]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block">
              04 • Sobre o Studio Soul
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Música, Paixão & Excelência
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              O Studio Soul foi concebido em Guarapuava com um propósito claro: oferecer a quem ama música uma estrutura profissional sem abrir mão de um atendimento acolhedor e próximo.
            </p>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Liderado pelo produtor e músico André Prado, combinamos mais de 20 anos de mercado em produção fonográfica, gravação de vídeo clipes e metodologia prática com <strong>aulas individuais</strong> realizadas diretamente nas salas equipadas do estúdio.
            </p>

            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-white/5 text-left">
              <div>
                <p className="text-2xl font-black text-white">+20</p>
                <p className="text-xs text-slate-500 mt-0.5">Anos no mercado</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs text-slate-500 mt-0.5">Climatizado</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">Centro</p>
                <p className="text-xs text-slate-500 mt-0.5">Guarapuava / PR</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80"
                  alt="Estúdio de Gravação Studio Soul"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
