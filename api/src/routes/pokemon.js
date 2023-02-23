const { Router } = require('express');
const Axios = require('axios');
const { Pokemons, Type } = require('../db.js');
const router = Router();
const { findPokeApi } = require('./function');

router.get('/', async (req, res) => {
    const allPokemons = await Pokemons.findAll();

    if (allPokemons.length < 1) return res.status(400).json({ msg: 'No pokemon found in the database' });
    res.json(allPokemons);
});

/* 
GET | /pokemons/:idPokemon
Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
El pokemon es recibido por parámetro (ID).
Tiene que incluir los datos del tipo de pokemon al que está asociado.
Debe funcionar tanto para los pokemones de la API como para los de la base de datos.
*/

router.get('/:idPokemon', async (req, res) => {
    const pokeId = await Pokemons.findByPk(req.params.idPokemon);

    if (!pokeId) return res.status(400).send(`the requested id: ${req.params.idPokemon} does not correspond to a pokemon in stock`);
    res.send(pokeId);
});

/* 
GET | /pokemons/name?="..."
Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el pokemon, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.
*/

router.get('/name?="..."', async (req, res) => {
    let name = req.params.name
    const pokeName = Pokemons.findAll({
        where: {
            /* Comparing the name of the pokemon with the name of the pokemon in the database. */
            name: name.toLowerCase()
        }
    });
    if (pokeName.length < 1) return res.status(400).json(`The pokemon ${name} does not exist in the database.`);
    res.send(pokeName);
});

/* 
POST | /pokemons
Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
Toda la información debe ser recibida por body.
Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (al menos uno).
*/

router.post('/', async (req, res) => {
    const { name, image, hp, attack, defense } = req.body

    try {
        // If any of the required data does not exist.
        if (!name || !image || !hp || !attack || !defense) return res.status(400).json(`Data are needed for this pokemon`);

        // If the pokemon is in the database or in the api it will send us an error.
        let pokeFinder = await findPokeApi(name);
        if (pokeFinder === name.toLowerCase()) {
            return res.status(400).json(`This pokemon already exists in the database.`);
        }
        const newPokemon = await Pokemons.create(req.body);
        res.status(201).send(newPokemon);


    } catch (error) {
        res.status(400).json(`This pokemon already exists in the database.`);
    }
});

module.exports = router;