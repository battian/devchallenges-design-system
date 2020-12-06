import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from './index';
import { Mail, Lock } from '@material-ui/icons';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    icon: { control: { disable: true } },
  },
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;

Template.bind({});

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
};

export const Error = Template.bind({});

Error.args = {
  label: 'Label',
  error: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Label',
  disabled: true,
};

export const HelperText = Template.bind({});

HelperText.args = {
  label: 'Label',
  helperText: 'Some interesting text',
};

export const StartIcon = Template.bind({});

StartIcon.args = {
  label: 'Password',
  icon: Lock,
};

export const EndIcon = Template.bind({});

EndIcon.args = {
  label: 'Email',
  icon: Mail,
  endIcon: true,
  error: true,
  helperText: 'Please enter valid email address',
};

export const SmallSize = Template.bind({});

SmallSize.args = {
  label: 'Label',
  smallSize: true,
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  label: 'Label',
  fullWidth: true,
};

FullWidth.decorators = [
  Story => (
    <div style={{ width: '400px' }}>
      <Story />
    </div>
  ),
];

export const Multiline = Template.bind({});

Multiline.args = {
  label: 'Message',
  multiline: true,
};
