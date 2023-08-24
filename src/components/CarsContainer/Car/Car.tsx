import {FC, PropsWithChildren} from 'react';

import {ICar} from "../../../interfaces";
import {useAppDispatch} from "../../../hooks";
import {carsActions} from "../../../redux";

interface ICarProps extends PropsWithChildren {
    car: ICar;
}

const Car: FC<ICarProps> = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useAppDispatch();
    const deleteCar = (id: number) => {
        dispatch(carsActions.deleteCar({id}));
    };

    const updateCar = (car: ICar) => {
        dispatch(carsActions.setCarForUpdate(car));
    }

    return (
        <div>
            <div><b>Brand:</b> {brand}</div>
            <div><b>Price:</b> {price}</div>
            <div><b>Year:</b> {year}</div>
            <button onClick={() => updateCar(car)}>Update</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};

export {Car};