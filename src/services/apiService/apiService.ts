import axios, {AxiosInstance} from "axios";
import {baseURL} from "../../constants/urls";

const apiService: AxiosInstance = axios.create({baseURL});

export {
    apiService
}