let numero1 = Number(prompt("ingrese el primer numero"));
let numero2 = Number(prompt("ingrese el segundo numero"));

if (numero1 < numero2) {
   
    for (var x = numero1; x <= numero2; x++) {
      
      if (x % 2 === 0) {
       
        console.log(x);
      }
    }
  } else {
    console.log("El número 1 debe ser menor que el número 2.");
  }