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

        border: 1px dashed #c0a680;
        border-radius: var(--border-radius-sm);

        text-anchor: middle;
        vertical-align: middle;
    `
);
