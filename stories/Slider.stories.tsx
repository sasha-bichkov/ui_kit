import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Slider from '../components/Slider/Slider'

export default {
  title: 'Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const Defautl = Template.bind({})
Defautl.args = {
  onChange: (e) => console.log(e.target.value)
}

export const Disabled = Template.bind({})
Disabled.args = {
  onChange: (e) => console.log(e.target.value),
  disabled: true
}
