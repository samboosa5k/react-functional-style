import { Layout, MediaItem, NewsItem } from './organisms';

const NewsList = () => {
    return (
        <>
            <NewsItem
                templateAreas={Layout.articleDesktop}
                className="news-item"
            />
            <hr />
            <br />
            <NewsItem
                templateAreas={Layout.articleDesktopCompact}
                className="news-item"
            />
            <hr />
            <br />
            <MediaItem
                templateAreas={Layout.articleVideoDesktop}
                className="news-item news-item__media"
            />
            <hr />
            <br />
            <NewsItem
                templateAreas={Layout.promoMobile}
                className="news-item"
            />
        </>
    );
};

NewsList.Item = NewsItem;
NewsList.Parent = NewsList;
export default NewsList;
