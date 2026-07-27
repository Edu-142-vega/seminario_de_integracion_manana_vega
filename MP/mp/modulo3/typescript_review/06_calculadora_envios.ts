// Sistema de Expedientes Policiales - Cotización de Análisis Forense
// Demuestra cómo los tipos previenen errores en la gestión de expedientes y análisis de evidencias.

type PrioridadExpediente = "baja" | "media" | "alta" | "urgente";

interface ExpedienteCotizacion {
  codigoExpediente: string;
  delitoPrincipal: string;
  cantidadEvidencias: number;
  prioridad: PrioridadExpediente;
}

const ARANCELES_INVESTIGACION: Record<PrioridadExpediente, number> = {
  baja:      150.00,  // Arancel base por análisis
  media:     300.00,
  alta:      600.00,
  urgente:  1200.00,
};

const TASA_ANALISIS_EVIDENCIA = 45.00;  // Arancel por evidencia procesada

function cotizarAnalisisExpediente(expediente: ExpedienteCotizacion): string {
  const arancelBase = ARANCELES_INVESTIGACION[expediente.prioridad];
  const costoEvidencias = expediente.cantidadEvidencias * TASA_ANALISIS_EVIDENCIA;
  const totalPresupuesto = arancelBase + costoEvidencias;

  return `
📂 Presupuesto de Peritaje de Expediente
   Código      : ${expediente.codigoExpediente}
   Delito      : ${expediente.delitoPrincipal}
   Evidencias  : ${expediente.cantidadEvidencias} unidades
   Prioridad   : ${expediente.prioridad}
   Base Peritaje: $${arancelBase.toFixed(2)}
   Procesamiento: $${costoEvidencias.toFixed(2)}
   ─────────────────────────
   TOTAL EST.  : $${totalPresupuesto.toFixed(2)}
  `.trim();
}

const expediente1: ExpedienteCotizacion = {
  codigoExpediente: "EXP-2026-001",
  delitoPrincipal: "Robo Agravado",
  cantidadEvidencias: 4,
  prioridad: "alta",
};

const expediente2: ExpedienteCotizacion = {
  codigoExpediente: "EXP-2026-045",
  delitoPrincipal: "Homicidio en Grado de Tentativa",
  cantidadEvidencias: 12,
  prioridad: "urgente",
};

console.log(cotizarAnalisisExpediente(expediente1));
console.log("---");
console.log(cotizarAnalisisExpediente(expediente2));