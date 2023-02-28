import styles from './card.module.css';
import React from 'react';
import { useState } from 'react';
import { addFavorite, deleteFavorite } from '../../redux/actions/index.js'
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux';

export default function Card(props) {

    let dispatch = useDispatch();

    const [favorite, setFavorite] = useState(false);

    function handleFavorite() {
        if(favorite) {
            setFavorite(false);
            dispatch(deleteFavorite(props.id));
        }else {
            setFavorite(true);
            dispatch(addFavorite(props));
        }
    }

    return (
        <div className={styles.pokemonCard} >
            {
                favorite ? 
                (<button onClick={handleFavorite}>&#11088</button> ) :
                (<button onClick={handleFavorite}>&#9734</button>)
            }
            <img src={props.image} alt={props.name} className={styles.pokeImg} />
            <h2 className={styles.pokeName}>Name: </h2>
            <h2 className= {styles.pokeTypes}>Type(s): 
            {props.types.map(result => {
                return (<h3 className={styles.stylesType}>{result}</h3>);
            })}
            </h2>
            <Link to={`/detail/${props.id}`}>
                <h2 className={styles.bttnDetails}>More details...</h2>
            </Link>
        </div>
    )
}
