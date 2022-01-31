import apiReq from '@src/services/interceptor';

export type AuthT = {
    name: string;
    password: string;
};

export const authReq = async (data: AuthT) => {
    const response = await apiReq.post(`auth/login`, data);
    return response;
};
