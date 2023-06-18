import { Layout, NewsItem, StyledContainerProps } from './organisms';

const NewsItemVideo = ({
    templateAreas,
}: StyledContainerProps | any): JSX.Element => {
    return (
        <NewsItem.Container templateAreas={templateAreas}>
            <NewsItem.Thumbnail
                gridArea="thumbnail"
                className="item__thumbnail">
                <img src="https://via.placeholder.com/150" alt="" />
            </NewsItem.Thumbnail>
            <NewsItem.Tag1>Tag1</NewsItem.Tag1>
            <NewsItem.Tag2>Tag2</NewsItem.Tag2>
            <NewsItem.Content>
                Here is some content, and some random text which I need to fill
                this area.
                <NewsItem.Info>INFO</NewsItem.Info>
            </NewsItem.Content>
        </NewsItem.Container>
    );
};

const NewsList = () => {
    return (
        <>
            <NewsItem templateAreas={Layout.articleDesktop} />
            <hr />
            <br />
            <NewsItem templateAreas={Layout.articleDesktopCompact} />
            <hr />
            <br />
            <NewsItemVideo templateAreas={Layout.articleVideoDesktop} />
            <hr />
            <br />
            <NewsItem templateAreas={Layout.articleMobile} />
            <hr />
            <br />
            <NewsItem templateAreas={Layout.promoDesktop} />
            <hr />
            <br />
            <NewsItem templateAreas={Layout.promoMobile} />
        </>
    );
};

NewsList.Item = NewsItem;
NewsList.Parent = NewsList;
export default NewsList;
