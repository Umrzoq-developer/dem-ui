import {StandardTextFieldProps, TextField} from '@mui/material';
import React from 'react';

interface IProps {
    error?: any;
    field?: any;
    register?: any;
    // value?: any;
    // onChange?: ((e: any) => void) | any;
    type?: 'text' | 'password' | 'number' | 'tel' | 'time';
    label: string;
    fullWidth?: boolean;
}

const InputM = ({
    error,
    // value,
    type,
    fullWidth = false,
    label,
    // onChange,
    ...props
}: IProps) => {
    return (
        <TextField
            {...props}
            error={error}
            type={type}
            label={label}
            fullWidth={fullWidth}
            {...props.field}
            {...props.register}
        />
    );
};

export default React.memo(InputM);
