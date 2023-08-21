import {useAppDispatch, useAppSelector} from "../../../hooks/routerHooks";
import {Car} from "../Car/Car";
import styles from './Cars.module.css';
import {useEffect} from "react";
import {carsActions} from "../../../redux";

const Cars = () => {
    const {cars} = useAppSelector(store => store.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carsActions.getAll());
    }, [dispatch]);

    return (
        <div className={styles.cars}>
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    );
};

export {Cars};