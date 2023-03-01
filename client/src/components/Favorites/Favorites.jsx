import styles from './favorites.module.css';
import React from 'react';
import Card from '../Card/Card.jsx';

import { useSelector } from 'react-redux';

export default function Favorites() {

    const pokemon = useSelector(state => state.pkmnFavorites);
    // console.log(pokemon.length);

    return (
        <div className={styles.divHome} >
            
            <ul>
                <div className={styles.divCards}>
                    {/* {console.log(pokemon)} */}
                    {( typeof(pokemon.length) === 'number' && pokemon.length !== 0 )? pokemon.map((c) => {
                        return (<Card
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            pokeName={c.name}
                            types={c.types}
                        // onClose={() => props.onClose(c.id)}
                        />)
                    }) : (<h1>Oops! there is no pokemon around here</h1> ) }
                </div>
            </ul>
        </div>
    );
}