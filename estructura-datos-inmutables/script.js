/*
    Las estructuras de datos inmutables forman parte de los principios 
    de la Programación Funcional y nos permiten evitar tener efectos 
    colaterales en los datos. En otras palabras, que hayan 
    modificaciones en las variables sin nuestro consentimiento, 
    produciendo comportamientos inesperados en el programa.
*/

const irving = {
    nombre: 'Irving',
    apellido: 'Zuñiga',
    edad: 27
}

// const cumpleaños = persona => persona.edad++;

// const cumpleaños = function(persona) {
//     return persona.edad++;
// }

const cumpleañosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
});