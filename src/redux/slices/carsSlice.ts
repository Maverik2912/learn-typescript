import {ICar} from "../../interfaces";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {carsService} from "../../services";
import {AxiosError} from "axios";

interface IInitialState {
    cars: ICar[];
    carForUpdate: ICar
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
            rejectWithValue(err.response.data);
        }
    }
);

const create = createAsyncThunk<void, {car: ICar}>(
    'carsSlice/create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            await carsService.create(car);
            dispatch(getAll());
        } catch (e) {
            const err = e as AxiosError;
            rejectWithValue(err.response.data);
        }
    }
);

const update = createAsyncThunk<void, {id: number, car: ICar}>(
    'carsSlice/update',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carsService.update(id, car);
            dispatch(getAll());
        } catch (e) {
            const err = e as AxiosError;
            rejectWithValue(err.response.data);
        }
    }
);

const deleteCar = createAsyncThunk<void, {id: number}>(
    'carsSlice/deleteCar',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carsService.delete(id);
            dispatch(getAll());
        } catch (e) {
            const err = e as AxiosError;
            rejectWithValue(err.response.data);
        }
    }
);

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action: PayloadAction<ICar>) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload;
        })
        .addCase(update.fulfilled, state => {
            state.carForUpdate = null;
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