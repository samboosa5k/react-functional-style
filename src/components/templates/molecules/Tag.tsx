import styled from 'styled-components';

import { StyledBlockProps } from '../atoms';

const StyledTag = styled.div<StyledBlockProps>`
    display: inline-block;
    margin: auto;
    padding: var(--inner-padding);
    color: whitesmoke;
    background: var(--primary);
    text-align: center;
    text-anchor: middle;
`;

export const Tag = StyledTag;
