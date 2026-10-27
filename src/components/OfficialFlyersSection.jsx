import React, { useState } from 'react';
import { Eye, FileText, CheckCircle2, X } from 'lucide-react';

export default function OfficialFlyersSection() {
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  const flyers = [
    {
      title: "Mensalidades - Instituto de Música",
      subtitle: "Planos Mensal, Trimestral, Semestral e Anual",
      image: "/images/tabela-mensalidades.jpg"
    },
    {
      title: "Orçamento Gravação - André Prado",
      subtitle: "Pacotes de 1, 2 e 3 Músicas Completas",
      image: "/images/orcamento-gravacao.jpg"
    },
    {
      title: "Pacotes de Hora de Ensaio",
      subtitle: "Atualização Janeiro 2026 (Salas 1 a 5)",
      image: "/images/pacotes-ensaio.jpg"
    },
    {
      title: "Identidade Studio Soul",
      subtitle: "Áudio & Vídeo — Guarapuava / PR",
      image: "/images/logo-studio-soul.jpg"
    }
  ];

  return (
    <section className="py-16 relative bg-[#06080c] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Material Oficial Studio Soul</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Encartes e Tabelas Oficiais
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Clique em qualquer imagem para visualizar em alta resolução.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {flyers.map((flyer, index) => (
            <div
              key={index}
              onClick={() => setSelectedFlyer(flyer)}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer hover:border-cyan-400 transition-all duration-300 hover:scale-[1.03] shadow-lg"
            >
              <div className="h-60 sm:h-72 bg-slate-950 flex items-center justify-center p-2">
                <img
                  src={flyer.image}
                  alt={flyer.title}
                  className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-3 bg-[#0a0d14]/95 border-t border-white/5 text-center">
                <p className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                  {flyer.title}
                </p>
                <p className="text-[10px] text-slate-400 truncate mt-0.5">{flyer.subtitle}</p>
                <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400">
                  <Eye className="w-3 h-3" />
                  <span>Ampliar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox for flyer */}
      {selectedFlyer && (
        <div
          onClick={() => setSelectedFlyer(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#0d121d] rounded-2xl overflow-hidden border border-cyan-500/40 p-4 shadow-2xl"
          >
            <button
              onClick={() => setSelectedFlyer(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-slate-300 hover:text-white flex items-center justify-center border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-3">
              <h4 className="text-base font-bold text-white">{selectedFlyer.title}</h4>
              <p className="text-xs text-slate-400">{selectedFlyer.subtitle}</p>
            </div>
            <div className="max-h-[75vh] flex items-center justify-center overflow-auto p-2">
              <img
                src={selectedFlyer.image}
                alt={selectedFlyer.title}
                className="max-h-[72vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
