const mesesEnAño = 12;
var totalAhorrado = 0;

for (var i = 0; i < mesesEnAño; i++) {
    var deposito = parseFloat(prompt("Ingrese el depósito para el mes " + (i + 1) + ":"));
    totalAhorrado += deposito;
    console.log("Mes " + (i + 1) + ": Ahorro acumulado $" + totalAhorrado);
}

console.log(`Total ahorrado en un año: $ ${totalAhorrado}`);