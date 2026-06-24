print("Condicionales simples")
edad=input("Edad del detenido: ")
if(int(edad)>=18):
    print("Mayor de edad")

print("Condicionales dos caminos")
temperatura=input("Temperatura corporal: ")
if(int(temperatura)>=38):
    print("Fiebre detectada")
else:
    print("Temperatura normal")

print("Condiciones multiples")
nota=input("Calificacion de riesgo: ")
if(int(nota)>=90):
    print("Riesgo alto")
elif(int(nota)>=80):
    print("Riesgo medio")
elif(int(nota)>=70):
    print("Riesgo bajo")
else:
    print("Riesgo minimo")

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
