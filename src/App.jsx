import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import RecordingSection from './components/RecordingSection';
import RehearsalSection from './components/RehearsalSection';
import StudioCarousel from './components/StudioCarousel';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { X, Send } from 'lucide-react';
import { STUDIO_INFO } from './data/studioData';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    service: 'aula',
    note: ''
  });

  const handleOpenBooking = (service = 'aula', note = '') => {
    // Scroll directly to contact or open clean modal
    setModalState({
      isOpen: true,
      service,
      note
    });
  };

  const handleCloseBooking = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name');
    const phone = fd.get('phone');
    const serviceName = modalState.service === 'aula' ? 'Aula de Música (Aulas Individuais)' : modalState.service === 'gravacao' ? 'Gravação / Vídeo Clipe' : 'Ensaio';

    const text = [
      `🎵 *STUDIO SOUL - SOLICITAÇÃO*`,
      `👤 *Nome:* ${name}`,
      `📱 *WhatsApp:* ${phone}`,
      `🎯 *Serviço:* ${serviceName}`,
      modalState.note ? `📌 *Detalhe:* ${modalState.note}` : null
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    handleCloseBooking();
  };

  return (
    <div className="min-h-screen bg-[#07090c] text-slate-200 font-sans selection:bg-cyan-400 selection:text-black">
      {/* Sleek Minimalist Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main>
        {/* 1. Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Aulas de Música */}
        <CoursesSection onOpenBooking={handleOpenBooking} />

        {/* 3. Gravações & Produção (André Prado) */}
        <RecordingSection onOpenBooking={handleOpenBooking} />

        {/* 4. Salas de Ensaio */}
        <RehearsalSection onOpenBooking={handleOpenBooking} />

        {/* 5. Carrossel com Fotos do Local */}
        <StudioCarousel />

        {/* 6. Sobre o Studio Soul */}
        <AboutSection />

        {/* 6. Contato & Agendamento */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Discreet WhatsApp */}
      <FloatingWhatsApp />

      {/* Simple Minimalist Booking Modal */}
      {modalState.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0c0e14] border border-white/10 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={handleCloseBooking}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
              Agendamento Rápido
            </span>
            <h3 className="text-xl font-bold text-white mb-1">
              {modalState.service === 'aula' ? 'Agendar Aula' : modalState.service === 'gravacao' ? 'Agendar Gravação' : 'Reservar Ensaio'}
            </h3>
            {modalState.note && (
              <p className="text-xs text-slate-400 mb-4">{modalState.note}</p>
            )}

            <form onSubmit={handleModalSubmit} className="space-y-3.5 mt-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Seu Nome *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Nome e Sobrenome"
                  className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(42) 99999-9999"
                  className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-white hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirmar no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
