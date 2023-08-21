import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootStore} from "../redux";
import {useLocation} from "react-router-dom";
import {Location} from "react-router-dom";

const useAppSelector :TypedUseSelectorHook<RootStore> = useSelector;

const useAppDispatch = () => useDispatch<AppDispatch>();

interface IState<S> extends Location {
    state: S
}
const useAppLocation = <T>(): IState<T> => useLocation();

export {
    useAppDispatch,
    useAppSelector,
    useAppLocation
}