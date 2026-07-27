# Expediente Policial: Datos del Sospechoso y Evidencias

nombre_sospechoso = 'Carlos Mendoza' #string
codigo_expediente = 10452             #int
nivel_prioridad = 4.5                 #float
caso_activo = True                    #boolean
orden_captura = None                  #NoneType

print(type(nombre_sospechoso))
print(type(codigo_expediente))
print(type(nivel_prioridad))
print(type(caso_activo))
print(type(orden_captura))


#Asignar id de evidencias en una linea 
evidencia_a, evidencia_b, evidencia_c = 101, 102, 103
print(evidencia_a)
print(evidencia_b)
print(evidencia_c)

#Asignar el mismo estado a varios expedientes
expediente_1 = expediente_2 = expediente_3 = 0
print(expediente_1)
print(expediente_2)
print(expediente_3)

#Intercambiar agentes asignados
agente_principal, agente_secundario = 10, 20
print(agente_principal, agente_secundario)
agente_principal, agente_secundario = agente_secundario, agente_principal
print(agente_principal, agente_secundario)

#Convenciones de nombres para expedientes policiales
nombre_fiscalia = "Fiscalia Central"     #snake_case
FiscaliaEspecializada = "Fiscalia Central" #NO USAR camelCase
MAX_EVIDENCIAS = 50                      #CONSTANTE, USAR MAYUSCULAS
_codigo_confidencial = "privado_policial"  #para uso interno

#Manejo de folios de expedientes
folio_menor = 42
folio_archivado = -17
folio_nacional = 1_000_000_000_000
codigo_encriptado_expediente = 2 ** 100
print(folio_menor)
print(folio_archivado)
print(folio_nacional)
print(codigo_encriptado_expediente)


#Bases Numericas para codigos de seguridad
binario = 0b1010
octal = 0o17
hexadecimal = 0xFF
print(binario, octal, hexadecimal)


#convertir codigo de expediente decimal a otras bases
print(bin(255))   #binario
print(oct(255))   #octal
print(hex(255))   #hexadecimal
