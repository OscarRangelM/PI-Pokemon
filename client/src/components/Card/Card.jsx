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
        if(favorite) {
            setFavorite(false);
            dispatch(deleteFavorite(props.id));
        }else {
            setFavorite(true);
            dispatch(addFavorite(props));
        }
    }

    useEffect(() =>{
        allFavorites.forEach( fav =>{
            if ( fav.id === props.id) {
                setFavorite(true);
            }
        });
    })
    // console.log(props)
    return (
        <div className={styles.pokemonCard} >
            {
                favorite ? 
                (<button onClick={handleFavorite}>#11088</button> ) :
                (<button onClick={handleFavorite}>&#9734</button>)
            }
            <img src={props.image} alt={props.name} className={styles.pokeImg} />
            <h2 className={styles.pokeName}>Name: {props.pokeName}</h2>
            <h2 className= {styles.pokeTypes}>Type(s): 
            {props.types.map(result => {
                console.log(result);
                return (<p className={styles.stylesType} key={result.TypePokemon.TypeId
                }>{result.name}</p>);
            })}
            </h2>
            <Link to={`/detail/${props.idPokemon}`}>
                <h2 className={styles.bttnDetails}>More details...</h2>
            </Link>
        </div>
    )
}
