class Cuenta {
    constructor () {
        this.saldo = 0;
    }

    ingreso(monto){
        if (monto > 0) {
            this.saldo += monto;
            return true;
        }
        return false;
    }

    reintegro(monto) {
        if(monto> 0 && this.saldo >= monto) {
            this.saldo -= monto;
            return true
        }

        return false 
    }

    transferencia(monto, otraCuenta) {
        if(monto > 0 && this.saldo >= monto ) {
            this.saldo -= monto;
            otraCuenta.ingreso(monto);
            return true 
        }
        return false
    }

    getSaldo(){
        return this.saldo;
    }

    setSaldo(nuevoSaldo) {
        if(nuevoSaldo >= 0) {
            this.saldo = nuevoSaldo;
            return true
        }

        return false
    }
}


let cuenta1 = new cuenta();
let cuenta2 = new cuenta();

cuenta1.ingreso(1000);
console.log("Saldo de cuenta 1:", cuenta1.getSaldo()); 

cuenta1.transferencia(300, cuenta2);
console.log("Saldo de la cuenta 1 despues de transferir a la cuenta 2:", cuenta1.getSaldo()); 
console.log("Saldo de la  cuenta 2 después de recibir de la cuenta 1 cuenta 1:", cuenta2.getSaldo());

