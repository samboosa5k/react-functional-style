import { ComponentMeta, Story } from '@storybook/react';

import { HighlightedCategory, NewsList } from './NewsListItem';

export default {
    title: 'Components/NewsList',
    component: NewsList,
} as ComponentMeta<typeof NewsList>;

const widgetTitle = 'News';
const highlightedCategories = [
    'watched',
    'commented',
    'read',
] as HighlightedCategory[];
const widgetData = {
    watched: [
        {
            title: 'The title',
            content: 'The content',
        },
    ],
    commented: [
        {
            title: 'commented title',
            content: 'The content',
        },
        {
            title: 'commented title 2',
            content: 'The content',
        },
        {
            title: 'commented title 3',
            content: 'read meta content',
        },
    ],
    read: [
        {
            title: 'read title',
            content: 'The content',
        },
    ],
};
export const Default: Story = () => (
    <NewsList
        widgetTitle={widgetTitle}
        highlightedCategories={highlightedCategories}
        widgetData={widgetData}
    />
);
export const Primary: Story = () => (
    <NewsList
        widgetTitle={widgetTitle}
        highlightedCategories={highlightedCategories}
        widgetData={widgetData}
    />
);
Primary.args = {};
