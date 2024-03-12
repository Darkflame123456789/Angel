class Triangulo{
    constructor(ladoA, ladoB, ladoC){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
determinarTipo(){
    if (this.ladoA == this.ladoB && this.ladoB == this.ladoC){
        return "equilatero";
    } else if (this.ladoA === this.ladoB || this.ladoA === this.ladoC || this.ladoB === this.ladoC) {
        return "isoceles";
    } else{
        return "escaleno";
    }

}
obtenerElMayor(){
    return Math.max(this.ladoA, this.ladoB, this.ladoC);
}
 }   

 const triangulo = new Triangulo(26,20,29);
 console.log(`el tipo de triangulo es: ${triangulo.determinarTipo()}`);
 
 console.log(`el lado mayor es: ${triangulo.obtenerElMayor()}`);
