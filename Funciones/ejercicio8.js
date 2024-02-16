
function numero() {
    
    let numero1 = Number(prompt("ingresa el primer numero"));
    let numero2 = Number(prompt("ingrese el segundo numero"));
    let numero3 = Number(prompt("ungrese el tercer numero"));
    
    let maxima = Math.max(numero1, numero2, numero3);
    let minima = Math.min(numero1, numero2, numero3);
    let media = ( numero1 + numero2 + numero3) - minima - maxima;
        alert(`el dato mayor es ${maxima}, el dato intermedio es ${media}, el dato menor es ${minima}`)
    }
    numero()