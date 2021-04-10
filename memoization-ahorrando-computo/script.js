/*
    La memorización es una técnica de programación que nos 
    permite ahorrar cómputo o procesamiento en JavaScript, 
    al ir almacenando el resultado invariable de una función 
    para que no sea necesario volver a ejecutar todas las 
    instrucciones de nuevo, cuando se vuelva a llamar con los 
    mismos parámetros. Es similar a usar memoria cache.
*/

/*
    factorial
    !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
*/

function factorial(numero) {

    if(!this.cache){
        this.cache = {};
    }

    if(this.cache[numero]) {
        return this.cache[numero];
    }

    if (numero === 1) {
        return 1;
    }

    this.cache[numero] =  numero * factorial( numero - 1);

    return this.cache[numero];

}

console.log(factorial(6));