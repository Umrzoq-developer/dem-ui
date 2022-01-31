import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import styles from './layout.module.scss';
// import styles from './layout.module.scss';
import {DrawerHeader, containerStyle, outletStyle} from './mixins';

const Layout = ({children}: any) => {
    return (
        <Box sx={containerStyle}>
            <CssBaseline />
            {/* AppBar  */}
            <Navbar />
            {/* Sidebar  */}
            <Sidebar />
            {/* Main Outlet  */}
            <Box className={styles.mainBox} component="main" sx={outletStyle}>
                <DrawerHeader className={styles.drawHead} />
                {children}
            </Box>
        </Box>
    );
};

export default React.memo(Layout);

{
    /* <div className={styles.outlet}>
</div> */
}
// <div className={styles.container}>
