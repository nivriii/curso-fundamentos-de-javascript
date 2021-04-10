/*
    var.- es la manera más antigua de declarar variables. 
    No es muy estricta en cuanto al alcance, ya que al 
    declarar variables de esta forma, dichas variables 
    podrán ser accedidas, e incluso modificadas, tanto 
    dentro como fuera de los bloques internos en una función.

    let.- por otra parte, el alcance se reduce al bloque 
    (las llaves) en el cual la variable fue declarada. Fuera 
    de este bloque la variable no existe. Una vez declarada la 
    variable con let, no se puede volver a declarar con en 
    ninguna otra parte de la función.

    const.- al igual que let se define en el contexto o 
    alcance de un bloque, a diferencia de let y var, las 
    variables definidas como constantes (const), ya no podrán 
    ser modificadas ni declaradas nuevamente, en ninguna otra 
    parte de la función o el contexto en el que ya existen.

    La recomendación es reducir siempre al mínimo el alcance de 
    nuestras variables, por lo que se debe usar let en lugar de 
    var mientras sea posible.
*/

var irving = {
    nombre: 'irving',
    apellido: 'Zuñiga',
    edad: 27
};

// ========== var ========== 

// function esMayorDeEdadVar(persona) {
//     if (persona.edad >= 18) {
//         var mensaje = 'Es mayor de edad';
//     } else {
//         var mensaje = 'Es menor de edad';
//         var mensaje2 = 'Este es otro mensaje';
//     }
//     console.log(mensaje);
//     console.log(mensaje2);
// }

/*
    Hoisting
    El concepto de Hoisting fue pensado como una manera general 
    de referirse a cómo funcionan los contextos de ejecución en 
    JavaScript (específicamente las fases de creación y 
    ejecución). 
*/

//Hoisting
function esMayorDeEdadVar(persona) {

    var mensaje, mensaje2;

    if (persona.edad >= 18) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
        mensaje2 = 'Este es otro mensaje';
    }

    console.log(mensaje);
    console.log(mensaje2);
}

// ========== let ========== 

function esMayorDeEdadLet(persona) {

    let mensaje;

    if (persona.edad >= 18) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }

    console.log(mensaje);
}

// ========== const ========== 

function esMayorDeEdadConst(persona) {

    const MAYORIA_DE_EDAD = 18;
    let mensaje;

    // Genera un error si tratamos de asignar nuevamente
    // MAYORIA_DE_EDAD = 21;

    if (persona.edad >= MAYORIA_DE_EDAD) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }

    console.log(mensaje);
}

esMayorDeEdadVar(irving);
esMayorDeEdadLet(irving);
esMayorDeEdadConst(irving);

// Ciclos for

// var
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(`El valor de i es: ${i}`);

// let
for (let j = 0; j < 10; j++) {
    console.log(j);
}

// Genera un error por que el valor de j solo existe dentro del 
// bloque for

// console.log(`El valor de j es: ${j}`);