import type { Meta, StoryObj } from '@storybook/react';

import Produtos from './Produtos';

const meta = {
  component: Produtos,
} satisfies Meta<typeof Produtos>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};