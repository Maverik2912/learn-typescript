import {NavLink} from "react-router-dom";

import {navLinks} from "../../constants/navLinks";
import styles from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../redux";

const Header = () => {
    const {me} = useAppSelector(store => store.auth);

    const dispatch = useAppDispatch();
    if(authService.getAccessToken() && !me) {
        dispatch(authActions.me());
    }
    return (
        <header className={styles.header}>

            {me
                ? <div className={styles.info}>
                    <p>User: <b>{me.username}</b></p>
                    <p>Last login: <b>{new Date(me.last_login).toLocaleTimeString()}</b></p>
                </div>
                : navLinks.map(link => <NavLink to={link.path} key={link.label}>{link.label}</NavLink>)
            }

        </header>
    );
};

export {Header};