
let matriz = new Array(5).fill(0).map(() => new Array(5).fill(0));

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100); 
    }
}

console.log("Suma de cada fila:");
for (let i = 0; i < 5; i++) {
    let sumaFila = matriz[i].reduce((acc, val) => acc + val, 0);
    console.log(`Fila ${i + 1}: ${sumaFila}`);
}

console.log("Suma de cada columna:");
for (let j = 0; j < 5; j++) {
    let sumaColumna = matriz.reduce((acc, fila) => acc + fila[j], 0);
    console.log(`Columna ${j + 1}: ${sumaColumna}`);
}
