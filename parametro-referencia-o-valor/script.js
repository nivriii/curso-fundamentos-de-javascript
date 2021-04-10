var irving = {
    nombre: 'Irving',
    apellido: 'Zuñiga',
    edad: 27
};

var diana = {
    nombre: 'Diana',
    apellido: 'Valdivia',
    edad: 28
};

function imprimirNombreEnMayuscula(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(irving);
imprimirNombreEnMayuscula(diana);

function cumpleanios(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}


