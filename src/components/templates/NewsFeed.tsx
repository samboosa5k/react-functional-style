import { memo, useEffect, useState } from 'react';

import { groupNewsByDate, newsData, NewsDataItem } from './helpers';

import { NewsItem } from './organisms';
import { Layout } from './organisms/NewsItem.style';
import { Container } from './NewsFeed.style';

const ArticleList = memo(({ group, data }: any) => (
    <>
        {data.map((item: NewsDataItem, i: number) => {
            return (
                <>
                    <h2 className="article-list__heading">{group}</h2>
                    <NewsItem
                        template={Layout.newMedia}
                        className="article article-media"
                        config={{
                            title: item.newsTitle,
                            content: item.newsTitle,
                            thumbnail: item.imageUrl,
                            category: item.category.newsCatName,
                        }}
                        key={`news-item-${i}`}
                    />
                </>
            );
        })}
    </>
));

ArticleList.displayName = 'ArticleList';

// const groupedNews = groupNewsByDate(newsData.data);
export const NewsFeed = () => {
    const [newsByHour] = useState(groupNewsByDate(newsData.data));
    useEffect(() => {
        console.log(newsByHour);
    }, [newsByHour]);

    return (
        <NewsFeed.Container>
            {newsByHour ? (
                newsByHour.map(({ group, data }, i: number) => {
                    return (
                        <>

                            <ArticleList
                                group={group}
                                data={data}
                                key={`news-list-${i}`}
                            />
                        </>
                    );
                })
            ) : (
                <p>Loading...</p>
            )}
        </NewsFeed.Container>
    );
};

NewsFeed.Container = Container;
export default NewsFeed;
// NewsFeed.NewsItem = NewsItem;
// NewsFeed.Parent = NewsFeed;
