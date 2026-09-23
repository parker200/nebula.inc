import React from 'react';
import { 
  Megaphone, 
  BellRing, 
  CloudFog, 
  Car, 
  PhoneCall 
} from 'lucide-react';

export default function Protocol() {
  const phases = [
    {
      num: 1,
      name: 'Voz Disuasiva',
      timing: 'Segundo 1 - 2',
      icon: Megaphone
    },
    {
      num: 2,
      name: 'Sirena de Alta Potencia',
      timing: 'Segundo 3 - 4',
      icon: BellRing
    },
    {
      num: 3,
      name: 'Niebla Anti-Robo',
      timing: 'Segundo 5 (~5s total)',
      badge: 'PLAN TOTAL',
      icon: CloudFog
    },
    {
      num: 4,
      name: 'Ronda Táctica en Auto',
      timing: 'Despliegue Inmediato',
      icon: Car
    },
    {
      num: 5,
      name: 'Notificación Inmediata & 110',
      timing: 'Simultáneo',
      icon: PhoneCall
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
            PROTOCOLO TÁCTICO DE INTERVENCIÓN EN 5 FASES
          </h2>
          <p className="section-subtitle">
            Cada segundo cuenta en la madrugada. Así actúa la central de Nébula de forma automática 
            y coordinada desde el instante exacto en que se detecta una amenaza.
          </p>
        </div>

        {/* Phase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-2xl transition-all border border-slate-800 bg-slate-900/60 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-all bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
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
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
