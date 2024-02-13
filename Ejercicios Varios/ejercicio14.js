let numero1 = parseFloat(prompt("introducir un numero"));
let numero2 = parseFloat(prompt("introducir un numero"));

if(numero1>numero2){
    alert(" el " + numero1 + " es mayor que el " + numero2);
} else if (numero2>numero1){
    alert(" el " + numero2 + " es mayor que el " + numero1);
} else if ( numero1 == numero2){
    alert("los numeros son igules")
 } else{
    alert("no copiaste numeros")
 }

