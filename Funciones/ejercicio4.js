let numero = Number(prompt("ingrese un numero del 1 al 10"));

if ( numero  >= 1 && numero <= 10){
    let numerosAletras= convertirLetrasANumeros (numero)
    alert(`el numero ${numero} que copiaste es  ${numerosAletras}`);
} else {
    alert("debes copiar numeros ");
}
 function convertirLetrasANumeros (numero) {

 switch (numero) {
     case 1:
     return  "uno";
     case 2:
     return "dos";
     case 3: 
     return "tres";
     case 4: 
     return "cuatro";
     case 5: 
     return "cinco";
     case 6:
     return "seis"
     case 7:
     return "siete"
     case 8: 
     return "ocho"
     case 9: 
     return "nueve"
     case 10: 
     return "diez"
    } 
} 

 


    

 