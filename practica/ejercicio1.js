function fizzBuzz(numero) {
let Num = "";

if (numero % 3 === 0) {
        Num += "fizz";
    }

    if (numero % 5 === 0) {
        Num += "buzz";
    }

    return Num || numero.toString();
}

let numero = Number(prompt("Ingrese un número"));
console.log(fizzBuzz(numero));
