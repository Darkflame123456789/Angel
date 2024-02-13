var precio1 = parseFloat(prompt("Ingrese el precio de la primera película: "));
var precio2 = parseFloat(prompt("Ingrese el precio de la segunda película: "));
var precio3 = parseFloat(prompt("Ingrese el precio de la tercera película: "));

var totalAPagar;

if (precio1 <= precio2 && precio1 <= precio3) {
    totalAPagar = precio1 + Math.min(precio2, precio3);
} else if (precio2 <= precio1 && precio2 <= precio3) {
    totalAPagar = precio2 + Math.min(precio1, precio3);
} else {
    var totalAPagar = precio3 + math.min(precio1, precio2)
} 
alert("La cantidad a pagar es: " + totalAPagar) 