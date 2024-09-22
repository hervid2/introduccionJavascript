const numeros = [1, 2, 3, 4, 5];

let uno = numeros[0],
dos = numeros[1],
tres = numeros[2],
cuatro = numeros[3],
cinco = numeros[4];

console.log(uno, dos, tres, cuatro, cinco);

//destructuración:

const [a,b,c,d,e] = numeros;
console.log(a,b,c,d,e);

//------------------------
//Destructuración de objetos:
const persona = {
    nombre:"Hernán",
    apellido: "Cardona",
    edad: 35
}//Objeto con tres propiedades
let {nombre,apellido,edad,ciudad = 'Bucaramanga'} =persona;
console.log(edad,ciudad);

console.clear();
//------------------------
let color = "verde";
let marcha = "Mazda";

const carro = {
    color, marca
}

console.log(carro);