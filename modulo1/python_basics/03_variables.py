# Enteros, Cadena de caracteres, Booleanos, None
nombre = "Ana Garcia" #string
edad = 28             #int
altura = 1.65         #float
activo=True           #bool
nulo=None             #NoneType


print(type(nombre))
print(type(edad))
print(type(altura))
print(type(activo))
print(type(nulo))

# Asignar valor varias variables en una linea 
a, b, c =12, 13, 14
print(a)
print(b)
print(c)

# Asignar el mismo valor a varias variables
a= b= c = 0
print(a)
print(b)
print(c)

# Intercambiar valores
x,y = 10,20
print(x,y)
x,y = y,x
print(x,y)

# Conversiones de nombres
nombre_completo="Rafael Urdaneta" #snake_case
nombreCompleto="Rafael Urdaneta"  #NO USAR camelCase
MAX_REINNTENTOS=3                 #MAYUSCULAS SOSTENIDA para Constantes
_variables_interna= "privada"     #para uso interno

# Manejo de enteros
pequeno = 42
negativvo = -17
grande = 1_000_000_000
enorme = 2 ** 100
print(pequeno)
print(negativvo)
print(grande)
print(enorme)

#Bases numericas 
binario = 0b1010
octal = 0o72
hexadecimal = 0xFF
print(binario, octal, hexadecimal)
#Convertir de decimal a otras bases 
print(bin(255))
print(oct(255))
print(hex(255))