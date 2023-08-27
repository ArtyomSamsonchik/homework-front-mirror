import React, { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import s from './Sidebar.module.css'
import { PATH } from '../Pages'
import closeIcon from './closeOutline.svg'
import parsePathName from '../../../helpers/parsePathName'

type PropsType = {
  open: boolean
  handleClose: () => void
}

const links: (typeof PATH)[keyof typeof PATH][] = ['/pre-junior', '/junior', '/junior-plus']

export const Sidebar: FC<PropsType> = ({ open, handleClose }) => {
  const sidebarClassName = `${open ? s.open : s.sidebar}`

  const getLinkClassName: NavLinkProps['className'] = ({ isActive }) =>
    isActive ? s.active : s.link

  return (
    <>
      {/*затемнение справа от открытого меню*/}
      {open && <div className={s.background} onClick={handleClose} />}

      <aside className={sidebarClassName}>
        <button className={s.close} onClick={handleClose}>
          <img src={closeIcon} alt="close sidebar" id={'hw5-menu-close'} />
        </button>

        <nav id={'hw5-menu'} className={s.nav}>
          {links.map((link) => {
            const slicedLink = link.slice(1) // remove '/' from string beginning. Required for id
            const id = `hw5-${slicedLink}-link`

            return (
              <NavLink
                key={id}
                id={id}
                to={link}
                onClick={handleClose}
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
