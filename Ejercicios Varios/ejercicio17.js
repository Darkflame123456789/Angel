let nombre = prompt("ingrese su nombre");
let edad = prompt("ingrese su edad");
let sexo = prompt("ingrese su sexo (M) si es Masculino (F) si es Femenino");

if(edad >= 18 && sexo == 'M'){
    alert(nombre);
}else{
    alert("la persona no es mayor de edad o del sexo masculino");
}
