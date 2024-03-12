class contador {
    constructor(){
        this.valor = 0
    }

    incremento () {
        this.valor++;
    }

    decremento () {
        this.valor--;
    }

    getvalor(){
        return this.valor;
    }
    setvalor(nuevoVAlor) {
        this.valor = nuevoVAlor;
    }
}

let contar = new contador ();
console.log(contar.getvalor());


contar.incremento();
console.log(contar.getvalor());

contar.incremento();
console.log(contar.getvalor());

contar.decremento();
console.log(contar.getvalor());


contar.decremento();
console.log(contar.getvalor());


