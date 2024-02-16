

function decimalABinario(num) {
    if (num === 0) {
        return '0';
    }
    let binario = '';
    while (num > 0) {
        binario = (num % 2) + binario;
        num = Math.floor(num / 2);
    }
    return binario;
}

let numeroDecimal = 65;
console.log(`Binario : ${decimalABinario(numeroDecimal)}`)