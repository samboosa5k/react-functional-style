import { css, FlattenSimpleInterpolation } from 'styled-components';

export enum LayoutType {
    articleMobile = 'articleMobile',
    articleDesktop = 'articleDesktop',
    articleDesktopCompact = 'articleDesktopCompact',
    articleVideoDesktop = 'articleVideoDesktop',
    promoMobile = 'promoMobile',
}

export const Layout: { [key in LayoutType]?: FlattenSimpleInterpolation } = {
    articleMobile: undefined,
    articleDesktop: undefined,
    articleDesktopCompact: undefined,
    articleVideoDesktop: undefined,
    promoMobile: undefined,
};

const gridBase = `
    display: grid;
    grid-auto-rows: repeat(2, 1fr);
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: dense;
    grid-row-gap: 0.25em;
    grid-column-gap: 0.25em`;

Layout.articleMobile = css`
  ${gridBase};
'tag1 content content content' 'tag2 content content content';
  grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(0,
  100%);
`;

Layout.articleDesktop = css`
    ${gridBase};
    grid-template-areas: 'tag1 tag2 content content';
    //grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(
    //        0,
    //        100%
    //    );
`;
Layout.articleDesktopCompact = css`
    display: inline;
`;

Layout.articleVideoDesktop = css`
    ${gridBase};
    grid-template-areas:
        'thumbnail tag1 content content'
        'thumbnail tag2 content content';
    //grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(
    //        0,
    //        100%
    //    );
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
