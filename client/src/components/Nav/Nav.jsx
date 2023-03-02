import styles from './nav.module.css';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon, getPokemonsAPI, getPokemons } from '../../redux/actions/index.js'

export default function Nav(props) {

    const location = useLocation();
    const dispatch = useDispatch();
    const [pokemon, setPokemon] = useState('');

    const [searchMount, setSearchMount] = useState(false);
    const [defaultA, setDefaultA] = useState(true);
    const [datab, setDatab] = useState(false);

    function handleInput(event) {
        setPokemon(event.target.value);
    }

    function handleApi() {
        setSearchMount(false);
        setDefaultA(true);
        setDatab(false);
    }
    function handleDB() {
        setSearchMount(false);
        setDefaultA(false);
        setDatab(true);
    }

    const handleSearch = () => {
        console.log('si ejecuto esta acción')
        setSearchMount(true);
        setDefaultA(false);
        setDatab(false);
    }

    useEffect(() => { // Busqueda
        if (searchMount) {
            dispatch(searchPokemon(pokemon));
            setSearchMount(false);
            setDefaultA(false);
            setDatab(false);
        }
    }, [dispatch, pokemon, searchMount]);

    useEffect(() => { // default
        if (defaultA) {
            dispatch(getPokemonsAPI())
            setSearchMount(false);
            setDefaultA(false);
            setDatab(false);
        }
    }, [dispatch, defaultA])

    useEffect(() => { // pokemon db
        if (datab) {
            dispatch(getPokemons())
            setSearchMount(false);
            setDefaultA(false);
            setDatab(false);
        }
    }, [dispatch, datab]);

    return location.pathname === '/favorites' ? (
        <div className={styles.divNav} >
            <nav className={styles.navSearch}>
                <ul className={styles.navUl}>
                    <li>
                        <select
                            name="SelectInput"
                            className={styles.inpSelect}>
                            <option>None</option>
                            {/* {type.map(c => {
                                    return (
                                        <option value={c.name}>{c.name}</option>
                                    )
                                })} */}
                        </select>
                    </li>
                    <li>
                        <button type='button'
                            className={styles.filterAscendingAlf}>
                            A-Z
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.filterAscendingAttk}>
                            ATTK
                        </button>
                    </li>
                    <li>
                        <NavLink to='/home' >
                            <input type="button" value='Home' className={styles.favoritesBttn} />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    ) : (
        <div className={styles.divNav} >
            <nav className={styles.navSearch}>
                <ul className={styles.navUl}>
                    <li>
                        <input
                            name='SearchInput'
                            type='search'
                            placeholder='Ex: Charmander'
                            className={styles.inpSearch}
                            onChange={(e) => handleInput(e)}
                            value={pokemon}
                        />
                        <button className={styles.searchBttn}
                            onClick={handleSearch}
                        >Search</button>
                    </li>
                    <li>
                        <select
                            name="SelectInput"
                            className={styles.inpSelect}>
                            <option>None</option>
                            {/* {type.map(c => {
                                    return (
                                        <option value={c.name}>{c.name}</option>
                                    )
                                })} */}
                        </select>
                    </li>
                    <li>
                        <button type='button'
                            className={styles.filterAscendingAlf}>
                            A-Z
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.filterAscendingAttk}>
                            ATTK
                        </button>
                    </li>
                    <li>
                        <button className={styles.filterApi} onClick={handleApi}>
                            API
                        </button>
                        <button className={styles.filterDB} onClick={handleDB}>
                            DB
                        </button>
                    </li>
                    <li>
                        <NavLink to='/favorites' >
                            <input type="button" value='⭐ Favorites' className={styles.favoritesBttn} />
                        </NavLink>
                    </li>
                </ul>
                <NavLink to="/form">
                    <button className={styles.formBttn} >Create Pokemon</button>
                </NavLink>
            </nav>
        </div>
    )
}