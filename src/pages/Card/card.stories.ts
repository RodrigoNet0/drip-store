import type { Meta, StoryObj } from '@storybook/react';
import  Card  from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Card Title',
        description: 'Card Description',
        image: 'https://picsum.photos/id/1003/400/200',
    },
};
