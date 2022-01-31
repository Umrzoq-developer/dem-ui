import {Chip} from '@mui/material';
import cx from 'classnames';
import React, {useMemo} from 'react';
import {useSortBy, useTable} from 'react-table';

import UpIcon from '@src/assets/UpIcon';
import {IUser} from '@src/services/models/users_model';

import styles from './index.module.scss';
import {mockData} from './mockData';

const UsersTable = () => {
    const columns: any = useMemo(
        () => [
            {
                Header: 'Id',
                accessor: 'col1',
            },
            {
                Header: 'Имя',
                accessor: 'col2',
            },
            {
                Header: 'Логин',
                accessor: 'col3',
            },
            {
                Header: 'Парол',
                accessor: 'col4',
            },
            {
                Header: 'Рол',
                accessor: 'col5',
            },
            {
                Header: 'Парк',
                accessor: 'col6',
            },
            {
                Header: 'Описании',
                accessor: 'col7',
            },
            {
                Header: 'Статус',
                accessor: 'col8',
                Cell: (props: any) => {
                    if (props.value === 'notActivated') {
                        return (
                            <Chip
                                variant="outlined"
                                color="error"
                                size="small"
                                label="Не активный"
                            />
                        );
                    }
                    return (
                        <Chip
                            variant="outlined"
                            color="success"
                            size="small"
                            className={styles.success}
                            label="Активный"
                        />
                    );
                },
            },
            {
                Header: 'Регион',
                accessor: 'col9',
            },
        ],
        [],
    );

    const data = useMemo(() => {
        return mockData.map((v: IUser) => ({
            col1: v.id,
            col2: v.fullname,
            col3: v.login,
            col4: v.password,
            col5: v.roleId,
            col6: v.parkId,
            col7: v.remark,
            col8: v.isActivated,
            col9: v.regionId,
        }));
    }, [mockData]);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
        useTable({columns, data}, useSortBy);

    return (
        <div className={styles.container}>
            <div>
                <table className={styles.table} {...getTableProps()}>
                    <thead className={styles.thead}>
                        {headerGroups.map((headerGroup: any) => (
                            <tr
                                className={cx(styles.tr, styles.headRow)}
                                {...headerGroup.getHeaderGroupProps()}
                            >
                                {headerGroup.headers.map((column: any) => (
                                    <th
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps(),
                                        )}
                                        active={column.isSorted}
                                        className={styles.headerStyle}
                                    >
                                        {column.render('Header')}

                                        <UpIcon
                                            className={cx(
                                                column.isSortedDesc &&
                                                    styles.up,
                                                column.isSorted &&
                                                    styles.active,
                                                styles.upIcon,
                                            )}
                                        />
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody className={styles.tbody} {...getTableBodyProps()}>
                        {rows.map((row: any, i) => {
                            prepareRow(row);
                            return (
                                <tr
                                    className={cx(
                                        i % 2 === 0
                                            ? [styles.tr, styles.double]
                                            : [styles.tr, styles.notDouble],
                                    )}
                                    {...row.getRowProps()}
                                    //   onClick={() => {
                                    //     onClickRow(row.original);
                                    //   }}

                                    //   cursorRow={cursorRow}
                                >
                                    {row.cells.map((cell: any) => {
                                        return (
                                            <td
                                                className={styles.td}
                                                {...cell.getCellProps()}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default React.memo(UsersTable);
