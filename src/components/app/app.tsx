import React from 'react';
import {Route, Routes} from 'react-router-dom';

import PrivateRoute from '@src/hoc/private_route';
import PublicRoute from '@src/hoc/public_route';
import {routes} from '@src/layout/routes';
import Login from '@src/views/login';

import {stylesContainer} from './app.module.less';

export const App = (): React.ReactElement => {
    return (
        <div className={stylesContainer}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                {routes?.map((item) => {
                    return (
                        <Route
                            key={item.path}
                            path={'/' + item.path}
                            element={
                                <PrivateRoute>
                                    <item.component />
                                </PrivateRoute>
                            }
                        />
                    );
                })}
                {/* <Route index element={<Main />} />
                    <Route path="users" element={<Users />} /> */}
            </Routes>
        </div>
    );
};
