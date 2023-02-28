import styles from './card.module.css';
import React from 'react';
// import { Link } from "react-router-dom";
/* 
Imagen.
Nombre.
Tipos. 
boton details
*/
export default function Card(props) {

    return (
        <div className={styles.pokemonCard} >
            {/* <img src={props.image} alt={props.name} /> */}
            {/* <button onClick={handleDelete} >x</button> */}
            {/* <h2>Name: </h2> */}
            {/* <h2>Type(s): </h2> */}
            {/* <Link to={`/detail/${props.id}`}> */}
                {/* <h2 className={styles.bttnDetails}>More details...</h2> */}
            {/* </Link> */}
        </div>
    )
}
