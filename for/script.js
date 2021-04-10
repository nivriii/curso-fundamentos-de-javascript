var irving = {
    nombre: 'Irving',
    apellido: 'Zuñiga',
    edad: 27,
    peso: 75
};

const CAMBIO_PESO = 0.2;
const DIAS_DEL_ANIO = 365;

const aumentarDePeso = persona => persona.peso += CAMBIO_PESO;
const adelgazar = persona => persona.peso -= CAMBIO_PESO;

console.log(`Al inicio del año ${irving.nombre} pesa ${irving.peso} kg`);

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random();

    if (random < 0.25) {
        aumentarDePeso(irving)
    } else if (random < 0.5) {
        adelgazar(irving)
    }
}

console.log(`Al final del año ${irving.nombre} pesa ${irving.peso.toFixed(1)} kg`);