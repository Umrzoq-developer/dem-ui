import Cookies from 'js-cookie';
import React, {Suspense} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import {TOKEN} from '@src/constants';
import Layout from '@src/layout/mainLayout';
import {useAuthStore} from '@src/store/auth';

type IProps = {
    children?: any;
};

const PrivateRoute = ({children}: IProps) => {
    const location = useLocation();
    const isAuth = useAuthStore((state) => state.authed);
    const cookie = Cookies.get(TOKEN.AUTH_TOKEN);

    if (cookie || isAuth) {
        return (
            <Layout>
                <Suspense fallback={<div>Loading....</div>}>
                    {children}
                </Suspense>
            </Layout>
        );
    } else {
        return <Navigate to="/" replace state={{path: location.pathname}} />;
    }
};

export default PrivateRoute;
