class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad =  edad;
    }

mayorOMenor(edad){
    if(edad >= 18){
        console.log(`${this.nombre} es mayor de edad`);
    }else{
        console.log(`${this.nombre} no es mayor de edad`);
    }
}

getNombre() {return this.nombre;
} 
setNombre() {return this.nombre = nombre;
}
getEdad() {return this.edad;
}
setEdad() {return this.edad = edad;
}
}

const Persona1 = new Persona("Raul")
Persona1.mayorOMenor(15);