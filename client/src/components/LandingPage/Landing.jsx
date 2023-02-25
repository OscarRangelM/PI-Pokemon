import styles from './landing.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

/* LANDING PAGE | deberás crear una página de inicio o bienvenida con:

Alguna imagen de fondo representativa al proyecto.
Botón para ingresar a la home page. */
export default function Landing() {
    return (
        <div className={styles.divLanding} >
            <div className={styles.divGlass}>
                <h1>Pokedex</h1>
                <NavLink to="/home">
                    <button className={styles.bttn}>Go Home</button>
                </NavLink>
            </div>
        </div>
    );
}