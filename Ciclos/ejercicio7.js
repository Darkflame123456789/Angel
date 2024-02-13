let contador = 0;
for (let i = 1; i <= 5; i++) {
if  (Number(prompt("ingrese la nota " + i))>= 3) contador++;

}
alert(`las notas que fueron mayores o iguales a (3.0) fueron: ${contador}`);