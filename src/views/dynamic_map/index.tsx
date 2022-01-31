import React from 'react';
import {useQuery} from 'react-query';

import {getLocations} from '@src/api/main';
import {IBusStops} from '@src/services/models/bus_stop_model';
import {useMapStore} from '@src/store/map';

const DynamicMapPage = () => {
    const setBuses = useMapStore((state) => state.setBuses);

    // const {isLoading, error} = useQuery('locations', getLocations, {
    //     refetchOnWindowFocus: false,
    //     retry: 0,
    //     refetchInterval: 1000,
    //     cacheTime: 5000,
    //     staleTime: 2000,
    //     refetchIntervalInBackground: true,
    //     onSuccess: (data) => {
    //         setBuses(
    //             data?.data?.data?.map((item: IBusStops) => ({
    //                 ...item,
    //                 loc: item.loc.coordinates.reverse(),
    //             })),
    //         );
    //     },
    // });

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error Server</div>;
    // }
    return <div>DynamicMapPage</div>;
};

export default DynamicMapPage;
