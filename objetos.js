const persona = {
    nombre:"Hernán",
    apellido: "Cardona",
    edad: 35
}

console.log(persona);

for (const propiedad in persona) {
    console.log(`Llave ${propiedad}, valor: ${persona[propiedad]}`);
}

//forIn = es para hacer una iteración de un objeto con "propiedades"

//-------------------------------------------------------------

let palabra = "Validando lo más básico de js";

for (const caracter of palabra) {
    console.log(caracter);
}
//forOf = es para hacer una iteración de un array o string con "elementos"

//----------------------------------------------------------------

