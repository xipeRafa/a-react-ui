import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextInput} from './TextInput';
import { TextInputProps} from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'text...',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'text...',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'text...',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'text...',
};
