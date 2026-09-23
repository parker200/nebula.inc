import React from 'react';
import { XCircle, CheckCircle2, Video, ShieldAlert, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { WA_LINKS } from '../utils/whatsapp';

export default function Comparison() {
  const traditionalFlaws = [
    {
      title: 'Graba en silencio mientras te desvalijan',
      desc: 'La cámara tradicional solo es un testigo pasivo. No emite ninguna advertencia ni asusta a los criminales.'
    },
    {
      title: 'Solo sirve para ver el video al día siguiente',
      desc: 'Cuando abres tu negocio a las 8 a.m., tu mercadería ya desapareció. El video solo sirve para lamentar la pérdida.'
    },
    {
      title: 'No interrumpe la acción del delincuente',
      desc: 'Los ladrones operan con capuchas y gorras en menos de 3 minutos, sabiendo que nadie llegará a tiempo.'
    },
    {
      title: 'Falsas alarmas que fatigan tu celular',
      desc: 'Notificaciones automáticas por insectos, sombras o viento que terminas silenciando por cansancio.'
    }
  ];

  const nebulaAdvantages = [
    {
      title: 'Operador humano vigilando en vivo cada alerta',
      desc: 'Personal entrenado en Santa Cruz verifica el video en el segundo cero cuando tú estás descansando.'
    },
    {
      title: 'Voz disuasiva en tiempo real por megáfono',
      desc: 'El operador le habla directamente al intruso: "¡Alto, estás siendo grabado y la móvil Nébula está en camino!".'
    },
    {
      title: 'Cortina de niebla no tóxica en 5 segundos',
      desc: 'Saturación visual instantánea de grado alimenticio. Al no poder ver sus propias manos, el robo queda frustrado.'
    },
    {
      title: 'Rondas nocturnas en auto + Alerta Policía 110',
      desc: 'Unidad de respuesta rápida propia con rondas vehiculares continuas y contacto simultáneo a la Policía.'
    }
  ];

  return (
    <section 
      id="diferenciacion" 
      className="section-wrapper"
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header-block">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            CÁMARAS TRADICIONALES VS. SISTEMA NÉBULA
          </h2>
          <p className="section-subtitle">
            Tener una cámara común que solo graba no es seguridad, es un archivo forense del robo. 
            Descubre por qué la protección proactiva en vivo cambia radicalmente las reglas del juego.
          </p>
        </div>

        {/* Side by Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: Traditional Cameras */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-red-500/20 bg-slate-950/60 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              {/* Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-800/80 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0">
                  <Video className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-1">
                    SEGURIDAD PASIVA TRADICIONAL
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    Cámara Convencional
                  </h3>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-6 my-6">
                {traditionalFlaws.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-2xl bg-slate-900/30 border border-slate-800/50">
                    <div className="mt-1 flex-shrink-0 text-red-400 p-1 rounded-lg bg-red-500/10">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100 mb-1.5 leading-snug">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-[1.7]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Verdict */}
            <div className="mt-6 pt-6 border-t border-slate-800 bg-red-950/20 -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
              <span className="text-xs font-mono font-bold text-red-400 block mb-2 uppercase tracking-wider">
                RESULTADO FINAL:
              </span>
              <p className="text-sm text-slate-300 leading-[1.75]">
                El ladrón escapa con tu mercadería en 3 minutos. Tu único consuelo es subir el video a redes sociales para lamentar la pérdida económica.
              </p>
            </div>
          </div>

          {/* Card 2: Nébula Intelligent Security */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border-2 border-cyan-400/50 bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-blue-950/40 relative overflow-hidden flex flex-col justify-between shadow-[0_0_40px_rgba(56,189,248,0.15)]">
            <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header with inline technology badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-cyan-500/20 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] flex-shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-1">
                      <span className="tactical-pulse-green"></span>
                      SEGURIDAD ACTIVA EN VIVO
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-white">
                      Sistema Nébula Proactivo
                    </h3>
                  </div>
                </div>

                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                  TECNOLOGÍA ACTIVA
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-6 my-6">
                {nebulaAdvantages.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-2xl bg-slate-900/50 border border-cyan-500/20">
                    <div className="mt-1 flex-shrink-0 text-cyan-400 p-1 rounded-lg bg-cyan-500/15">
                      <CheckCircle2 className="w-5 h-5 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1.5 leading-snug">{item.title}</h4>
                      <p className="text-sm text-slate-300 leading-[1.7]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Verdict */}
            <div className="mt-6 pt-6 border-t border-cyan-500/20 bg-cyan-950/30 -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 block mb-2 uppercase tracking-wider">
                    RESULTADO FINAL:
                  </span>
                  <p className="text-sm text-slate-200 leading-[1.75]">
                    Interrupción real del delito en el acto. Cero inventario sustraído y delincuente en fuga.
                  </p>
                </div>
                <a
                  href={WA_LINKS.heroCotizar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex-shrink-0"
                >
                  <span>Proteger mi local</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
