/* let nombre = [];
let edad =  []; */
let mayoresEdad = []
while (true) {
     let nombre = (prompt("ingrese los nombres ingrese un (*) para darle fin"));
        if (nombre === "*"){
        break;
     }
     let edad = +prompt("ingrese la edad"); 
     if ( edad >= 18){
        const persona = {
            name: nombre,
            age: edad
        }
        console.log(persona.age);
        mayoresEdad.push(persona);
     }


}
console.log(mayoresEdad);
const mayorEdad = mayoresEdad.reduce((max, persona) => persona.age > max.age ? persona : max, mayoresEdad[0]);
console.log("ls edad mayor es: "  + mayorEdad.age);


const personasMayoresOIgual = mayoresEdad.filter(persona => persona.age >= mayorEdad.age);

console.log(personasMayoresOIgual);
