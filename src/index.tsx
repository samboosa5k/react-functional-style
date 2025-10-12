import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import AnimationApp1 from '../apps/AnimationApp1';
import AnimationApp2 from '../apps/AnimationApp2';
import AnimationApp3 from '../apps/AnimationApp3';

const APPS: Record<string, React.ComponentType> = {
    animation1: AnimationApp1,
    animation2: AnimationApp2,
    animation3: AnimationApp3,
};

const SelectedApp = APPS[process.env.APP || 'animation1'] || AnimationApp1;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Suspense fallback={<h1>Loading...</h1>}>
            <SelectedApp />
        </Suspense>
    </React.StrictMode>
);
