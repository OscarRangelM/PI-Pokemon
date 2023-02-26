import styles from './card.module.css';
import React from 'react';
import { Link } from "react-router-dom";
/* 
Imagen.
Nombre.
Tipos. 
boton details
*/
export default function Card(props) {

    return (
        <div className={styles.pokemonCard} >
            <img />
            <Link>
                <h2>Name: </h2>
            </Link>
            <h2>Type(s): </h2>
        </div>
    )
}
