// window.nombre -> Irving
var nombre = 'Irving';

function imprimirNombreEnMayuscula(nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
    console.log(this.nombre);
    console.log(window.nombre);
}

imprimirNombreEnMayuscula(nombre);