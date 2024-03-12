class Contacto {
    constructor(nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
}

class Agenda{
    constructor(){
        this.contactos = [];
    }

agregarContacto (nombre, telefono, email) {
    const nuevoContacto  = new Contacto ( nombre, telefono, email);

    this.contactos.push(nuevoContacto);
    console.log("contacto agregado correctamente");
}

listaContactos () {
   console.log("lista de contacto:");
   this.contactos.forEach(contacto => { 
            console.log(`Nombre: ${contacto.nombre}, Telefono: ${contacto.telefono}, Email ${contacto.email}`);
        });
    }


buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(contacto => contacto.nombre == nombre);
    if(contactoEncontrado) {
        console.log(`Contacto encontradi - Nombre: ${contactoEncontrado.nombre}, Telefono: ${contactoEncontrado.telefono}, Email: ${contactoEncontrado.email}`);
    }else {
        console.log (`contacto no encontrado`);
    }
}

editaContacto(nombre, nuevoTelefono, NuevoEmail) {
    const contactoIndex = this.contactos.findIndex(contacto => contacto.nombre == nombre);
    if(contactoIndex !== -1) {
        this.contactos[contactoIndex].telefono = nuevoTelefono;
        this.contactos[contactoIndex].email = NuevoEmail;
        console.log(`contacto editado correctamente`);
     } else {
        console.log(`contacto no encontrado`);
     }
    }

mostrarMenu(){
    prompt(`
    Menú:
    1. Añadir contacto
    2. Lista de contacto
    3. Buscar contacto 
    4. Editar contacto
    5. cerrar agenda 
    `);
}

ejecutarOpcion (opcion){
    switch(opcion){
        case `1`:
            const nombre = prompt("introduce el nombre del contacto:");
            const telefono = prompt("introduce el telefono del contacto");
            const email = prompt(" introdice el email del contacto");
            this.agregarContacto(nombre, telefono, email);
            break;
        case `2` :
         this.listaContactos();
         break;
        case `3` :
          const buscarNombre = prompt("introduce el nombre del contacto");
          this.buscarContacto(buscarNombre);
          break;
        case `4` :
          const editarNombre = prompt("introduce el nomre del contacto que quiere editar");
          const nuevoTelefono = prompt("introduce el nuevo telefono");
          const nuevoEmail = prompt("introduce el nuevo email");
          this.editaContacto(editarNombre, nuevoTelefono, nuevoEmail);
          break;
        case `5` : 
           console.log("cerrando agenda:");
           break;
        default:
            console.log("la opcion no es valida")   

    }
}

iniciar() {
    let opcion;
    do {
        this.mostrarMenu();
        opcion = prompt ("seleccione una opcion:");
        this.ejecutarOpcion(opcion);
    }while (opcion !== `5`);
  }
}

const agenda = new Agenda ();
agenda.iniciar();
