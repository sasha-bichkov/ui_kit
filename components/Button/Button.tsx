import React, { FC } from 'react'
import classNames from 'classnames'

import './Button.scss'

export interface ButtonProps {
  readonly className?: string
  readonly showSpinner?: boolean
  readonly Icon?: React.ReactNode
  readonly type?: 'button' | 'submit' | 'reset'
  readonly disabled?: boolean
  readonly children: React.ReactNode

  onClick?(): void
}

const Button: FC<ButtonProps> = ({
  className,
  onClick,
  showSpinner,
  Icon,
  type = 'button',
  disabled,
  children
}: ButtonProps) => {
  const classes = classNames(
    'Button',
    className,
  )

  const renderSpinner = () => {
    return (
      <span className="Button__spinner Button__spinner-slow" />
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon}
      {children}
      {showSpinner && renderSpinner()}
    </button>
  )
}

export default Button
