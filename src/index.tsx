import '@styles/styles.css';
import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {ErrorBoundary} from 'react-error-boundary';
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter} from 'react-router-dom';

import {App} from '@components/app/app';

const queryClient = new QueryClient();

const ErrorFallback = ({error}: any) => {
    console.log(error, 'error boundary');
    return <div>Error</div>;
};

ReactDom.render(
    // <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>,
    // </ErrorBoundary>,
    document.getElementById('root'),
);
