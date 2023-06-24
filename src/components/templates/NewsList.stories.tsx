import { ComponentMeta, Story } from '@storybook/react';

import { NewsList } from './NewsList';

export default {
    title: 'Components/NewsList',
    component: NewsList,
} as ComponentMeta<typeof NewsList>;

export const Default: Story = () => <NewsList />;
export const Primary: Story = () => <NewsList />;
Primary.args = {};
