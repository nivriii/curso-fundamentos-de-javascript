function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    // Se return de forma implicita
    // return this; 
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function(params) {
    return this.altura >= 1.8;
}

var irving =  new Persona('Irving', 'Zuñiga', 1.8);
var alejandro =  new Persona('Alejandro', 'Zuñiga', 1.7);
var diana =  new Persona('Diana', 'Valdivia', 1.5);

irving.saludar();