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
    p {
        display: inherit;
    }
`;
