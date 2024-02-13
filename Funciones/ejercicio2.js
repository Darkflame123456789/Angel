

let dato1 = +prompt(" ingrese el primer numero ");
let dato2 = +prompt(" ingrese el segundo numero ");

function media (numero1, numero2) {
    let numero;
    if(isNaN(numero1) && isNaN(numero2)) {
       return alert (`debes ingresar solo numeros`);
    } else {
        numero = numero1 + numero2 / 2;
        return alert (`${numero} es la media arimetica `);
    }

}

media (dato1, dato2);