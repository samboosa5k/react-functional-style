import { ReactNode } from 'react';

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { StyledContainerProps } from '../organisms';

export interface StyledContainerProps {
    templateAreas: FlattenSimpleInterpolation;
    className?: string;
    children?: ReactNode;
}

const StyledContainer = styled.div<StyledContainerProps>(
    ({ templateAreas }) => {
        return css`
            position: relative;
            height: auto;
            // soft material box shadow
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid #ccc;

            ${templateAreas};

            margin-bottom: var(--row-padding);
        `;
    }
);

export const StyledInnerContainer = styled.div`
    position: relative;
    height: auto;
    border-radius: var(--border-radius-sm);
    overflow: hidden;
    border: 1px solid #ccc;
`;
export const Container = ({
    templateAreas,
    className,
    children,
}: StyledContainerProps) => (
    <StyledContainer {...{ templateAreas, className }}>
        {children}
    </StyledContainer>
);
