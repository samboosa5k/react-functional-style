import styled from 'styled-components';

import { Block, StyledBlockProps } from '../atoms';

export const Tag = styled((props: Partial<StyledBlockProps>) => (
    <Block
        {...{
            gridArea: `tag ${props.gridArea || ''}`,
            ...props,
        }}>
        <span>{props.children}</span>
    </Block>
))`
    --primary: rgb(0, 142, 255);
    grid-column: 3 / span 1;

    position: relative;
    display: flex;
    font-size: 0.75em;
    font-weight: 700;
    text-transform: uppercase;

    vertical-align: middle;
    letter-spacing: 0.05em;

    & > span {
        display: inline-flex;
        height: auto;
        margin: auto;
        padding: var(--inner-padding);
        color: whitesmoke;
        background: var(--primary);
        text-align: center;
        text-anchor: middle;
    }

    &:nth-child(2) > span {
        background: var(--bettingColor);
    }
`;
