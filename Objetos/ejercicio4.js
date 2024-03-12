class Alumno {
    constructor (nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }
notaFinal(nota){
if (nota >= 7) {
    console.log(`el alumno ${this.nombre} fue aprobado con la nota ${nota}`)
}else{
    console.log(`el alumno} ${this.nombre} fue reprobado con la nota ${nota}`)
}
}
getNota() { return this.nota;
}
setNota(nota) {this.nota = nota;
}
getNombre() {return this.nombre
}
setNombre(nombre){ this.nombre = nombre;
}
}
const Alumno1 = new Alumno("pepe");
Alumno1.notaFinal(7.8);

