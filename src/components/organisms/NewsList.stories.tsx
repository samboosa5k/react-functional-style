import {ComponentMeta, Story} from '@storybook/react';
import NewsList from './NewsList';

export default {
    title: 'Components/NewsList',
    component: NewsList.Parent,
} as ComponentMeta<typeof NewsList.Parent>;

export const Default: Story = () => <NewsList.Parent />;
export const Primary: Story = () => <NewsList.Parent />;
Primary.args = {
}
