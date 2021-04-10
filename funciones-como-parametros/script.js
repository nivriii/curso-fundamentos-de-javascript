

class Persona {

    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {

        // var nombre = this.nombre;
        // var apellido = this.apellido

        var { nombre, apellido } = this;

        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido);
        }
    }

    soyAlto() {
        return this.altura >= 1.8;
    }
}

class Desarrollador extends Persona {

    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {

        // var nombre = this.nombre;
        // var apellido = this.apellido;

        var { nombre, apellido } = this;

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
        if (fn) {
            fn(nombre, apellido);
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ah mirá, no sabia que eras desarrollador`);
    }
}



var irving =  new Desarrollador('Irving', 'Zuñiga', 1.8);
var alejandro =  new Persona('Alejandro', 'Zuñiga', 1.7);
var diana =  new Persona('Diana', 'Valdivia', 1.5);

irving.saludar(responderSaludo);
alejandro.saludar();
diana.saludar(responderSaludo);