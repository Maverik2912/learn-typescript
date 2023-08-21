import {FC, PropsWithChildren} from 'react';
import {ICar} from "../../../interfaces";

interface ICarProps extends PropsWithChildren {
    car: ICar
}

const Car: FC<ICarProps> = ({car}) => {
    const {id, brand} = car;

     return (
        <div>
            <div><b>id:</b> {id}</div>
            <div><b>brand:</b> {brand}</div>
        </div>
    );
};

export {Car};