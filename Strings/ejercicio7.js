
let fecha = prompt("Introduce la fecha de tu nacimiento en formato dd/mm/aaaa: ");


let dia = fecha.slice(0, 2);
let mes = fecha.slice(3, 5);
let año = fecha.slice(6);

console.log(`Día: ${dia}`);
console.log(`Mes: ${mes}`);
console.log(`Año: ${año}`);
