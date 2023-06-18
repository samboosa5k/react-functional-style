import { ReactNode } from 'react';

import styled, { css } from 'styled-components';

export interface StyledBlockProps {
    display?: string;
    className?: string;
    stretch?: boolean;
    gridArea: string;
    children?: ReactNode;
}

export const Block = styled.div<StyledBlockProps>(
    ({ display, gridArea }) => css`
        display: ${display};
        grid-area: ${gridArea};

        padding: 0.5rem;
        border: 1px dashed #c0a680;
        border-radius: 0.5rem;

        text-anchor: middle;
        text-align: center;
        vertical-align: middle;
    `
);
