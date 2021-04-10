const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function getCharacter(id, callback) {
    const url = `${ API_URL }${ PEOPLE_URL.replace(':id', id) }`;

    $
    .get(url, opts, callback)
    .fail(function() {
        console.log(`Ocurrio un error. No se pudo obtener el personaje ${id}`);
    });
}

// Callback hell - mala practica
getCharacter(1, function(character) {
    console.log(`Hola, yo soy ${character.name}`);

    getCharacter(2, function(character) {
        console.log(`Hola, yo soy ${character.name}`);

        getCharacter(3, function(character) {
            console.log(`Hola, yo soy ${character.name}`);

            getCharacter(4, function(character) {
                console.log(`Hola, yo soy ${character.name}`);
                
                getCharacter(5, function(character) {
                    console.log(`Hola, yo soy ${character.name}`);
                });
            });
        });
    });    
});