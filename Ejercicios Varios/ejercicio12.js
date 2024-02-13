let corriente = Number(prompt("ingrese el gasto de la corriente"));

if(corriente < 1000 ){
    alert("la tarifa es de 1.2");
}else if (corriente >=1000 && corriente<= 1850) {
    alert("la tarifa es de 1.0");
}else if (corriente > 1850) {
    alert("la tarifa es de 0.9");
}else {
    alert("no copiaste un numero");
}
