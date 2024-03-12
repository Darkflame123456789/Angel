class Calculadora {
    constructor (numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    suma(){
        return this.numero1 + this.numero2;
    }

    resta(){
        return this.numero1 - this.numero2;
    }
    
    multiplicacion(){
        return this.numero1 * this.numero2;
    }
        division() {
            if (this.numero2 === 0) {
              return "No se puede dividir por cero";
            }
            return this.numero1 / this.numero2;
    }
}

const numero1 = Number(prompt("ingrese el primer numero"));
const numero2 = Number(prompt("ingrese el segundo numero"));

const calculadora = new Calculadora (numero1, numero2);

console.log(`el resultado de la suma es: ${calculadora.suma()}`);
console.log(`el resultado de la resta es: ${calculadora.resta()}`);
console.log(`el resultado de la multiplicacio es: ${calculadora.multiplicacion()}`);
console.log(`el resultado de la division es: ${calculadora.division()}`);

