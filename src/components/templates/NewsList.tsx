import { Layout, NewsItem } from './organisms';

const NewsList = () => {
    return (
        <>
            <NewsItem templateAreas={Layout.articleDesktop} />
            <hr />
            <br />
            <NewsItem templateAreas={Layout.articleDesktopCompact} />
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
