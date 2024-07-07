import type { Meta, StoryObj } from '@storybook/react';
import Dash from './Dash';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Card',
    component: Dash,
    parameters: {
},
} satisfies Meta<typeof Dash>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Dash Title',
        description: 'Dash Description',
        image: 'https://picsum.photos/id/1003/400/200',
    },
};
