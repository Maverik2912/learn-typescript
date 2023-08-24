import {useNavigate} from "react-router-dom";

import {authService} from "../../services";
import {links} from "../../constants";
import {Cars, CarsForm} from "../../components";
import styles from './CarsPage.module.css';

const CarsPage = () => {
    const navigate = useNavigate();
    const unlogin = () => {
        authService.deleteTokens();
        navigate(links.LOGIN);
    };

    return (
        <div>
            <button className={styles.button} onClick={unlogin}>Unlogin</button>
            <CarsForm />
            <Cars />
        </div>
    );
};

export {CarsPage};