import apiReq from '@src/services/interceptor';

export const getLocations = async () => {
    const response = await apiReq.get(`activeBuses/monitoring`);
    return response;
};
