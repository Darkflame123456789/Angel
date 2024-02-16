function invertirNumeroRecursivo(numero) {
    if (numero < 10) {
        return numero; 
    } else {
        const ultimoDigito = numero % 10;
        const restoNumero = Math.floor(numero / 10);
        const numeroInvertido = invertirNumeroRecursivo(restoNumero);
        return parseInt(ultimoDigito.toString() + numeroInvertido.toString());
    }
}

const numeroOriginal = 123456;
const numeroInvertido = invertirNumeroRecursivo(numeroOriginal);
console.log(`Número original: ${numeroOriginal}`);
console.log(`Número invertido: ${numeroInvertido}`);
