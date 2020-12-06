import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Delete, CloudDownload } from '@material-ui/icons';

import Button, { ButtonProps } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    leftIcon: { control: { disable: true } },
    rightIcon: { control: { disable: true } },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

Template.bind({});

export const Default = Template.bind({});

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  variant: 'outline',
};

export const Text = Template.bind({});
Text.args = {
  children: 'Text',
  variant: 'text',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  color: 'danger',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Danger',
  disabled: true,
};

export const DisabledShadow = Template.bind({});
DisabledShadow.args = {
  disableShadow: true,
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  children: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: (
    <>
      <Delete />
      Delete
    </>
  ),
  leftIcon: true,
  color: 'danger',
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: (
    <>
      Save
      <CloudDownload />
    </>
  ),
  rightIcon: true,
  color: 'primary',
};
