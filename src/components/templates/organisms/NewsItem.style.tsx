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
            display: grid;
            grid-auto-rows: minmax(0, 1fr);
            grid-auto-flow: dense;
            grid-row-gap: 0.25em;
            grid-column-gap: 0.25em;
            box-sizing: border-box;

            .item__tag {
                &--1 {
                    background-color: #a6a6c0;
                }

                &--2 {
                    background-color: #a6c0a6;
                }
            }

            .item__content,
            .item__info {
                display: inline;
            }

            .item__info {
                float: right;
            }

            .item__thumbnail {
                position: relative;
                display: flex;
                height: auto;
                object-fit: scale-down;
                overflow: hidden;

                img {
                    top: 50%;
                    width: 100%;
                    height: auto;
                    margin: auto;
                }
            }

            ${templateAreas};
        `;
    }
);

export const Layout: { [key: string]: FlattenSimpleInterpolation } = {};
Layout.articleMobile = css`
    grid-template-areas:
        'tag1 content content content'
        'tag2 content content content';
    grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(
            0,
            100%
        );
`;

Layout.articleDesktop = css`
    grid-template-areas: 'tag1 tag2 content content';
    grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(
            0,
            100%
        );
`;
Layout.articleDesktopCompact = css`
    display: flow-root;

    .item__thumbnail {
        display: inline-flex;
        max-width: 8%;
        height: auto;
    }

    .item__tag {
        display: inline;
    }

    .item__content {
        display: inline;
    }
`;

Layout.articleVideoDesktop = css`
    grid-template-areas:
        'thumbnail tag1 content content'
        'thumbnail tag2 content content';
    grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(
            0,
            100%
        );
`;

Layout.articleVideoMobile = css`
    grid-template-areas:
        'thumbnail content content tag1'
        'thumbnail content content tag2';
    grid-template-columns: minmax(8%, 1fr) minmax(0, 100%) minmax(0, 100%) minmax(
            8%,
            1fr
        );
`;

Layout.promoMobile = css`
    grid-template-areas:
        'tag1 content content content'
        'tag2 content content content';
    grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(
            0,
            100%
        );
`;

Layout.promoDesktop = css`
    grid-template-areas: 'tag1 content content tag2';
    grid-template-columns: minmax(8%, 1fr) minmax(0, 100%) minmax(0, 100%) minmax(
            8%,
            1fr
        );
`;
