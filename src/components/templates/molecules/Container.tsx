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
            box-sizing: border-box;
            font: 1rem/1.5 'Noto Sans KR', sans-serif;
            color: #333;
            background-color: #fff;
            border: 1px solid #c0a680;
            border-radius: 0.5rem;
            box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1);

            ${templateAreas};
        `;
    }
);
export const Container = ({
    templateAreas,
    className,
    children,
}: StyledContainerProps) => (
    <StyledContainer {...{ templateAreas, className }}>
        {children}
    </StyledContainer>
);
