import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StudioCarousel() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      title: "Sala de Controle & Mixagem",
      subtitle: "Ambiente tratado acusticamente para produção e masterização"
    },
    {
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=80",
      title: "Sala de Gravação Vocal & Acústica",
      subtitle: "Microfonação de alta sensibilidade e isolamento acústico total"
    },
    {
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=1400&q=80",
      title: "Sala de Bateria & Ensaio de Banda",
      subtitle: "Espaço climatizado com ar condicionado e kit de bateria completo"
    },
    {
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=80",
      title: "Aulas Individuais & Prática no Estúdio",
      subtitle: "O aluno aprende diretamente no ambiente real do estúdio com acompanhamento 100% individual"
    },
    {
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80",
      title: "Gravação de Vídeo Clipes & Audiovisual",
      subtitle: "Produção de clipes musicais, live sessions, iluminação e captação de vídeo profissional"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance slide smoothly every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
              Estrutura Studio Soul
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              O Espaço em Guarapuava
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black aspect-[16/9] sm:aspect-[21/9]">
          <div
            className="flex transition-transform duration-700 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"></div>

                {/* Caption overlay */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10">
                  <span className="text-[11px] font-mono text-cyan-400 block mb-1">
                    0{index + 1} / 0{slides.length}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    {slide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Minimalist Indicators */}
          <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === i
                    ? 'w-6 h-1.5 bg-cyan-400'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
