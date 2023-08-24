import {authService} from "../services";
import {Navigate} from "react-router-dom";
import {FC, PropsWithChildren} from "react";

import {links} from "../constants";

interface AuthRequiredProps extends PropsWithChildren {

}
const AuthRequired:FC<AuthRequiredProps> = ({children}) => {
    const accessToken = authService.getAccessToken();
    const refreshToken = authService.getRefreshToken();
    return (
        <>
            {!accessToken && !refreshToken ? <Navigate to={links.LOGIN}/> : children}
        </>
    );
};

export {AuthRequired};