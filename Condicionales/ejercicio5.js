var calificacion = parseFloat(prompt(" escriba su calificacion (del 0 al 10)"));

if(calificacion >= 0 && calificacion <= 5){
    alert("insuficiente");
}else if ( calificacion >= 5 && calificacion <= 7 ){
    alert("suficiente");
}else if ( calificacion >= 7 && calificacion <= 9){
    alert("bien");
}else if ( calificacion >= 9 && calificacion <= 10){
    alert("exelente")
}else {
    alert("esta calificacion no es valida");
}

