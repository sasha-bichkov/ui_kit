import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonWithDropdown from '../components/ButtonWithDropdown/ButtonWithDropdown'


export default {
  title: 'ButtonWithDropdown',
  component: ButtonWithDropdown,
} as ComponentMeta<typeof ButtonWithDropdown>

const Template: ComponentStory<typeof ButtonWithDropdown> = (args) => (
  <ButtonWithDropdown {...args} />
)

export const Defautl = Template.bind({})

Defautl.args = {
  children: 'ButtonWithDropdown',
}
