import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {CarsDetailsPage, CarsPage} from "../pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='/cars' />
            },
            {
                path: '/cars',
                element: <CarsPage />,
                children: [
                    {
                        path: '/cars:id',
                        element: <CarsDetailsPage />
                    }
                ]
            }
        ]
    }
])

export {
    router
}