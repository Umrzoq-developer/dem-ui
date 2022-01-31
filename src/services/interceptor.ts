import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import Cookies from 'js-cookie';

import {TOKEN} from '@src/constants';

import {URL} from './constants';

const apiReq = axios.create({
    baseURL: URL,
    headers: {},
});

apiReq.interceptors.request.use((config: AxiosRequestConfig | any) => {
    const companyToken = Cookies.get(TOKEN.AUTH_TOKEN);
    config.headers['authorization'] = `Bearer ${companyToken}`;
    return config;
});

apiReq.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    async (err: any) => {
        if (err.response.status === 401) {
            Cookies.remove(TOKEN.AUTH_TOKEN);
            window.location.pathname = '/';
        }
        return Promise.reject(err);
    },
);

export default apiReq;
