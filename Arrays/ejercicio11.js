
function crearArray(tamano) {
    let array = new Array(tamano);
    return array;
}
function llenarArrayConMultiplos(array, numero) {
    for (let i = 0; i < array.length; i++) {
        array[i] = (i + 1) * numero;
    }
}
function mostrarArray(array) {
    console.log("Elementos del array:");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let tamanoArray = parseInt(prompt("Ingrese el tamaño del array:"));
let numeroMultiplo = parseInt(prompt("Ingrese el número para los múltiplos:"));

let miArray = crearArray(tamanoArray);
llenarArrayConMultiplos(miArray, numeroMultiplo);

mostrarArray(miArray);
