var irving = {
    nombre: 'Irving',
    apellido: 'Zuñiga',
    edad: 27,
    peso: 75
};

const CAMBIO_PESO = 0.2;
const DIAS_DEL_ANIO = 365;
const META = irving.peso - 3;

const aumentarDePeso = persona => persona.peso += CAMBIO_PESO;
const adelgazar = persona => persona.peso -= CAMBIO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

var dias = 0;

while (irving.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(irving);
    }
    if (realizaDeporte()) {
        adelgazar(irving)
    }

    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${irving.nombre} adelgazó 3kg`);
