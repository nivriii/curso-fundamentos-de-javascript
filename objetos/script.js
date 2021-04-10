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

function imprimirNombreEnMayuscula({ nombre }) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(irving);
imprimirNombreEnMayuscula(diana);
imprimirNombreEnMayuscula({ nombre: 'jose'});

// Error por undefined
// imprimirNombreEnMayuscula();

// Error por falta de atributo
// imprimirNombreEnMayuscula({ apellido: 'Zuñiga' });