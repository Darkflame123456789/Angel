var resistencia1 = prompt("ingrese la primera resistencia");
var resistencia1 = parseFloat (resistencia1);

var resistencia2 = prompt("ingrese la segunda resistencia");
var resistencia2 = parseFloat(resistencia2);

var resistenciaEquivalente = (resistencia1 * resistencia2) / (resistencia1 + resistencia2);


alert("la resistencia equivalente es " + resistenciaEquivalente);