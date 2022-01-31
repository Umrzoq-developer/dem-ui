import {
    Button,
    IconButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import Cookies from 'js-cookie';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import DoubleArrowBack from '@src/assets/DoubleArrowBack';
//assets
import MenuIcon from '@src/assets/MenuIcon';
import {TOKEN} from '@src/constants';
import {AppBar} from '@src/layout/mixins';
import {useLayoutStore} from '@src/store/layout';

import styles from './index.module.scss';

const Navbar = () => {
    const navigate = useNavigate();

    const open = useLayoutStore((state) => state.open);
    const handleTap = useLayoutStore((state) => state.handleTap);

    const handleDrawerClose = () => {
        handleTap(false);
    };
    const handleLogout = async () => {
        await Cookies.remove(TOKEN.AUTH_TOKEN);
        navigate('/');
    };

    return (
        <AppBar
            className={styles.appBar}
            color="inherit"
            position="fixed"
            open={open}
        >
            <Toolbar className={styles.toolbar}>
                <div className={styles.leftSide}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => {
                            handleTap(true);
                        }}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon className={styles.menuBtn} />
                    </IconButton>

                    <div className={styles.closeBtn}>
                        <IconButton
                            sx={{...(!open && {display: 'none'})}}
                            onClick={handleDrawerClose}
                        >
                            <DoubleArrowBack />
                        </IconButton>
                    </div>
                </div>

                <div className={styles.rightSide}>
                    <div className={styles.logoutBtn}>
                        <Button
                            color="error"
                            size="small"
                            className={styles.btnLog}
                            variant="outlined"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default React.memo(Navbar);
