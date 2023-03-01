import styles from './detail.module.css';
import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findPokemon } from '../../redux/actions/index.js'

/* 
DETAIL PAGE | en esta vista se deberá mostrar toda la información específica de un pokemon:

Tipo. */
export default function Detail() {

    const { detailId } = useParams();
    const dispatch = useDispatch();
    const state = useSelector(state => state.pokemonDetail);

    useEffect(() => {
        dispatch(findPokemon(detailId));
    }, [dispatch, detailId]);

    // const {name} = state.type
    const arrType = (typeof(state.Types) === 'undefined') ? state.type : state.Types
    // console.log(`State ${state.Types}`);
    console.log(arrType)

    return (
        <div className={styles.divDetail} >
            <section className={styles.detailHeader}>
                <Link to='../home' >
                    <button className={styles.bttnBack}>Back</button>
                </Link>
                <h1 className={styles.detailHeaderName}>{state.name}</h1>
            </section>
            <section className={styles.detailBody}>
                <img src={state.image} alt={state.name} />
                <div>
                <h3>ID: {state.id}</h3>
                <h3>HP: {state.hp}</h3>
                <h3>Attack: {state.attack}</h3>
                <h3>Defense: {state.defense}</h3>
                <h3>Speed: {state.speed}</h3>
                <h3>Height: {state.height}</h3>
                <h3>Weight: {state.weight}</h3>
                <div className={styles.pokeTypes}><h3>Type(s): </h3>
                    {arrType?.map(result => {
                        console.log(result.name);
                        return (<p className={styles.stylesType} >{result.name}</p>);
                    })}
                </div >
                </div>
            </section>
        </div>
    );
}