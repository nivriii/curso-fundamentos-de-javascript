var irving = {
    nombre: 'Irving',
    apellido: 'Zuñiga',
    edad: 27,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
};

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`);

    if (persona.ingeniero) {
        console.log('Ingeniero');
    }

    if (persona.cocinero) {
        console.log('Cocinero');
    }

    if (persona.cantante) {
        console.log('Cantante');
    } else {
        console.log('No es cantante');
    }

    if (persona.dj) {
        console.log('DJ');
    }

    if (persona.guitarrista) {
        console.log('Guitarrista');
    }

    if (persona.drone) {
        console.log('Piloto de rone');
    }
}   

imprimirProfesiones(irving);

function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(irving);