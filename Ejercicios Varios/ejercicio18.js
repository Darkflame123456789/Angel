
var precioOriginal = parseFloat(prompt("Ingrese el precio original de la motocicleta:"));


var marca = prompt("Ingrese la marca de la motocicleta (Honda, Yamaha, Suzuki u otra):").toLowerCase();

var descuento;

if (marca === "honda") {
    descuento = 0.05;
} else if (marca === "yamaha") {
    descuento = 0.08;
} else if (marca === "suzuki") {
    descuento = 0.10;
} else {
    descuento = 0.02;
}


var precioConDescuento = precioOriginal * (1 - descuento);


if (!isNaN(precioConDescuento)) {
    alert("El precio original de la motocicleta es: " + precioOriginal);
    alert("El descuento aplicado es del " + (descuento * 100) + "%");
    alert("El precio con descuento es: " + precioConDescuento);
} else {
    alert("Por favor, ingrese un precio válido para la motocicleta.");

    }

    