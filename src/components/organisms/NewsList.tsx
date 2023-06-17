import styled, {css, FlattenSimpleInterpolation} from "styled-components";
import {FC, ReactNode} from "react";

interface StyledContainerProps {
    templateAreas: FlattenSimpleInterpolation;
    className?: string;
    children?: ReactNode;
}

const Container = styled.div<StyledContainerProps>(({templateAreas}) => {
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
});

const Layout: { [key: string]: FlattenSimpleInterpolation } = {}
Layout.articleMobile = css`
  grid-template-areas:
        'tag1 content content content'
        'tag2 content content content';
  grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(0, 100%);
`;

Layout.articleDesktop = css`
  grid-template-areas:
        'tag1 tag2 content content';
  grid-template-columns: minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(0, 100%);
`
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
`

Layout.articleVideoDesktop = css`
  grid-template-areas:
    'thumbnail tag1 content content'
    'thumbnail tag2 content content';
  grid-template-columns:  minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(0, 100%);
`;

Layout.articleVideoMobile = css`
  grid-template-areas:
        'thumbnail content content tag1'
        'thumbnail content content tag2';
  grid-template-columns:  minmax(8%, 1fr) minmax(0, 100%) minmax(0, 100%) minmax(8%, 1fr);
`;

Layout.promoMobile = css`
  grid-template-areas:
        'tag1 content content content'
        'tag2 content content content';
  grid-template-columns:  minmax(8%, 1fr) minmax(8%, 1fr) minmax(0, 100%) minmax(0, 100%);
`;

Layout.promoDesktop = css`
  grid-template-areas:
        'tag1 content content tag2';
  grid-template-columns:  minmax(8%, 1fr) minmax(0, 100%) minmax(0, 100%) minmax(8%, 1fr);
`


interface StyledItemProps {
    display?: string;
    className?: string;
    stretch?: boolean;
    gridArea: string;
    children?: ReactNode;
}

const Block = styled.div<StyledItemProps>(({display, gridArea}) => css`
  display: ${display};
  grid-area: ${gridArea};

  padding: 0.5rem;
  border: 1px dashed #c0a680;
  border-radius: 0.5rem;

  text-align: center;
  vertical-align: middle;
`);

const Item = (props: StyledContainerProps) =>
    (
        <Container {...props} className="item">
            {props.children}
        </Container>
    );

// Item.Thumbnail = (props: Partial<StyledContainerProps>) => <StyledBlock {...{
//     gridArea: 'thumbnail',
//     className: 'item__thumbnail', ...props
// }}/>;
Item.Thumbnail = styled(Block)<StyledItemProps>((props) => css`
  background: ${props?.stretch ? 'red' : 'blue'};
`);
Item.Tag1 = (props: Partial<StyledContainerProps>) => <Block {...{
    gridArea: 'tag1',
    className: 'item__tag item__tag--1', ...props
}}/>;
Item.Tag2 = (props: Partial<StyledContainerProps>) => <Block {...{
    gridArea: 'tag2',
    className: 'item__tag item__tag--2', ...props
}}/>;
Item.Info = (props: Partial<StyledContainerProps>) => <Block {...{
    gridArea: 'info',
    className: 'item__info item__info', ...props
}}/>;
Item.Content = (props: Partial<StyledContainerProps>) => <Block {...{
    gridArea: 'content',
    className: 'item__content item__content',
    stretch: true,
    ...props
}}/>;


const NewsItem: FC<StyledContainerProps> = ({templateAreas}) => {
    return (
        <Item templateAreas={templateAreas}>
            <Item.Tag1>
                Tag1
            </Item.Tag1>
            <Item.Tag2>
                Tag2
            </Item.Tag2>
            <Item.Content>
                {("Here is some content, and some random text which I need to fill this area.").repeat(10)}
                <Item.Info>
                    INFO
                </Item.Info>
            </Item.Content>
        </Item>
    )
}

const NewsItemVideo: FC<StyledContainerProps> = ({templateAreas}) => {
    return (
        <Item templateAreas={templateAreas}>
            <Item.Thumbnail gridArea="thumbnail" className="item__thumbnail">
                <img src="https://via.placeholder.com/150" alt=""/>
            </Item.Thumbnail>
            <Item.Tag1>
                Tag1
            </Item.Tag1>
            <Item.Tag2>
                Tag2
            </Item.Tag2>
            <Item.Content>
                Here is some content, and some random text which I need to fill this area.
                <Item.Info>
                    INFO
                </Item.Info>
            </Item.Content>
        </Item>
    )
}
const NewsItemVideo2: FC<StyledContainerProps> = ({templateAreas}) => {
    return (
        <Item templateAreas={templateAreas}>
            <Item.Thumbnail gridArea="thumbnail" className="item__thumbnail" stretch>
                <img src="https://via.placeholder.com/150" alt=""/>
            </Item.Thumbnail>
            <Item.Tag1>
                Tag1
            </Item.Tag1>
            <Item.Tag2>
                Tag2
            </Item.Tag2>
            <Item.Content>
                Here is some content, and some random text which I need to fill this area.
                <Item.Info>
                    INFO
                </Item.Info>
            </Item.Content>
        </Item>
    )
}

const NewsList = () => {
    return (
        <>
            <NewsItem templateAreas={Layout.articleDesktop}/>
            <hr/>
            <br/>
            <NewsItem templateAreas={Layout.articleDesktopCompact}/>
            <hr/>
            <br/>
            <NewsItemVideo templateAreas={Layout.articleVideoDesktop}/>
            <hr/>
            <br/>
            <NewsItemVideo2 templateAreas={Layout.articleVideoMobile}/>
            <hr/>
            <br/>
            <NewsItem templateAreas={Layout.articleMobile}/>
            <hr/>
            <br/>
            <NewsItem templateAreas={Layout.promoDesktop}/>
            <hr/>
            <br/>
            <NewsItem templateAreas={Layout.promoMobile}/>
        </>
    )
};

NewsList.Item = Item
NewsList.Parent = NewsList
export default NewsList
