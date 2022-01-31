import {
    MenuItem,
    Pagination,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material';
import React, {useCallback, useRef, useState} from 'react';

import PlusIcon from '@src/assets/PlusIcon';
import SearchIcon from '@src/assets/SearchIcon';
import BaseButton from '@src/components/BaseButton';
import Container from '@src/components/container';
import MapY from '@src/components/map';
import MuiPagination from '@src/components/Pagination';
import useDebounce from '@src/hooks/useDebounce';
import {useMainStore} from '@src/store/main';

import UserAdd from './components/UserAdd';
import UsersTable from './components/UsersTable';
import styles from './index.module.scss';

const Main = () => {
    const [text, setText] = useState('');
    const [age, setAge] = useState('1');
    const [page, setPage] = useState(1);

    const handleOpen = useMainStore((state) => state.handleTap);

    // const debounceText = useDebounce(text, 1000);
    // console.log(debounceText, 'debounced text');
    const handleChange = useCallback((event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    }, []);

    const handleTextChange = useCallback((e: any) => {
        setText(e.target.value);
    }, []);

    const handlePagination = (value: number) => {
        setPage(value);
    };

    return (
        <div className={styles.mainContainer}>
            <header className={styles.header}>
                <h3 className={styles.headerText}>Список пользователей</h3>

                <BaseButton
                    onClick={() => {
                        console.log('clicked');
                        handleOpen(true);
                    }}
                >
                    <PlusIcon />
                    Добавить пользователя
                </BaseButton>
            </header>
            <div className={styles.headerSecond}>
                <Container>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <div className={styles.searchStyle}>
                                    <SearchIcon />
                                </div>
                            ),
                        }}
                        name="textSearch"
                        onChange={handleTextChange}
                        placeholder="Поиск по имени, статусу и роли"
                        className={styles.textField}
                        size="small"
                    />
                </Container>
                <div className={styles.rightSide}>
                    <p className={styles.rightText}>Сортировать по</p>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        size="small"
                        className={styles.select}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Активный</MenuItem>
                        <MenuItem value={2}>НеАктивный</MenuItem>
                    </Select>
                </div>
            </div>
            <div className={styles.file}>
                <MapY />
                {/* <UsersTable /> */}
                {/* <div className={styles.pageWrapper}>
                    <MuiPagination
                        onChange={handlePagination}
                        totalCount={20}
                        currentPage={page}
                    />
                </div> */}
            </div>

            <UserAdd />
        </div>
    );
};

export default Main;
