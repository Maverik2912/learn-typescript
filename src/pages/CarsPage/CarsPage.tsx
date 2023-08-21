import {Outlet} from "react-router-dom";
import {Cars, CarsForm} from "../../components";

const CarsPage = () => {
    return (
        <div>
            <Outlet />
            <CarsForm />
            <Cars />
        </div>
    );
};

export {CarsPage};