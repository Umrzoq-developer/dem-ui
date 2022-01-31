import {LoadingButton, LoadingButtonProps} from '@mui/lab';
import React from 'react';

import styles from './index.module.scss';

interface IProps extends LoadingButtonProps {
    text: string;
}

const MButton = React.forwardRef<HTMLButtonElement, IProps>(
    ({text, variant, loading, type, fullWidth}, ref) => {
        return (
            <LoadingButton
                type={type}
                loading={loading}
                fullWidth={fullWidth}
                variant={variant}
                ref={ref}
            >
                {text}
            </LoadingButton>
        );
    },
);

export default MButton;
