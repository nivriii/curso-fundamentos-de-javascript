var x = 4, y = '4';

// true
x == y;

// false
x === y;

var irving = {
    nombre: 'Irving'
};

var alejandro = {
    nombre: 'Irving'
};

var copiaIrving = irving;

// desgloce de un objeto en un nuevo objeto
var nuevoObjeto = {
    ...irving
};

// false
irving == alejandro;
irving === alejandro;

// true
irving == copiaIrving;
irving === copiaIrving;

// false
irving == nuevoObjeto;
irving === nuevoObjeto;

copiaIrving.nombre = 'Alejandro';

// copiaIrving.nombre -> 'Alejandro';
// irving.nombre -> 'Alejandro';

alejandro.nombre = 'Irving';

// irving.nombre -> 'Alejandro';
// alejandro.nombre -> 'Irving';