import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'pages/Header',
    component: Header,
    parameters: {
},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Header Title',
        description: 'Header Description',
        image: 'https://picsum.photos/id/1003/400/200',
    },
};
