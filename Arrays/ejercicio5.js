let vector = [1 , 2 , 3 , 4 , 5 , 6, 7 , 8 , 9];


let sumaTotal = 0; 
let menor = vector[0];
let mayor = vector[0];

for (let i = 0; i < vector.length; i++) {
    sumaTotal += vector[i];

    if (vector[i] > mayor) {
        mayor = vector[i];
    }
    if (vector[i] < menor) {
        menor = vector[i];
    }
}

let media = sumaTotal / vector.length;


console.log(`El número mayor es: ${mayor}`);
console.log(`El número menor es: ${menor}`);
console.log(`La media de los números es: ${media.toFixed(2)}`);