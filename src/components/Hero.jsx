import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldAlert, 
  MessageCircle, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Play, 
  EyeOff, 
  Flame, 
  Radio, 
  Clock, 
  Camera, 
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { WA_LINKS } from '../utils/whatsapp';
import { playTacticalBeep, playAlarmPulse, playFogDischarge } from '../utils/audioEffects';

export default function Hero() {
  // Intrusion Simulation State
  const [simState, setSimState] = useState('idle'); // 'idle' | 'breach' | 'countdown' | 'fog'
  const [countdown, setCountdown] = useState(5);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const timerRef = useRef(null);

  // Live Time in Santa Cruz (UTC-4)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTimeStr(now.toLocaleTimeString('es-BO', { hour12: false }) + ' SCZ');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Trigger Intrusion Simulation Sequence
  const handleStartSimulation = () => {
    if (simState !== 'idle') return;
    
    setSimState('breach');
    setCountdown(5);
    
    if (soundEnabled) {
      playAlarmPulse();
    }

    // After 1 second of breach alarm, start countdown
    setTimeout(() => {
      setSimState('countdown');
      let count = 5;
      
      const interval = setInterval(() => {
        count -= 1;
        setCountdown(count);
        
        if (soundEnabled && count > 0) {
          playTacticalBeep(700 + (5 - count) * 80, 0.08);
        }

        if (count <= 0) {
          clearInterval(interval);
          setSimState('fog');
          if (soundEnabled) {
            playFogDischarge();
          }
        }
      }, 900);

      timerRef.current = interval;
    }, 1000);
  };

  const handleResetSimulation = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSimState('idle');
    setCountdown(5);
  };

  return (
    <section 
      className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28"
    >
      {/* Background Subtle Cyber Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-700/15 via-cyan-500/10 to-cyan-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Persuasive Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tactical Location Badge */}
            <div className="section-badge mb-8 px-4 py-2.5 flex items-center gap-2.5">
              <span className="tactical-pulse-green"></span>
              <span className="font-mono text-xs font-semibold tracking-wider text-slate-200">
                CENTRO DE MONITOREO NOCTURNO | SANTA CRUZ, BOLIVIA
              </span>
            </div>

            {/* H1 Main Heading */}
            <h1 
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white tracking-tight mb-8"
              style={{ lineHeight: '1.28' }}
            >
              NO DEJES QUE SOLO GRABEN TU ROBO. <br />
              NOSOTROS LO EVITAMOS.
            </h1>

            {/* Subtitle */}
            <p 
              className="text-base sm:text-lg md:text-xl text-slate-300 font-normal mb-10 max-w-xl"
              style={{ lineHeight: '1.85' }}
            >
              Protección proactiva en tiempo real para tu negocio mientras duermes. Monitoreo humano en vivo, 
              disuasión por voz y niebla de choque que anula la visibilidad en 5 segundos.
            </p>

            {/* Main Action CTAs: 1 Primary (Filled Accent) + 1 Secondary (Outline) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto mb-12">
              <a
                href={WA_LINKS.heroCotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow px-8 py-4.5 rounded-xl flex items-center justify-center gap-3 text-sm sm:text-base font-bold text-center group"
              >
                <MessageCircle className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Cotizar mi Local por WhatsApp</span>
                <ChevronRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={simState === 'idle' ? handleStartSimulation : handleResetSimulation}
                className="btn-secondary-tactical px-7 py-4.5 rounded-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold border border-slate-700 text-slate-300 hover:text-white"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>{simState === 'idle' ? 'Ver Prueba de Niebla (Simulación)' : 'Reiniciar Simulación'}</span>
              </button>
            </div>

            {/* Trust Indicators Bar (Unified Brand Accent) */}
            <div className="pt-6 sm:pt-8 mt-2 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="font-hud font-bold text-lg sm:text-2xl lg:text-3xl text-cyan-400 whitespace-nowrap">5 SEG</span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">Cero Visibilidad</span>
              </div>
              <div className="flex flex-col border-l border-slate-800/80 pl-3 sm:pl-6 lg:pl-8">
                <span className="font-hud font-bold text-lg sm:text-2xl lg:text-3xl text-cyan-400 whitespace-nowrap">100%</span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">Vigilante Humano</span>
              </div>
              <div className="flex flex-col border-l border-slate-800/80 pl-3 sm:pl-6 lg:pl-8">
                <span className="font-hud font-bold text-base sm:text-xl lg:text-2xl text-cyan-400 whitespace-nowrap">RONDAS EN AUTO</span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">Patrullaje Preventivo</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Intrusion Simulator with Restrained HUD Intensity */}
          <div className="lg:col-span-5 w-full">
            <div className={`relative rounded-2xl glass-panel p-5 sm:p-6 border transition-all duration-300 ${
              simState === 'breach' || simState === 'countdown'
                ? 'border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.35)]'
                : simState === 'fog'
                ? 'border-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.35)]'
                : 'border-slate-800'
            }`}>
              
              {/* Simulator Header / Telemetry Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-slate-400" />
                  <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                    CAM-04 | LOCAL SCZ
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-1 rounded bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    title={soundEnabled ? "Desactivar audio táctico" : "Activar audio táctico"}
                  >
                    {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
                  </button>
                  <span className="font-mono text-xs text-slate-400 font-medium">
                    {currentTimeStr || '02:44:19 SCZ'}
                  </span>
                </div>
              </div>

              {/* Viewport: Simulated CCTV Video Scene */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                
                {/* Subtle Scanlines */}
                <div className="absolute inset-0 scanlines z-10 pointer-events-none" />
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                  <span className="font-mono text-[10px] text-slate-400 font-semibold tracking-wider">CCTV 1080P</span>
                </div>

                {/* CCTV Mock Room Content (Store Interior) */}
                <div className="absolute inset-0 bg-[#070b16] flex flex-col justify-between p-4 select-none">
                  {/* Shelves & Counters representation */}
                  <div className="flex justify-between items-start opacity-40">
                    <div className="w-24 h-14 border border-dashed border-slate-800 rounded bg-slate-900/40 flex items-center justify-center text-[10px] text-slate-500 font-mono">
                      VITRINA
                    </div>
                    <div className="w-28 h-16 border border-dashed border-slate-800 rounded bg-slate-900/40 flex items-center justify-center text-[10px] text-slate-500 font-mono text-center">
                      CAJA
                    </div>
                  </div>

                  {/* Intruder Silhouette when breach starts */}
                  {(simState === 'breach' || simState === 'countdown') && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-pulse">
                      <div className="w-20 h-36 bg-red-500/20 border-2 border-red-500 rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                        <span className="font-mono text-[10px] text-white font-black bg-red-600 px-1 rounded -mt-2">
                          INTRUSO
                        </span>
                        <div className="w-8 h-8 rounded-full border border-red-400 mt-2" />
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-end opacity-40 text-[10px] font-mono text-slate-600">
                    <div>IR: OK</div>
                    <div>NIEBLA: LISTO</div>
                  </div>
                </div>

                {/* STATE 1: IDLE OVERLAY */}
                {simState === 'idle' && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-[1px] p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 mb-3">
                      <Camera className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-white mb-1">Cámara de Seguridad en Vivo</p>
                    <p className="text-xs text-slate-400 max-w-xs">
                      Presiona el botón de abajo para ver la respuesta táctica en 5 segundos.
                    </p>
                  </div>
                )}

                {/* STATE 2: BREACH ALERT */}
                {simState === 'breach' && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-red-950/70 p-4 text-center tactical-pulse-red">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white font-mono text-xs font-black tracking-widest uppercase mb-2">
                      <ShieldAlert className="w-4 h-4 animate-bounce" />
                      ¡INTRUSIÓN CONFIRMADA!
                    </div>
                    <p className="text-sm font-bold text-white mb-1">
                      Operador Nébula tomando el control por megáfono
                    </p>
                    <p className="text-xs text-red-200 font-mono">
                      "¡Atención intruso! Estás siendo grabado y la móvil va en camino."
                    </p>
                  </div>
                )}

                {/* STATE 3: COUNTDOWN */}
                {simState === 'countdown' && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/75 p-4 text-center">
                    <div className="text-xs font-mono font-bold text-red-400 tracking-wider mb-2 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 animate-spin" />
                      ACTIVANDO NIEBLA DISUASIVA EN:
                    </div>
                    <div className="font-hud font-black text-6xl text-red-400">
                      {countdown}s
                    </div>
                    <div className="text-xs font-mono text-slate-300 mt-2">
                      Operador ejecutando comando remoto
                    </div>
                  </div>
                )}

                {/* STATE 4: DENSE FOG DISCHARGE */}
                {simState === 'fog' && (
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center overflow-hidden">
                    {/* Multilayer Dense Fog */}
                    <div className="absolute inset-0 fog-layer-1" />
                    <div className="absolute inset-0 fog-layer-2" />
                    <div className="absolute inset-0 fog-layer-3" />
                    
                    {/* Fog Overlay Text */}
                    <div className="relative z-40 p-4 text-center bg-slate-950/80 rounded-xl border border-cyan-400/60 shadow-2xl backdrop-blur-md max-w-[85%]">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-400/40 mb-2">
                        <EyeOff className="w-3.5 h-3.5" />
                        0% VISIBILIDAD TOTAL
                      </div>
                      <h4 className="font-heading font-extrabold text-base sm:text-lg text-white mb-1">
                        "SI NO VEN, NO ROBAN"
                      </h4>
                      <p className="text-xs text-slate-300 font-medium">
                        El delincuente queda ciego y desorientado en segundos, forzando su huida inmediata.
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Interactive Controls Bar: Restrained Tactical Trigger */}
              <div className="mt-4 flex items-center justify-between gap-3">
                {simState === 'idle' ? (
                  <button
                    onClick={handleStartSimulation}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-red-500/50 text-slate-200 hover:text-white font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                    <span>SIMULAR INTRUSIÓN NOCTURNA</span>
                  </button>
                ) : (
                  <button
                    onClick={handleResetSimulation}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>REINICIAR ESCENARIO</span>
                  </button>
                )}
              </div>

              {/* Status details pill */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
                <span>ESTADO: {simState === 'idle' ? 'VIGILANCIA EN REPOSO' : simState === 'breach' ? 'INTRUSIÓN EN CURSO' : simState === 'countdown' ? 'DESCARGA PREPARADA' : 'SATURACIÓN AL 100%'}</span>
                <span className="text-slate-400">DISPERSOR: LISTO</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
