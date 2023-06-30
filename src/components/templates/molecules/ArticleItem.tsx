import styled from 'styled-components';

const ItemContainer = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-gap: 0.5em;
    grid-template-areas: 'col1 col2 col3 col4';
    //   stretch col3
    grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(auto, 100%) minmax(
            0,
            1fr
        );

    grid-template-rows: auto;
`;

const SubItem = styled.div<{ col: `col${number}` }>`
    grid-area: ${({ col }) => col};
    background: #dddfe2;
`;

export const ArticleItem = () => {
    return (
        <ItemContainer>
            <SubItem col="col1">1</SubItem>
            <SubItem col="col2">2</SubItem>
            <SubItem col="col3">3</SubItem>

            <SubItem col="col4">4</SubItem>
        </ItemContainer>
    );
};

export default ArticleItem;
