const { Router } = require('express');
const { Type } = require('../db');
const router = Router();
const axios = require('axios');

// Type Get
router.get('/', async (req, res) => {
    try {
        const pokeTypes = await Type.findAll();

        if (pokeTypes.length < 1) {
            const typesApi = await axios.get('https://pokeapi.co/api/v2/type')
                .then(result => {
                    return result.data.results;
                })
                .catch(error => null);
            typesApi.map(async (e) => {
                let newType = await Type.create({
                    name: e.name.toLowerCase(),
                })
            });
            return res.send('Nuevos tipos agregados');
        } else {
            res.send(pokeTypes);
        }
    } catch (error) {
        res.status(400).json(error);
    }

})

module.exports = router;