import {List, Typography} from '@mui/material';
import React, {useEffect} from 'react';

import {Drawer, DrawerHeader} from '@src/layout/mixins';
import {routes} from '@src/layout/routes';
import {useLayoutStore} from '@src/store/layout';

import styles from './index.module.scss';
import ListItemComponent from './listItem';

const Sidebar = () => {
    const open = useLayoutStore((state) => state.open);

    useEffect(() => {
        console.log('logged');

        return () => {
            console.log('updated');
        };
    }, []);

    return (
        <Drawer className={styles.drawer} variant="permanent" open={open}>
            <DrawerHeader className={styles.drawerHeader}>
                <div className={styles.wrapLogo}>
                    <Typography variant="h6">ASDUM</Typography>
                </div>
            </DrawerHeader>

            <List className={styles.list}>
                {routes.map(({Icon, path, text, permission}) => {
                    return (
                        <ListItemComponent
                            key={text}
                            text={text}
                            path={path}
                            Icon={Icon}
                        />
                    );
                })}
            </List>
        </Drawer>
    );
};

export default React.memo(Sidebar);
