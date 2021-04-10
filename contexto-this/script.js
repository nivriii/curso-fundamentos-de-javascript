function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    // Se retorna de forma implicita
    // return this; 
}

// TODO: Corregir arrow function
Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = () => this.altura >= 1.8;

var irving =  new Persona('Irving', 'Zuñiga', 1.8);
var alejandro =  new Persona('Alejandro', 'Zuñiga', 1.7);
var diana =  new Persona('Diana', 'Valdivia', 1.5);

irving.saludar();