import Cookies from 'js-cookie';
import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import {TOKEN} from '@src/constants';
import {useAuthStore} from '@src/store/auth';

type IProps = {
    children?: any;
};

const PublicRoute = ({children}: IProps) => {
    const location = useLocation();
    const cookie = Cookies.get(TOKEN.AUTH_TOKEN);
    const isAuth = useAuthStore((state) => state.authed);

    if (!isAuth && !cookie) {
        return children;
    } else {
        return (
            <Navigate to="/main" replace state={{path: location.pathname}} />
        );
    }
};

export default PublicRoute;
