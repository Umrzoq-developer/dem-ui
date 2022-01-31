import {Button} from '@mui/material';
import React from 'react';

import Container from '../container';
import styles from './index.module.scss';

interface IProps {
    children: any;
    onClick?: () => void;
    disabled?: boolean;
}

const BaseButton = ({children, onClick, disabled}: IProps) => {
    return (
        <Container>
            <Button
                className={styles.btn}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </Button>
        </Container>
    );
};

export default BaseButton;
