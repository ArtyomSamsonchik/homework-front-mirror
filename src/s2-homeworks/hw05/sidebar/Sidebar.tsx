import React, { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import s from './Sidebar.module.css'
import { AppPathValues } from '../Pages'
import parsePathName from '../../../helpers/parsePathName'
import { ReactComponent as CloseIcon } from './close-icon.svg'

type PropsType = {
  open: boolean
  handleClose: () => void
}

const links: AppPathValues[] = ['pre-junior', 'junior', 'junior-plus']

export const Sidebar: FC<PropsType> = ({ open, handleClose }) => {
  const handleNavigate = () => {
    handleClose()
    window.scrollTo({ top: 0 })
  }

  const getLinkClassName: NavLinkProps['className'] = ({ isActive }) =>
    isActive ? s.active : s.link

  return (
    <>
      {/*затемнение справа от открытого меню*/}
      {open && <div className={s.background} onClick={handleClose} />}

      <aside className={`${open ? s.open : s.sidebar}`}>
        <button id={'hw5-menu-close'} className={s.close} onClick={handleClose}>
          <CloseIcon />
        </button>
        <nav id={'hw5-menu'} className={s.nav}>
          {links.map((link) => {
            const id = `hw5-${link}-link`

            return (
              <NavLink
                key={id}
                id={id}
                to={`../${link}`}
                onClick={handleNavigate}
                relative={'path'}
                className={getLinkClassName} // делает студент
              >
                {parsePathName(link)}
              </NavLink>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
