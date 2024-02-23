
const notas = [15, 8, 12, 18, 5, 14, 10, 7, 16,];
let sumaAprobados = 0;
let sumaDesaprobados = 0;
let cantidadAprobados = 0;
let cantidadDesaprobados = 0;


for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 11) {
        sumaAprobados += notas[i];
        cantidadAprobados++;
    } else {
        sumaDesaprobados += notas[i];
        cantidadDesaprobados++;
    }
}

let promedioAprobados = sumaAprobados / cantidadAprobados;
let promedioDesaprobados = sumaDesaprobados / cantidadDesaprobados;


console.log(`Cantidad de aprobados: ${cantidadAprobados}`);
console.log(`Promedio de aprobados: ${promedioAprobados.toFixed(2)}`);
console.log(`Cantidad de desaprobados: ${cantidadDesaprobados}`);
console.log(`Promedio de desaprobados: ${promedioDesaprobados.toFixed(2)}`);
