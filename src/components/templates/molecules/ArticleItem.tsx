import { FC, ReactNode } from 'react';

import styled from 'styled-components';

const ItemContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) repeat(1, 7fr);
    grid-template-rows: auto;
    width: 100%;
`;

const SubItem = styled.div<{ col: number | string; row: number | string }>`
    position: relative;
    display: block;
    grid-column: ${({ col }) => col};
    grid-row: ${({ row }) => row};
    border: 1px solid #dddfe2;
`;

const MainItem = styled(SubItem)`
    display: flow-root;
    word-wrap: anywhere;
    border: 1px solid orange;
    line-height: 2em;

    & > span,
    h3 {
        display: contents;
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
export default ArticleItem;
