class Cuenta {
    constructor(titular, cantidad = 0) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.cantidad += cantidad;
        }
    }
    retirar(cantidad) {
        if (cantidad > 0) {
            const nuevaCantidad = this.cantidad - cantidad;
            this.cantidad = nuevaCantidad >= 0 ? nuevaCantidad : 0;
        }
    }
    getTitular() {
        return this.titular;
    }

    setTitular(nuevoTitular) {
        this.titular = nuevoTitular;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(nuevaCantidad) {
        this.cantidad = nuevaCantidad;
    }

    toString() {
        return `Cuenta de ${this.titular} con saldo de $${this.cantidad.toFixed(2)}`;
    }
}
const miCuenta = new Cuenta("Petulio Jordan", 2000);
console.log(miCuenta.toString()); 
miCuenta.ingresar(500);
console.log(miCuenta.toString()); 
miCuenta.retirar(200);
console.log(miCuenta.toString()); 
