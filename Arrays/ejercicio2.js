let numero = [1 , 2 , 3 , 4 , 5 , 6 , 7, 8, 9, 10 ]

console.log (numero);

let sumaValores = 0;
for (let i = 0; i < numero.length; i++) {
  sumaValores += numero[i];
}

let media = sumaValores / numero.length;

console.log(`La media es: ${media}`);
