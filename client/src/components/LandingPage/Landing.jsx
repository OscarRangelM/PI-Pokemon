import styles from './landing.module.css';
import React from 'react';

/* LANDING PAGE | deberás crear una página de inicio o bienvenida con:

Alguna imagen de fondo representativa al proyecto.
Botón para ingresar a la home page. */
export default function Landing() {
    return (
        <div className={styles.divLanding} >
            <h1>Landing Page</h1>
        </div>
    );
}