import styles from './card.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite } from '../../redux/actions/index.js'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

export default function Card(props) {
    
    let dispatch = useDispatch();
    const allFavorites = useSelector(state => state.pkmnFavorites)

    const [favorite, setFavorite] = useState(false);

    function handleFavorite() {
        if (favorite) {
            setFavorite(false);
            dispatch(deleteFavorite(props.id));
        } else {
            setFavorite(true);
            dispatch(addFavorite(props));
        }
    }

    useEffect(() => {
        allFavorites.forEach(fav => {
            if (fav.id === props.id) {
                setFavorite(true);
            }
        });
    })

    return (
        <div className={styles.pokemonCard} >
            {
                favorite ?
                    (<button onClick={handleFavorite} className={styles.favButton}>⭐</button>) :
                    (<button onClick={handleFavorite} className={styles.favButton}>☆</button>)
            }
            <img src={props.image} alt={props.name} className={styles.pokeImg} />
            <h3 className={styles.pokeName}>Name: {props.pokeName}</h3>
            <div className={styles.pokeTypes}><h3>Type(s):</h3>
                {props.types.map(result => {
                    // console.log(result);
                    return (<p className={styles.stylesType} key={result.id} >{result.name}</p>);
                })}
            </div >
            <Link to={`/detail/${props.id}`} className={styles.bttnDetails}>
                <h3 >More details...</h3>
            </Link>
        </div>
    )
}
// 