import React, { FC, SyntheticEvent, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import classNames from 'classnames'

import './DropdownButton.scss'

export interface ButtonProps {
  readonly className?: string
  readonly showSpinner?: boolean
  readonly type?: 'button' | 'submit' | 'reset'
  readonly disabled?: boolean
  readonly children: React.ReactNode[]
  readonly title: string

  callback(e: SyntheticEvent): void
}

const DropdownButton: FC<ButtonProps> = ({
  className,
  callback,
  showSpinner,
  type = 'button',
  disabled,
  title,
  children
}) => {
  const [isActive, setActive] = useState(false)
  const leftButtonClasses = classNames(
    'Button',
    'Button__dropdownLeft',
    className,
  )
  const rightButtonClasses = classNames(
    'Button',
    'Button__dropdownRight',
    className,
  )
  const renderSpinner = () => {
    return (
      <span className="Button__spinner Button__spinner-slow" />
    )
  }
  const onClick = () => {
    setActive(!isActive)
  }

  return (
    <div className='Button__dropdown'>
      <button
        className={leftButtonClasses}
        type={type}
        onClick={callback}
        disabled={disabled}
      >
        {title}
        {showSpinner && renderSpinner()}
      </button>
      <button
        onClick={onClick}
        disabled={disabled}
        className={rightButtonClasses}>
        <FaChevronDown className='Button__dropdownChevronIcon' />
      </button>
      {isActive && <div className='Button__dropdownList'>
        {
          children.map((item, index) => (
            <button
              onClick={(e) => callback(e)}
              className='Button__dropdownItem'
              key={index}>
              {item}
            </button>
          ))
        }
      </div>}
    </div>

  )
}

export default DropdownButton
