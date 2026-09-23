import React from 'react';
import { Gem, Smartphone, Building2, Wrench, ShieldAlert, ArrowRight, ShieldCheck } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export default function TargetClients() {
  const clients = [
    {
      title: 'Joyerías y Relojerías',
      tag: 'OBJETIVO CRÍTICO #1',
      icon: Gem,
      risk: 'Mercadería de altísimo valor monetario en vitrinas expuestas a rotura rápida de cristal.',
      solution: 'La niebla de choque en 5 segundos oculta los mostradores inmediatamente; los ladrones no pueden ubicar las piezas de oro ni relojes.',
      message: 'Hola Nébula, tengo una Joyería/Relojería en Santa Cruz y deseo blindar mis vitrinas con monitoreo y niebla.'
    },
    {
      title: 'Tiendas de Celulares y Tecnología',
      tag: 'ALTA ROTACIÓN',
      icon: Smartphone,
      risk: 'Productos compactos de rápida sustracción y fácil reventa en el mercado negro.',
      solution: 'Voz disuasiva inmediata por megáfono más cortina opaca que impide saquear los estantes traseros y bodegas.',
      message: 'Hola Nébula, tengo una Tienda de Tecnología/Celulares y quiero cotizar la seguridad nocturna de mi inventario.'
    },
    {
      title: 'Farmacias y Casas de Cambio',
      tag: 'EFECTIVO Y CONTROLADOS',
      icon: Building2,
      risk: 'Cajas fuertes, flujo constante de efectivo y medicamentos especiales en locales céntricos.',
      solution: 'Monitoreo humano permanente en la madrugada para alertar al instante ante intento de forzado de cortina metálica o candados.',
      message: 'Hola Nébula, administro una Farmacia/Casa de Cambio en Santa Cruz y necesito monitoreo activo proactivo.'
    },
    {
      title: 'Ferreterías y Depósitos Cerrados',
      tag: 'INVENTARIO PESADO',
      icon: Wrench,
      risk: 'Herramientas eléctricas de alto costo, cobre, cables y depósitos aislados durante la noche.',
      solution: 'Sensores de iluminación y generador de niebla de alta capacidad que satura almacenes de gran volumen.',
      message: 'Hola Nébula, tengo un Depósito/Ferretería en Santa Cruz y quiero cotizar la instalación según metros cúbicos.'
    }
  ];

  return (
    <section 
      id="clientes" 
      className="section-wrapper"
    >
      <div className="container-custom">
        
        {/* Header */}
        <div className="section-header-block">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            CLIENTES IDEALES EN SANTA CRUZ DE LA SIERRA
          </h2>
          <p className="section-subtitle">
            Diseñado para negocios donde un robo de 2 minutos puede significar la quiebra financiera total.
            Blindamos los rubros más vulnerables en la noche cruceña.
          </p>
        </div>

        {/* Clients Grid: 2 columns for optimal reading comfort and space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {clients.map((client, idx) => {
            const Icon = client.icon;
            const waUrl = createWhatsAppLink(client.message);
            return (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-10 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  {/* Tag and Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider border border-slate-700/80 text-slate-300 bg-slate-900/60">
                      {client.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-2xl text-white mb-6">
                    {client.title}
                  </h3>

                  {/* Threat Container Box (Semantic Red) */}
                  <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20 mb-4">
                    <span className="text-xs font-mono font-bold text-red-400 block mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      AMENAZA PRINCIPAL
                    </span>
                    <p className="text-sm text-slate-300 leading-[1.7]">
                      {client.risk}
                    </p>
                  </div>

                  {/* Solution Container Box (Brand Accent Cyan) */}
                  <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/25 mb-8">
                    <span className="text-xs font-mono font-bold text-cyan-400 block mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      RESPUESTA NÉBULA
                    </span>
                    <p className="text-sm text-slate-200 leading-[1.7] font-medium">
                      {client.solution}
                    </p>
                  </div>
                </div>

                {/* WhatsApp Action Link: Secondary Outline Style */}
                <div className="pt-6 border-t border-slate-800/80">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-tactical w-full py-3.5 px-4 rounded-xl flex items-center justify-between text-xs sm:text-sm font-semibold transition-all group"
                  >
                    <span>Consultar protección para mi negocio</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-cyan-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
