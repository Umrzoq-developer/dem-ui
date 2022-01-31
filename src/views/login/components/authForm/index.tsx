import {Alert, Snackbar, Typography} from '@mui/material';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';

import useAuthReq from '@src/api/auth/hooks';
import ButtonM from '@src/components/Button';
import InputM from '@src/components/Input';
import {useAuthStore} from '@src/store/auth';

import styles from './index.module.scss';
import {FormProps} from './types';

const AuthForm = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<FormProps>({
        mode: 'onBlur',
        shouldFocusError: true,
    });

    const open = useAuthStore((state) => state.openE);

    const {handleLogin, handleClose} = useAuthReq();

    // console.log(errors, 'errors');
    const onSubmit = (data: FormProps) => {
        console.log(data, 'data submitted');
        handleLogin.mutate(data);
    };

    console.log(handleLogin.data?.data, 'error');

    const buttonRef = React.useRef<HTMLButtonElement | null>(null);

    React.useEffect(() => {
        buttonRef?.current?.focus();
    }, []);

    return (
        <div className={styles.container}>
            <Typography variant="h6">ASDUM Application</Typography>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.formContainer}
            >
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: true,
                    }}
                    render={({field}) => {
                        return (
                            <InputM
                                field={field}
                                error={!!errors.name?.type}
                                label="UserName"
                                fullWidth
                            />
                        );
                    }}
                />

                <Controller
                    control={control}
                    name="password"
                    rules={{
                        required: true,
                    }}
                    render={({field}) => {
                        return (
                            <InputM
                                field={field}
                                error={!!errors.password?.type}
                                type="password"
                                label="Password"
                                fullWidth
                            />
                        );
                    }}
                />

                <ButtonM
                    ref={buttonRef}
                    type="submit"
                    fullWidth
                    variant="contained"
                    text="Login"
                    loading={handleLogin.isLoading}
                />
            </form>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                open={open}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{width: '100%'}}
                >
                    Auth Error
                </Alert>
            </Snackbar>
        </div>
    );
};

export default AuthForm;
