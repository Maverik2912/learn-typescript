import {apiService} from "./apiService/apiService";
import {ICar} from "../interfaces/ICar";
import {urls} from "../constants";
import {IPagination} from "../interfaces";

const carsService = {
    getAll: () => apiService.get<IPagination<ICar>>(urls.cars.base),
    create: (car: ICar) => apiService.post<ICar>(urls.cars.base, car),
    update: (id: number, car: ICar) => apiService.put<ICar>(urls.cars.byId(id), car),
    delete: (id: number) => apiService.delete<void>(urls.cars.byId(id))
}

export {
    carsService
}