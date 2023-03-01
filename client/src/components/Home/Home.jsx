import styles from './home.module.css';
import React from 'react';
import Card from '../Card/Card.jsx';


import { getPokemons, getPokemonsAPI } from '../../redux/actions/index.js'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* 
HOME PAGE | la página principal de tu SPA debe contener:

SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.
Sector en el que se vea un listado de cards con los pokemones. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /pokemons y deberá mostrar su:
Imagen.
Nombre.
Tipos.

Botones/Opciones para filtrar por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.
Paginado: el listado de pokemones se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 12 pokemones por página. 

Paginado: con la cantidad de elementos mencionados en el README).
Search: buscar por algún criterio. Lee en el README si la búsqueda debe ser exacta o no.
Filtros: los resultados deben estar paginados.
Ordenamiento: debe funcionar combinado con el/los filtro/s.
*/
export default function Home() {

    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon);

    console.log(typeof(pokemon[0]))

    useEffect(() => {
        dispatch(getPokemonsAPI())
    }, [dispatch])

    return (
        <div className={styles.divHome} >
            
            <ul>
                <div className={styles.divCards}>
                    {( typeof(pokemon) === 'object' && pokemon.length !== 0 )? pokemon.map((c) => {
                        return (<Card
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            pokeName={c.name}
                            types={c.Types}
                        // onClose={() => props.onClose(c.id)}
                        />)
                    }) : (<h1>Oops! there is no pokemon around here</h1> ) }
                </div>
            </ul>
        </div>
    );
}