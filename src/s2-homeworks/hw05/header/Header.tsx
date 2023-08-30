import React, { FC } from 'react'
import burgerIcon from './burger.svg'
import commonS from '../../../common/Common.module.css'
import s from './Header.module.css'
import { useLocation } from 'react-router-dom'
import { AppPathValues, PATH } from '../Pages'
import parsePathName from '../../../helpers/parsePathName'

type PropsType = {
  handleOpen: () => void
}

export const Header: FC<PropsType> = ({ handleOpen }) => {
  // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
  const location = useLocation()
  // const currentPath = location.pathname as AppPathValues
  // const pageTitle =
  //   currentPath === PATH.PRE_JUNIOR
  //     ? 'Pre-junior'
  //     : currentPath === PATH.JUNIOR
  //     ? 'Junior'
  //     : currentPath === PATH.JUNIOR_PLUS
  //     ? 'Junior Plus'
  //     : 'Error'

  const pageTitle = Object.values(PATH).includes(location.pathname as AppPathValues)
    ? parsePathName(location.pathname)
    : 'Error'

  return (
    <div className={s.headerWrapper}>
      <div className={commonS.container}>
        <div id="hw5-header" className={s.header}>
          {/*<button className={s.burgerMenuIcon} onClick={handleOpen}>*/}
          {/*</button>*/}
          <img
            className={s.burgerMenuIcon}
            onClick={handleOpen}
            src={burgerIcon}
            id="hw5-burger-menu"
            alt="toggle menu open"
          />
          <h1>{pageTitle}</h1>
        </div>
      </div>
    </div>
  )
}
