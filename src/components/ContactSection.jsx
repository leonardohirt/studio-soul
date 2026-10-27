import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Phone, Clock, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';

export default function ContactSection({ initialService = 'aula', initialNote = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
    message: initialNote
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceLabels = {
      aula: 'Aula de Música (Aulas Individuais)',
      gravacao: 'Sessão de Gravação',
      videoclipe: 'Produção de Vídeo Clipe',
      ensaio: 'Hora de Ensaio',
      outro: 'Outro / Dúvida'
    };

    const text = [
      `🎵 *STUDIO SOUL - CONTATO VIA SITE*`,
      `👤 *Nome:* ${formData.name}`,
      `📱 *WhatsApp:* ${formData.phone}`,
      `🎯 *Interesse:* ${serviceLabels[formData.service] || formData.service}`,
      formData.message ? `💬 *Mensagem:* ${formData.message}` : null
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contato" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
            05 • Agendamento & Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fale com o Studio Soul
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Tire suas dúvidas, agende uma aula experimental ou reserve seu horário de ensaio e gravação em Guarapuava.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Localização</span>
                <p className="text-sm font-semibold text-white mt-1">{STUDIO_INFO.address}</p>
                <p className="text-xs text-slate-400">{STUDIO_INFO.fullLocation}</p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">WhatsApp / Telefone</span>
                <p className="text-sm font-semibold text-cyan-400 mt-1">{STUDIO_INFO.phone}</p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Horários</span>
                <p className="text-xs text-slate-300 mt-1">{STUDIO_INFO.openingHours.weekdays}</p>
                <p className="text-xs text-slate-300">{STUDIO_INFO.openingHours.saturday}</p>
              </div>

              <div className="pt-4 border-t border-white/5 flex gap-4">
                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href={STUDIO_INFO.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  YouTube
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-950/40 transition flex items-center justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-white block">Conversa Direta no WhatsApp</span>
                <span className="text-[11px] text-cyan-400">Resposta rápida com André Prado</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right: Clean minimal form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              {sent ? (
                <div className="text-center py-12 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Mensagem Enviada!</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Você foi redirecionado ao WhatsApp. Nossa equipe responderá em instantes.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs text-cyan-400 underline pt-2 block mx-auto"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-2">Envie uma Solicitação Rápida</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Seu Nome *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nome e Sobrenome"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(42) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Interesse Principal *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="aula">Aulas de Música (Aulas Individuais)</option>
                      <option value="gravacao">Gravação / Produção Fonográfica</option>
                      <option value="videoclipe">Produção de Vídeo Clipe</option>
                      <option value="ensaio">Reserva de Sala de Ensaio</option>
                      <option value="outro">Orçamento Personalizado / Dúvida</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Detalhe ou Dúvida (Opcional)</label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ex: Gostaria de saber horários disponíveis para aula experimental de violão..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar para o WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
