import styles from './form.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

// Validations
// import { validation } from './validation.js';

/* 
FORM PAGE |: en esta vista se encontrará el formulario para crear un nuevo pokemon.

Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

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
            <nav className={styles.nav} >
                <NavLink to="../home" >
                    <button className={styles.bttnBack}>Back Home</button>
                </NavLink>
                <h1>Create a New Pokemon</h1>
            </nav>
            <form className={styles.form} >
                <label htmlFor="inputName">Name</label>
                <input type='text' placeholder='Name' className={styles.inputName}/>

                <label htmlFor="inputImage">Image</label>
                <input type='text' placeholder='URL of image' />

                <label htmlFor="inputHP">HP:</label>
                <input type="number" placeholder='HP' />

                <label htmlFor="inputAttack">Attack</label>
                <input type='number' placeholder='Attack' />

                <label htmlFor="inputDefense">Defense</label>
                <input type='number' placeholder='Defense' />

                <label htmlFor="inputSpeed">Speed</label>
                <input type='number' placeholder='Speed' />

                <label htmlFor="inputHeight">Height</label>
                <input type='number' placeholder='Height' />

                <label htmlFor="inputWeight">Weight</label>
                <input type='number' placeholder='Weight' />

                <label htmlFor="inputTypes">Types</label>
                <select type='select' placeholder='Types-1' >
                    <option>None</option>
                </select>
                <select type='select' placeholder='Types-2' >
                    <option>None</option>
                </select>
                <input type='submit' className={styles.bttnSubmit} value='Submit' />
            </form>
        </div>
    );
}