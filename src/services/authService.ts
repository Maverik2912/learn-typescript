import {IAuth, ITokens, IUser} from "../interfaces";
import {apiService} from "./apiService/apiService";
import {urls} from "../constants";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';
const authService = {
    register: (user: IAuth) => apiService.post<IUser>(urls.auth.register, user),

    async login(user: IAuth): Promise<IUser> {
        const {data} = await apiService.post<ITokens>(urls.auth.login, user);
        this.setTokens(data);
        const {data: me} = await this.me();
        return me;
    },

    async rerfesh(): Promise<void> {
        const refresh = this.getRefreshToken();
        const {data} = await apiService.post<ITokens>(urls.auth.refresh, {refresh});
        this.setTokens(data);
    },

    me: () => apiService.get<IUser>(urls.auth.me),

    setTokens({refresh, access}: ITokens): void {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
    },

    getAccessToken(): string {
        return localStorage.getItem(accessTokenKey);
    },

    getRefreshToken(): string {
        return localStorage.getItem(refreshTokenKey);
    },

    deleteTokens(): void {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    }

}

export {
    authService
}