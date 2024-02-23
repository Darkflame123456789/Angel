let nombre = prompt("escribe tu nombre completo");

let minisciula = nombre.toLowerCase(`${nombre}`);
let mayuscula = nombre.toUpperCase(`${nombre}`);
let primerMayuscula = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase(`${nombre}`);


alert(minisciula);
alert(mayuscula);
alert(primerMayuscula);



