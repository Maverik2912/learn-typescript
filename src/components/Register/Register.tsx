import {useForm} from "react-hook-form";
import {IAuth} from "../../interfaces";
import {joiResolver} from "@hookform/resolvers/joi";

const Register = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm<IAuth>({resolver: joiResolver()});
    return (
        <form>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    {...register('username')}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                />
            </div>
        </form>
    );
};

export {Register};