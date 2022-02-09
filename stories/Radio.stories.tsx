import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Switch from '../components/Radio/Radio'

export default {
  title: 'Radio',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: () => console.log('click'),
  label: 'label',
  id: '1'
}

export const Disabled = Template.bind({})
Disabled.args = {
  onClick: () => console.log('click'),
  disabled: true,
  label: 'label',
}
