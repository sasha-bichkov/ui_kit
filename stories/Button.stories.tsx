import React from 'react'
import { FaSearch, FaAmazon } from 'react-icons/fa'
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
  className: 'Select-primary',
}

export const Circle = Template.bind({})
Circle.args = {
  children: <FaSearch />,
  className: 'Button__circle',
}

export const SearchIcon = Template.bind({})
SearchIcon.args = {
  children: 'Search button',
  Icon: <FaSearch />
}

export const AmazonIcon = Template.bind({})
AmazonIcon.args = {
  children: 'Search button',
  Icon: <FaAmazon />
}

