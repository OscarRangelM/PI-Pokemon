import styles from './nav.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Nav(props) {
    
    const location = useLocation();

    return location.pathname === '/favorites' ?  (
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
                        />
                        <button className={styles.searchBttn}>Search</button>
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
                        <NavLink to='/api' >
                            <button className={styles.filterApi}>
                                API
                            </button>
                        </NavLink>
                        <NavLink to='/db' >
                            <button className={styles.filterDB}>
                                DB
                            </button>
                        </NavLink>
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