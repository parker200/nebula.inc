import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, MessageCircle } from 'lucide-react';
import { WA_LINKS } from '../utils/whatsapp';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿La niebla daña la mercadería, ropa o equipos electrónicos?',
      a: 'No, en lo absoluto. Utilizamos una fórmula patentada de choque seco de grado alimenticio (glicerina vegetal y agua desmineralizada de alta pureza). Es completamente no corrosiva, no deja residuos grasosos, polvos ni olores, y no afecta circuitos impresos, celulares, computadoras, prendas de vestir ni alimentos empaquetados.'
    },
    {
      q: '¿Es peligrosa o tóxica para las personas?',
      a: 'No es tóxica ni asfixiante. La niebla no contiene químicos nocivos. Su único objetivo es crear una barrera visual impenetrable (0% de visibilidad). Además, el protocolo de Nébula exige que el sistema solo se active con el local comercial cerrado y desocupado, ante la intrusión delictiva confirmada.'
    },
    {
      q: '¿Se puede disparar por error o falsas alarmas (mascotas, insectos)?',
      a: 'Imposible. A diferencia de las alarmas comunes, el disparo de la niebla Nébula NUNCA es automático por sensor. Cuenta con doble factor de verificación: el sensor alerta al centro de monitoreo, y un operador humano en vivo examina el video antes de oprimir el interruptor remoto de disparo.'
    },
    {
      q: '¿Cuánto tarda la niebla en disiparse tras un disparo?',
      a: 'En un local cerrado sin ventilación forzada permanece densa entre 30 y 45 minutos, tiempo más que suficiente para que el ladrón escape y la camioneta de patrullaje o la Policía llegue al lugar. Si se abren puertas o ventanas, se disipa limpiamente en menos de 10 a 15 minutos.'
    },
    {
      q: '¿Qué requisitos debe cumplir mi local para la instalación?',
      a: 'Solo se requieren 3 cosas elementales: 1) Un tomacorriente eléctrico estándar cercano (220V), 2) Cobertura de red WiFi 2.4 GHz estable en el punto donde se montará la cámara táctica, y 3) Una pared o viga firme entre 2.5 m y 3.0 m de altura para el anclaje seguro del generador.'
    },
    {
      q: '¿El servicio es 24 horas?',
      a: 'Nébula es una empresa altamente especializada en Monitoreo Táctico Nocturno (Plan Vista: 9:00 p.m. a 7:00 a.m. / Plan Total: 8:00 p.m. a 8:00 a.m.). Es en estas horas críticas cuando tu negocio está solo, vulnerable y donde ocurren más del 92% de los robos comerciales violentos en Santa Cruz.'
    }
  ];

  return (
    <section 
      id="faq" 
      className="section-wrapper"
    >
      <div className="container-custom">
        
        {/* Header */}
        <div className="section-header-block">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white">
            PREGUNTAS FRECUENTES TÉCNICAS
          </h2>
          <p className="section-subtitle">
            Resolvemos todas las dudas sobre la inocuidad de la niebla, nuestra central nocturna 
            y los requerimientos de instalación para tu negocio.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl sm:rounded-3xl transition-all border ${
                  isOpen 
                    ? 'glass-panel border-cyan-400/50 bg-slate-900/90 shadow-[0_0_25px_rgba(56,189,248,0.2)]' 
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4.5 px-5 sm:py-6 sm:px-8 flex items-center justify-between text-left gap-4 sm:gap-5 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base md:text-lg text-white leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-xl border transition-transform duration-200 flex-shrink-0 ${
                    isOpen 
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 rotate-180' 
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-8 pb-6 sm:pb-7 pt-2 text-xs sm:text-sm md:text-base text-slate-300 leading-[1.85] border-t border-slate-800/80 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 sm:mt-16 text-center p-6 sm:p-8 rounded-3xl glass-panel max-w-2xl mx-auto border border-cyan-500/25">
          <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
            ¿Tienes una consulta específica sobre las dimensiones o tipo de productos de tu negocio?
          </p>
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Hablar directamente con un asesor técnico por WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
