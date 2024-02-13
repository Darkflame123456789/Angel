let raiz = Number(prompt("ingrese un numero"));

if( raiz < 0){
    alert("el numero es imaginario");
}else if(isNaN(raiz)){
    alert("no se pueden copiar letras")

}else{
    alert("la raiz es: " + Math.sqrt(raiz));
}






