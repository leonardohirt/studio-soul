import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Aulas', href: '#aulas' },
    { label: 'Gravação', href: '#gravacao' },
    { label: 'Ensaio', href: '#ensaio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090b0e]/90 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3.5 group">
          <img
            src="/images/logo-studio-soul.png"
            alt="Studio Soul - Instituto de Música"
            className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white font-display leading-tight">
              Studio Soul
            </span>
            <span className="text-[10px] tracking-wider text-cyan-400 uppercase font-medium leading-tight">
              Instituto de Música
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white hover:text-black transition-all duration-200 inline-flex items-center gap-1.5"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090b0e] border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="block text-center text-xs font-bold py-3 rounded-full bg-cyan-500 text-black mt-4"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
