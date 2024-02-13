var numero1 = parseFloat(prompt("introducir un numero"));
var numero2 = parseFloat(prompt("introducir un  numero"));

if(numero1 % numero2 == 0 || numero2 % numero1 == 0) {
    alert('los numeros son multiplos entre si');
}else if(numero1 % numero2 != 0 || numero2 % numero1 != 0) {
    alert('los numeros no son multiplos entre si'); 
}else{
    alert("tienes que copiar numeros");
}
