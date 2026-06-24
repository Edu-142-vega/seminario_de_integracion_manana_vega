print("Listas")
print("Crear listas")
vacia=[]
print(vacia)
casos=[1,2,3,4,5,6,7]
print(casos)
nombres=["Juan", "Pedro", "Carlos", "Maria","Petra","Juana"]
print(nombres)
mixta=[1, "Hola", "mundo", True, None, 3.4]
print(mixta)
anidada=[1,[5,5,[6,4,4]],5,7]
print(anidada)
print("Acceder a elementos de la lista")
print(nombres[0])
print(nombres[-1])
print(nombres[1:3])
print(nombres[::-1])

print("CRUD en listas")
evidencias=["huellas","cinta","arma","documento"]
evidencias.append("grabacion")
print(evidencias)
evidencias.insert(1, "testigo")
print(evidencias)
evidencias.extend(["foto", "registro"])
evidencias[0]="muestra"
print(evidencias)
evidencias.remove("documento")
print(evidencias)
eliminado=evidencias.pop()
print(evidencias)
eliminado=evidencias.pop(0)
print(evidencias)
del evidencias[0]
print(evidencias)

print("buscar valores en los elementos de una lista")
print("foto" in evidencias)
print(evidencias.index("foto"))
print(evidencias.count("foto"))

print("ordenar listas")
prioridades=[5,2,9,1,5,6,34,9,0,1,2]
print(prioridades)
prioridades.sort()
print(prioridades)
prioridades.sort(reverse=True)
print(prioridades)
ordenada=sorted(prioridades)
print(prioridades)
print(ordenada)
