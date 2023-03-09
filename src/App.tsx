//@ts-nocheck
import { useEffect } from 'react';

import { sineWavePoints } from '@/utils';

import { ComponentList, DummyList, listDataArray } from '@/modules';

import {
    Animator,
    slideInOutAnimation,
    timelineAnimation,
    upDownAnimation,
} from './HOC';
import { Layout } from './layout';

function App() {
    useEffect(() => {
        console.log(sineWavePoints(10));
    }, []);
    return (
        <Layout.Page>
            <Layout.Sidebar>
                <span>Sidebar</span>
                <Animator
                    targetClassName="list-item"
                    animationCallback={upDownAnimation}>
                    <DummyList />
                </Animator>
            </Layout.Sidebar>
            <Layout.Content>
                <h1>Content area</h1>
                <Animator
                    targetClassName="abc"
                    animationCallback={slideInOutAnimation}>
                    <>
                        <p className="abc">Hello</p>
                        <p className="abc">My name is</p>
                        <p className="abc">Jaspeeeer</p>
                    </>
                </Animator>
                <Animator
                    targetClassName={[
                        'target-1',
                        'target-2',
                        'target-3',
                        'target-4',
                        'target-5',
                    ]}
                    animationCallback={timelineAnimation}>
                    <>
                        <p className="target-1">Hello</p>
                        <p className="target-2">My name is</p>
                        <p className="target-3">Jaspeeeer</p>
                        <p className="target-4">Jaspeeeer</p>
                        <p className="target-5">Jaspeeeer</p>
                    </>
                </Animator>
                <Animator
                    targetClassName="random-class"
                    animationCallback={slideInOutAnimation}>
                    <ComponentList
                        dataArray={[
                            listDataArray[0],
                            listDataArray[2],
                            listDataArray[3],
                        ]}
                    />
                </Animator>
                {/*<DummyList />*/}
                {/*<DummyList />*/}
                <DummyList />
            </Layout.Content>
            <Layout.Header>
                <span>Header/branding etc</span>
            </Layout.Header>
            <Layout.Navbar>
                <span>I am the navbar</span>
                <button>I am a buton</button>
            </Layout.Navbar>
        </Layout.Page>
    );
}

export default App;
