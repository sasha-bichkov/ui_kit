import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DropdownButton from '../components/ButtonWithDropdown/DropdownButton'


export default {
  title: 'ButtonWithDropdown',
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>

const Template: ComponentStory<typeof DropdownButton> = (args) => (
  <DropdownButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'ButtonWithDropdown',
  callback: (e) => console.log(e.currentTarget),
  children: ['item1','item2', 'item3']
}

export const Primary = Template.bind({})
Primary.args = {
  title: 'ButtonWithDropdown',
  callback: (e) => console.log(e.currentTarget),
  children: ['item1','item2', 'item3'],
  className: 'Button-primary'
}
