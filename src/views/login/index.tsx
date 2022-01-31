import React from 'react';

import AuthForm from './components/authForm';
import styles from './index.module.scss';

const Login = () => {
    console.log(process.env.BASI_API_URL);
    return (
        <div className={styles.loginContainer}>
            <AuthForm />
        </div>
    );
};

export default Login;
