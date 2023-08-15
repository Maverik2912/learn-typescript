import {apiService} from "./apiService/apiService";
import {IUser} from "../components";
import {urls} from "../constants";

const usersService = {
    getAll: () => apiService.get<IUser[]>(urls.users)
}

export {
    usersService
}