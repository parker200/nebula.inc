import React from 'react';
import { Shield, MapPin, Phone, MessageCircle, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { WA_LINKS, PHONE_NUMBER } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-12 border-t border-cyan-500/20 bg-slate-950/90 overflow-hidden">
      {/* Background Subtle Radar / Grid Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom">
        
        {/* Top Guarantee Callout Banner */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-400/30 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950/50 mb-16 shadow-[0_0_35px_rgba(56,189,248,0.12)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 flex-shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-0.5">
                  COMPROMISO NÉBULA EN SANTA CRUZ
                </span>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  Evaluación Técnica Presencial Gratuita en tu Negocio
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  Un especialista de seguridad visita tu local, mide metros cúbicos con higrómetro, evalúa puntos ciegos y te entrega una propuesta sin ningún compromiso de compra.
                </p>
              </div>
            </div>

            <a
              href={WA_LINKS.inspeccionGratis}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Agendar Evaluación Gratuita</span>
            </a>
          </div>
        </div>

        {/* Footer Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-400/30 flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <img src="/shield-nebula.png" alt="NEBULA Shield" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl text-white tracking-wider">
                  NEBULA
                </span>
                <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase -mt-0.5">
                  Seguridad Inteligente
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Sistema de monitoreo táctico proactivo nocturno con disuasión por voz en vivo y 
              tecnología de niebla de choque en 5 segundos. Protegiendo el patrimonio comercial en Santa Cruz de la Sierra, Bolivia.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="tactical-pulse-green"></span>
              <span>CENTRO DE OPERACIONES SCZ OPERATIVO 24/7/365</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-tactical font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navegación Táctica
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#diferenciacion" className="hover:text-cyan-400 transition-colors">
                  Cámaras Pasivas vs. Nébula
                </a>
              </li>
              <li>
                <a href="#protocolo" className="hover:text-cyan-400 transition-colors">
                  Protocolo de 5 Fases
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-cyan-400 transition-colors">
                  Planes de Seguridad (Vista & Total)
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-cyan-400 transition-colors">
                  Calculadora de Niebla en m³
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Preguntas Frecuentes Técnicas
                </a>
              </li>
            </ul>
          </div>

          {/* Local Contact Info in Santa Cruz */}
          <div className="lg:col-span-4">
            <h4 className="font-tactical font-bold text-sm text-white uppercase tracking-wider mb-4">
              Base Operativa Santa Cruz
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>
                  Santa Cruz de la Sierra, Bolivia.<br />
                  <strong className="text-white font-medium">A pasos del 1er anillo, calle Celso Castedo.</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  WhatsApp de Guardia Directo:{' '}
                  <a 
                    href={WA_LINKS.general} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyan-400 font-bold hover:underline font-mono"
                  >
                    +591 77840582
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>
                  TikTok Oficial:{' '}
                  <a 
                    href="https://www.tiktok.com/@NebulaOficial" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyan-400 font-bold hover:underline"
                  >
                    @NebulaOficial
                  </a>
                </span>
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <div className="mt-5">
              <a
                href={WA_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-400 hover:text-white hover:bg-emerald-600/20 text-xs font-bold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hablar por WhatsApp con un Operador</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} NÉBULA - Seguridad Inteligente. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Santa Cruz de la Sierra • Bolivia</span>
            <span>|</span>
            <span className="text-cyan-400">Patrullaje Móvil Activo</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
