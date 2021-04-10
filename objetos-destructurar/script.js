var irving = {
    nombre: 'Irving',
    apellido: 'Zuñiga',
    edad: '27'
};

var diana = {
    nombre: 'Diana',
    apellido: 'Valdivia',
    edad: '28'
};

// Si dentro de las funcion solo queremos obtener
// un parametro en especifico del objeto podemos hacerlo
// mediante el uso de llaves '{ }' en el parametro

function imprimirNombreEnMayuscula(persona) {

    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(irving);
imprimirNombreEnMayuscula(diana);
imprimirNombreEnMayuscula({ nombre: 'jose'});

function imprimirNombreYEdad(persona) {
    var { nombre } = persona, { edad } = persona;
    console.log(`Hola, me llamo ${ nombre } y tengo ${ edad }`);
}

imprimirNombreYEdad(irving);
imprimirNombreYEdad(diana);
