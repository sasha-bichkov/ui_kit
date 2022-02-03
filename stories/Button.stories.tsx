import React, { FC } from 'react'
import { FaSearch } from 'react-icons/fa'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '../components/Button/Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Defautl = Template.bind({})
Defautl.args = {
  children: 'Press me'
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Press me',
  className: 'primary',
}

export const Circle = Template.bind({})
Circle.args = {
  children: <FaSearch />,
  className: 'circle',
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  children: 'Search button',
  showSearch: true,
}

