import {useForm} from "react-hook-form";
import {ICar} from "../../../interfaces";

const CarsForm = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm<ICar>();

    const save = () => {

    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <div>
                <input
                    type="text"
                    placeholder="brand"
                    {...register('brand')}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="price"
                    {...register('price', {valueAsNumber: true})}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="year"
                    {...register('year', {valueAsNumber: true})}
                />
            </div>
        </form>
    );
};

export {CarsForm};