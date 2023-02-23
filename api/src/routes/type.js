const { Router } = require('express');
const { Type } = require('../db');
const router = Router();

/* 
GET | /types
Obtiene un arreglo con todos los tipos de pokemones.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
*/

router.get('/types', async (req, res) => {
    const pokeTypes = Type.findAll();

    if (pokeTypes.length < 1) {
        // Buscamos los typos de datos de la api y los guardamos en la base de datos.
    } else {
        res.send(pokeTypes);
    }

})

module.exports = router;