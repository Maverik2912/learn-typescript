import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slices/carsSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer
    }
});

type RootStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type {
    RootStore,
    AppDispatch
}

export {
    store
}