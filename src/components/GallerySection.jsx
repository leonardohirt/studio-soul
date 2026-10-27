import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/studioData';
import { Image, Maximize2, X, Play, ExternalLink } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filters = ['Todas', 'Estúdio & Controle', 'Gravações', 'Aulas', 'Equipamentos'];

  const filteredItems = activeFilter === 'Todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="galeria" className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-3">
            <Image className="w-3.5 h-3.5 text-cyan-400" />
            <span>Bastidores e Equipamentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Galeria do <span className="text-gradient-metallic">Studio Soul</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Conheça de perto nosso ambiente, salas de gravação tratadas acusticamente, aulas em andamento e equipamentos de primeira linha em Guarapuava.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((fil) => (
            <button
              key={fil}
              onClick={() => setActiveFilter(fil)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === fil
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {fil}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer h-72 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-950/50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Tag top */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md text-slate-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video / Social Media Preview Section */}
        <div className="rounded-3xl glass-panel-glow p-8 md:p-10 bg-gradient-to-r from-slate-900/90 to-blue-950/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Canal Oficial & Redes</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Acompanhe Nossas Gravações no Instagram e YouTube
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Postamos semanalmente bastidores de gravações, solos de alunos, dicas de técnica vocal e lançamentos musicais produzidos no Studio Soul.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-xs flex items-center gap-2 hover:brightness-110 shadow-lg shadow-pink-600/20 transition"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram @studiosoul
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-red-600/20 transition"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  Canal no YouTube
                </a>
              </div>
            </div>

            {/* Video mockup frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 group aspect-video bg-slate-950 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
                  alt="Bastidores de Vídeo Clipe Studio Soul"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-xl shadow-cyan-500/50 group-hover:scale-110 transition cursor-pointer">
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </div>
                  <p className="text-sm font-bold text-white mt-3">Live Session Especial • Studio Soul</p>
                  <p className="text-xs text-slate-400">Gravado ao vivo em Guarapuava - PR</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#0d121d] rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl"
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-slate-300 hover:text-white flex items-center justify-center border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6">
              <span className="text-xs font-bold uppercase text-cyan-400 tracking-wider">
                {activeLightbox.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{activeLightbox.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{activeLightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
