import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {validator} from "./validator";
import {ICar} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";
import {carsActions} from "../../../redux";
import styles from './CarsForm.module.css';

const CarsForm = () => {
    const {
        register,
        setValue,
        reset,
        handleSubmit,
        formState: {errors}
    } = useForm<ICar>({resolver: joiResolver(validator)});
    const dispatch = useAppDispatch();
    const {carForUpdate} = useAppSelector(store => store.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, []);

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carsActions.create({car}));
        reset();
    };

    const update: SubmitHandler<ICar> = async (car) => {
        reset();
        await dispatch(carsActions.update({id: carForUpdate.id, car: car}));
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(save)}>
            <h2 className={styles.title}>Create car</h2>
            <div>
                <input
                    type="text"
                    placeholder="Brand"
                    {...register('brand')}
                />
                {errors.brand && <span>{errors.brand.message}</span>}
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Price"
                    {...register('price', {valueAsNumber: true})}
                />
                {errors.price && <span>{errors.price.message}</span>}
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Year"
                    {...register('year', {valueAsNumber: true})}
                />
                {errors.year && <span>{errors.year.message}</span>}
            </div>
            <button className={styles.button}>Save</button>
        </form>
    );
};

export {CarsForm};