import { ReactNode } from 'react';

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export interface StyledContainerProps {
    templateAreas: FlattenSimpleInterpolation;
    className?: string;
    children?: ReactNode;
}

export const Container = styled.div<StyledContainerProps>(
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
const gridBase = `
    display: grid;
    grid-auto-rows: minmax(0, 1fr);
    grid-auto-flow: dense;
    grid-row-gap: 0.25em;
    grid-column-gap: 0.25em`;

export const Layout: { [key: string]: FlattenSimpleInterpolation } = {};
Layout.articleMobile = css`
  ${gridBase};
'tag1 content content content' 'tag2 content content content';
  grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(0,
  100%);
`;

Layout.articleDesktop = css`
    ${gridBase};
    grid-template-areas: 'tag1 tag2 content content';
    grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(
            0,
            100%
        );
`;
Layout.articleDesktopCompact = css`
    display: inline;
`;

Layout.articleVideoDesktop = css`
    ${gridBase};
    grid-template-areas:
        'thumbnail tag1 content content'
        'thumbnail tag2 content content';
    grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(
            0,
            100%
        );
`;

Layout.articleVideoMobile = css`
    ${gridBase};
    grid-template-areas:
        'thumbnail content content tag1'
        'thumbnail content content tag2';
    grid-template-columns: minmax(8%, 1fr) minmax(0, 100%) minmax(0, 100%) minmax(
            8%,
            1fr
        );
`;

Layout.promoMobile = css`
    ${gridBase};
    grid-template-areas:
        'tag1 content content content'
        'tag2 content content content';
    grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(
            0,
            100%
        );
`;

Layout.promoDesktop = css`
    ${gridBase};
    grid-template-areas: 'tag1 content content tag2';
    grid-template-columns: minmax(8%, 1fr) minmax(0, 100%) minmax(0, 100%) minmax(
            8%,
            1fr
        );
`;
