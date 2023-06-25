import { ReactNode } from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { StyledContainerProps } from '../organisms';

export interface StyledContainerProps {
    template: FlattenSimpleInterpolation;
    rows: number;
    columns: number;
    className?: string;
    children?: ReactNode;
}

export const Grid = styled.div<StyledContainerProps>(
    ({ rows, columns }) => `
        position: relative;
        height: auto;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid #ccc;
        margin-bottom: var(--row-padding);

        display: grid;
        grid-template-rows: repeat(${rows || 2}, minmax(0, 1fr));
        grid-template-columns: repeat(${columns || 4}, minmax(0, 1fr));
        `
);

        // ${template};