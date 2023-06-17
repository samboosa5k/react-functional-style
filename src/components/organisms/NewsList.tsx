import styled, {css, FlattenSimpleInterpolation} from "styled-components";
import {FC, ReactNode} from "react";

interface StyledNewsListContainerProps {
    templateAreas: FlattenSimpleInterpolation;
}

const NewsListContainer = styled.div<StyledNewsListContainerProps>(({templateAreas}) => {
    return css`
      display: grid;
      grid-auto-columns: minmax(0, 1fr);
      grid-auto-rows: minmax(0, 1fr);
      grid-auto-flow: column;
      grid-row-gap: 0;
      grid-column-gap: 0;
      //
      div.content {
        display: block;

        .content__description,
        .content__info {
            display: inline;
        }
        
        .content__info {
            float: right;
        }
      }

      //
      ${templateAreas};
    `;
});

const GridMobile = css`
  grid-template-areas:
        'graphic1 content content content' 
        'graphic2 content content content';
`;

const GridDesktop = css`
  grid-template-areas:
        'graphic1 graphic2 content content'
`


interface StyledItemProps {
    className?: string;
    gridArea: string;
    children?: ReactNode;
}

const StyleItem = styled.div<StyledItemProps>(({gridArea}) => {
    return css`
      grid-area: ${gridArea};
      background: #333333;
    `
});

const Item: FC<StyledItemProps> = ({className, gridArea, children}) => {
    return (
        <StyleItem gridArea={gridArea} className={className}>
            {children}
        </StyleItem>
    )
}

const NewsList = () => {
    return (
        <>
            <NewsListContainer templateAreas={GridMobile}>
                <Item gridArea="graphic1"/>
                <Item gridArea="graphic2"/>
                <Item gridArea="content">
                    Here is some content, and some random text which I need to fill this area.
                </Item>
                <Item gridArea="chat"/>
            </NewsListContainer>
            <NewsListContainer templateAreas={GridDesktop}>
                <Item gridArea="graphic1">
                    Icon
                </Item>
                <Item gridArea="graphic2">
                    Icon
                </Item>
                <Item gridArea="content" className="content">
                    <p className="content__description">
                        Here is some content, and some random text which I need to fill this area.
                    </p>
                    <span className="content__info">
                        INFO
                    </span>
                </Item>
            </NewsListContainer>
        </>
    )
};

NewsList.Item = Item
NewsList.Parent = NewsList
export default NewsList
