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

    img {
        top: 50%;
        width: 100%;
        height: auto;
        margin: auto;
    }
`;
