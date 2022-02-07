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
    <label>
      <input disabled={disabled} className='Switch__input' type="checkbox" onChange={onClick} />
      <span className='Switch__item' />
    </label>
  )
}

export default Switch
