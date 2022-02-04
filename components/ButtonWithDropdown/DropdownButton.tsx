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

  onClick(e: SyntheticEvent): void
}

const DropdownButton: FC<ButtonProps> = ({
  className,
  onClick,
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
  const generateId = () => {
    return Math.random().toString(16).slice(2)
  }

  return (
    <FocusLock>
      <div className='Button__dropdown'>
        <button
          className={`${classes} Button__dropdownLeft`}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {title}
          {showSpinner && renderSpinner()}
        </button>
        <button
          onClick={() => setActive(!isActive)}
          disabled={disabled}
          className={`${classes} Button__dropdownRight`}>
          <FaChevronDown className='Button__dropdownChevronIcon' />
        </button>
        {isActive && <div className='Button__dropdownLIst'>
          {
            children.map(item => (
              <button
                onClick={(e) => onClick(e)}
                className='Button__dropdownItem'
                key={generateId()}>
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
