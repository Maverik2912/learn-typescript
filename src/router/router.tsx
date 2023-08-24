import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {links} from "../constants";
import {CarsPage, LoginPage, RegisterPage} from "../pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={links.CARS} />
            },
            {
                path: links.CARS,
                element: <CarsPage />
            },
            {
                path: links.LOGIN,
                element: <LoginPage />
            },
            {
                path: links.REGISTER,
                element: <RegisterPage />
            }
        ]

    }
])

export {
    router
}