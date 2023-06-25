import { ComponentMeta, Story } from '@storybook/react';

import { NewsFeed } from './NewsFeed';

export default {
    title: 'Components/NewsFeed',
    component: NewsFeed,
} as ComponentMeta<typeof NewsFeed>;

export const Default: Story = () => <NewsFeed />;
export const Primary: Story = () => <NewsFeed />;
Primary.args = {};
