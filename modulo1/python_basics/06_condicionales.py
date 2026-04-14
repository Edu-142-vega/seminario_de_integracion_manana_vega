print("Condicionales simples")
edad=input("¿Cuál es tu edad? ")
if(int(edad)>=18):
    print("Mayor de edad")


    print("Condicionales dos caminos")
temperatura=input("incluye temperatua ")
if(int(temperatura)>=38):
    print("temperatura alta")
else:
    print("temperatura normal")

    print("Condiciones multiples")
nota=input("incluye nota ")
if(int(nota)>=90):
    print("exelente")
elif(int(nota)>=80):
    print("bueno")
elif(int(nota)>=70):
    print("aprovado")
else:
    print("reprobado")


print("Condiciones if anidados")
tiene_reserva=True
dinero=25
plato="pizza"
if(tiene_reserva):
    if(dinero>=20):
        if plato=="pizza":
            print("tu pizza cuesta $20, pedido confirmado")
        else:            print("plato no disponible")
    else:        print("dinero insuficiente")
else:    print("no tienes reserva")


print("Evaluacion empleados")
antiguedad =  input("Ingrese su antiguedad en la empresa: ")
calificacion_d = input("Ingrese su calificacion de desempeño: ")
salario = input("Ingrese su salario mensual: ")
if(int(antiguedad) > 1):
    if(int(calificacion_d) > 8):
        if(int(salario) < 1000):
            print("bono de $200")
        else:
            print("bono de $100")
    else:
        print("No puede optar al bono")
        
else:
    print("No aplica para este tipo de evaluacion")