import styled from 'styled-components';

export const Page = styled.div`
    max-width: 1060px;
    margin: 0 auto;
`;

export const ItemWrap = styled.div`
    &.stagger-item {
        will-change: transform, opacity;
    }
`;
