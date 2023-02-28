import styles from './home.module.css';
import React from 'react';
import Card from '../Card/Card.jsx';
import Nav from '../Nav/Nav.jsx'

import { getPokemons } from '../../redux/actions/index.js'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { }

/* 
HOME PAGE | la página principal de tu SPA debe contener:

SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.
Sector en el que se vea un listado de cards con los pokemones. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /pokemons y deberá mostrar su:
Imagen.
Nombre.
Tipos.
Cuando se le hace click a una Card deberá redirigir al detalle de ese pokemon específico.
Botones/Opciones para filtrar por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.
Paginado: el listado de pokemones se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 12 pokemones por página. 

HOME PAGE
Aquí vas a renderizar los resultados obtenidos; cada uno en una card. Además, existen otros elementos necesarios:
Paginado: con la cantidad de elementos mencionados en el README).
Search: buscar por algún criterio. Lee en el README si la búsqueda debe ser exacta o no.
Filtros: los resultados deben estar paginados.
Ordenamiento: debe funcionar combinado con el/los filtro/s.
*/
export default function Home() {

    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    return (
        <div className={styles.divHome} >
            <Nav />
            <ul>
                <div className={styles.divCards}>
                    {pokemon.map((c) => {
                        return (<Card
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            pokeName={c.name}
                            types={c.Types}
                        // onClose={() => props.onClose(c.id)}
                        />)
                    })}
                </div>
            </ul>
        </div>
    );
}