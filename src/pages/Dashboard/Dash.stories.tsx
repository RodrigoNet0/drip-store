import type { Meta, StoryObj } from '@storybook/react';

import Dash from './Dash';

const meta = {
  component: Dash,
} satisfies Meta<typeof Dash>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};