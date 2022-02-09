import React, { FC } from 'react'
import classNames from 'classnames'

import './Checkbox.scss'

export interface ICheckboxProps {
  readonly className?: string
  readonly label: string
  readonly disabled?: boolean
  readonly id?: string

  onClick?(): void
}

const Checkbox: FC<ICheckboxProps> = ({
  className,
  label,
  disabled,
  id
}) => {
  const InputClasses = classNames(
    'Checkbox',
    className
  )

  const labelClasses = classNames(
    'Checkbox__label',
    {
      'Checkbox__label-disabled': disabled,
    },
  )

  return (
    <label id={id} className={labelClasses}>
      {label}
      <input disabled={disabled} className={InputClasses} type="checkbox" />
    </label>
  )
}

export default Checkbox
