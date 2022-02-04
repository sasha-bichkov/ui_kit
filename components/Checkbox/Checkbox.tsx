import React, { FC } from 'react'
import classNames from 'classnames'

import './Checkbox.scss'

export interface ICheckboxProps {
  readonly className?: string
  readonly label: string
  readonly disabled?: boolean

  onClick?(): void
}

const Checkbox: FC<ICheckboxProps> = ({
  className,
  label,
  disabled
}) => {
  const InputClasses = classNames(
    'Checkbox',
    className
  )
  const labelClasses = classNames(
    'Checkbox__label',
    {
      'Checkbox__label-disabled': disabled,
      'Checkbox__label-primary': className,
    },
  )

  return (
    <label className={labelClasses}>
      {label}
      <input disabled={disabled} className={InputClasses} type="checkbox" />
    </label>
  )
}

export default Checkbox
