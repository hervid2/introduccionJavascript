let a = 20;
let b = 30;
let c = [];

/*a y b son parámetros
return  */
const matematicas = function (a, b){
    let resultado =[];
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;

    resultado.push(['El resultado suma es ',suma]);
    resultado.push(['El resultado resta es ',resta]);
    resultado.push(['El resultado multiplicacion es ',multiplicacion]);
    resultado.push(['El resultado división es ',division]);

    return resultado;
}

let resultado = matematicas(a,b);

console.log(resultado);
console.log(resultado.length);
console.log(typeof matematicas);
// const resta = function (a, b){
//     return a - b;
// }
// const multiplicacion = function (a, b){
//     return a * b;
// }
// const division = function (a, b){
//     return a / b;
// }

// console.log(suma(a, b));
// console.log(resta(a, b));
// console.log(multiplicacion(a, b));
// console.log(division(a, b));
// console.log(typeof []);
