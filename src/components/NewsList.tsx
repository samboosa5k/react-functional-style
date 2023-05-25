import {FC} from "react";
import ArticleList from './NewsListData.json'
// Data structure
const articleInsertData = {
    newsID: 1,
    domainID: 1,
    platform: 'platform',
    newsTitle: 'newsTitle',
    newsTitleSlug: 'newsTitleSlug',
    host: 'http://www.host.com',
    path: '/path-to/article.html',
    newsDate: '2023-01-01T00:00:00.000Z',
    userID: 1,
    userName: 'userName',
    commentCount: 1,
    category: {
        newsCatID: 1,
        newsCatName: 'newsCatName',
        newsCatNameSlug: 'newsCatNameSlug',
        newsCatMedia: false,
    },
    imageUrl: 'http://www.host.com/path-to/image.jpg',
}

type ArticleData = Array<typeof articleInsertData>;
const fetchData = JSON.stringify(ArticleList) as string;
const articleData = JSON.parse(fetchData).data as ArticleData;

const NewsArticleMap = (): FC<ArticleData> => {
    return (props: ArticleData) =>
        <ul id="news-list">
            {/*    */}
            {props.map((item, index) => ArticleInsert([item, index]))}
        </ul>
};

type ArticleInsertProps = [typeof articleInsertData, number];
const ArticleInsert: FC<ArticleInsertProps> = ([props, index]) => {
    return (
        <li key={`news-item-${index}`} className="news-item">
            <div className="news-item__image">
                <img src={props.imageUrl} alt={props.newsTitle}/>
            </div>
            <div className="news-item__content">
                <div className="news-item__content__title">
                    <a href={props.host + props.path}>{props.newsTitle}</a>
                </div>
                <div className="news-item__content__meta">
                    <div className="news-item__content__meta__category">
                        <a href={props.host + props.path}>{props.category.newsCatName}</a>
                    </div>
                    <div className="news-item__content__meta__date">
                        {props.newsDate}
                    </div>
                </div>
            </div>
        </li>
    )
}

export const NewsList = NewsArticleMap()(articleData);