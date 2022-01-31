import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    OutlinedInput,
    Select,
    Switch,
    TextField,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import cx from 'classnames';
import React, {useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';

import CloseIcon from '@src/assets/CloseIcon';
import {useMainStore} from '@src/store/main';

import {optionAutomobile, optionRegions} from './constants';
import styles from './index.module.scss';
import {UsersProps} from './schema';

const UserAdd = () => {
    const open = useMainStore((state) => state.open);
    const setOpen = useMainStore((state) => state.handleTap);

    const regionsOptions = () => {
        return optionRegions.map((option) => {
            return (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            );
        });
    };

    const automobileOptions = () => {
        return optionAutomobile.map((option) => {
            return (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            );
        });
    };

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<UsersProps>({
        mode: 'onBlur',
        shouldFocusError: true,
    });

    const onSubmit = (data: UsersProps) => {
        console.log(data);
    };

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle className={styles.heading} id="scroll-dialog-title">
                <div className="row">
                    <p className={styles.title}>Добавить пользователя</p>
                    <div className="flex__end">
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
            </DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent className={styles.content} dividers={true}>
                    <div className={styles.block}>
                        <div className="row">
                            <Controller
                                name="name"
                                control={control}
                                render={({field: {value, onChange}}) => {
                                    return (
                                        <TextField
                                            value={value}
                                            size="small"
                                            onChange={onChange}
                                            className="mui_textfield"
                                            label="Имя"
                                        />
                                    );
                                }}
                            />

                            <Controller
                                name="login"
                                control={control}
                                render={({field: {value, onChange}}) => {
                                    return (
                                        <TextField
                                            value={value}
                                            size="small"
                                            className={cx(
                                                'flex__end',
                                                'mui__textfield',
                                            )}
                                            onChange={onChange}
                                            label="Логин"
                                        />
                                    );
                                }}
                            />
                        </div>
                    </div>
                    <Controller
                        name="password"
                        control={control}
                        render={({field: {value, onChange}}) => {
                            return (
                                <TextField
                                    value={value}
                                    size="small"
                                    className={cx(
                                        'flex__end',
                                        'mui__textfield',
                                    )}
                                    onChange={onChange}
                                    label="Пароль"
                                    fullWidth
                                />
                            );
                        }}
                    />
                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({field: {value, onChange}}) => {
                            return (
                                <TextField
                                    value={value}
                                    size="small"
                                    className={cx(
                                        'flex__end',
                                        'mui__textfield',
                                    )}
                                    onChange={onChange}
                                    label="Повторить пароль"
                                    fullWidth
                                />
                            );
                        }}
                    />
                    <Controller
                        control={control}
                        name="region"
                        render={({field: {onChange, value}}) => (
                            <Select
                                size="small"
                                onChange={onChange}
                                value={value}
                                fullWidth
                            >
                                {regionsOptions()}
                            </Select>
                        )}
                    />
                    <Controller
                        control={control}
                        name="automobile"
                        render={({field: {onChange, value}}) => (
                            <Select
                                size="small"
                                onChange={onChange}
                                value={value}
                                fullWidth
                            >
                                {automobileOptions()}
                            </Select>
                        )}
                    />
                    <p className={styles.switchTitle}>Статус пользователя</p>
                    <Controller
                        control={control}
                        name="active"
                        render={({field: {onChange, value}}) => (
                            <Switch
                                inputProps={{'aria-label': 'controlled'}}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button className="btn__secondary" onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button
                        variant="contained"
                        className="btn__primary"
                        onClick={handleClose}
                    >
                        Добавить
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default UserAdd;
