import React, { FC } from 'react'
import classNames from 'classnames'

import './ButtonWithDropdown.scss'

export interface ButtonProps {
  readonly className?: string
  readonly showSpinner?: boolean
  readonly type?: 'button' | 'submit' | 'reset'
  readonly disabled?: boolean
  readonly children: React.ReactNode

  onClick?(): void
}

const ButtonWithDropdown: FC<ButtonProps> = ({
  className,
  onClick,
  showSpinner,
  type = 'button',
  disabled,
  children
}) => {
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
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {showSpinner && renderSpinner()}
    </button>
  )
}

export default ButtonWithDropdown
