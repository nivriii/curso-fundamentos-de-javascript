// opcionales

alert('Hola')

var nombre = 'Irving'

// obligatorio

// Al iniciar una linea con un arrar
console.log('Hola mi nombre es irving');
[1, 2, 3].forEach(n => console.log(n * 2));

// Al iniciar una linea con un tamplate string
console.log('Hola mi nombre es irving');
`${nombre} es un desarrollador`

// al devolver un objeto y dejar un enter
function calcularDoble(numero) {
    return {    // <- no dejar un enter
        original: numero,
        doble: numero * 2
    };
}

console.log(calcularDoble(5));