const { Router } = require('express');
const { Pokemons, Type } = require('../db.js');
const router = Router();
const { findPokeApi, findIdApi } = require('./function');

// GET ALL Router
router.get('/', async (req, res) => {
    const allPokemons = await Pokemons.findAll();
    if (allPokemons.length < 1) return res.status(400).json({ msg: 'No pokemon found in the database' });
    res.json(allPokemons);
});

// GET ID Router
router.get('/:idPokemon', async (req, res) => {
    try {
        const { idPokemon } = req.params

        const pokeIdApi = await findIdApi(idPokemon);
        console.log(pokeIdApi);
        if(pokeIdApi) return res.status(200).send(pokeIdApi); 

        const pokeId = await Pokemons.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        });

        if (pokeId.length > 0) return res.status(200).send(pokeId[0]);
    } catch (error) {
        return res.status(400).json(`the requested id: ${req.params.idPokemon} does not correspond to a pokemon in stock`);
    }

});

/* 
GET | /pokemons/name?="..."
Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el pokemon, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.
*/

// GET Querys
router.get('/name?="..."', async (req, res) => {
    let name = req.query
    const pokeName = Pokemons.findAll({
        where: {
            /* Comparing the name of the pokemon with the name of the pokemon in the database. */
            name: name.toLowerCase()
        }
    });
    if (pokeName.length < 1) return res.status(400).json(`The pokemon ${name} does not exist in the database.`);
    res.send(pokeName);
});

// POST router
router.post('/', async (req, res) => {
    const { name, image, hp, attack, defense, speed, height, weight, types } = req.body

    try {
        // If any of the required data does not exist.
        if (!name || !image || !hp || !attack || !defense) return res.status(400).json(`Data are needed for this pokemon`);

        // If the pokemon is in the database or in the api it will send us an error.
        const pokeFinder = await findPokeApi(name);
        const pName = pokeFinder !== null ? pokeFinder.name : pokeFinder;
        if (pName === name.toLowerCase()) return res.status(400).json(`This pokemon already exists in the database.`);

        const newPokemon = await Pokemons.create({
            name: name.toLowerCase(), image, hp, attack, defense, speed, height, weight
        });

        const typePokemon = await Type.findAll({
            where: {
                name: types,
            }
        });
        newPokemon.addType(typePokemon);
        res.status(201).send(newPokemon);

    } catch (error) {
        res.status(400).json(`This pokemon already exists in the database.`);
    }
});

module.exports = router;