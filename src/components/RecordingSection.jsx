import React, { useState } from 'react';
import { RECORDING_PACKAGES, AUDIO_SAMPLES, STUDIO_INFO } from '../data/studioData';
import { Play, Pause, Volume2, Check } from 'lucide-react';

export default function RecordingSection({ onOpenBooking }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (index) => {
    if (currentTrackIndex === index && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  return (
    <section id="gravacao" className="py-24 border-t border-white/5 bg-[#080a0d]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
            02 • Áudio & Vídeo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Gravações & Vídeo Clipes
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Direção e produção artística por André Prado (+20 anos de experiência em áudio e vídeo). 
            Produção fonográfica completa (arranjos, captação, mix e master) e serviço profissional de gravação de vídeo clipes para artistas e bandas.
          </p>
        </div>

        {/* Minimal Audio Preview */}
        <div className="mb-14 p-6 rounded-2xl border border-white/10 bg-white/[0.01]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Amostras Gravadas no Estúdio
            </span>
            <div className="flex items-center gap-1.5 text-xs text-cyan-400">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Mastering Studio</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {AUDIO_SAMPLES.map((sample, idx) => {
              const active = currentTrackIndex === idx;
              return (
                <div
                  key={sample.id}
                  onClick={() => togglePlay(idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    active
                      ? 'border-cyan-500/50 bg-cyan-950/20'
                      : 'border-white/5 bg-white/[0.01] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        active && isPlaying
                          ? 'bg-cyan-400 text-black'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      {active && isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                    </button>
                    <div>
                      <p className="text-xs font-bold text-white">{sample.title}</p>
                      <p className="text-[11px] text-slate-400">{sample.artist}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{sample.duration}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Packages Grid (From Flyer) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {RECORDING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                pkg.popular
                  ? 'border-cyan-500/50 bg-cyan-950/20'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {pkg.name}
                  </span>
                  {pkg.popular && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-400 text-black">
                      Destaque
                    </span>
                  )}
                </div>

                <div className="mt-4 mb-4">
                  <span className="text-3xl font-black text-white">
                    {pkg.priceFormatted}
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1">Produção Completa</p>
                </div>

                <ul className="space-y-2 text-xs text-slate-300 font-light border-t border-white/5 pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{pkg.songsCount} produção{pkg.songsCount > 1 ? 's' : ''} completa{pkg.songsCount > 1 ? 's' : ''}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Arranjos musicais personalizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Mixagem e Masterização comercial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Direção de André Prado</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenBooking('gravacao', pkg.name)}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                  pkg.popular
                    ? 'bg-cyan-400 hover:bg-cyan-300 text-black'
                    : 'border border-white/15 text-white hover:bg-white/10'
                }`}
              >
                Agendar Sessão
              </button>
            </div>
          ))}
        </div>

        {/* Video Clipe Callout Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900/40 to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">
              Serviço Audiovisual Completo
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Gravação de Vídeo Clipes & Live Sessions
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl leading-relaxed">
              Produzimos seu <strong className="text-white font-medium">vídeo clipe musical</strong> completo: captação em alta resolução, iluminação cênica de estúdio, direção artística e edição profissional para lançamentos no YouTube, Reels e redes sociais.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('gravacao', 'Produção de Vídeo Clipe')}
            className="px-6 py-3 rounded-full bg-white hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shrink-0"
          >
            Orçamento de Vídeo Clipe
          </button>
        </div>

        {/* Clean payment note */}
        <p className="text-xs text-slate-400 text-center mt-8">
          Formas de pagamento: Pix, Cartão de Crédito e Dinheiro.
        </p>

      </div>
    </section>
  );
}
