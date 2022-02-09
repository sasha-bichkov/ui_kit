import React, { FC, SyntheticEvent, useState } from 'react'
import classNames from 'classnames'

import './Slider.scss'

export interface SliderProps {
  readonly className?: string
  readonly disabled?: boolean
  readonly id?: string
  readonly max?: number
  readonly min?: number

  onChange(e:SyntheticEvent): void
}

const Slider: FC<SliderProps> = ({
  className,
  onChange,
  min = 0,
  max = 10,
  id,
  disabled
}: SliderProps) => {
  const classes = classNames(
    'Slider',
    className,
  )
  const [value, setValue] = useState(0)
  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / max}% 100%` }
  }
  const callback = (fn1: any, fn2: any) => { fn1; fn2}

  return (
    <input
      id={id}
      className={classes}
      type="range"
      min={min}
      max={max}
      disabled={disabled}
      onChange={(e) => callback(
        setValue(parseInt(e.target.value)),
        onChange(e)
      )}
      style={getBackgroundSize()}
      value={value}
    />)
}

export default Slider
