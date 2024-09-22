//parametro rest operator spread:
function sumar(a,b,...c){
    let resultado = a + b;
    c.forEach(function(n){
        resultado += n;
    });
    return resultado;
}

console.log(sumar(9,5,23,45,99));
//--------------------------------
const a = [2,4,6,8,10];
const b = [12,14,16,18,20];

console.log(a.concat(b));
//vieja forma de concatenar

console.log([...a,...b]);
//con rest operator spread
