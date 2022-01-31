import {QueryBuilder} from '@mui/icons-material';
import React, {useEffect, useState} from 'react';

import useAPIMutation from '@src/hooks/useAPIMutation';
import useAPIQuery from '@src/hooks/useAPIQuery';

export interface GlossDef {
    para: string;
    GlossSeeAlso: string[];
}

export interface GlossEntry {
    ID: string;
    SortAs: string;
    GlossTerm: string;
    Acronym: string;
    Abbrev: string;
    GlossDef: GlossDef;
    GlossSee: string;
}

export interface GlossList {
    GlossEntry: GlossEntry;
}

export interface GlossDiv {
    title: string;
    GlossList: GlossList;
}

export interface Glossary {
    title: string;
    GlossDiv: GlossDiv;
}

export interface RootObject {
    glossary: Glossary;
}

const Logs = () => {
    const query = useAPIQuery<{flag: boolean}>({url: '/asfdsadf'});
    const logQuery = useAPIQuery<{abcd: string[]}>({
        url: '/api/v1/log',
        options: {enabled: query.data?.flag},
    });

    const params = {};

    const logsQuery = useAPIQuery({
        url: '/api/v1/logs',
        params,
        options: {enabled: false},
    });

    type ASDASD = {qwerty: string};
    // const logsMutatinon = useAPIMutation<Partial<RootObject>>({url: mappp[ss].url});

    // const onmutate = () => {
    //     logsMutatinon.mutate({glossary: {}});
    // };

    type union = 'hello' | 'hi' | 'hola';

    const [ss, setSS] = useState<union>('hello');

    type obj = {
        iteem?: React.ReactNode;
        field?: string;
    };

    const mappp: Record<union, obj> = {
        hello: {
            iteem: 'afadsf',
            field: 'fdaf',
            // url: "/helo"
        },
        hi: {
            field: 'fadsf',
            iteem: 'dsf',
        },
        hola: {
            iteem: 'fsadf',
            field: 'fdfs',
        },
    };

    return (
        <div>
            {logQuery.data?.abcd.map((a) => (
                <div>{mappp[ss].field}</div>
            ))}
        </div>
    );
};

export default Logs;
