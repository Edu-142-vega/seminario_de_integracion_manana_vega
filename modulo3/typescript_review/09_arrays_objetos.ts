// Concepto puro
type Producto = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  existencias: number;
};

const catalogo: Producto[] = [
  { id: 1, nombre: "Laptop",  precio: 999,  disponible: true, existencias: 10 },
  { id: 2, nombre: "Mouse",   precio: 25,   disponible: true, existencias: 20 },
  { id: 3, nombre: "Monitor", precio: 350,  disponible: false, existencias: 5 },
  { id: 4, nombre: "Teclado", precio: 75,   disponible: false, existencias: 15 },
  { id: 5, nombre: "Audifonos", precio: 50, disponible: true, existencias: 25 },
  { id: 6, nombre: "camara", precio: 30, disponible: false, existencias: 8   }
];

// TypeScript sabe que cada "p" es de tipo Producto
const disponibles: Producto[] = catalogo.filter((p) => p.disponible);
const nombres: string[] = catalogo.map((p) => p.nombre);    
const masBarato: Producto | undefined = catalogo.reduce((min, p) =>
  p.precio < min.precio ? p : min
);

console.log(nombres);                  // ["Laptop", "Mouse", "Monitor"]
console.log(masBarato?.nombre);       // "Mouse"
console.log(disponibles.length);      // 2
console.log(disponibles.map((p) => p.nombre));
console.log(catalogo[3]); 
//INCLUIR EXISTENCIA, INCLUIR DOS ELEMENTOS AL ARRAY Y IMPRIMIR EL ARREGLO COMPLETO IMPRIMIR LA EXISTENCIA DEL 4 ELEMENTO DEL ARRAY

