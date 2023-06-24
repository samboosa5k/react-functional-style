import styled from 'styled-components';

import { Block, StyledBlockProps } from '../atoms';

export const Thumbnail = styled((props: Partial<StyledBlockProps>) => (
    <Block
        {...{
            gridArea: 'thumbnail',
            ...props,
        }}
    />
))`
    position: relative;
    display: flex;
    height: auto;
    object-fit: scale-down;
    overflow: hidden;

    grid-column: 1 / span 2;

    img {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
`;
