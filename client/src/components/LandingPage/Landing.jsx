import styles from './landing.module.css';
import React from 'react';

/* LANDING PAGE | deberás crear una página de inicio o bienvenida con:

Alguna imagen de fondo representativa al proyecto.
Botón para ingresar a la home page. */
export default function Landing() {
    return (
        <div className={styles.divLanding} >
            <div className={styles.divGlass}>
                <h1>Welcome to my PI based on the pokeApi</h1>
                <button className={styles.bttn}>Go to Home</button>
            </div>
        </div>
    );
}