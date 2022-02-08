import React from 'react'
import Select from 'react-select'
import { GroupBase, Props } from 'react-select'

import './Select.scss'

function CustomSelect<Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>>(props: Props<Option, IsMulti, Group>) {
  return (
    <Select {...props} />
  )
}

export default CustomSelect
