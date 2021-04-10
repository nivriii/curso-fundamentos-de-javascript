/*  Modelo de concurrencia EVENT LOOP
    Delega tareas a la ejecucion de ciertas funciones 
    a otros procesos.

    Pila de ejecución(call stack)
    Se pone el orden de llamada de funciones segun el 
    orden de ejecución de nuestro programa, si una función
    llama a otra esta se agrega a la pila y cuando termina de 
    ejecutar una función la saca de la pila.

    Callback
    Fución que JavaScript ejecutara cuando se retorne la 
    respuesta del servidor, mientras tanto JavaScript continua 
    ejecutando el programa principal y al obtener la respuesta
    de esta función esta se depositara en la cola de 
    tareas(Task Queue), aqui las tareas se ejecutan segun el 
    orden en el que van llegando.

    Las tareas que llegan a esta colas son las peticiones que 
    se hacen a servidores, las interacciones visuales, la 
    navegación client side, los eventos que se realizan cada 
    cierto tiempo

    Solo hasta que ya no haya funciones en la pila de ejecución 
    es que se ejecutaran las que se encuentre en la cola de 
    tareas

    *NO VOY A BLOQUEAR EL EVENT LOOP*
*/

//ejecuta esta función
console.log('a'); // Call Stack -> 1

//ejecuta el time out y lo envia Task Queue
setTimeout(() => console.log('b'), 0); // Task Queue -> 1

//ejecuta esta función
console.log('c'); // Call Stack -> 2

//ejecuta el time out y lo envia Task Queue
setTimeout(() => console.log('d'), 2000); // Task Queue -> 2

/*
Orden de ejecución

Call Stack -> 1
Call Stack -> 2
Task Queue -> 1

*/

// Ejemplo 2
// setTimeout(() => console.log('d'), 2000); //Task Queue -> 3
// for (let i = 0; i < 10000000000; i++) {
 
// }