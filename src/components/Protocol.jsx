import React, { useState } from 'react';
import { 
  Lightbulb, 
  Megaphone, 
  BellRing, 
  CloudFog, 
  Car, 
  PhoneCall, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Clock
} from 'lucide-react';
import { WA_LINKS } from '../utils/whatsapp';

export default function Protocol() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      num: 1,
      name: 'Detección y Luz',
      timing: 'Segundo 0 - Inmediato',
      icon: Lightbulb,
      short: 'Sensor inteligente activa reflector de alta potencia ante aproximación perimetral.',
      detail: 'El sensor perimetral ilumina el área de inmediato eliminando la cobertura de la oscuridad e alertando al operador en la central nocturna de Santa Cruz.'
    },
    {
      num: 2,
      name: 'Voz Disuasiva',
      timing: 'Segundo 1 - 2',
      icon: Megaphone,
      short: 'Operador humano advierte al sospechoso en vivo por el megáfono.',
      detail: 'El operador interviene en tiempo real con comandos de voz directos: "¡Atención! Estás en propiedad privada vigilada. Abandona el lugar de inmediato".'
    },
    {
      num: 3,
      name: 'Sirena de Alta Potencia',
      timing: 'Segundo 3 - 4',
      icon: BellRing,
      short: 'Alarma acústica estruendosa que alerta a vecinos y transeúntes.',
      detail: 'Disparo sonoro continuo diseñado para romper el factor sorpresa del agresor y llamar la atención de la cuadra entera.'
    },
    {
      num: 4,
      name: 'Niebla Anti-Robo',
      timing: 'Segundo 5 (~5s total)',
      badge: 'PLAN TOTAL',
      icon: CloudFog,
      short: 'Inyección de choque que satura el ambiente y bloquea el 100% de la visión.',
      detail: 'Generador de grado alimenticio expulsa una cortina densa e inofensiva que deja la visibilidad a 0 cm. Sin visión, no pueden localizar cajas ni vitrinas.'
    },
    {
      num: 5,
      name: 'Ronda Táctica en Auto',
      timing: 'Despliegue Inmediato',
      icon: Car,
      short: 'Envío de unidad de patrullaje móvil y rondas en auto al local.',
      detail: 'Móvil de verificación táctica equipada se desplaza a máxima velocidad para resguardar el perímetro exterior y constatar el estado del local.'
    },
    {
      num: 6,
      name: 'Notificación Inmediata & 110',
      timing: 'Simultáneo',
      icon: PhoneCall,
      short: 'Llamada directa al dueño del negocio y enlace oficial con Policía Boliviana 110.',
      detail: 'Comunicación telefónica prioritaria para despertar al propietario con informe preciso de lo ocurrido y reporte formal al centro de despacho de la Policía.'
    }
  ];

  return (
    <section 
      id="protocolo" 
      className="section-wrapper bg-slate-950/40" 
    >
      <div className="container-custom">
        
        {/* Header */}
        <div className="section-header-block">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            PROTOCOLO TÁCTICO DE INTERVENCIÓN EN 6 FASES
          </h2>
          <p className="section-subtitle">
            Cada segundo cuenta en la madrugada. Así actúa la central de Nébula de forma automática 
            y coordinada desde el instante exacto en que se detecta una amenaza.
          </p>
        </div>

        {/* Phase Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10 max-w-5xl mx-auto">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            const isSelected = activePhase === idx;
            return (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all border cursor-pointer ${
                  isSelected 
                    ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(56,189,248,0.2)]' 
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-all ${
                  isSelected 
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)]' 
                    : 'bg-slate-800/80 text-slate-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] font-bold text-slate-400 mb-0.5">
                  0{phase.num}
                </span>
                <span className="font-heading font-bold text-xs text-white line-clamp-1">
                  {phase.name}
                </span>
                <span className="text-[10px] font-mono text-cyan-400 mt-1">
                  {phase.timing}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Active Phase Tactical Console */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-14 border border-cyan-500/30 max-w-5xl mx-auto relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-950/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-400 border border-cyan-500/40">
                  FASE 0{phases[activePhase].num} DE 06
                </span>
                <span className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  {phases[activePhase].timing}
                </span>
                {phases[activePhase].badge && (
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {phases[activePhase].badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-5 leading-tight">
                {phases[activePhase].name}
              </h3>
              
              {/* Short summary */}
              <p className="text-base sm:text-lg text-slate-100 font-semibold mb-5 leading-relaxed">
                {phases[activePhase].short}
              </p>

              {/* Detailed explanation */}
              <p className="text-sm sm:text-base text-slate-300 leading-[1.85] mb-8">
                {phases[activePhase].detail}
              </p>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
                <button
                  onClick={() => setActivePhase(prev => (prev > 0 ? prev - 1 : phases.length - 1))}
                  className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono font-bold transition-colors border border-slate-700 flex items-center gap-2 cursor-pointer"
                >
                  ← Fase Anterior
                </button>
                <button
                  onClick={() => setActivePhase(prev => (prev < phases.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 hover:text-white text-xs font-mono font-bold transition-colors border border-cyan-400/30 flex items-center gap-2 cursor-pointer"
                >
                  Siguiente Fase →
                </button>
                <span className="text-xs font-mono text-slate-500 ml-auto hidden sm:inline-block">
                  Paso {activePhase + 1} de {phases.length}
                </span>
              </div>
            </div>

            {/* Right Telemetry Radar Display */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 sm:p-10 rounded-2xl bg-slate-950/80 border border-slate-800 text-center relative overflow-hidden shadow-inner">
              <div className="w-24 h-24 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_35px_rgba(56,189,248,0.25)]">
                {React.createElement(phases[activePhase].icon, { className: "w-12 h-12" })}
              </div>
              <span className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                Velocidad de Respuesta
              </span>
              <span className="font-hud font-bold text-xl sm:text-2xl text-cyan-400 mb-4">
                {phases[activePhase].timing}
              </span>
              <div className="w-full pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>CENTRAL SANTA CRUZ ACTIVA</span>
              </div>
            </div>

          </div>
        </div>

        {/* Chronological Mini-Timeline Visual Summary Bar */}
        <div className="mt-12 max-w-5xl mx-auto p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="font-bold text-white">Línea de tiempo total de respuesta:</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="text-cyan-400 font-bold">0s Alerta</span>
            <span>→</span>
            <span className="text-cyan-400 font-bold">2s Voz</span>
            <span>→</span>
            <span className="text-cyan-400 font-bold">4s Sirena</span>
            <span>→</span>
            <span className="text-cyan-400 font-bold">5s Niebla (0% Visión)</span>
            <span>→</span>
            <span className="text-cyan-400 font-bold">Móvil en camino</span>
          </div>
        </div>

      </div>
    </section>
  );
}
