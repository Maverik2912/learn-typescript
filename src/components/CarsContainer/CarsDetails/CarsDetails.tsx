import {useAppLocation} from "../../../hooks/routerHooks";
import {ICar} from "../../../interfaces";

const CarsDetails = () => {
    const {state: {id, brand,  price, year}} = useAppLocation<ICar>();
    return (
        <div>
            <div><b>id:</b> {id}</div>
            <div><b>brand:</b> {brand}</div>
            <div><b>price:</b> {price}</div>
            <div><b>year:</b> {year}</div>
        </div>
    );
};

export {CarsDetails};