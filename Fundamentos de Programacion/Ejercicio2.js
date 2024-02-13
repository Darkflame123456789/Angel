var precio = prompt("ingrese el precio");
var descuento = prompt ("cuanto es el descuento");

precio = parseFloat(precio);
descuento = parseFloat(descuento);

var montoDescuento = precio * (descuento / 100);

var precioFinal = precio - montoDescuento;
 
alert("el precio final con descuento es: " +precioFinal);