const { Router } = require('express');
const { Pokemons, Type } = require('../db.js');
const router = Router();
const { findPokeApi, findIdApi } = require('./function');

// GET Querys
router.get('/', async (req, res) => {

    try {
        let { name } = req.query;
        console.log('query');

        if (name) {
            const pokeNameApi = await findIdApi(name);
            if (pokeNameApi) return res.status(200).send(pokeNameApi);

            const pokeNameQuery = await Pokemons.findAll({
                where: {
                    name: name.toLowerCase(),
                },
                include: {
                    model: Type,
                    attributes: ['name'],
                }
            });

            (pokeNameQuery.length > 0) ? res.status(200).send(pokeNameQuery) : res.status(400).json(`The pokemon ${name.toLowerCase()} is not found in the database`);
        }

        console.log('all');
        const allPokemons = await Pokemons.findAll({
            include: {
                model: Type,
                attributes: ['name'],
            }
        });
        if (allPokemons.length < 1) return res.status(400).json({ msg: 'No pokemon found in the database' });
        res.json(allPokemons);

    } catch (error) {
        return error
    }

});



// GET ID Router
router.get('/:idPokemon', async (req, res) => {
    
    try {
        const { idPokemon } = req.params
        const pokeIdApi = await findIdApi(idPokemon);
        if (pokeIdApi) return res.status(200).send(pokeIdApi);

        const pokeId = await Pokemons.findAll({
            where: {
                id: idPokemon,
            },
            include: {
                model: Type,
                attributes: ['name'],
            }
        });

        if (pokeId.length > 0) return res.status(200).send(pokeId[0]);
    } catch (error) {
        return res.status(400).json(`the requested id: ${req.params.idPokemon} does not correspond to a pokemon in stock`);
    }

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