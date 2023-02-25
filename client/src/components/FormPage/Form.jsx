import styles from './form.module.css';
import React from 'react';

// Validations
// import { validation } from './validation.js';

/* 
FORM PAGE |: en esta vista se encontrará el formulario para crear un nuevo pokemon.

Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

Nombre.
Imagen.
Vida.
Ataque.
Defensa.
Velocidad (si tiene).
Altura (si tiene).
Peso (si tiene).
Posibilidad de seleccionar/agregar varios tipos en simultáneo.
Botón para crear el nuevo pokemon.
[IMPORANTE]: es requisito que el formulario de creación esté validado sólo con JavaScript. 
Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre del pokemon no pueda contener números, o que la defensa no pueda exceder determinado valor, etc. 

Utilizar validaciones JavaScript.
Utiliza las validaciones para que tu formulario sea reactivo y valide datos a medida que completas cada campo.
Confirma si el elemento se ha creado correctamente.
Si ocurre algún error en el backend debe comunicarlo a los usuarios de tu página.
Al finalizar la creación limpia los campos de tu formulario.

*/
export default function Form(props) {
    return (
        <div className={styles.divForm} >
            <h1>Form page</h1>
        </div>
    );
}