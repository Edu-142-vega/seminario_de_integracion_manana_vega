print("ciclo for")
frutas=["manzana","banana","pera"]
for fruta in frutas:
    print(fruta)
print("recorrer palabras")
for letra in "frutas":
    print(letra)
print("recorrer rango")
for i in range(1,6):
    print(i)
print("recorrer rango configurar paso")
for i in range(1,10,2):
    print(i)
print("enumerar lista")
for index, fruta in enumerate(frutas):
    print(i,fruta)

print("Doslistas a la vez")
nombres=["ana","Luis"]
edades=[20,25]
for nombre, edad in zip(nombres, edades):
    print(nombre, edad)


print("control de ciclo")
print("break")
for i in range(5):
        if i == 3:
            break
        print(i)

print("continue")
for i in range(5):
    if i == 2:
        continue
    print(i)


print("for anidado")
for i in range(3):
    for j in range(2):
        print(i, j)

print("lista comprehencion forma corta")
cuadrados = [x**2 for x in range(5)]
print(cuadrados)

ventas = [120, 80, 200, 50, 300]
total = 0
for n in ventas:
    if(n > 100):
        total += n
        if (n >250):
            total += 30
        else:
            total += 10
print(total)