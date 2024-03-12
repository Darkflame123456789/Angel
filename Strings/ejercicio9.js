let oracion = prompt("escribe una oracion");

let Palabras = oracion.split(" ")
let numeroPalabras = Palabras.length;

console.log(`${oracion} tiene ${numeroPalabras} palabras `);