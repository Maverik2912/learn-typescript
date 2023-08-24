import {useAppSelector} from "../../../hooks";
import {Car} from "../Car/Car";
import styles from './Cars.module.css';

const Cars = () => {
    const {cars} = useAppSelector(store => store.cars);

    return (
        <div className={styles.cars}>
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    );
};

export {Cars};