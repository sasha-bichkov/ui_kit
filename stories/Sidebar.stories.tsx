import React from 'react'
import {FaAffiliatetheme, FaAmazon, FaAndroid} from 'react-icons/fa'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Sidebar from '../components/Sidebar/Sidebar'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <BrowserRouter>
    <Sidebar {...args} />
  </BrowserRouter>
)

export const Defautl = Template.bind({})
Defautl.args = {
  elements: [
    {
      path: 'page1',
      value: <span className='item__value'> <FaAffiliatetheme /> value</span>,
      id: '1'
    },
    {
      path: 'page2',
      value: <span className='item__value'> <FaAmazon /> value 1</span>,
      id: '2'
    },
    {
      path: 'page3',
      value: <span className='item__value'><FaAndroid /> value 2</span>,
      id: '3'
    },
  ]
}
