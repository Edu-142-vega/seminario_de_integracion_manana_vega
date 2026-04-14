print("match case")
comando= input("comando proceso iniciar/parar/reiniciar: ")
match comando:
    case "iniciar":
        print("Proceso iniciado")
    case "parar":
        print("Deteniendose")
    case "reiniciar":
        print("reiciciando el sistema")
    case _:
        print(f"comando {comando} no encontrado")

print("match condiciones")
numero=7
match numero:
    case n if n<0:
        print(f"el numero {n} es negtivo")
    case 0:
        print("es cero")
    case n if n%2==0:
        print(f"el numero {n} es par")
    case n:
        print(f"el numero {n} es impar")