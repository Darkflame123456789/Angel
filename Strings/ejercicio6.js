let correo = prompt("ingrese su correo electronico");

let cambioDominio = correo.split("@")[0];

let nuevoCorreo = `${cambioDominio}@ceu.es`;

console.log(`el nuevo correo electronico es : ${nuevoCorreo}`);
