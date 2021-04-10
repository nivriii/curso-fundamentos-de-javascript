/*
    Un closure, básicamente, es una función que recuerda el estado 
    de las variables al momento de ser invocada, y conserva este estado 
    a través de reiteradas ejecuciones. Un aspecto fundamental de los 
    closures es que son funciones que retornan otras funciones.
*/

function crearSaludo(finalDeFrase) {
    return function(nombre) {
        console.log(`Hola, ${nombre} ${finalDeFrase}`);
    }
}

const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('güey');
const saludoColombiano = crearSaludo('parce');

saludoArgentino('Irving');
saludoMexicano('Irving');
saludoColombiano('Irving');