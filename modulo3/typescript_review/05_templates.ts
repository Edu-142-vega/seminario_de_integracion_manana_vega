// Concepto puro — template literals (backtick ``)
const nombre: string = "Ana";
const rol: string    = "administradora";
const sesiones: number = 42;

// Interpola cualquier expresión con ${ }
const bienvenida: string = `Bienvenida, ${nombre}. Rol: ${rol}. Sesiones: ${sesiones}.`;
console.log(bienvenida);
// Bienvenida, Ana. Rol: administradora. Sesiones: 42.

// Expresiones dentro de ${ }
const precio: number = 1200;
const iva: number    = 0.19;
const total: string  = `Precio con IVA: $${(precio * (1 + iva)).toFixed(2)}`;
console.log(total);
// Precio con IVA: $1428.00

// Multi-línea — sin concatenación ni \n
const servidor: string = "api.servidor.local";
const uptime: number = 99.5;

const reporte: string = `
=== Reporte del sistema ===
Servidor : ${servidor}
Estado      : ${servidor ? "activo" : "inactivo"}
Uptime   : ${uptime}%
`;
console.log(reporte);