import React, { FC } from 'react'

import './Button.scss'

interface IButtonProps {
  readonly primary: boolean
  readonly size: string
  readonly backgroundColor: string
  readonly label: string
  onClick(): void
}

const Button: FC<IButtonProps> = props => {
  const {
    size,
    label,
    primary,
    backgroundColor,
  } = props

  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size || 'medium'}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
