import styles from './home.module.css';
import React from 'react';
import Card from '../Card/Card.jsx';
import { NavLink } from 'react-router-dom';


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
export default function Home(props) {

    const { characters } = props;

    return (
        <div className={styles.divHome} >
            <nav>
                <lu>
                    <li>
                        <input
                            name='SearchInput'
                            type='search'
                            placeholder='Ex: Charmander'
                            className={styles.inpSearch}
                        />
                    </li>
                    <li>
                        <input
                            name="SelectInput"
                            type='select'
                            placeholder='Type...'
                            className={styles.inpSelect}>
                        </input>
                    </li>
                    <li>
                        <button type='button'
                            className={styles.filterAscendingAlf}>
                            ascending alpf
                        </button>
                    </li>
                    <li>
                        <button type='button'
                            className={styles.filterFallingAlf}>
                            falling alpf
                        </button>
                    </li>
                    <li>
                        <button type='button'
                            className={styles.filterAscendingAttk}>
                            ascending attk
                        </button>
                    </li>
                    <li>
                        <button type='button'
                            className={styles.filterFallingAttk}>
                            falling attk
                        </button>
                    </li>
                </lu>
                <NavLink to="/form">
                    <button>Create Pokemon</button>
                </NavLink>
            </nav>

            <div className={styles.divCards}>
                {/* {characters.map((c) => {
                    return (<Card
                        id={c.id}
                        name={c.name}
                        species={c.species}
                        gender={c.gender}
                        image={c.image}
                        onClose={() => props.onClose(c.id)}
                    />)
                })} */}
            </div>
        </div>
    );
}