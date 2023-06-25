import { ComponentMeta, Story } from '@storybook/react';

import { NewsItem, NewsItemProps } from './NewsItem';

export default {
    title: 'Templates/Organisms/NewsItem',
    component: NewsItem,
} as ComponentMeta<typeof NewsItem>;

export const Default = (args: NewsItemProps) => <NewsItem {...args} />;
Default.args = {
    newsID: 85124,
    domainID: 101,
    platform: 'gp',
    newsTitle:
        "Sainz maakt probleemloos de overstap: 'Die anderen zijn echt nergens'",
    newsTitleSlug:
        'sainz-maakt-probleemloos-de-overstap-die-anderen-zijn-echt-nergens.html',
    host: 'https://www.gpblog.com',
    path: '/nl/nieuws/85124/sainz-maakt-probleemloos-de-overstap-die-anderen-zijn-echt-nergens.html',
    newsDate: '2021-05-26T06:54:52.000Z',
    userID: 270,
    userName: 'Tim',
    commentCount: 11,
    category: {
        newsCatID: 103,
        newsCatName: 'F1 Nieuws',
        newsCatNameSlug: 'f1-nieuws',
        newsCatMedia: false,
    },
    imageUrl:
        'https://gp.cdn.pxr.nl/news/2021/05/26/{size}_ad40c6cb4c0a749df302725e330ea969d9076fde.jpg',
};

const Primary = (args) => <NewsItem {...args} />;
Primary.args = Default.args;
