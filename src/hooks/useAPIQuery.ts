import {AxiosResponse} from 'axios';
import {UseQueryOptions, useQuery} from 'react-query';

import request from '@src/services/interceptor';

type Args<Data, Error> = {
    url: string;
    params?: object;
    options?: UseQueryOptions<AxiosResponse<Data>, Error>;
};

const useAPIQuery = <Data = any, Error = any>({
    url,
    params = {},
    options = {},
}: Args<Data, Error>) => {
    const query = useQuery(
        [url, params],
        () => request.get<Data>(url, {params}),
        options,
    );

    return {...query, data: query.data?.data, axiosData: query.data};
};

export default useAPIQuery;
