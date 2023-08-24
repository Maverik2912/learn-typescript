import axios, {AxiosError} from "axios";

import {baseURL, urls} from "../../constants";
import {authService} from "../authService";
import {router} from "../../router";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(req => {
    const accessToken = authService.getAccessToken();
    if(accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`
    }

    return req;
});

const waitList: WaitList[] = [];

let isRefreshing = false;

apiService.interceptors.response.use(
    res => {
    return res;
},
    async (error: AxiosError) => {
        const originalRequest = error.config;

        if(error.response.status === 401) {
            if(!isRefreshing) {
                isRefreshing = true;
                try {
                    await authService.rerfesh();
                    isRefreshing = false;
                    afterRefresh();
                    return apiService(originalRequest);
                } catch (e) {
                    authService.deleteTokens();
                    isRefreshing = false;
                    await router.navigate('/login?SessionExpired=true')
                    return Promise.reject(error);
                }
            }

        if(originalRequest.url === urls.auth.refresh) {
            return Promise.reject(error);
        }

        return new Promise(resolve => {
            subscribeWaitList(() => resolve(apiService(originalRequest)))
        })
        }


        return Promise.reject(error);
    }

)

type WaitList = () => void;

const subscribeWaitList = (cb: WaitList): void => {
    waitList.push(cb);
}

const afterRefresh = (): void => {
    while (waitList.length) {
        const cb = waitList.pop();
        cb();
    }
}

export {
    apiService
}