import {FC, PropsWithChildren} from 'react';

import {ICar} from "../../../interfaces";
import styles from './Car.module.css';
import {carsActions} from "../../../redux";
import {useAppDispatch} from "../../../hooks/routerHooks";
import {useNavigate} from "react-router-dom";
interface ICarProps extends PropsWithChildren {
    car: ICar
}

const Car: FC<ICarProps> = ({car}) => {
    const {id, brand} = car;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const deleteCar = (id: number) => {
        dispatch(carsActions.deleteCar({id}));
    };

    const updateCar = (car: ICar) => {
        dispatch(carsActions.setCarForUpdate(car));
    };

    return (
        <div>
            <div><b>id:</b> {id}</div>
            <div><b>brand:</b> {brand}</div>
            <div className={styles.buttons}>
                <button onClick={() => deleteCar(id)}>Delete</button>
                <button onClick={() => updateCar(car)}>Update</button>
                <button onClick={() => navigate(`/cars/${id}`, {state: car})}>Details</button>
            </div>
        </div>
    );
};

export {Car};