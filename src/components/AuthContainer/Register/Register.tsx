import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import {IAuth} from "../../../interfaces";
import {authValidator} from "../authValidator";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {authActions} from "../../../redux";
import {links} from "../../../constants";
import styles from '../Auth.module.css';

const Register = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm<IAuth>({resolver: joiResolver(authValidator)});
    const dispatch = useAppDispatch();
    const {errors: authErrors} = useAppSelector(store => store.auth);
    const navigate = useNavigate();
    const registerUser: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.register({user}));

        if(requestStatus === 'fulfilled') {
            reset();
            navigate(links.LOGIN);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(registerUser)}>
                <h1 className={styles.title}>Register user</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register('username')}
                    />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password')}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                {authErrors?.username && <span>Username already exists</span>}
                <button className={styles.button}>Register</button>
            </form>
        </div>
    );
};

export {Register};