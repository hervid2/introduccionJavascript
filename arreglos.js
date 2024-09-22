const dias =[];

console.log(typeof dias);

dias.push('Lunes'); //........................//.0
dias.push('Martes'); //.......................//.1
dias.push('Miercoles'); //....................//.2
dias.push('Jueves'); //.......................//.3
dias.push(['Hernán','Cardona']); //...........//.4
dias.push('Viernes'); //......................//.5
dias.push('Sabado'); //.......................//.6

dias.splice(3, 1 );
//splice (primer numero es la posicion donde va iniciar la remoción, el segundo numero es la cantidad a partir de la posición inicial)

// dias.pop();
//pop(elimina la ultima posición de un arreglo)


for(let i=0;i < dias.length;i++){
    // console.log('esto es i',i);
    console.log(dias[i]);
}
