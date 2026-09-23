import React from 'react';
import { Check, ShieldAlert, Sparkles, MessageCircle, Clock, Wrench, ShieldCheck, CloudFog } from 'lucide-react';
import { WA_LINKS } from '../utils/whatsapp';

export default function PricingPlans() {
  return (
    <section 
      id="planes" 
      className="section-wrapper"
    >
      <div className="container-custom">
        
        {/* Header */}
        <div className="section-header-block">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl max-w-4xl mx-auto">
            PLANES DE PROTECCIÓN EN TIEMPO REAL
          </h2>
          <p className="section-subtitle">
            Sin contratos abusivos ni ataduras ocultas. Seguridad táctica activa en Santa Cruz 
            al costo mensual más competitivo y transparente del mercado.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* 1. PLAN VISTA */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 bg-slate-950/70 flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="pb-6 border-b border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                    DISUASIÓN & MONITOREO NOCTURNO
                  </span>
                  <span className="text-xs font-mono text-slate-400">Mensual</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    PLAN VISTA
                  </h3>
                  <div className="font-hud font-bold text-3xl sm:text-4xl text-white">
                    Bs 350 <span className="text-xs text-slate-400 font-normal font-mono">/mes</span>
                  </div>
                </div>
              </div>

              {/* Schedule and Setup info badges */}
              <div className="my-7 p-4.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm font-mono">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Horario: 9:00 p.m. a 7:00 a.m.</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Wrench className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>Instalación única: Bs 500</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-8 leading-[1.75]">
                Ideal para disuadir antes de la intrusión. Incluye cámara HD de alta precisión perimetral, reflector potente de luz blanca, parlante megáfono y sirena estruendosa.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-4 mb-10">
                {[
                  'Operador humano en vivo vigilando cada alarma nocturna',
                  'Voz disuasiva en tiempo real por megáfono potente',
                  'Sirena acústica de alta potencia para alertar a la zona',
                  'Rondas preventivas en auto y camioneta de respuesta táctica propia',
                  'Aviso coordinado inmediato al propietario y Policía Boliviana 110',
                  'Reporte técnico de actividad nocturna en tu celular'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-sm text-slate-300 leading-relaxed">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button: Secondary Style (Outline, Transparent) */}
            <a
              href={WA_LINKS.planVista}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4.5 rounded-xl btn-secondary-tactical flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-center cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span>Elegir Plan Vista</span>
            </a>
          </div>

          {/* 2. PLAN TOTAL (Recomendado / Máxima Seguridad) */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-cyan-400/60 bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-blue-950/40 flex flex-col justify-between relative shadow-[0_0_50px_rgba(56,189,248,0.25)] pt-12 sm:pt-14">
            
            {/* Top Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-max text-center">
              <span className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-heading font-black uppercase tracking-wider bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.4)] inline-flex items-center justify-center gap-1.5 sm:gap-2">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950 flex-shrink-0" />
                <span>MÁXIMA SEGURIDAD • RECOMENDADO</span>
              </span>
            </div>

            <div>
              <div className="pb-6 border-b border-cyan-500/30">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    SISTEMA COMPLETO CON NIEBLA
                  </span>
                  <span className="text-xs font-mono text-slate-400">Mensual</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    PLAN TOTAL
                  </h3>
                  <div className="font-hud font-bold text-3xl sm:text-4xl text-cyan-400">
                    Bs 490 <span className="text-xs text-slate-400 font-normal font-mono">/mes</span>
                  </div>
                </div>
              </div>

              {/* Schedule and Setup info badges */}
              <div className="my-7 p-4.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm font-mono">
                <div className="flex items-center gap-2.5 text-cyan-300 font-semibold">
                  <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Horario Ampliado: 8:00 p.m. a 8:00 a.m. (12h)</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Wrench className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>Instalación: según m³ (Base Bs 1.200)</span>
                </div>
              </div>

              {/* Highlight Fog box */}
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/25 mb-7 flex items-start gap-3.5">
                <CloudFog className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-cyan-300 block mb-1 font-mono uppercase tracking-wider">
                    MÁQUINA DE NIEBLA DE CHOQUE INCLUIDA
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    Disparo remoto en 5 segundos ante intrusión confirmada. Bloquea 100% la visión sin dañar mercadería ni equipos.
                  </p>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-4 mb-10">
                {[
                  'Todo lo incluido en el Plan Vista con 12 horas continuas de cobertura',
                  'Generador de niebla de choque seco (anula 100% visibilidad en 5 seg)',
                  'Fórmula no tóxica de grado alimenticio: cero daño a mercadería o electrónica',
                  'Posibilidad de escalar a 2 generadores según metros cúbicos',
                  'Despliegue de patrulla propia con rondas en auto + Policía 110',
                  'Mantenimiento preventivo periódico y recargas de niebla'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-sm text-slate-200 leading-relaxed">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button: Primary Style (Filled Dominant Accent) */}
            <a
              href={WA_LINKS.planTotal}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4.5 rounded-xl btn-primary-glow flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-center cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Elegir Plan Total con Niebla</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
