import React, { FC } from 'react'
import classNames from 'classnames'
import { FaSearch } from 'react-icons/fa'

import './Button.scss'

export interface ButtonProps {
  readonly className?: string
  readonly showSpinner?: boolean
  readonly showSearch?: boolean
  readonly type?: 'button' | 'submit' | 'reset'
  readonly disabled?: boolean
  readonly children: React.ReactNode

  onClick?(): void
}

const Button: FC<ButtonProps> = ({
  className,
  onClick,
  showSpinner,
  showSearch,
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
      {showSearch && <FaSearch className='Button__search' />}
      {children}
      {showSpinner && renderSpinner()}
    </button>
  )
}

export default Button
