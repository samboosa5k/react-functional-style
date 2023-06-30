import { ReactNode } from 'react';

import styled from 'styled-components';

const BaseItem = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
`;

const ItemContainer = styled(BaseItem)`
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) repeat(1, 7fr);
    grid-template-rows: auto;
    width: 100%;

    margin-bottom: 0.25em;
    padding: 0.25em 0.4em;
    border-radius: 0.25em;

    box-shadow: 0 2px 4px -1px #a3a6b0d5;
    border: 1px solid rgba(163, 166, 176, 0.84);
`;

const InlineItem = styled(BaseItem)<{ color: string; background: string }>`
    display: inline;
    color: ${({ color }) => `${color}`};
    background: ${({ background }) => `${background}`};
    // padding should be line-height
    padding: 0.25em 0.4em;
    border-radius: 0.25em;
    font-size: smaller;
    font-weight: bold;
    text-transform: uppercase;
    white-space: nowrap;
`;

const SubItem = styled(BaseItem)<{
    col: number | string;
    row: number | string;
}>`
    position: relative;
    display: block;
    grid-column: ${({ col }) => col};
    grid-row: ${({ row }) => row};
`;

const MainItem = styled(SubItem)`
    display: flow-root;
    word-wrap: anywhere;

    h3 {
        display: inline;
        // charcoal
        color: #36454f;
        margin-inline-start: 0.25em;
    }

    span {
        display: inline-block;
    }
`;

interface Props {
    children?: ReactNode;
}

export const ArticleItem = ({ children }: Props) =>
    typeof children === 'undefined' ? null : (
        <ItemContainer>
            {children}
            {/*<SubItem order={1}>1</SubItem>*/}
            {/*<SubItem order={3}>2</SubItem>*/}
            {/*<MainItem order={2}>3</MainItem>*/}

            {/*<SubItem order={4}>4</SubItem>*/}
        </ItemContainer>
    );

ArticleItem.SubItem = SubItem;
ArticleItem.MainItem = MainItem;
ArticleItem.InlineItem = InlineItem;
export default ArticleItem;
