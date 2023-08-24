import {configureStore} from "@reduxjs/toolkit";

import {carsReducer} from "./slices/carsSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer
    }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
}