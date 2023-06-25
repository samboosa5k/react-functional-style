import { memo, useEffect, useState } from 'react';

import styled from 'styled-components';

import { Heading } from './atoms';
import { groupNewsByDate, newsData, NewsDataItem } from './helpers';
import { Container } from './NewsFeed.style';
import { NewsItem } from './organisms';

const ArticleList = memo(({ data }: any) => (
    <>
        {data.map((item: NewsDataItem, i: number) => {
            return (
                <>
                    <NewsItem
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

const NewsFeedHeading = styled(Heading)`
    font-size: 1.5em;
`;
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
                            <NewsFeedHeading
                                as={'h2'}
                                className="feed__heading">
                                {group}
                            </NewsFeedHeading>
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
