import React, { useState } from 'react';
import { Shield, MessageCircle, Menu, X, Radio } from 'lucide-react';
import { WA_LINKS } from '../utils/whatsapp';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Diferenciación', href: '#diferenciacion' },
    { label: 'Protocolo Táctico', href: '#protocolo' },
    { label: 'Planes', href: '#planes' },
    { label: 'Calculadora m³', href: '#calculadora' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container-custom pt-3 pb-2">
        <nav className="glass-panel rounded-2xl px-4 lg:px-6 py-3 flex items-center justify-between border border-cyan-500/20 bg-slate-950/80 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/40 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(56,189,248,0.25)]">
              <img src="/shield-nebula.svg" alt="Nébula Shield" className="w-7 h-7 object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-lg md:text-xl tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  NÉBULA
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="tactical-pulse-green"></span>
                  EN VIVO
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wide text-slate-400 -mt-1">
                Seguridad Inteligente
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={WA_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold btn-secondary-tactical border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Atención Inmediata</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 rounded-2xl border border-cyan-500/40 bg-slate-950 shadow-[0_25px_60px_rgba(0,0,0,0.98)] backdrop-blur-3xl animate-in fade-in duration-200">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">CENTRO DE OPERACIONES SCZ</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="tactical-pulse-green"></span>
                  ACTIVO
                </span>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800">
                <a
                  href={WA_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold btn-secondary-tactical border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
