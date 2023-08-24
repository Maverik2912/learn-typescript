import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {IAuth} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {authActions} from "../../../redux";
import {links} from "../../../constants";
import styles from '../Auth.module.css';
const Login = () => {
    const {register, reset, handleSubmit} = useForm<IAuth>();
    const {errors: authErrors} = useAppSelector(store => store.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const login: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user}));

        if(requestStatus === 'fulfilled') {
            reset();
            navigate(links.CARS);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(login)}>
                <h1 className={styles.title}>Login user</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register('username')}
                    />
                </div>
                <div>
                    <input
                        type=""
                        placeholder="Password"
                        {...register('password')}
                    />
                </div>
                {authErrors?.detail === 'No active account found with the given credentials' && <span>Incorrect username or password</span>}
                <button className={styles.button}>Register</button>
            </form>
        </div>
    );
};

export {Login};