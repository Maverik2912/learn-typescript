import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar} from "../../interfaces/ICar";
import {carsService} from "../../services";

interface IInitialState {
    cars: ICar[];
    carForUpdate: ICar;
}

const initialState: IInitialState = {
    cars: [],
    carForUpdate: null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const create = createAsyncThunk<ICar, {car: ICar}>(
    'carsSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.create(car);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const update = createAsyncThunk<ICar, {id: number, car: ICar}>(
    'carsSlice/update',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.update(id, car);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const deleteCar = createAsyncThunk<number, {id: number}>(
    'carsSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            await carsService.delete(id);
            return id;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }

)



const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action:  PayloadAction<ICar>) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload;
        })
        .addCase(create.fulfilled, (state, action) => {
            state.cars.push(action.payload);
        })
        .addCase(update.fulfilled, (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice(index, 1, action.payload);
        })
        .addCase(deleteCar.fulfilled, (state, action) => {
           const index = state.cars.findIndex(car => car.id === action.payload);
           state.cars.splice(index, 1);
        })
});

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
}
export {
    carsActions,
    carsReducer
}