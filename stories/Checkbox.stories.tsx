import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Checkbox from '../components/Checkbox/Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args} />
}

export const Defautl = Template.bind({})
Defautl.args = {
  label: 'Checkbox',
}
