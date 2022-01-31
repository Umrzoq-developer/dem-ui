// import AutoMobile from '@src/views/automobile';
// import ChatTemplate from '@src/views/chat_template';
// import CheckpointsPage from '@src/views/checkpoints';
// import DynamicMapPage from '@src/views/dynamic_map';
// import ExtraCheckpointsPage from '@src/views/extra_checkpoints';
// import Logs from '@src/views/logs';
// import Main from '@src/views/main';
// import OperationalCount from '@src/views/operational_count';
// import OrderPage from '@src/views/order';
// import PolygonsPage from '@src/views/polygons';
// import RacesFuel from '@src/views/races_fuel';
// import Schedules from '@src/views/schedules';
// import Statistic from '@src/views/statistic';
// import StatusAutotransportPage from '@src/views/status_autotransport';
// import TransportsPage from '@src/views/transports';
// import Users from '@src/views/users';
// import Utilities from '@src/views/utilites';
// import VehicleModel from '@src/views/vehicle_model';
// import VehicleRoutesPage from '@src/views/vehicle_routes';
import {lazy} from 'react';

import SettingsIcon from '@src/assets/SettingsIcon';

const AutoMobilePage = lazy(() => import('@src/views/automobile'));
const TransportsPage = lazy(() => import('@src/views/transports'));
const VehiclePage = lazy(() => import('@src/views/vehicle_model'));
const VehicleRoutesPage = lazy(() => import('@src/views/vehicle_routes'));
const CheckpointsPage = lazy(() => import('@src/views/checkpoints'));
const DynamicMapPage = lazy(() => import('@src/views/dynamic_map'));
const ExtraCheckpointsPage = lazy(() => import('@src/views/extra_checkpoints'));
const PolygonsPage = lazy(() => import('@src/views/polygons'));
const StatusAutoPage = lazy(() => import('@src/views/status_autotransport'));
const UsersPage = lazy(() => import('@src/views/users'));
const OrderPage = lazy(() => import('@src/views/order'));
const OperationalCountPage = lazy(() => import('@src/views/operational_count'));
const SchedulesPage = lazy(() => import('@src/views/schedules'));
const RacesFuelPage = lazy(() => import('@src/views/races_fuel'));
const UtilitiesPage = lazy(() => import('@src/views/utilites'));
const ChatTemplatePage = lazy(() => import('@src/views/chat_template'));
const MainPage = lazy(() => import('@src/views/main'));
const StatiticPage = lazy(() => import('@src/views/statistic'));
const LogsPage = lazy(() => import('@src/views/logs'));

interface ISidebar {
    Icon: any;
    text: string;
    path: string;
    permission: any;
    component?: any;
    index?: boolean;
}

// export const routes: ISidebar[] = [
//     {
//         Icon: SettingsIcon,
//         text: 'Автопредприятии',
//         path: 'automobile',
//         permission: [],
//         component: AutoMobile,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Автотранспорты',
//         path: 'transports',
//         permission: [],
//         component: TransportsPage,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Модели aвтотранспорта',
//         path: 'vehicle_model',
//         permission: [],
//         component: VehicleModel,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Маршруты',
//         path: 'routes',
//         permission: [],
//         component: VehicleRoutesPage,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Контрольные точки',
//         path: 'checkpoints',
//         permission: [],
//         component: CheckpointsPage,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Dynamic Map',
//         path: 'dynamic_map',
//         permission: [],
//         component: DynamicMapPage,
//     },
//     {
//         Icon: SettingsIcon,
//         text: '(Д) Контрольные точки',
//         path: 'extra_checkpoints',
//         permission: [],
//         component: ExtraCheckpointsPage,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Полигоны',
//         path: 'polygons',
//         permission: [],
//         component: PolygonsPage,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Статусы автотранспорта',
//         path: 'status_autotransport',
//         permission: [],
//         component: StatusAutotransportPage,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Шаблоны отчетов',
//         path: 'users',
//         permission: [],
//         component: Users,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Разнарядка',
//         path: 'order',
//         permission: [],
//         component: OrderPage,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Эксплуатационный учет',
//         path: 'operational_count',
//         permission: [],
//         component: OperationalCount,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Расписания',
//         path: 'schedules',
//         permission: [],
//         component: Schedules,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Дифф. нор. рас. топлива',
//         path: 'races_fuel',
//         permission: [],
//         component: RacesFuel,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Утилиты',
//         path: 'utilities',
//         permission: [],
//         component: Utilities,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Шаблоны чата',
//         path: 'chat_template',
//         permission: [],
//         component: ChatTemplate,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Права доступа',
//         path: 'main',
//         permission: [],
//         component: Main,
//         index: true,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Статистика',
//         path: 'statistic',
//         permission: [],
//         component: Statistic,
//     },
//     {
//         Icon: SettingsIcon,
//         text: 'Логи',
//         path: 'logs',
//         permission: [],
//         component: Logs,
//     },
// ];

export const routes: ISidebar[] = [
    {
        Icon: SettingsIcon,
        text: 'Автопредприятии',
        path: 'automobile',
        permission: [],
        component: AutoMobilePage,
    },
    {
        Icon: SettingsIcon,
        text: 'Автотранспорты',
        path: 'transports',
        permission: [],
        component: TransportsPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Модели aвтотранспорта',
        path: 'vehicle_model',
        permission: [],
        component: VehiclePage,
    },
    {
        Icon: SettingsIcon,
        text: 'Маршруты',
        path: 'routes',
        permission: [],
        component: VehicleRoutesPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Контрольные точки',
        path: 'checkpoints',
        permission: [],
        component: CheckpointsPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Dynamic Map',
        path: 'dynamic_map',
        permission: [],
        component: DynamicMapPage,
    },
    {
        Icon: SettingsIcon,
        text: '(Д) Контрольные точки',
        path: 'extra_checkpoints',
        permission: [],
        component: ExtraCheckpointsPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Полигоны',
        path: 'polygons',
        permission: [],
        component: PolygonsPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Статусы автотранспорта',
        path: 'status_autotransport',
        permission: [],
        component: StatusAutoPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Шаблоны отчетов',
        path: 'users',
        permission: [],
        component: UsersPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Разнарядка',
        path: 'order',
        permission: [],
        component: OrderPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Эксплуатационный учет',
        path: 'operational_count',
        permission: [],
        component: OperationalCountPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Расписания',
        path: 'schedules',
        permission: [],
        component: SchedulesPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Дифф. нор. рас. топлива',
        path: 'races_fuel',
        permission: [],
        component: RacesFuelPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Утилиты',
        path: 'utilities',
        permission: [],
        component: UtilitiesPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Шаблоны чата',
        path: 'chat_template',
        permission: [],
        component: ChatTemplatePage,
    },
    {
        Icon: SettingsIcon,
        text: 'Права доступа',
        path: 'main',
        permission: [],
        component: MainPage,
        index: true,
    },
    {
        Icon: SettingsIcon,
        text: 'Статистика',
        path: 'statistic',
        permission: [],
        component: StatiticPage,
    },
    {
        Icon: SettingsIcon,
        text: 'Логи',
        path: 'logs',
        permission: [],
        component: LogsPage,
    },
];
