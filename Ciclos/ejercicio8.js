let numero = Number(prompt('ingrese un numero entero'));
let factorial  = 1;

for(let x = 1; x <= numero; x++) {
    factorial *= x;
}

console.log(`El factorial de ${numero} es: ${factorial}`);