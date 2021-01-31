// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta } from '@storybook/react';
import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Push button',
  bg: 'blue',
};
