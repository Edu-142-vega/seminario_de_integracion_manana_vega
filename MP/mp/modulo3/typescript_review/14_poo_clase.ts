// Concepto puro del Sistema de Expedientes Policiales
class ExpedientePolicial {
  tituloCaso: string;
  codigoExpediente: string;
  enInvestigacion: boolean;

  constructor(tituloCaso: string, codigoExpediente: string, enInvestigacion: boolean) {
    this.tituloCaso = tituloCaso;
    this.codigoExpediente = codigoExpediente;
    this.enInvestigacion = enInvestigacion;
  }

  // Método: describir estado del expediente policial
  describir(): string {
    const estado = this.enInvestigacion ? "abierto y en investigacion" : "cerrado y archivado";
    return `Expediente [${this.codigoExpediente}] "${this.tituloCaso}" — (${estado})`;
  }
}

const casoRobo = new ExpedientePolicial("Caso Robo Joyería Central", "EXP-2026-884", true);
const casoHomicidio = new ExpedientePolicial("Operativo Armas Decomisadas", "EXP-2026-102", false);

console.log(casoRobo.describir());
console.log(casoHomicidio.describir());