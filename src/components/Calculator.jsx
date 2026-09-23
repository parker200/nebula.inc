import React, { useState } from 'react';
import { Calculator as CalcIcon, CloudFog, Send, CheckCircle2, ShieldCheck, Ruler, Layers, Sparkles } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export default function Calculator() {
  const [length, setLength] = useState(6);
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(3.0);

  // Calculation logic
  const volumeM3 = Math.round((length * width * height) * 10) / 10;
  const isLarge = volumeM3 > 150;
  const generatorCount = isLarge ? 2 : 1;
  const estimatedInstallation = isLarge ? 2400 : 1200;

  // WhatsApp Message Constructor
  const whatsappMessage = `Hola Nébula, calculé mi local en la web: ${length}x${width}x${height}m (${volumeM3} m³). Deseo agendar la visita con el higrómetro.`;
  const whatsappUrl = createWhatsAppLink(whatsappMessage);

  return (
    <section 
      id="calculadora" 
      className="section-wrapper bg-slate-950/50" 
    >
      <div className="container-custom">
        
        {/* Header */}
        <div className="section-header-block">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white">
            CALCULADORA DE VOLUMEN E INSTALACIÓN DE NIEBLA
          </h2>
          <p className="section-subtitle">
            Ingresa las dimensiones de tu negocio para calcular al instante la potencia de choque 
            y los generadores necesarios para inundar tu local de niebla en 5 segundos.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-8 md:p-12 border border-cyan-500/30 bg-slate-950/80 shadow-[0_0_50px_rgba(56,189,248,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Sliders and Inputs */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Length Slider */}
              <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-cyan-400" />
                    LARGO DEL LOCAL
                  </label>
                  <span className="font-hud font-bold text-lg text-cyan-400">
                    {length} <span className="text-xs text-slate-400 font-mono">m</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="0.5"
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value))}
                  className="w-full cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-xs font-mono text-slate-500 mt-2">
                  <span>2 m</span>
                  <span>10 m</span>
                  <span>25 m</span>
                </div>
              </div>

              {/* Width Slider */}
              <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-cyan-400" />
                    ANCHO DEL LOCAL
                  </label>
                  <span className="font-hud font-bold text-lg text-cyan-400">
                    {width} <span className="text-xs text-slate-400 font-mono">m</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-xs font-mono text-slate-500 mt-2">
                  <span>2 m</span>
                  <span>8 m</span>
                  <span>20 m</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    ALTURA DEL TECHO (POR DEFECTO 3.0 M)
                  </label>
                  <span className="font-hud font-bold text-lg text-cyan-400">
                    {height} <span className="text-xs text-slate-400 font-mono">m</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="6.0"
                  step="0.1"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                  className="w-full cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-xs font-mono text-slate-500 mt-2">
                  <span>2.0 m</span>
                  <span>3.0 m (Estándar)</span>
                  <span>6.0 m</span>
                </div>
              </div>

            </div>

            {/* Right Column: Instant Result Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950/60 border border-cyan-400/40 relative shadow-2xl">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    VOLUMEN CALCULADO
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400/30">
                    TIEMPO REAL
                  </span>
                </div>

                {/* Volume Big Number */}
                <div className="my-6 text-center">
                  <div className="font-hud font-black text-5xl sm:text-6xl text-cyan-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                    {volumeM3} <span className="text-2xl text-white font-mono">m³</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 mt-2 block">
                    {length}m × {width}m × {height}m
                  </span>
                </div>

                {/* Recommendation Box */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 my-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <CloudFog className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="font-heading font-bold text-base text-white">
                      {generatorCount === 1 ? '1 Generador de Niebla Requerido' : '2 Generadores de Niebla Requeridos'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-[1.7]">
                    {volumeM3 <= 150 
                      ? 'Local de volumen estándar (≤ 150 m³). Un generador satura el 100% de la habitación en 5 segundos.' 
                      : 'Local de alto volumen (> 150 m³). Se requieren 2 generadores sincronizados para saturación instantánea sin puntos ciegos.'
                    }
                  </p>
                </div>

                {/* Estimated Setup Cost */}
                <div className="flex items-center justify-between py-4 border-t border-b border-slate-800/80 mb-7">
                  <span className="text-xs font-mono text-slate-400">Instalación completa:</span>
                  <span className="font-hud font-bold text-xl text-cyan-400">
                    ~Bs {estimatedInstallation.toLocaleString('es-BO')}
                  </span>
                </div>
              </div>

              {/* Dynamic WhatsApp Button */}
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 rounded-xl btn-primary-glow flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold text-center text-white"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Enviar medidas calculadas por WhatsApp</span>
                </a>
                <span className="text-[11px] font-mono text-slate-500 text-center block mt-3">
                  * Visita técnica con higrómetro y verificación acústica gratuita en tu negocio.
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
