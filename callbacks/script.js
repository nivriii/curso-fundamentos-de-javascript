/*
    Promesas
    Podemos pensar en la promesas como valores que aun no conocemos.
    La promesa de que existira un valor cuando una acción asincrona 
    suceda y se resuelva

    Las promesas tienen 3 estados:

    - Pending: es cuando se inicializa una promesa

    - Fulfilled: es cuando la promesa se resuelve exitosamente(resolve)
        Para obtener la respuesta de la promesa podemos llamar a la funcion .then 
        y pasarle como parametro con la cual el primer parametro que reciba es el 
        valor que nosotros esperabamos

    - Rejected: es cuando ocurre un error(rejected)
        Para obtener la respuesta de la promesa podemos llamar a la funcion .catch 
        y pasarle como parametro con la cual el primer parametro que reciba es el 
        error que sucedio

                resolve -> fulfilled -> .then(val => ...)
    pending ----
                reject  -> rejected  -> .catch(err => ...)

    new Promise(function(resolve, reject){

    }).then(valor => {

    }).catch(err => {

    });

*/

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function getCharacter(id) {

    return new Promise((resolve, reject) => {

        const url = `${ API_URL }${ PEOPLE_URL.replace(':id', id) }`;

        $
            .get(url, opts, function(data) {
                resolve(data);
            })
            .fail(() => reject(id));
    });
}

const onError = id => console.log(`Ocurrio un error al obtener el personaje ${id}`);

// Para el usuo de await debemos marcar la función como async
async function getCharacters() {
    var ids = [1, 2, 3, 4, 5, 6, 7];

    var promesas = ids.map(id => getCharacter(id));

    //Cuando todas las promesas se resuelvan se asignara
    // await detiene la ejecución hasta que se resuelvan las promesas
    try {
        var personajes = await Promise.all(promesas);
        console.log(personajes);
        console.table(personajes);
    } catch (id) {
        onError(id);
    }
}

getCharacters();

// getCharacter(1)
//     .then(personaje1 => {
//         console.log(`El personaje 1 es ${personaje1.name}`);
//         return getCharacter(2);
//     })
//     .then(personaje2 => {
//         console.log(`El personaje 2 es ${personaje2.name}`);
//         return getCharacter(3);
//     })
//     .then(personaje3 => {
//         console.log(`El personaje 3 es ${personaje3.name}`);
//         return getCharacter(4);
//     })
//     .then(personaje4 => {
//         console.log(`El personaje 4 es ${personaje4.name}`);
//     })
//     .catch(onError);