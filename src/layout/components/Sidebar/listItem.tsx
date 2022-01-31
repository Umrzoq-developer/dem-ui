import {ListItem, ListItemIcon, ListItemText, Tooltip} from '@mui/material';
import cx from 'classnames';
import React, {useCallback, useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {useLayoutStore} from '@src/store/layout';

import styles from './index.module.scss';

interface IListItem {
    path: string;
    text: string;
    Icon: any;
}

const ListItemComponent = ({path, text, Icon}: IListItem) => {
    const navigate = useNavigate();

    const location = useLocation();

    const active = useMemo(
        () => location.pathname === `/${path}`,
        [location.pathname],
    );
    const open = useLayoutStore((state) => state.open);

    const handleRoute = useCallback((path: any) => {
        if (path === 'main') {
            navigate(`/main`);
        } else {
            navigate(`/${path}`);
        }
    }, []);

    return (
        <ListItem
            onClick={() => handleRoute(path)}
            button
            className={
                active ? cx(styles.active, styles.listItem) : styles.listItem
            }
        >
            <div className={styles.leftSide}>
                <Tooltip title={text}>
                    <ListItemIcon
                        className={
                            active
                                ? cx(styles.listIcon, styles.activeIcon)
                                : styles.listIcon
                        }
                    >
                        <Icon />
                    </ListItemIcon>
                </Tooltip>

                {open && (
                    <ListItemText className={styles.listText} primary={text} />
                )}
            </div>
        </ListItem>
    );
};

export default React.memo(ListItemComponent);
