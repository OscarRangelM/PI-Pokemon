import styles from './nav.module.css';
import React from 'react';
// import Card from '../Card/Card.jsx';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
    // const { type } = props;
    return (
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
                        <button>Search</button>
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
                        <button className={styles.filterApi}>
                            API
                        </button>
                        <button className={styles.filterDB}>
                            DB
                        </button>
                    </li>
                </ul>
                <NavLink to="/form">
                    <button>Create Pokemon</button>
                </NavLink>
            </nav>
        </div>
    )
}