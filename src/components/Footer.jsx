import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <img
            src="/images/logo-studio-soul.png"
            alt="Studio Soul - Instituto de Música"
            className="h-8 w-auto object-contain"
          />
          <div>
            <span className="text-sm font-bold text-white tracking-tight">Studio Soul</span>
            <span className="text-slate-500 ml-2">Instituto de Música • Guarapuava, PR</span>
          </div>
        </div>

        <p className="text-[11px] text-center sm:text-left">
          © {new Date().getFullYear()} Studio Soul — Instituto de Música. Todos os direitos reservados.
        </p>

        <button
          onClick={scrollToTop}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
