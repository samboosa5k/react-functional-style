import { ClickPhoto, Photo } from '@shared/components/Photo';

import { useState } from 'react';

import { TextMap } from '../shared/components/MappedText';
import tommy_portret from '../src/assets/tommy_portret.png';

const YEARS = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

// const clickHandler = (data: unknown) => console.log(data);

export const VerbonApp = () => {
    const [year, setYear] = useState(2023);
    const updateYear = () => (year: number) => setYear(year);
    return (
        <div>
            <h1>Verbon</h1>
            <h2>{year}</h2>
            {Photo({
                src: tommy_portret,
                ...{
                    key: 'tommy_key',
                    alt: 'Tommy',
                    id: 'Tommy',
                },
            })}
            {ClickPhoto({
                src: tommy_portret,
                ...{
                    key: 'tommy_key-2',
                    alt: 'Tommy',
                    id: 'Tommy-2',
                },
            })}
            <TextMap data={YEARS} onClick={updateYear()} />
        </div>
    );
};

// I can't believe react doesn't actually complain about this XD
