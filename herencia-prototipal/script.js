function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    // Se retorna de forma implicita
    // return this; 
}

Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
    return this.altura >= 1.8;
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}



// var irving =  new Persona('Irving', 'Zuñiga', 1.8);
// var alejandro =  new Persona('Alejandro', 'Zuñiga', 1.7);
// var diana =  new Persona('Diana', 'Valdivia', 1.5);

// irving.saludar();