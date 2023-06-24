import styled from 'styled-components';

import { Block, StyledBlockProps } from '../atoms';

export const Content = styled((props: Partial<StyledBlockProps>) => (
    <Block
        {...{
            gridArea: 'content',
            stretch: true,
            ...props,
        }}
    />
))`
    grid-column: 4 / span 9;

    // Facebook text color
    color: #1c1e21;
    text-align: justify-all;
    position: relative;
    display: inline-flex;
    padding: var(--inner-padding);
    p {
        display: inherit;
        text-align: left;
    }
`;
