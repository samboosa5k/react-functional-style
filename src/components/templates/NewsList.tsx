import { useEffect } from 'react';

import { groupNewsByDate, newsData } from './helpers';
import { NewsItem } from './organisms';
import { Layout } from './organisms/NewsItem.style';

// const groupedNews = groupNewsByDate(newsData.data);
const NewsList = () => {
    useEffect(() => {
        const data = newsData.data;
        const groupedNews = groupNewsByDate(data);
        console.log(groupedNews);
    }, []);

    return (
        <>
            <NewsList.NewsItem
                templateAreas={Layout.articleDesktop}
                className="news-item"
            />
            <hr />
            <br />
            <NewsList.NewsItem
                templateAreas={Layout.articleDesktopCompact}
                className="news-item"
            />
            <hr />
            <br />
            <NewsList.NewsItem
                templateAreas={Layout.articleVideoDesktop}
                className="news-item news-item__media"
            />
            <hr />
            <br />
            <NewsList.NewsItem
                templateAreas={Layout.promoMobile}
                className="news-item"
            />
        </>
    );
};

NewsList.NewsItem = NewsItem;
NewsList.Parent = NewsList;
export default NewsList;
