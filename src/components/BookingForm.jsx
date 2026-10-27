import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, User, Clock, CheckCircle2, MessageSquare, Send, Sparkles, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function BookingForm({ initialService = 'aula', initialNote = '', isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService, // 'aula' | 'gravacao' | 'ensaio' | 'orcamento'
    specificDetail: initialNote || '',
    preferredDate: '',
    preferredTime: '',
    experienceLevel: 'Iniciante',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
    if (initialNote) {
      setFormData(prev => ({ ...prev, specificDetail: initialNote }));
    }
  }, [initialService, initialNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Monta a mensagem para o WhatsApp com formatação perfeita
    const serviceName = 
      formData.service === 'aula' ? 'Aula de Música' :
      formData.service === 'gravacao' ? 'Sessão de Gravação / Produção' :
      formData.service === 'ensaio' ? 'Reserva de Sala de Ensaio' : 'Orçamento Geral';

    const messageLines = [
      `🎵 *NOVO AGENDAMENTO VIA SITE - STUDIO SOUL* 🎵`,
      ``,
      `👤 *Nome:* ${formData.name}`,
      `📱 *WhatsApp:* ${formData.phone}`,
      formData.email ? `✉️ *E-mail:* ${formData.email}` : null,
      `🎯 *Serviço Desejado:* ${serviceName}`,
      formData.specificDetail ? `🎸 *Detalhe / Pacote / Instrumento:* ${formData.specificDetail}` : null,
      formData.service === 'aula' ? `📊 *Nível de Experiência:* ${formData.experienceLevel}` : null,
      formData.preferredDate ? `📅 *Data Preferida:* ${formData.preferredDate}` : null,
      formData.preferredTime ? `⏰ *Horário Preferido:* ${formData.preferredTime}` : null,
      formData.notes ? `💬 *Mensagem / Dúvida:* ${formData.notes}` : null,
      ``,
      `_Enviado pelo site Studio Soul Guarapuava_`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(messageLines)}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Abre o WhatsApp do estúdio
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  const formContent = (
    <div className="relative">
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center border border-white/10 transition"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {submitted ? (
        <div className="text-center py-10 px-4 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-black text-white">Solicitação Encaminhada!</h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            Sua mensagem foi gerada e encaminhada diretamente para o WhatsApp do <strong>Studio Soul</strong>. Nossa equipe responderá em breve com a confirmação do seu horário!
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={() => setSubmitted(false)}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition"
            >
              Fazer Outro Agendamento
            </button>
            {isModal && onClose && (
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold transition"
              >
                Concluir
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Atendimento Rápido</span>
            <h3 className="text-2xl font-black text-white">Agendamento & Orçamento Online</h3>
            <p className="text-xs text-slate-400 mt-1">Preencha abaixo para receber confirmação e atendimento personalizado.</p>
          </div>

          {/* Nome & WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Seu Nome Completo *</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: João da Silva"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">WhatsApp / Celular *</label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(42) 99999-9999"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              </div>
            </div>
          </div>

          {/* E-mail & Tipo de Serviço */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">E-mail (Opcional)</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seuemail@exemplo.com"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Serviço Desejado *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition"
              >
                <option value="aula">Aulas de Música (Instituto)</option>
                <option value="gravacao">Gravação / Produção Musical</option>
                <option value="ensaio">Horas de Ensaio (Salas 1 a 5)</option>
                <option value="orcamento">Outro / Orçamento Personalizado</option>
              </select>
            </div>
          </div>

          {/* Instrumento ou Detalhe do Pacote */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                {formData.service === 'aula' ? 'Instrumento Pretendido' : 'Projeto / Quantidade de Músicas'}
              </label>
              <input
                type="text"
                name="specificDetail"
                value={formData.specificDetail}
                onChange={handleChange}
                placeholder={
                  formData.service === 'aula' ? 'Ex: Guitarra, Canto, Violão...' :
                  formData.service === 'gravacao' ? 'Ex: Pacote 2 Músicas, Single...' : 'Ex: Pacote 5 Ensaio Completo'
                }
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition"
              />
            </div>

            {formData.service === 'aula' ? (
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Nível de Experiência</label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition"
                >
                  <option value="Nunca toquei (Iniciante zero)">Nunca toquei (Iniciante zero)</option>
                  <option value="Básico (Sei alguns acordes/ritmos)">Básico (Sei alguns acordes/ritmos)</option>
                  <option value="Intermediário (Toco algumas músicas)">Intermediário (Toco algumas músicas)</option>
                  <option value="Avançado (Já toco em banda/palco)">Avançado (Já toco em banda/palco)</option>
                </select>
              </div>
            ) : (
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Horário Preferido</label>
                <div className="relative">
                  <input
                    type="text"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    placeholder="Ex: Noite, 19h00 ou Sábado manhã"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition"
                  />
                  <Clock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                </div>
              </div>
            )}
          </div>

          {/* Data preferida e Horário (se aula) */}
          {formData.service === 'aula' && (
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Dia / Horário mais conveniente para aula experimental</label>
              <div className="relative">
                <input
                  type="text"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  placeholder="Ex: Terça ou Quinta no período da tarde/noite"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition"
                />
                <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              </div>
            </div>
          )}

          {/* Dúvidas ou descrição adicional */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Mensagem ou Dúvidas Adicionais</label>
            <textarea
              name="notes"
              rows="3"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Conte-nos um pouco sobre seu projeto, banda, estilo musical ou objetivo nas aulas..."
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-400 hover:brightness-110 text-white font-extrabold text-sm shadow-xl shadow-cyan-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{submitting ? 'Gerando Solicitação...' : 'Confirmar e Enviar para o WhatsApp'}</span>
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Você será direcionado diretamente ao WhatsApp do Studio Soul para receber o retorno rápido.
            </p>
          </div>

        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
        <div className="bg-[#0e131d] border border-cyan-500/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="agendamento" className="py-20 relative bg-[#06080c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-panel-glow p-6 sm:p-10">
          {formContent}
        </div>
      </div>
    </section>
  );
}
