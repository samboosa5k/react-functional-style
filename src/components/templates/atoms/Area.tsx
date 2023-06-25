import { ReactNode } from 'react';

import styled, { css } from 'styled-components';

export interface StyledBlockProps {
    display?: string;
    className?: string;
    stretch?: boolean;
    gridArea?: string;
    gridColumn?: string;
    gridRow?: string;
    children?: ReactNode;
}

export const Area = styled.div<StyledBlockProps>(
    ({ display, gridColumn, gridRow }) => css`
        position: relative;
        display: ${display || 'block'};
        overflow: hidden;
        grid-column: ${gridColumn};
        grid-row: ${gridRow};

        border: 1px dashed #c0a680;
        border-radius: var(--border-radius-sm);
        text-anchor: middle;
        vertical-align: middle;

        img {
            object-fit: cover;
            object-position: center;
        }
    `
);
