// Concepto puro del Sistema de Expedientes Policiales
interface SerializablePolicial {
  serializarExpediente(): string;
}

interface ValidableFiscal {
  esAptoParaFiscalia(): boolean;
}

class InformePolicial implements SerializablePolicial, ValidableFiscal {
  constructor(
    public numeroInforme: string,
    public evidenciasRegistradas: string[],
    public numeroSospechosos: number
  ) {}

  serializarExpediente(): string {
    return JSON.stringify({
      numeroInforme: this.numeroInforme,
      evidenciasRegistradas: this.evidenciasRegistradas,
      numeroSospechosos: this.numeroSospechosos
    });
  }

  esAptoParaFiscalia(): boolean {
    return this.evidenciasRegistradas.length > 0 && this.numeroSospechosos > 0;
  }
}

const informe = new InformePolicial("INF-9902", ["Huella dactilar", "Arma decomisada"], 1);
console.log(informe.esAptoParaFiscalia());    // true
console.log(informe.serializarExpediente());