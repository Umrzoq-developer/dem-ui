import {Collapse, Fade} from '@mui/material';
// import {useMapStore} from '@src/store/map';
// import produce from 'immer';
import React, {useRef, useState} from 'react';
import {
    Clusterer,
    Map,
    ObjectManager,
    Placemark,
    Polyline,
    RulerControl,
    TrafficControl,
    YMaps,
    ZoomControl,
} from 'react-yandex-maps';
import {v4 as uuid} from 'uuid';

import bus from '@src/assets/bus.png';
import {IBusStops} from '@src/services/models/bus_stop_model';
import {useMapStore} from '@src/store/map';

// import {mapsLats} from './constants';

const tashkentzoom = [41.32847446609404, 69.24298268717716];

interface IGeo {
    lat: number;
    lng: number;
    id?: string | number;
}

interface IProps {
    data?: any;
}

const mapState = {
    center: tashkentzoom,
    zoom: 12,
    behaviors: ['default', 'scrollZoom'],
    controls: [],
};

const MapY = ({data}: IProps) => {
    const dataMap = useMapStore((state) => state.buses);
    const map = useRef<any>();
    const [coords, setCoords] = useState<any>([]);
    const [polyLines, setPolyLines] = useState<any>([]);
    const [lastCordinate, setLastCordinate] = useState<any>({});

    const onMapClick = (event: any) => {
        const cordinate = event.get('coords');

        console.log(lastCordinate, 'last coordination');
        if (lastCordinate?.lat) {
            const findedIndex = coords.findIndex(
                (item: any) => item.id === lastCordinate.id,
            );

            // Coordinates
            coords.splice(findedIndex, 0, {
                lat: cordinate[0],
                lng: cordinate[1],
                id: uuid(),
            });
            coords.join();
            setCoords(coords);
            // Polylines
            polyLines.splice(findedIndex, 0, cordinate);
            polyLines.join();
            setPolyLines(polyLines);

            setLastCordinate({});
        } else {
            setCoords((crds: any) => [
                ...crds,
                {lat: cordinate[0], lng: cordinate[1], id: uuid()},
            ]);

            setPolyLines((polilines: any) => [...polilines, cordinate]);
        }
    };

    const handleContext = (crds: any) => {
        setCoords((lastCrds: any) =>
            lastCrds.filter((item: any) => item.id !== crds.id),
        );
        setPolyLines((polilines: any) =>
            polilines.filter(
                (item: any) => item[0] !== crds.lat && item[1] !== crds.lng,
            ),
        );
    };

    const getPointData = (index: any) => {
        return {
            balloonContentBody:
                'placemark <strong>balloon ' + index + '</strong>',
            clusterCaption: 'placemark <strong>' + index + '</strong>',
        };
    };

    return (
        <YMaps
            query={{
                ns: 'use-load-option',
                apikey: 'e3e687ba-3f11-4a48-92de-55ca45ab88b9',
                load: 'Map,control.GeolocationControl,control.FullscreenControl',
            }}
        >
            <Map
                style={{width: '100%', height: '100vh'}}
                defaultState={mapState}
                onClick={onMapClick}
                modules={['multiRouter.MultiRoute']}
                // onLoad={addRoute}
                //@ts-ignore
                instanceRef={map}
                state={mapState}
                options={{
                    maxZoom: 15,
                    minZoom: 9,
                }}
                // className={styles}
            >
                <Polyline
                    geometry={polyLines}
                    options={{
                        balloonCloseButton: false,
                        strokeColor: '#000',
                        strokeWidth: 4,
                        strokeOpacity: 0.5,
                    }}
                />
                {/* <Clusterer
                    // options={{
                    //     // preset: 'islands#invertedLightBlueClusterIcons',
                    //     // preset: 'islands#invertedVioletClusterIcons',
                    //     preset: 'islands#invertedDarkOrangeClusterIcons',
                    //     groupByCoordinates: false,
                    //     //             preset: "islands#invertedVioletClusterIcons",
                    //     // clusterDisableClickZoom: true,
                    //     clusterHideIconOnBalloonOpen: false,
                    //     geoObjectHideIconOnBalloonOpen: false,
                    // }}
                    options={{
                        preset: 'islands#invertedVioletClusterIcons',
                        groupByCoordinates: false,
                        clusterDisableClickZoom: false,
                        clusterHideIconOnBalloonOpen: false,
                        geoObjectHideIconOnBalloonOpen: false,
                    }}
                > */}
                {dataMap?.length > 0 &&
                    dataMap?.map((coordsMain: IBusStops) => {
                        // console.log(coordsMain.loc.coordinates, 'cords');
                        return (
                            <Collapse
                                key={coordsMain.bus.busid}
                                orientation="horizontal"
                                in={true}
                            >
                                <Placemark
                                    geometry={coordsMain.loc}
                                    properties={getPointData(
                                        coordsMain.bus.gosno,
                                    )}
                                    // options={{
                                    //     preset: 'islands#violetIcon',
                                    //     iconLayout: 'default#image',
                                    //     // iconImageSize: [35, 35],
                                    //     iconImageHref: bus,
                                    //     // 'https://www.svgrepo.com/show/14932/bus.svg'
                                    // }}
                                />
                            </Collapse>
                        );
                    })}
                {/* </Clusterer> */}

                {/* {data?.map((coordsMain: any) => (
                    <Placemark
                        key={coordsMain?.bus?.busid}
                        geometry={coordsMain?.loc?.coordinates}
                        options={{
                            iconLayout: 'default#image',
                            iconImageSize: [30, 30],
                            iconImageHref: bus,
                            // 'https://www.svgrepo.com/show/14932/bus.svg'
                        }}
                    />
                ))} */}

                {/* {coords.map((coordsMain: any) => {
                    return (
                        <Placemark
                            key={coordsMain.id}
                            geometry={[coordsMain.lat, coordsMain.lng]}
                            onClick={() => {
                                setLastCordinate(coordsMain);
                            }}
                            onContextMenu={() => handleContext(coordsMain)}
                        />
                    );
                })} */}

                {/* {latlngs.map((coordsMain: any) => {
                    return (
                        <Placemark
                            key={uuid()}
                            geometry={[coordsMain.lat, coordsMain.lng]}
                            onClick={() => {
                                setLastCordinate(coordsMain);
                            }}
                            options={{
                                iconLayout: 'default#image',
                                iconImageSize: [50, 50],
                                iconImageHref: '../../assets/bus.png',
                            }}
                            onContextMenu={() => handleContext(coordsMain)}
                        />
                    );
                })} */}
                <ObjectManager
                    options={{
                        clusterize: true,
                        gridSize: 32,
                    }}
                    objects={{
                        openBalloonOnClick: true,
                        preset: 'islands#greenDotIcon',
                    }}
                    clusters={{
                        preset: 'islands#redClusterIcons',
                    }}
                    filter={(object: any) => object.id % 2 === 0}
                    //   defaultFeatures={features}
                    modules={[
                        'objectManager.addon.objectsBalloon',
                        'objectManager.addon.objectsHint',
                    ]}
                />
                <TrafficControl options={{float: 'right'}} />
                <ZoomControl options={{float: 'right'}} />
                <RulerControl
                    sel
                    options={{
                        float: 'right',
                        select: (e: any) => {
                            console.log(e, 'sellected');
                        },
                    }}
                />
            </Map>
        </YMaps>
    );
};

export default MapY;
