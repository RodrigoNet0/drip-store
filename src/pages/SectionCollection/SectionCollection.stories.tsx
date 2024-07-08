import type { Meta, StoryObj } from '@storybook/react';

import SectionCollection from './SectionCollection';

const meta = {
  component: SectionCollection,
} satisfies Meta<typeof SectionCollection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};