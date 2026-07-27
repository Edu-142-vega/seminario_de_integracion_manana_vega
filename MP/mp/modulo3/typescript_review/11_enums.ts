// Enum numérico de Rangos Policiales
enum RangoAgente {
  Oficial,     // 0
  Subinspector, // 1
  Inspector,   // 2
  Comisario,   // 3
}

const rangoActual: RangoAgente = RangoAgente.Oficial;
console.log(rangoActual);            // 0
console.log(RangoAgente[0]);         // "Oficial" (mapeo inverso automático)

// Enum numérico con valor de inicio personalizado para Códigos de Alerta Policial
enum CodigoAlerta {
  Normal = 100,
  InvestigacionEnProceso = 200,
  OperativoPrioritario = 400,
  EmergenciaPolicial = 500,
}

// Enum de string para Roles de Usuarios en el Sistema de Expedientes Policiales
enum RolSistema {
  AgenteInvestigador = "AGENTE_INVESTIGADOR",
  FiscalAsignado     = "FISCAL_ASIGNADO",
  Supervisora        = "SUPERVISORA_POLICIAL",
}

const miRol: RolSistema = RolSistema.FiscalAsignado;
console.log(miRol); // "FISCAL_ASIGNADO"