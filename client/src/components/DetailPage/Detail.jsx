import styles from './detail.module.css';
import React from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { findPokemon } from '../../redux/actions/index.js'

/* 
DETAIL PAGE | en esta vista se deberá mostrar toda la información específica de un pokemon:

ID.
Nombre.
Imagen.
Vida.
Ataque.
Defensa.
Velocidad (si tiene).
Altura (si tiene).
Peso (si tiene).
Tipo. */
export default function Detail() {

    const { detailId } = useParams();
    // console.log(`id: ${detailId}`);
    const dispatch = useDispatch();
    const state = useSelector(state => state.pokemonDetail);

    useEffect(() => {
        dispatch(findPokemon(detailId));
    }, [dispatch, detailId]);

    // console.log(`State ${state}`);
    // console.log(`State ${Object.keys(state).length}`);

    return (
        <div className={styles.divDetail} >
            <Link to='../home' >
                <button>Back</button>
            </Link>
            <h1>{state.name}</h1>
            <img src={state.image} alt={state.name} />
            <section>
                <h3>ID: {state.id}</h3>
                <h3>HP: {state.hp}</h3>
                <h3>Attack: {state.attack}</h3>
                <h3>Defense: {state.defense}</h3>
                <h3>Speed: {state.speed}</h3>
                <h3>Height: {state.height}</h3>
                <h3>Weight: {state.weight}</h3>
                <div className= {styles.pokeTypes}><h3>Type(s):</h3> 
                    {/* {state.type.map(result => {
                        console.log(result);
                        return (<p className={styles.stylesType} key={result.TypePokemon.TypeId
                        }>{result.name}</p>);
                    })} */}
            </div >
            </section>
        </div>
    );
}