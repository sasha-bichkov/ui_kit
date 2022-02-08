import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CustomSelect from '../components/Select/Select'
import { BsChevronExpand } from 'react-icons/bs'
import { components } from 'react-select'
import { customStyles} from '../components/Select/styles'


export default {
  title: 'Select',
  component: CustomSelect,
} as ComponentMeta<typeof CustomSelect>

const Template: ComponentStory<typeof CustomSelect> = (args) => <CustomSelect {...args} />
export const Defautl = Template.bind({})
Defautl.args = {
  placeholder: 'default example',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ],
  onChange: (value) => console.log(value),
}

export const CustomStules  = Template.bind({})
CustomStules.args = {
  placeholder: 'custom stules',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ],
  styles: customStyles,
  theme: (theme) => ({ ...theme, colors: {
    ...theme.colors,
    primary25: 'rgb(0 0 0 / .12)',
    primary: '#03a9f4',
  }}),
  onChange: (value) => console.log(value),
  components: {
    DropdownIndicator: (props) => (
      <components.DropdownIndicator {...props}>
        <BsChevronExpand />
      </components.DropdownIndicator>
    )
  }
}

export const Disabled  = Template.bind({})
Disabled.args = {
  placeholder: 'Disabled',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ],
  styles: customStyles,
  theme: (theme) => ({ ...theme, colors: {
    ...theme.colors,
    primary25: 'rgb(0 0 0 / .12)',
    primary: '#03a9f4',
  }}),
  onChange: (value) => console.log(value),
  components: {
    DropdownIndicator: (props) => (
      <components.DropdownIndicator {...props}>
        <BsChevronExpand />
      </components.DropdownIndicator>
    )
  },
  isDisabled: true,
}

export const Loading  = Template.bind({})
Loading.args = {
  placeholder: 'Loading',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ],
  styles: customStyles,
  theme: (theme) => ({ ...theme, colors: {
    ...theme.colors,
    primary25: 'rgb(0 0 0 / .12)',
    primary: '#03a9f4',
  }}),
  onChange: (value) => console.log(value),
  components: {
    DropdownIndicator: (props) => (
      <components.DropdownIndicator {...props}>
        <BsChevronExpand />
      </components.DropdownIndicator>
    )
  },
  isLoading: true,
}
