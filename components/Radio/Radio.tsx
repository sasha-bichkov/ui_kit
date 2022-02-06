import React, { FC } from 'react'

import './Radio.scss'

export interface IRadioProps {
  readonly className?: string
  readonly disabled?: boolean
  readonly id?: string
  readonly label?: string

  onClick(): void
}

const Radio: FC<IRadioProps> = ({
  className,
  disabled,
  onClick,
  label
}) => {
  return (
    <label className='Radio__wrapper'>
      <input disabled={disabled} className='Radio__input' type="radio" onChange={onClick} />
      <div className='Radio' />
      {label}
    </label>
  )
}

export default Radio
