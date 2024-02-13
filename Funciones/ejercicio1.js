let dato = +prompt("ingrese un numero");

function esPar(numero) {
  if (isNaN(numero)) {
    return alert("no ingresaste un numero.");
  } 
    if (numero % 2 === 0) {
      return alert(`El numero ${numero}  es par`);
    } else {
      return alert(`el numero ${numero}  es impar`);
    }
  
}

esPar(dato);
