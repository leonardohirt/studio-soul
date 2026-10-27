import React, { useState } from 'react';
import { LESSON_PLANS, RECORDING_PACKAGES, REHEARSAL_PACKAGES, STUDIO_INFO } from '../data/studioData';
import { Calculator, Check, ArrowRight, Phone, Sparkles, CreditCard, Music, Disc, Radio } from 'lucide-react';

export default function PricingCalculator({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('aulas'); // 'aulas' | 'gravacao' | 'ensaio'

  // States para Aulas
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(2); // Semestral default
  const [selectedFormat, setSelectedFormat] = useState('individual'); // 'individual' | 'dupla'

  // States para Gravação
  const [selectedRecordingPkg, setSelectedRecordingPkg] = useState(1); // 2 músicas default
  const [includeVideoClip, setIncludeVideoClip] = useState(false);

  // States para Ensaios
  const [selectedRehearsalIndex, setSelectedRehearsalIndex] = useState(4); // Pacote 5 VIP default
  const [rehearsalHours, setRehearsalHours] = useState(2);

  // Cálculos Aulas
  const currentPlan = LESSON_PLANS[selectedPlanIndex];
  const lessonMonthlyPrice = selectedFormat === 'individual' ? currentPlan.price : Math.round(currentPlan.price * 0.85);

  // Cálculos Gravação
  const currentPkg = RECORDING_PACKAGES[selectedRecordingPkg];
  const videoClipAddon = 800; // Valor base para clipe/live session
  const totalRecording = currentPkg.price + (includeVideoClip ? videoClipAddon : 0);

  // Cálculos Ensaio
  const currentRehearsal = REHEARSAL_PACKAGES[selectedRehearsalIndex];
  const totalRehearsal = currentRehearsal.price * rehearsalHours;

  const handleSendToWhatsApp = (serviceTitle, totalText) => {
    const text = encodeURIComponent(
      `Olá, Studio Soul! Fiz uma simulação no site para *${serviceTitle}* com valor aproximado de *${totalText}*. Gostaria de confirmar disponibilidade e fechar!`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="valores" className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-3">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>Simulador & Tabela Unificada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Planos, Valores e <span className="text-gradient-metallic">Calculadora</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Transparência total nos preços. Simule seu investimento em aulas, produções fonográficas ou horas de ensaio com facilidade de pagamento em até 10x.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-white/5 border border-white/10 flex gap-2">
            <button
              onClick={() => setActiveTab('aulas')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'aulas'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Music className="w-4 h-4" />
              Aulas de Música
            </button>

            <button
              onClick={() => setActiveTab('gravacao')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'gravacao'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Disc className="w-4 h-4" />
              Gravação & Produção
            </button>

            <button
              onClick={() => setActiveTab('ensaio')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'ensaio'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Radio className="w-4 h-4" />
              Horas de Ensaio
            </button>
          </div>
        </div>

        {/* Tab Content: Aulas */}
        {activeTab === 'aulas' && (
          <div className="max-w-4xl mx-auto rounded-3xl glass-panel-glow p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    1. Escolha a Periodicidade:
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {LESSON_PLANS.map((plan, idx) => (
                      <button
                        key={plan.name}
                        onClick={() => setSelectedPlanIndex(idx)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          selectedPlanIndex === idx
                            ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md'
                            : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        <p className="text-xs font-bold">{plan.name}</p>
                        <p className="text-sm font-black text-cyan-400 mt-1">R$ {plan.price}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    2. Modalidade:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedFormat('individual')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedFormat === 'individual'
                          ? 'bg-cyan-500/20 border-cyan-400 text-white'
                          : 'bg-white/5 border-white/5 text-slate-400'
                      }`}
                    >
                      <p className="text-xs font-bold">Individual (1 aluno)</p>
                      <p className="text-[11px] text-slate-400">Atenção 100% personalizada</p>
                    </button>
                    <button
                      onClick={() => setSelectedFormat('dupla')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedFormat === 'dupla'
                          ? 'bg-cyan-500/20 border-cyan-400 text-white'
                          : 'bg-white/5 border-white/5 text-slate-400'
                      }`}
                    >
                      <p className="text-xs font-bold">Dupla / Conjunto</p>
                      <p className="text-[11px] text-cyan-400">15% de desconto p/ pessoa</p>
                    </button>
                  </div>
                </div>

                <div className="text-xs text-slate-400 space-y-1">
                  <p className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    1 aula semanal de 50 a 60 minutos
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    Parcelamento no cartão de crédito em até 10x
                  </p>
                </div>
              </div>

              {/* Total Box */}
              <div className="md:col-span-5 p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 text-center flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-cyan-400 tracking-wider">
                    Plano {currentPlan.name}
                  </span>
                  <div className="mt-3">
                    <span className="text-4xl font-black text-white">
                      R$ {lessonMonthlyPrice}
                    </span>
                    <span className="text-xs text-slate-400 block mt-1">mensais / 1 aula semanal</span>
                  </div>
                  <p className="text-[11px] text-emerald-400 mt-2 font-medium">
                    Até 10x no cartão sem burocracia
                  </p>
                </div>

                <div className="mt-6 space-y-2.5">
                  <button
                    onClick={() => onOpenBooking('aula', `Plano ${currentPlan.name} (${selectedFormat})`)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition"
                  >
                    Agendar Aula Experimental
                  </button>
                  <button
                    onClick={() => handleSendToWhatsApp(`Aulas - Plano ${currentPlan.name}`, `R$ ${lessonMonthlyPrice}/mês`)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-xs flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Tirar Dúvida no WhatsApp
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab Content: Gravação */}
        {activeTab === 'gravacao' && (
          <div className="max-w-4xl mx-auto rounded-3xl glass-panel-glow p-8 md:p-10 border-amber-500/30">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    1. Escolha o Pacote de Produção:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {RECORDING_PACKAGES.map((pkg, idx) => (
                      <button
                        key={pkg.id}
                        onClick={() => setSelectedRecordingPkg(idx)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          selectedRecordingPkg === idx
                            ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                            : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        <p className="text-xs font-bold">{pkg.songsCount} Música{pkg.songsCount > 1 ? 's' : ''}</p>
                        <p className="text-xs font-black text-amber-400 mt-1">{pkg.priceFormatted}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    2. Adicionais de Audiovisual:
                  </label>
                  <button
                    onClick={() => setIncludeVideoClip(!includeVideoClip)}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      includeVideoClip
                        ? 'bg-amber-500/20 border-amber-400 text-white'
                        : 'bg-white/5 border-white/5 text-slate-400'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-bold">Gravação de Vídeo Clipe / Live Session</p>
                      <p className="text-[11px] text-slate-400">Captação em alta definição no estúdio para YouTube/Reels</p>
                    </div>
                    <span className="text-xs font-bold text-amber-400 shrink-0 ml-2">+ R$ 800</span>
                  </button>
                </div>

                <div className="text-xs text-slate-400 space-y-1">
                  <p className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    Direção e produção por André Prado (+20 anos de carreira)
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    Inclui arranjos, mixagem e masterização comercial
                  </p>
                </div>
              </div>

              {/* Total Box */}
              <div className="md:col-span-5 p-6 rounded-2xl bg-slate-950/90 border border-amber-500/30 text-center flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                    {currentPkg.name} {includeVideoClip ? '+ Vídeo' : ''}
                  </span>
                  <div className="mt-3">
                    <span className="text-4xl font-black text-white">
                      R$ {totalRecording.toLocaleString('pt-BR')},00
                    </span>
                    <span className="text-xs text-slate-400 block mt-1">Produção Completa</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Pagamento via Pix, Cartão ou Dinheiro
                  </p>
                </div>

                <div className="mt-6 space-y-2.5">
                  <button
                    onClick={() => onOpenBooking('gravacao', `${currentPkg.name} ${includeVideoClip ? 'com clipe' : ''}`)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition"
                  >
                    Agendar Sessão de Gravação
                  </button>
                  <button
                    onClick={() => handleSendToWhatsApp(`Gravação - ${currentPkg.name}`, `R$ ${totalRecording.toLocaleString('pt-BR')},00`)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-xs flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Conversar com André Prado
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab Content: Ensaios */}
        {activeTab === 'ensaio' && (
          <div className="max-w-4xl mx-auto rounded-3xl glass-panel-glow p-8 md:p-10 border-emerald-500/30">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    1. Selecione o Pacote de Ensaio:
                  </label>
                  <div className="space-y-2">
                    {REHEARSAL_PACKAGES.map((pkg, idx) => (
                      <button
                        key={pkg.number}
                        onClick={() => setSelectedRehearsalIndex(idx)}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                          selectedRehearsalIndex === idx
                            ? 'bg-emerald-500/20 border-emerald-400 text-white'
                            : 'bg-white/5 border-white/5 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-xs font-bold text-emerald-300">
                            {pkg.number}
                          </span>
                          <span className="text-xs font-medium">{pkg.description}</span>
                        </div>
                        <span className="text-xs font-black text-emerald-400">{pkg.priceFormatted}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      2. Quantidade de Horas:
                    </label>
                    <span className="text-sm font-black text-emerald-400">{rehearsalHours} {rehearsalHours === 1 ? 'Hora' : 'Horas'}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={rehearsalHours}
                    onChange={(e) => setRehearsalHours(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>1h</span>
                    <span>2h (Mais comum)</span>
                    <span>3h</span>
                    <span>4h</span>
                    <span>5h+</span>
                  </div>
                </div>
              </div>

              {/* Total Box */}
              <div className="md:col-span-5 p-6 rounded-2xl bg-slate-950/90 border border-emerald-500/30 text-center flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider">
                    Ensaio: Pacote {currentRehearsal.number}
                  </span>
                  <div className="mt-3">
                    <span className="text-4xl font-black text-white">
                      R$ {totalRehearsal},00
                    </span>
                    <span className="text-xs text-slate-400 block mt-1">Para {rehearsalHours}h de ensaio</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Sala climatizada com ar condicionado
                  </p>
                </div>

                <div className="mt-6 space-y-2.5">
                  <button
                    onClick={() => onOpenBooking('ensaio', `Pacote ${currentRehearsal.number} (${rehearsalHours}h)`)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition"
                  >
                    Reservar Horário de Ensaio
                  </button>
                  <button
                    onClick={() => handleSendToWhatsApp(`Ensaio Pacote ${currentRehearsal.number}`, `R$ ${totalRehearsal},00 (${rehearsalHours}h)`)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-xs flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Verificar Horários Livres
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
