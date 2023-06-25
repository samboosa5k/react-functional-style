import { FlattenSimpleInterpolation } from 'styled-components';

export enum LayoutType {
    articleDesktopCompact = 'articleDesktopCompact',
    newMedia = 'newMedia',
}

const newsMedia = `
display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-areas: 'thumbnail tags title ' // 1st row
        'thumbnail tags content';
`;

// @ts-ignore
export const Layout: { [key in LayoutType]?: FlattenSimpleInterpolation } = {
    articleDesktopCompact: undefined,
    // @ts-ignore
    newMedia: newsMedia,
};
