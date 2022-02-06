import React, { FC } from 'react'

import './Switch.scss'

export interface ISwitchProps {
  readonly className?: string
  readonly disabled?: boolean
  readonly id?: string

  onClick(): void
}

const Switch: FC<ISwitchProps> = ({
  className,
  disabled,
  onClick
}) => {
  return (
    <label className='Switch__wrapper'>
      <input disabled={disabled} className='Switch__input' type="checkbox" onChange={onClick} />
      <span className='Switch' />
    </label>
  )
}

export default Switch
