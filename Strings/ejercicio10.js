let capicua = (numero) => {
return numero.toString().split("").reverse().join("") == numero;
}

let cadena = +prompt("ingrese una cadena de numero");
if(isNaN(cadena)){
alert('ingresa un dato numerico');
}
else {console.log(capicua(cadena));}