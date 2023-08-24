import {NavLink} from "react-router-dom";

import {navLinks} from "../../constants/navLinks";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            {navLinks.map(link => <NavLink to={link.path} key={link.label}>{link.label}</NavLink>)}
        </header>
    );
};

export {Header};