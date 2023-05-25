import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// import { VerbonApp } from '../apps/VerbonApp';
import { NewsApp } from '../apps/NewsApp';

// const lazyApp =(arg:string) => lazy(() => import(`../apps/${arg}`))
//
// const APP_NAME = 'VerbonApp';
const APP = NewsApp;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Suspense fallback={<h1>Loading...</h1>}>
            <APP />
        </Suspense>
    </React.StrictMode>
);
