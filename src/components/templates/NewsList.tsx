import { memo, useEffect, useState } from 'react';

import { groupNewsByDate, newsData, NewsDataItem } from './helpers';
import { NewsListContainer } from './NewsList.style';
import { NewsItem } from './organisms';
import { Layout } from './organisms/NewsItem.style';

const NewsListMap = memo(({ data }: any) => (
    <>
        {data.map((item: NewsDataItem, i: number) => {
            return (
                <>
                    <NewsItem
                        templateAreas={Layout.articleVideoDesktop}
                        className="news-item"
                        config={{
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

// const groupedNews = groupNewsByDate(newsData.data);
export const NewsList = () => {
    const [newsByHour] = useState(groupNewsByDate(newsData.data));
    useEffect(() => {
        console.log(newsByHour);
    }, [newsByHour]);

    return (
        <NewsListContainer>
            {newsByHour ? (
                newsByHour.map(({ group, data }, i: number) => {
                    return (
                        <>
                            <h2>{group}</h2>
                            <NewsListMap
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
        </NewsListContainer>
    );
};

export default NewsList;
// NewsList.NewsItem = NewsItem;
// NewsList.Parent = NewsList;
