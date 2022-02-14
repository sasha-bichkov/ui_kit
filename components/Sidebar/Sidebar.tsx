import React, { FC, useState } from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'


import './Sidebar.scss'

type Element = {
  path: string
  value: React.ReactNode
  id?: string,
}

export interface SidebarProps {
  readonly className?: string
  readonly Icon?: React.ReactNode
  readonly disabled?: boolean
  readonly elements: Element[];

  onClick?(): void
}

const Sidebar: FC<SidebarProps> = ({
  className,
  onClick,
  disabled,
  elements,
}: SidebarProps) => {
 
  const [isSidebarOpen, setOpen] = useState(false)
  const classesSidebar = classNames(
    'Sidebar',
    className,
    {
      'open': isSidebarOpen,
    }
  )
  const classesToggle = classNames(
    'Sidebar__toggle',
    {
      'open': isSidebarOpen,
    }
  )

  return (
    <>
      <div  className={classesToggle}>
        <input id="menu__toggle" type="checkbox" />
        <label onClick={() => setOpen(!isSidebarOpen)} className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
      </div>
      <nav
        className={classesSidebar}
      >
        <ul className='Sidebar__list'>
          {
            elements.map((item,index) => {
              return (
                <li key={item.id || index} className='Sidebar__item'>
                  <NavLink className='Sidebar__link' to={item.path}>
                    <span className='item__decoration-1'></span>
                    <span className='item__decoration-2'></span>
                    {item.value}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
