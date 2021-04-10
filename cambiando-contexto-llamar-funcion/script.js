const irving = {
    nombre: 'Irving',
    apellido: 'Zuñiga',
}

const diana = {
    nombre: 'Diana',
    apellido: 'Valdivia',
}

function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

const saludarAIrving = saludar.bind(irving);
const saludarADiana = saludar.bind(diana);

saludar();
saludarAIrving();
saludarADiana();

setTimeout(saludar.bind(irving, 'Hola che'), 1000);

saludar.call(irving, 'Hola güey');

saludar.apply(irving, ['Hola parse']);


