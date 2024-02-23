let color = ["azul" , "rojo" , "verde" , 'amarillo' , 'negro' , 'blanco'];
 console.log (color);

let nuevo = prompt('escribe un color');
let encontrar = color.indexOf(nuevo);

alert("el color se encuentra en el Array, y su pocision es: " + encontrar);