import React, { FC, SyntheticEvent, useState } from 'react'
import classNames from 'classnames'
import FocusLock from 'react-focus-lock'

import { FaChevronDown } from 'react-icons/fa'

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
  const classes = classNames(
    'Button',
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
    <FocusLock>
      <div className='Button__dropdown'>
        <button
          className={`${classes} Button__dropdownLeft`}
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
          className={`${classes} Button__dropdownRight`}>
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
    </FocusLock>
  )
}

export default DropdownButton
