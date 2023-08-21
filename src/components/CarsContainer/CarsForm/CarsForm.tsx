import {SubmitHandler, useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {ICar} from "../../../interfaces";
import {validator} from "./validator";
import {carsActions} from "../../../redux";
import {useAppDispatch, useAppSelector} from "../../../hooks/routerHooks";
import styles from './CarsForm.module.css';

const CarsForm = () => {
    const {carForUpdate} = useAppSelector(store => store.cars);
    const dispatch = useAppDispatch();
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm<ICar>({
        resolver: joiResolver(validator)
    });

    useEffect(() => {
        if(carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carsActions.create({car}));
        reset();
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await dispatch(carsActions.update({id: carForUpdate.id, car: car}));
        reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(carForUpdate ? update: save)}>
            <div>
                <input
                    type="text"
                    placeholder="brand"
                    {...register('brand')}
                />
                {errors.brand && <span>{errors.brand.message}</span>}
            </div>
            <div>
                <input
                    type="number"
                    placeholder="price"
                    {...register('price', {valueAsNumber: true})}
                />
                {errors.price && <span>{errors.price.message}</span>}
            </div>
            <div>
                <input
                    type="number"
                    placeholder="year"
                    {...register('year', {valueAsNumber: true})}
                />
                {errors.year && <span>{errors.year.message}</span>}
            </div>
            <button>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarsForm};