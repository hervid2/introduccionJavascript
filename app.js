let nombre = "Hernan";
var apellido = "Cardona";
const PI = 3.1416;
console.log(window);
{
   let nombre ="otro nombre";
   var apellido = "otro apellido"
    console.log('bloque',nombre);
    console.log('bloque',apellido);
}
console.log('fuera del bloque',nombre);
console.log('fuera del bloque',apellido);
let cadena = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel suscipit placeat et a delectus! Dolore, voluptas. Odio, aliquam asperiores? Maiores?";
console.log(cadena.length);
console.log(cadena);
console.log(cadena.toUpperCase());
console.log(cadena.includes('amet'));
let arreglo = cadena.split(' ');
console.log(arreglo.length - 1);

console.clear();

let lunes,martes,miercoles;

lunes = "Lunes";
martes = "Martes";
miercoles = "Miercoles";

console.log(nombre +' '+apellido);

let lista = `<ul>+
<li>${lunes}</li>
<li>${martes}</li>
<li>${miercoles}</li>
<li>jueves</li>
<li>viernes</li>
<li>sabado</li>
<li>domingo</li>
 </ul>`;

 console.log(lista);

console.clear();

let a = 2;
let b = new Number(25);
let falso = false;
console.log(a);
console.log(b);

console.log(typeof a);
console.log(typeof nombre);
console.log(typeof falso);


// funcion declarada:
function suma(a, b = 25){
return a + b;
};

let resultado = suma (8,32);
console.log(resultado);

//funcion expresada:

const resta = function(a,b){
return a - b;
}
let restamos = resta(9,25);

