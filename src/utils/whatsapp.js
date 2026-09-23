export const PHONE_NUMBER = "59177840582";

export function createWhatsAppLink(message) {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_LINKS = {
  general: createWhatsAppLink("Hola Nébula, deseo información sobre el servicio de Monitoreo Nocturno y Niebla Inteligente."),
  heroCotizar: createWhatsAppLink("Hola Nébula, quiero cotizar la seguridad y protección de mi local comercial en Santa Cruz."),
  planVista: createWhatsAppLink("Hola Nébula, deseo contratar el Plan Vista (Bs 350/mes). Quiero coordinar la instalación."),
  planTotal: createWhatsAppLink("Hola Nébula, me interesa el Plan Total con Niebla (Bs 490/mes). Solicito la evaluación técnica en mi local."),
  inspeccionGratis: createWhatsAppLink("Hola Nébula, quiero solicitar la Evaluación Técnica Presencial Gratuita en mi negocio."),
};
