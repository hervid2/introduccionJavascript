try {
    //Agregamos el código que vamos a evaluar
    console.log("Código a evaluar");
    codigo;
    console.log("Qué pasará en este lugar?");
} catch (error) {
    console.log("Mensajes o manejadores de errores");
    console.log(error);
}finally{
    ("Siempre se ejecuta");
}
//---------------------------------------

try {
    // let numeros = "Letras";
    let numeros = 10;
    if(isNaN(numeros))
        throw new Error("Mensaje que le mostraremos al usuario");
        console.log(numeros * numeros);
    
} catch (error) {
    console.error(`Se produjo el siguiente error: ${error}`);
}